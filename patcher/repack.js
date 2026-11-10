// 重新打包 app.asar：把汉化层追加到 preload 脚本（对所有窗口生效，含远程 UI）
const fs = require('fs');
const path = require('path');

const W = __dirname;
const asarPath = process.argv[2];
const outPath = process.argv[3];
const pmcn = fs.readFileSync(path.join(W, 'pm-cn.js'), 'utf8');
const MARK = '\n/* postman-zh-cn */\n';

const raw = fs.readFileSync(asarPath);
const oldPickleSize = raw.readUInt32LE(4);
const jsonLen = raw.readUInt32LE(12);
const dataStart = 8 + oldPickleSize;
const header = JSON.parse(raw.subarray(16, 16 + jsonLen).toString('utf8'));

const entries = [];
(function walk(node, prefix) {
  for (const [name, v] of Object.entries(node.files || {})) {
    const p = prefix ? prefix + '/' + name : name;
    if (v.files) walk(v, p);
    else entries.push({ path: p, node: v });
  }
})(header, '');

function oldBuf(e) {
  const n = e.node;
  if (n.unpacked || !n.size || n.offset === undefined) return null;
  return raw.subarray(dataStart + Number(n.offset), dataStart + Number(n.offset) + n.size);
}

const targets = ['preload_desktop.js', 'preload.js'];
const changed = new Map();
for (const p of targets) {
  const e = entries.find(x => x.path === p);
  if (!e) { console.log('skip (not found):', p); continue; }
  const b = oldBuf(e);
  if (!b) { console.log('skip (no data):', p); continue; }
  const s = b.toString('utf8');
  if (s.includes('postman-zh-cn')) { console.log('already patched:', p); continue; }
  changed.set(p, Buffer.from(s + MARK + pmcn, 'utf8'));
  console.log('patched:', p, b.length, '->', changed.get(p).length);
}

let cursor = 0;
const chunks = [];
const order = entries.filter(e => !e.node.unpacked && e.node.size > 0);
for (const e of order) {
  const n = e.node;
  let buf = changed.get(e.path);
  if (!buf) {
    const ob = oldBuf(e);
    if (!ob) throw new Error('missing data for ' + e.path);
    buf = ob;
  }
  n.size = buf.length;
  n.offset = String(cursor);
  if (changed.has(e.path)) delete n.integrity;
  chunks.push(buf);
  cursor += buf.length;
}

const jsonBuf = Buffer.from(JSON.stringify(header), 'utf8');
const jl = jsonBuf.length;
const pad = (4 - ((16 + jl) % 4)) % 4;
const jsonPickleSize = 4 + jl + pad;
const pickleSize = 4 + jsonPickleSize;
const head = Buffer.alloc(16);
head.writeUInt32LE(4, 0);
head.writeUInt32LE(pickleSize, 4);
head.writeUInt32LE(jsonPickleSize, 8);
head.writeUInt32LE(jl, 12);

const out = fs.openSync(outPath, 'w');
fs.writeSync(out, head, 0, 16, 0);
fs.writeSync(out, jsonBuf, 0, jl, 16);
if (pad) fs.writeSync(out, Buffer.alloc(pad), 0, pad, 16 + jl);
let pos = 16 + jl + pad;
if (pos !== 8 + pickleSize) throw new Error('dataStart mismatch');
for (const c of chunks) { fs.writeSync(out, c, 0, c.length, pos); pos += c.length; }
fs.closeSync(out);
console.log('files:', chunks.length, 'bytes:', pos, 'dataStart:', 16 + jl + pad);
