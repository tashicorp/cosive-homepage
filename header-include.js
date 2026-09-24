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
      bindNav();
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
  //
  // Deliberately inside this IIFE rather than a new one: webflow-snippet.mjs
  // locates the Webflow-bound CTA block with lastIndexOf('(function () {'), so a
  // second top-level IIFE after it would make the generator extract this instead.
  function bindNav() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;

    // Same boundary as the drawer's media query in _header.html, and as Webflow's
    // data-collapse="medium", which is what the live navbar uses. The two have to
    // agree: below it a click on a section toggle opens an accordion, above it
    // the panels are hover menus and the click must do nothing at all.
    var MOBILE = window.matchMedia('(max-width: 991px)');
    var BURGER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    var CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';
    var toggles = nav.querySelectorAll('.nav-dropdown__toggle');

    function isOpen() { return nav.classList.contains('open'); }

    // .nav-open is the scroll lock: the drawer covers the page, so what is behind
    // it must not move. Both html and body, because which one owns the scroll
    // varies across the 42 pages.
    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = open ? CLOSE : BURGER;
      document.documentElement.classList.toggle('nav-open', open);
      document.body.classList.toggle('nav-open', open);
    }

    function collapseAll() {
      Array.prototype.forEach.call(toggles, function (t) {
        t.setAttribute('aria-expanded', 'false');
      });
    }

    // closeMobileMenu() in the CTA block below closes the drawer by clicking this
    // button rather than reaching into its state, so a click has to stay a
    // complete open/close - .open, aria-expanded, the icon and the scroll lock.
    btn.addEventListener('click', function () { setOpen(!isOpen()); });

    // Single-open accordion. Two sections expanded at once is 16 rows again,
    // which is the height the drawer exists to avoid.
    Array.prototype.forEach.call(toggles, function (t) {
      t.addEventListener('click', function () {
        if (!MOBILE.matches) return;
        var open = t.getAttribute('aria-expanded') !== 'true';
        collapseAll();
        t.setAttribute('aria-expanded', open);
      });
    });

    // A tap on a link closes the drawer. Needed for same-page anchors, which
    // would otherwise scroll underneath a panel still covering the viewport.
    nav.addEventListener('click', function (e) {
      if (isOpen() && e.target.closest && e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;

      if (e.key === 'Escape') {
        setOpen(false);
        btn.focus();
        return;
      }

      // The drawer covers everything, so Tab must not walk off into the page
      // behind it. offsetParent filters out the items inside a collapsed section.
      if (e.key !== 'Tab') return;
      var f = [btn].concat(Array.prototype.slice.call(nav.querySelectorAll('a[href], button')))
                   .filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Rotating to landscape can cross the breakpoint with the drawer open, which
    // would strand a fixed panel and a scroll lock over the desktop bar.
    function onBreakpoint() { setOpen(false); collapseAll(); }
    if (MOBILE.addEventListener) MOBILE.addEventListener('change', onBreakpoint);
    else MOBILE.addListener(onBreakpoint);

    // Open the section this page lives in, so the drawer starts in context.
    // markActive() has already run and put .nav-active on the parent toggle.
    var current = nav.querySelector('.nav-dropdown__toggle.nav-active');
    if (current && MOBILE.matches) current.setAttribute('aria-expanded', 'true');
  }
})();

/* -- Nav CTA -> this page's own contact form --
   "Contact Us" scrolls to #contact when the page has one, and otherwise falls
   through to the anchor's href. The nav is injected by the fetch above, so
   .nav-cta does not exist at DOMContentLoaded and nothing fires after injection -
   delegating on document sidesteps the timing question, and also covers
   cloud-misp.html, which loads this file with `defer`.

   Deliberately no fallback URL in here: the no-#contact path just returns and lets
   the anchor do its job. That is what keeps this block byte-identical to the
   snippet pasted into Webflow's site-wide footer code, where the same href
   resolves to https://www.cosive.com/contact-us.

   The selector is live cosive.com's own class pair, which _header.html now mirrors,
   so one selector serves both. .in-top-nav is load-bearing: the final-CTA button
   shares .v2-brand-button and must keep navigating. The local .nav-cta class stays
   on the element as the styling hook for 87 preview-only CSS rules. */
(function () {
  var GAP = 8; // Space/XS (0.5rem) of breathing room under the sticky header

  document.addEventListener('click', function (e) {
    // Leave new-tab / new-window gestures to the browser, so the fallback
    // navigation still behaves the way a link is expected to.
    if (e.defaultPrevented || e.button > 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var cta = e.target && e.target.closest &&
              e.target.closest('a.v2-brand-button.in-top-nav');
    if (!cta) return;

    var target = document.getElementById('contact');
    if (!target) return;              // no contact section here: follow href

    e.preventDefault();               // only ever on the scroll path

    // Must happen BEFORE measuring: the open menu sits in normal flow inside the
    // header, so .site-header.offsetHeight would read the whole expanded menu.
    closeMobileMenu();

    var reduce = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      window.scrollTo(0, wantedTop(target));
      correctForLayoutShift(target);
    } else {
      smoothScrollTo(target);
    }

    // Move the caret so keyboard and screen-reader users land where sighted users
    // are looking. preventScroll stops focus() jumping the page and cancelling the
    // smooth scroll it was just asked to perform.
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  // Everything pinned to the top of the viewport has to be cleared, not just the
  // navbar: the live product pages stack a second sticky strip (.v2-product-nav,
  // 64px) beneath it, and the live site sets no scroll-padding-top describing the
  // pair. So probe straight down the middle of the screen and take the lowest
  // edge of anything sticky or fixed that is covering the top. Re-probed on each
  // correction pass, which is what catches a strip that only pins once we have
  // scrolled down to it - at click time it is still sitting in normal flow.
  // Cheap enough because the correction loop only calls this after the scroll
  // has settled, not on every frame.
  function offsetTop() {
    var x = Math.round(window.innerWidth / 2), bottom = 0;
    for (var y = 1; y <= 240; y += 16) {
      var els = document.elementsFromPoint(x, y);
      for (var i = 0; i < els.length; i++) {
        var pos = getComputedStyle(els[i]).position;
        if (pos !== 'sticky' && pos !== 'fixed') continue;
        var b = els[i].getBoundingClientRect().bottom;
        if (b > bottom && b <= 320) bottom = b;   // ignore full-height overlays
      }
    }
    // The preview pages publish the combined height as scroll-padding-top; take
    // whichever is larger so neither site is short-changed.
    var pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    return Math.max(bottom ? bottom + GAP : 0, pad);
  }

  // Aim at the form rather than the top of the section. These sections are
  // spacious - a heading, a subtitle and a testimonial beside the form - so
  // landing on the section top can leave the form itself below the fold, which
  // is the thing the reader actually came for. Scroll far enough to reveal the
  // whole form, but never so far that its own top slides under the pinned bars,
  // and never past the section top when everything already fits.
  function wantedTop(section, off) {
    if (off === undefined) off = offsetTop();
    var top = Math.max(section.getBoundingClientRect().top + window.pageYOffset - off, 0);

    // .w-embed covers the Webflow code-embed forms, form/iframe the rest.
    var form = section.querySelector('form, .w-embed, iframe');
    if (!form) return top;

    var r = form.getBoundingClientRect();
    var formTop = r.top + window.pageYOffset;
    var need = r.bottom + window.pageYOffset - window.innerHeight + GAP;
    // A form taller than the usable viewport cannot be shown whole; the min()
    // then falls back to aligning its top, which shows as much as there is room for.
    if (need > top) top = Math.min(need, formTop - off);
    return Math.max(top, 0);
  }

  // Animate this ourselves instead of scrollTo({behavior:'smooth'}), because the
  // destination moves while we travel: lazy images loading above the target grow
  // the page under us - 408px of it on cloud-misp. A native smooth scroll commits
  // to the offset it was handed, lands short, and then the correction below has
  // to jump several hundred pixels, which is the visible snap at the end.
  // Re-reading the target every frame absorbs that growth as it happens, so the
  // correction pass is left with a couple of pixels rather than half a screen.
  function smoothScrollTo(target) {
    var startY = window.pageYOffset;
    var dur = Math.min(900, Math.max(350, Math.abs(wantedTop(target) - startY) * 0.35));
    var t0 = null, off = offsetTop(), offAt = 0, cancelled = false;

    // Any real input from the reader outranks the animation.
    function stop() { cancelled = true; }
    ['wheel', 'touchstart', 'keydown'].forEach(function (ev) {
      window.addEventListener(ev, stop, { passive: true, once: true });
    });

    requestAnimationFrame(function frame(now) {
      if (cancelled) return;
      if (t0 === null) { t0 = now; offAt = now; }
      // offsetTop() probes the DOM, so refresh it on a timer rather than per frame.
      if (now - offAt > 100) { off = offsetTop(); offAt = now; }

      var p = Math.min((now - t0) / dur, 1);
      var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;  // easeInOutCubic
      window.scrollTo(0, startY + (wantedTop(target, off) - startY) * e);

      if (p < 1) requestAnimationFrame(frame);
      else correctForLayoutShift(target);   // mops up anything that loaded at the very end
    });
  }

  // Lazy images that load while the scroll is in flight grow the page above the
  // target and strand the landing short - cloud-misp carries 33 of them with no
  // width attribute, enough to leave the contact section half a screen low. The
  // measurement taken at click time is stale by the time the scroll ends, so wait
  // for the scroll to go idle and nudge if the target has moved since. Correcting
  // with 'auto' keeps the fixup imperceptible; correcting mid-flight would fight
  // the smooth scroll, hence the idle check rather than a plain timeout.
  function correctForLayoutShift(target) {
    var lastY = null, idle = 0, t0 = Date.now();
    (function watch() {
      var y = window.pageYOffset;
      idle = (lastY !== null && Math.abs(y - lastY) < 1) ? idle + 1 : 0;
      lastY = y;
      if (idle >= 3) {
        var want = wantedTop(target);
        if (Math.abs(want - y) <= 2) return;   // landed
        window.scrollTo({ top: want, behavior: 'auto' });
        idle = 0;
      }
      if (Date.now() - t0 < 3000) requestAnimationFrame(watch);
    })();
  }

  function closeMobileMenu() {
    var nav = document.querySelector('.main-nav.open');
    if (nav) {
      // Reusing the toggle's own handler keeps .open, aria-expanded and the
      // hamburger/X icon in sync; bindNavToggle owns all three and exposes none.
      var btn = document.querySelector('.nav-toggle');
      if (btn) btn.click(); else nav.classList.remove('open');
    }
    var wf = document.querySelector('.w-nav-button.w--open');  // Webflow navbar
    if (wf) wf.click();
  }
})();
