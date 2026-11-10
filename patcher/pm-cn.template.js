/* Postman 简体中文增强层 (pm-cn)
 * 由 DSH 生成：只替换界面文案，不改动请求/响应数据。
 * 开关：Ctrl+Alt+Z（写入 localStorage 后自动刷新）
 */
(function () {
  'use strict';
  if (window.__PMCN_INSTALLED__) return;
  window.__PMCN_INSTALLED__ = true;

  var DICT = __DICT__;

  var LS_KEY = 'pmcn.disabled';
  try {
    if (window.localStorage && window.localStorage.getItem(LS_KEY) === '1') return;
  } catch (e) {}

  var RULES = [
    [/^(.+) profile picture$/, '$1 头像'],
    [/^(\d+) results?$/, '$1 条结果'],
    [/^(\d+) items?$/, '$1 项'],
    [/^(\d+) selected$/, '已选 $1 项'],
    [/^Postman (v[\d.]+) is the latest version\.$/, 'Postman $1 已是最新版本。'],
    [/^Last checked on (.+)$/, '上次检查：$1'],
    [/^(\d+) notifications?$/, '$1 条通知']
  ];

  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var SKIP = 'input,textarea,select,pre,code,kbd,samp,script,style,noscript,svg,canvas,' +
    '.CodeMirror,.cm-editor,.monaco-editor,.view-lines,[contenteditable],[contenteditable="true"],' +
    '[role="textbox"],[data-pmcn-skip]';

  function skipped(el) {
    if (!el) return true;
    try {
      if (el.closest && el.closest(SKIP)) return true;
      var cls = el.className;
      if (typeof cls === 'string' && /codemirror|monaco|shiki|hljs|ace_editor/i.test(cls)) return true;
    } catch (e) {}
    return false;
  }

  function core(text) {
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
    if (!m) return null;
    return { lead: m[1], body: m[2], tail: m[3] };
  }

  var MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

  function localizeDate(text) {
    var m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4}) at (\d{1,2}):(\d{2})\s*(AM|PM)?/.exec(text);
    if (!m) return null;
    var mo = MONTHS[m[1]];
    if (!mo) return null;
    var h = parseInt(m[4], 10);
    if (m[6] === 'PM' && h < 12) h += 12;
    if (m[6] === 'AM' && h === 12) h = 0;
    return m[3] + '-' + ('0' + mo).slice(-2) + '-' + ('0' + m[2]).slice(-2) + ' ' + ('0' + h).slice(-2) + ':' + m[5];
  }

  function translateValue(text) {
    if (!text || text.length > 240) return null;
    var c = core(text);
    if (!c || !c.body) return null;
    var hit = DICT[c.body];
    if (hit === undefined && c.body.indexOf('Last checked on ') === 0) {
      var d = localizeDate(c.body.slice(16));
      if (d) return c.lead + '上次检查：' + d + c.tail;
    }
    if (hit === undefined) {
      for (var i = 0; i < RULES.length; i++) {
        var r = RULES[i];
        if (r[0].test(c.body)) { hit = c.body.replace(r[0], r[1]); break; }
      }
    }
    if (hit === undefined || hit === c.body) return null;
    return c.lead + hit + c.tail;
  }

  function doTextNode(node) {
    var v = node.nodeValue;
    if (!v || !/[A-Za-z]/.test(v)) return;
    if (skipped(node.parentElement)) return;
    var next = translateValue(v);
    if (next === null) return;
    node.nodeValue = next;
  }

  function doAttrs(el) {
    if (!el || !el.getAttribute) return;
    try {
      if (el.closest && el.closest('.CodeMirror,.cm-editor,.monaco-editor,[contenteditable],[role="textbox"]')) return;
    } catch (e) {}
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var val = el.getAttribute(a);
      if (!val) continue;
      var next = translateValue(val);
      if (next === null) continue;
      try { el.setAttribute(a, next); } catch (e) {}
    }
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      doTextNode(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) {
      if (skipped(root)) return;
      doAttrs(root);
    }
    var walker;
    try {
      walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    } catch (e) {
      return;
    }
    var batch = [];
    var n;
    while ((n = walker.nextNode())) {
      batch.push(n);
      if (batch.length >= 5000) break;
    }
    for (var i = 0; i < batch.length; i++) {
      var node = batch[i];
      if (node.nodeType === 3) doTextNode(node);
      else doAttrs(node);
    }
  }

  var queue = [];
  var scheduled = false;

  function push(node) {
    if (!node) return;
    queue.push(node);
    if (scheduled) return;
    scheduled = true;
    setTimeout(flush, 0);
  }

  function flush() {
    scheduled = false;
    var items = queue;
    queue = [];
    for (var i = 0; i < items.length; i++) {
      try { scan(items[i]); } catch (e) {}
    }
  }

  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') {
        if (m.target && m.target.parentNode) push(m.target.parentNode);
        continue;
      }
      if (m.type === 'attributes') {
        if (m.target && m.target.nodeType === 1) doAttrs(m.target);
        continue;
      }
      var added = m.addedNodes;
      if (!added) continue;
      for (var j = 0; j < added.length; j++) {
        var a = added[j];
        if (a.nodeType === 1) push(a);
        else if (a.nodeType === 3 && a.parentNode) push(a.parentNode);
      }
    }
  });

  function translateTitle() {
    try {
      var t = document.title;
      if (!t || !/[A-Za-z]/.test(t)) return;
      var parts = t.split(' - ');
      var changed = false;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i].trim();
        if (DICT[p] !== undefined && DICT[p] !== p) { parts[i] = DICT[p]; changed = true; }
      }
      if (changed) document.title = parts.join(' - ');
    } catch (e) {}
  }

  function boot() {
    try {
      mo.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['placeholder', 'title', 'aria-label', 'alt']
      });
    } catch (e) {}
    scan(document.body || document.documentElement);
    translateTitle();
    setInterval(translateTitle, 3000);
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.ctrlKey && ev.altKey && (ev.key === 'z' || ev.key === 'Z')) {
      try {
        var now = window.localStorage.getItem(LS_KEY) === '1';
        window.localStorage.setItem(LS_KEY, now ? '0' : '1');
        location.reload();
      } catch (e) {}
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
