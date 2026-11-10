// 生成 pm-cn.js（内联词典），并统计词典在 UI 包中的命中情况
const fs = require('fs');
const path = require('path');

const W = __dirname;
const dict = JSON.parse(fs.readFileSync(path.join(W, 'dict.json'), 'utf8'));
const tpl = fs.readFileSync(path.join(W, 'pm-cn.template.js'), 'utf8');

function readHeader(file) {
  const fd = fs.openSync(file, 'r');
  const b = Buffer.alloc(16);
  fs.readSync(fd, b, 0, 16, 0);
  const headerSize = b.readUInt32LE(4);
  const jsonLen = b.readUInt32LE(12);
  const jb = Buffer.alloc(jsonLen);
  fs.readSync(fd, jb, 0, jsonLen, 16);
  fs.closeSync(fd);
  return { header: JSON.parse(jb.toString('utf8')), dataStart: 8 + headerSize };
}
function walk(node, prefix, out) {
  for (const [name, v] of Object.entries(node.files || {})) {
    const p = prefix ? prefix + '/' + name : name;
    if (v.files) walk(v, p, out); else out.push({ path: p, size: v.size, offset: v.offset, unpacked: !!v.unpacked });
  }
}

const asar = process.argv[2];
const { header, dataStart } = readHeader(asar);
const files = [];
walk(header, '', files);

const scanPaths = ['js/scratchpad/scratchpad.js', 'js/requester.js', 'js/vendor-ui.js', 'js/preload.js'];
const fd = fs.openSync(asar, 'r');
const texts = {};
for (const p of scanPaths) {
  const f = files.find(x => x.path === p);
  if (!f || f.unpacked) continue;
  const buf = Buffer.alloc(f.size);
  fs.readSync(fd, buf, 0, f.size, dataStart + Number(f.offset));
  texts[p] = buf.toString('utf8');
}
fs.closeSync(fd);

const keys = Object.keys(dict);
const found = [];
const missing = [];
for (const k of keys) {
  let hit = false;
  for (const p of Object.keys(texts)) {
    if (texts[p].indexOf('"' + k + '"') !== -1 || texts[p].indexOf("'" + k + "'") !== -1 || texts[p].indexOf('>' + k + '<') !== -1) { hit = true; break; }
  }
  (hit ? found : missing).push(k);
}

const body = tpl.replace('__DICT__', JSON.stringify(dict, null, 2));
fs.writeFileSync(path.join(W, 'pm-cn.js'), body, 'utf8');

console.log('dict entries:', keys.length, 'bytes:', Buffer.byteLength(body));
console.log('present as UI literal:', found.length, 'of', keys.length);
console.log('not literal in scanned bundles:', missing.length);
console.log(missing.slice(0, 40).join(' | '));
