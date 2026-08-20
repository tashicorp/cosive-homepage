(function () {
  var el = document.getElementById('site-footer-placeholder');
  if (!el) return;
  fetch('_footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) { el.outerHTML = html; })
    .catch(function (e) { console.warn('Footer load failed:', e); });
})();
