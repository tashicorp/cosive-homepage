# Cosive — Structured data (JSON-LD) & social tags

Three things live here:
1. **Site-wide JSON-LD** → paste once in *Site settings → Custom Code → Head Code*.
2. **Twitter/X card tags** → paste per page in *Page settings → Custom Code → Inside `<head>`*
   (Webflow's Open Graph tab does **not** emit Twitter tags).
3. **Per-page JSON-LD** (Service + Breadcrumb) → see `per-page-schema.md`. FAQ schema → `faqpage-schema.md`.

**Placeholders to replace before pasting:**
- `{{LOGO_URL}}` → absolute URL of the Cosive logo (e.g. `https://cosive.com/…/cosive-logo.png`).
- `{{OG_IMAGE_URL}}` → absolute URL of the 1200×630 share image (see README — you need to create one).
- `{{TWITTER_HANDLE}}` → e.g. `@cosive` (delete the line if there's no handle).

After pasting, validate at **Google Rich Results Test** and the **Schema Markup Validator**
(validator.schema.org).

---

## 1. Site-wide JSON-LD (Site settings → Head Code)

Paste both blocks. `Organization` establishes the brand entity (helps Google's Knowledge Graph and
AI answer engines recognise Cosive); `WebSite` names the site. We deliberately omit the
`SearchAction`/sitelinks-searchbox — Google deprecated that feature in 2024–2026.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cosive",
  "legalName": "Cosive Pty Ltd",
  "url": "https://cosive.com",
  "logo": "{{LOGO_URL}}",
  "description": "Cosive helps organisations start, improve and run cyber threat intelligence, fraud data sharing and security operations programmes.",
  "sameAs": [
    "https://www.linkedin.com/company/cosive"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cosive",
  "url": "https://cosive.com"
}
</script>
```

---

## 2. Twitter/X card tags (per page → Page settings → Inside `<head>`)

Replace the title/description with that page's values from `page-metadata.md`. If every page uses
the same share image, you can instead paste the `twitter:image` line once in *Site settings → Head*.

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="PAGE TITLE HERE">
<meta name="twitter:description" content="PAGE META DESCRIPTION HERE">
<meta name="twitter:image" content="{{OG_IMAGE_URL}}">
<!-- optional, delete if no handle: -->
<meta name="twitter:site" content="{{TWITTER_HANDLE}}">
```

---

## 3. Per-page JSON-LD
- **Service + BreadcrumbList** for all 20 pages → `per-page-schema.md`.
- **FAQPage** (generated from each page's existing FAQ accordion) → `faqpage-schema.md`.
  ⚠️ Low priority: Google removed FAQ **rich results** in May 2026, so this no longer produces the
  SERP dropdown. It still helps machines/AI parse your Q&A, and it's valid Schema.org — keep it if
  you want the AEO/parsing benefit, skip it if you only cared about the rich result.
