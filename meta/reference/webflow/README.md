# Webflow snippets

Paste-ready blocks for the live cosive.com Webflow site. These files are read, never
served — nothing in the repo loads them.

## `nav-contact-cta.html`

Makes the top-nav **Contact Us** button scroll to the page's own contact section when it
has one, and otherwise navigate to the contact page exactly as it does today.

**Paste into:** Site Settings → Custom Code → **Footer Code**, site-wide. Then click
**Save Changes** and confirm the success toast before publishing — a silent failure to
save is what made the first attempt appear to publish while serving the old field value.

Publish to both `cosive.com` and `cosive.webflow.io`.

### Required on each page

Every page that has a contact section needs its section wrapper's ID set to `contact`:
select the section near the footer → Settings panel (gear) → ID = `contact`.

- On the section **wrapper**, not the form.
- On sub-pages with two forms, the **footer** one only — never the hero banner form.
- Pages with no contact section need nothing; they fall back automatically.
- Check no other element already claims the ID. `getElementById` takes the first match in
  document order, so a stray one sends the button to the wrong place.

### Two things not to change

**Don't shorten the selector to `.v2-brand-button`.** The final-CTA button shares that
class and must keep navigating to the contact page. `.in-top-nav` is what scopes this to
the top nav.

**Keep the file pure ASCII.** The first version carried a decorative comment header with
153 non-ASCII characters and did not survive the custom-code field — the published output
ended exactly where the block began. Size was not the cause (~5.7k against Webflow's
10,000-char limit).

### Keeping it in sync

This file is generated from the second IIFE in `header-include.js` (from `(function () {`
at line 96 to the end), which is how the GitHub Pages preview gets the same behaviour.
The two copies must stay identical:

```sh
IIFE=$(grep -n '^(function () {' header-include.js | tail -1 | cut -d: -f1)
{ echo '<script>'; sed -n "${IIFE},\$p" header-include.js; echo '</script>'; } \
  > meta/reference/webflow/nav-contact-cta.html
```

The code handles both sites without branching: it matches `.navbar` (Webflow) or
`.site-header` (preview) for the sticky-header offset, and closes either
`.w-nav-button.w--open` (Webflow) or `.main-nav.open` (preview) before scrolling. It
never names a fallback URL — on the no-`#contact` path it simply returns and lets the
button's own `href` navigate, which is why one file serves both.
