# Cosive — Structured data (JSON-LD)

Built as a single **`@graph`** with **`@id` entity linking** — the current best-practice pattern:
define the Organization once, then reference it (by `@id`) from WebSite, per-page Service, and Person
entities. This gives Google's Knowledge Graph and AI answer engines one coherent, connected entity.

- **Site-wide graph** (this file, §1) → paste once in *Site settings → Custom Code → Head Code*.
- **Per-page graph** (Service + Breadcrumb) → `per-page-schema.md`.
- **FAQPage** → `faqpage-schema.md`.

All values are filled in (logo, GitHub, YouTube) — nothing left to edit. Just paste §1 as-is.

After pasting, validate at **Google Rich Results Test** (search.google.com/test/rich-results) and the
**Schema Markup Validator** (validator.schema.org).

---

## 1. Site-wide graph (Site settings → Head Code)

One block. Contains the enriched **Organization**, the **WebSite** (publisher → Organization), and the
two **founders** as `Person` entities (reusable later as article authors). `SearchAction`/sitelinks
searchbox is intentionally omitted (deprecated by Google in 2024–26).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.cosive.com/#organization",
      "name": "Cosive",
      "legalName": "Cosive Pty Ltd",
      "url": "https://www.cosive.com/",
      "logo": { "@type": "ImageObject", "url": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fad6/6a6ffadadc811fd00ee91b91_cosive-logo-web.png" },
      "description": "Cosive helps organisations start, improve and run cyber threat intelligence, fraud data sharing and security operations programmes.",
      "slogan": "We make threat intelligence easy",
      "foundingDate": "2015",
      "founder": [
        { "@id": "https://www.cosive.com/#chris-horsley" },
        { "@id": "https://www.cosive.com/#terry-macdonald" }
      ],
      "areaServed": ["Australia", "New Zealand", "Asia-Pacific", "Europe", "Middle East", "North America"],
      "knowsAbout": [
        "Cyber threat intelligence", "MISP", "STIX/TAXII", "Threat intelligence sharing",
        "Fraud data sharing", "Security operations", "Incident response", "CTI-CMM", "SIM3"
      ],
      "memberOf": { "@type": "Organization", "name": "FIRST.org", "url": "https://www.first.org/" },
      "identifier": { "@type": "PropertyValue", "propertyID": "ABN", "value": "24608265345" },
      "address": { "@type": "PostalAddress", "addressCountry": "AU" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://www.cosive.com/contact-us",
        "areaServed": ["AU", "NZ", "Asia-Pacific", "Europe", "North America"],
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cosive",
        "https://github.com/cosive",
        "https://www.youtube.com/@Cosive"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.cosive.com/#website",
      "name": "Cosive",
      "url": "https://www.cosive.com/",
      "inLanguage": "en-AU",
      "publisher": { "@id": "https://www.cosive.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#chris-horsley",
      "name": "Chris Horsley",
      "jobTitle": "Co-founder & Principal Consultant",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "sameAs": ["https://www.linkedin.com/in/chrishorsley/"],
      "knowsAbout": ["Cyber threat intelligence", "MISP", "CTI-CMM", "Incident response"]
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#terry-macdonald",
      "name": "Terry MacDonald",
      "jobTitle": "Co-founder & Principal Consultant",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "sameAs": ["https://www.linkedin.com/in/terrymacdonald/"],
      "knowsAbout": ["Cyber threat intelligence", "STIX/TAXII", "Threat intelligence sharing", "MISP"]
    }
  ]
}
</script>
```

---

## 2. Twitter/X card (optional, one line, site-wide)

You're setting Open Graph natively per page, and X/Twitter reads those OG tags as its fallback — so
you only need this one line to upgrade the card to the large format. Paste in *Site settings → Head Code*:

```html
<meta name="twitter:card" content="summary_large_image">
```

---

## 3. Per-page graph
- **Service + BreadcrumbList** for each page (one `@graph`, `provider`/breadcrumb referencing the
  Organization `@id`) → `per-page-schema.md`.
- **FAQPage** → `faqpage-schema.md` (valid Schema.org; ⚠️ Google removed FAQ *rich results* May 2026,
  so it no longer shows a SERP dropdown — keep it for AI/machine parsing, or skip it).
