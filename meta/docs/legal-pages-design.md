# Cosive — Legal pages: hosting design

How to host Cosive's legal documents (Privacy, Terms, Fair Use, Modern Slavery, CloudMISP EULA,
Support Policy). **Recommendation: an HTML page per document at a clean slug**, with an *optional*
PDF download — not a bare PDF served at the page URL.

> This design supplies the container, structure and wiring. The **binding legal text is supplied by
> Cosive / legal counsel** — drop it into the template; don't treat any placeholder here as legal copy.

---

## 1. Why HTML-first (not a PDF at `/privacy`)
A readable HTML page is the strongest option:
- **Accessible & mobile** — reflows, screen-reader friendly, selectable/searchable text.
- **Indexable & shareable** — one canonical URL people can link to and Google can read.
- **Easy to update** — edit in place; no re-export/re-upload cycle.
- **Trust signal** — a proper `/privacy` page is expected by users, partners and procurement.

**Optional PDF.** If a formal/signed copy is needed (common for EULA, procurement), add a
"Download PDF (as at *DD Mon YYYY*)" button on the HTML page. In Webflow, upload it via the **Assets**
panel (PDFs up to **10 MB**); Webflow serves it from its **CDN URL**
(`…website-files.com/…/privacy.pdf`), **not** from a clean `/privacy.pdf` on the domain. If a tidy
`/privacy.pdf` URL is required, add a **301 redirect** `/privacy.pdf → <CDN asset URL>`. Never make a
bare PDF *the* page — it's poor for SEO, mobile and accessibility.

---

## 2. Documents & URLs
Flat root slugs — short, conventional, and what people actually type.

Canonical slugs + footer labels (as confirmed by Cosive, Aug 2026):

| Footer label | Slug | Note |
|---|---|---|
| Privacy Policy | `/privacy-policy` | commonly expected site-wide |
| Website Terms of Use | `/website-terms-of-use` | |
| **CloudMISP Fair Use Policy** | `/cloudmisp-fair-use-policy` | already linked (broken `#`) from the CloudMISP bundle footnote — fix first |
| Modern Slavery Statement | `/modern-slavery` | |
| CloudMISP EULA | `/cloudmisp-eula` | product-specific |
| CloudMISP Support Policy | `/cloudmisp-support-policy` | |

Source docs (PDFs) live in Cosive's Google Drive legal folder. (Alternative: nest under `/legal/…`.
Not recommended — flat slugs match the rest of the site.)

---

## 3. Page template (minimal legal layout)
Reuse the **existing site header and footer**; add one simple, centred content column. Match the
design system (`Font/Heading` Manrope, `Color/*`, `Space/*`, `Radius/*`). Skeleton for the repo build
reference (the real build is in Webflow):

```html
<!-- header: reuse the site's existing .site-header -->

<main class="legal">
  <div class="legal__inner">
    <nav class="legal__breadcrumb" aria-label="Breadcrumb"><a href="/"><svg><!-- home icon --></svg>Home</a> <span class="separator">/</span> <span class="current" aria-current="page">Privacy Policy</span></nav>
    <h1 class="heading-style-h1">Privacy Policy</h1>
    <p class="legal__updated">Last updated: <!-- DD Month YYYY --></p>

    <!-- optional, for long docs -->
    <nav class="legal__toc" aria-label="On this page"> … anchor links to H2s … </nav>

    <!-- optional, only if a signed/formal PDF exists -->
    <a class="btn-primary legal__pdf" href="<CDN-PDF-URL>" target="_blank" rel="noopener">Download PDF</a>

    <div class="legal__body">
      <!-- LEGAL TEXT GOES HERE — supplied by Cosive/counsel -->
      <h2>1. …</h2>
      <p>…</p>
    </div>
  </div>
</main>

<!-- footer: reuse the site's existing footer -->
```

```css
.legal__inner { max-width: var(--container-standard); margin: 0 auto;
  padding: var(--space-6xl) var(--space-lg) var(--space-8xl); }
.legal__breadcrumb { font-size: var(--text-sm); color: var(--color-text-secondary);
  display: flex; gap: var(--space-xs); margin-bottom: var(--space-lg); }
.legal__breadcrumb a { color: rgba(26, 26, 26, 0.75); }   /* site breadcrumb standard — never accent */
.legal__updated { color: var(--color-text-secondary); font-size: var(--text-sm);
  margin-top: var(--space-sm); }
.legal__pdf { display: inline-flex; margin: var(--space-xl) 0; }
.legal__body { margin-top: var(--space-2xl); line-height: var(--leading-loose); }
.legal__body h2 { font-size: var(--text-2xl); margin: var(--space-2xl) 0 var(--space-md); }
.legal__body h3 { font-size: var(--text-lg); margin: var(--space-xl) 0 var(--space-sm); }
.legal__body p, .legal__body li { color: var(--color-text-primary); margin-bottom: var(--space-md); }
.legal__body a { color: var(--color-accent); text-decoration: underline; }
```

Keep it plain: no hero, forms or cards — a clean reading layout.

---

## 4. SEO / indexing
- **Index them** (self-referencing canonical). These are legitimate trust pages, not thin content.
  (Only `noindex` a doc if it's genuinely boilerplate/duplicative.)
- **Title** `"<Doc> | Cosive"`; one-line meta description.
- **Optional light JSON-LD** (same pattern as the rest of the site — no Service/FAQ): a `WebPage`
  + `BreadcrumbList` (Home › <Doc>), with `publisher` / `about` → the site-wide Organization `@id`
  (`https://www.cosive.com/#organization`):
  ```json
  { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": "https://www.cosive.com/privacy#webpage",
      "name": "Privacy Policy", "url": "https://www.cosive.com/privacy",
      "isPartOf": { "@id": "https://www.cosive.com/#website" },
      "about": { "@id": "https://www.cosive.com/#organization" } },
    { "@type": "BreadcrumbList", "@id": "https://www.cosive.com/privacy#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosive.com/" },
        { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.cosive.com/privacy" } ] } ] }
  ```
- Add each legal URL to the **XML sitemap**.

---

## 5. Wiring the links that exist today
- **Footer Legal column** (`index.html`, lines ~1878–1883) — repoint the six `href="#"` to the slugs
  in §2.
- **CloudMISP fair-use footnote** (`cloudmisp.html`, ~L2043) — repoint `#` → `/fair-use-policy`.
- The Legal column currently lives **only on `index.html`'s sitemap footer**; other pages use the
  older simple footer without it. Decide whether Legal links roll out **site-wide** when/if that
  sitemap footer is rolled out to all pages (recommended — Privacy/Terms are expected in every footer).

---

## 6. Build sequence
1. Get the **legal text** from Cosive/counsel for the first docs.
2. Build **Fair Use Policy** first (fixes the live broken CloudMISP link), then Privacy + Terms.
3. Create the HTML page(s) from the template above (repo build reference) → mirror into **Webflow** as
   static pages at the matching slugs.
4. Upload any PDFs via **Assets**, add the "Download PDF" button, and (if a clean URL is wanted) add
   the `/…​.pdf → CDN` 301.
5. Repoint the footer + footnote links (§5), add to sitemap, publish.

---

## Related
- Launch/URL/redirect checklist → `seo/launch-checklist.md`
- AEO content pass → `seo/aeo-post-launch-plan.md`
