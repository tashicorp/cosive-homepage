(function () {
  var el = document.getElementById('site-footer-placeholder');
  if (!el) return;

  // Pages live at varying depths (index.html, cti/manage-my-misp-for-me.html), but
  // _footer.html is shared. Derive the site root from this script's own URL rather
  // than the document's, so the fetch and the partial's links resolve the same way
  // from any depth. currentScript is only readable during synchronous execution.
  var ROOT = new URL('.', document.currentScript.src).href;

  fetch(new URL('_footer.html', ROOT))
    .then(function (r) {
      // fetch() resolves on 404, so without this the 404 page body gets injected
      // as the footer.
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (html) {
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      resolveRelative(tmp, ROOT);
      el.replaceWith.apply(el, Array.prototype.slice.call(tmp.childNodes));
    })
    .catch(function (e) { console.warn('Footer load failed:', e); });

  // The partial's links are written relative to the repo root. Once injected they
  // would otherwise resolve against the *page's* directory and 404 on nested pages.
  function resolveRelative(scope, root) {
    var nodes = scope.querySelectorAll('[href],[src]');
    for (var i = 0; i < nodes.length; i++) {
      var attr = nodes[i].hasAttribute('href') ? 'href' : 'src';
      var v = nodes[i].getAttribute(attr);
      if (!v || /^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(v)) continue;
      nodes[i].setAttribute(attr, root + v);
    }
  }
})();
