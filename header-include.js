(function () {
  var el = document.getElementById('site-header-placeholder');
  if (!el) return;

  var active = el.getAttribute('data-nav-active') || '';
  var cloudmispHref = el.getAttribute('data-cloudmisp-href') || '';

  // Pages live at varying depths (index.html, cti/manage-my-misp-for-me.html), but
  // _header.html is shared. Derive the site root from this script's own URL rather
  // than the document's, so the fetch and the partial's links resolve the same way
  // from any depth. currentScript is only readable during synchronous execution.
  var ROOT = new URL('.', document.currentScript.src).href;

  fetch(new URL('_header.html', ROOT))
    .then(function (r) {
      // fetch() resolves on 404, so without this the 404 page body gets injected
      // as the site header.
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (html) {
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      resolveRelative(tmp, ROOT);
      el.replaceWith.apply(el, Array.prototype.slice.call(tmp.childNodes));
      markActive(active, cloudmispHref);
      bindNavToggle();
    })
    .catch(function (e) { console.warn('Header load failed:', e); });

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

  // The six header variants differed only by which link carried .nav-active.
  function markActive(key, href) {
    if (href) {
      var cm = document.querySelector('.main-nav a[data-nav="cloudmisp"]');
      if (cm) cm.setAttribute('href', href);
    }
    if (!key) return;
    var link = document.querySelector('.main-nav a[data-nav="' + key + '"]');
    if (!link) return;
    link.classList.add('nav-active');

    // Links inside a dropdown (CTI-CMM under Capabilities) are hidden until the
    // panel opens, so marking only the link leaves nothing visible in the top
    // row. Light up the parent toggle as well.
    var group = link.closest('.nav-dropdown');
    if (group) {
      var toggle = group.querySelector('.nav-dropdown__toggle');
      if (toggle) toggle.classList.add('nav-active');
    }
  }

  // Previously inline on every page. It has to run after injection, or the
  // querySelector returns null and the mobile menu silently dies.
  function bindNavToggle() {
    var btn = document.querySelector('.nav-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var nav = document.querySelector('.main-nav');
      var open = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', open);
      this.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  }
})();
