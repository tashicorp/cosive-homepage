(function () {
  var el = document.getElementById('site-header-placeholder');
  if (!el) return;

  var active = el.getAttribute('data-nav-active') || '';
  var cloudmispHref = el.getAttribute('data-cloudmisp-href') || '';

  fetch('_header.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      el.outerHTML = html;
      markActive(active, cloudmispHref);
      bindNavToggle();
    })
    .catch(function (e) { console.warn('Header load failed:', e); });

  // The six header variants differed only by which link carried .nav-active.
  function markActive(key, href) {
    if (href) {
      var cm = document.querySelector('.main-nav a[data-nav="cloudmisp"]');
      if (cm) cm.setAttribute('href', href);
    }
    if (!key) return;
    var link = document.querySelector('.main-nav a[data-nav="' + key + '"]');
    if (link) link.classList.add('nav-active');
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
