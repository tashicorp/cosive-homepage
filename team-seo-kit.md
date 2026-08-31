# SEO & AEO kit — Our Team (`/team`)

Copy for Webflow **Page Settings** and **Page Settings → Head**. Australian English, Cosive tone of voice.

---

## 1. Meta

**Page title** (60 chars)

```
Our team - Cosive threat intelligence and SecOps specialists
```

**Meta description** (159 chars)

```
Meet the consultants, engineers and analysts behind Cosive. A remote team across Australia and New Zealand, working in threat intelligence and SecOps since 2015.
```

Current live title is `Meet Our Team — Cosive`. The replacement keeps the intent and adds the differentiators that actually get searched.

## 2. Open Graph & Twitter

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Our Team — The People Behind Cosive">
<meta property="og:description" content="Consultants, engineers and analysts working in threat intelligence, security operations and fraud data sharing. Distributed across Australia and New Zealand since 2015.">
<meta property="og:url" content="https://www.cosive.com/team">
<meta property="og:image" content="https://www.cosive.com/images/og/og-team.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Cosive">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Our Team — The People Behind Cosive">
<meta name="twitter:description" content="Consultants, engineers and analysts working in threat intelligence, security operations and fraud data sharing. Distributed across Australia and New Zealand since 2015.">
<meta name="twitter:image" content="https://www.cosive.com/images/og/og-team.png">
<link rel="canonical" href="https://www.cosive.com/team">
```

> **Asset needed:** `images/og/og-team.png` does not exist. Every other page has one. Create at 1200×630 before publishing, or the tag points at a 404.

## 3. Structured data

Paste into **Page Settings → Head**.

`@id` values follow the convention already used in `organization-jsonld.html` (`https://www.cosive.com/#firstname-lastname`) so the Organization's `employee` references resolve to these Person entities. Do not change them independently.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.cosive.com/team#webpage",
      "url": "https://www.cosive.com/team",
      "name": "Our team",
      "description": "Meet the consultants, engineers and analysts behind Cosive. A remote team across Australia and New Zealand, working in threat intelligence and SecOps since 2015.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.cosive.com/#website",
        "name": "Cosive",
        "url": "https://www.cosive.com"
      },
      "about": { "@id": "https://www.cosive.com/#organization" },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Cosive team",
        "numberOfItems": 10,
        "itemListElement": [
          { "@type": "ListItem", "position": 1,  "item": { "@id": "https://www.cosive.com/#terry-macdonald" } },
          { "@type": "ListItem", "position": 2,  "item": { "@id": "https://www.cosive.com/#chris-horsley" } },
          { "@type": "ListItem", "position": 3,  "item": { "@id": "https://www.cosive.com/#prescott-pym" } },
          { "@type": "ListItem", "position": 4,  "item": { "@id": "https://www.cosive.com/#ashley-sargeson" } },
          { "@type": "ListItem", "position": 5,  "item": { "@id": "https://www.cosive.com/#neethu-pushkaran" } },
          { "@type": "ListItem", "position": 6,  "item": { "@id": "https://www.cosive.com/#james-garratt" } },
          { "@type": "ListItem", "position": 7,  "item": { "@id": "https://www.cosive.com/#lilith-la-rose" } },
          { "@type": "ListItem", "position": 8,  "item": { "@id": "https://www.cosive.com/#michelle-vui" } },
          { "@type": "ListItem", "position": 9,  "item": { "@id": "https://www.cosive.com/#tash-postolovski" } },
          { "@type": "ListItem", "position": 10, "item": { "@id": "https://www.cosive.com/#prue-owen" } }
        ]
      }
    },

    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#terry-macdonald",
      "name": "Terry MacDonald",
      "jobTitle": "Principal Security Consultant & COO",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "url": "https://www.cosive.com/team/terry-macdonald",
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f2c38a69f0c827232f4c0_terry-macdonald-cosive.jpg",
      "sameAs": ["https://www.linkedin.com/in/terrymacdonald/"]
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#chris-horsley",
      "name": "Chris Horsley",
      "jobTitle": "Principal Security Consultant & CTO",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "url": "https://www.cosive.com/team/chris-horsley",
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f2bf76588b83fdf149bc7_chris-horsley-cosive.jpg",
      "sameAs": ["https://www.linkedin.com/in/chrishorsley/"]
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#prescott-pym",
      "name": "Prescott Pym",
      "jobTitle": "Principal Security Consultant",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "url": "https://www.cosive.com/team/prescott-pym",
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f2aa83e24e3b979ecbc36_prescott-pym-cosive.jpg",
      "sameAs": ["https://www.linkedin.com/in/prescottpym/"]
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#ashley-sargeson",
      "name": "Ashley Sargeson",
      "jobTitle": "Senior Security Consultant",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/6a1fccb3adb366751a16c065_ashley.png"
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#neethu-pushkaran",
      "name": "Neethu Pushkaran",
      "jobTitle": "Senior Security Consultant",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "url": "https://www.cosive.com/team/neethu-pushkaran"
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#james-garratt",
      "name": "James Garratt",
      "jobTitle": "Infrastructure Lead",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f2b3af1de7b511d8c48d8_james-garratt-cosive.jpg",
      "sameAs": ["https://www.linkedin.com/in/james-garratt/"]
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#lilith-la-rose",
      "name": "Lilith La Rose",
      "jobTitle": "Software Engineer",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f29155ad80d0a9d3a79c5_lilith-la-rose-cosive.jpg"
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#michelle-vui",
      "name": "Michelle Vui",
      "jobTitle": "Office Manager",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/687f2b07e7124d6e02c62e37_michelle-vui-cosive.jpg"
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#tash-postolovski",
      "name": "Tash Postolovski",
      "jobTitle": "Technical Marketing Manager",
      "worksFor": { "@id": "https://www.cosive.com/#organization" },
      "image": "https://cdn.prod.website-files.com/64753857f50bbd0ca3a5fb14/64803c6b70cea7d8d0f8346a_tash-headshot.jpg"
    },
    {
      "@type": "Person",
      "@id": "https://www.cosive.com/#prue-owen",
      "name": "Prue Owen",
      "jobTitle": "Project Coordinator",
      "worksFor": { "@id": "https://www.cosive.com/#organization" }
    }
  ]
}
</script>
```

### Verify before publishing

- **Bio page slugs.** `url` assumes `/team/firstname-lastname`. The prototype uses `team-terry-macdonald.html`; confirm what the Webflow CMS actually produces and correct all four, or drop the `url` line.
- **Neethu's image.** Hers is a local file in the prototype (`images/neethu-square.jpg`), so there's no stable public URL yet. Add the Webflow CDN URL once uploaded.
- **`sameAs` is present only for the four members with real LinkedIn URLs.** The other six have `href="#"` placeholders. Do not invent profile URLs — a wrong `sameAs` actively damages entity resolution.

## 4. Update the Organization schema

`organization-jsonld.html` currently lists three employees. Extend to all ten so the graph is bidirectional — this is what lets an answer engine resolve "who works at Cosive".

```json
"employee": [
  { "@id": "https://www.cosive.com/#terry-macdonald" },
  { "@id": "https://www.cosive.com/#chris-horsley" },
  { "@id": "https://www.cosive.com/#prescott-pym" },
  { "@id": "https://www.cosive.com/#ashley-sargeson" },
  { "@id": "https://www.cosive.com/#neethu-pushkaran" },
  { "@id": "https://www.cosive.com/#james-garratt" },
  { "@id": "https://www.cosive.com/#lilith-la-rose" },
  { "@id": "https://www.cosive.com/#michelle-vui" },
  { "@id": "https://www.cosive.com/#tash-postolovski" },
  { "@id": "https://www.cosive.com/#prue-owen" }
]
```

---

## 5. AEO — answer engine optimisation

Answer engines extract entities and facts, not keywords. Four changes matter most, in order:

### 5.1 Make names real headings

Member names are currently `<div class="team-member-name">`. Change the element to **H3** (keep the class, so styling is unchanged). Extractors use heading structure to decide what a page is a list *of*; a div carries no such signal. This is the single cheapest AEO win on the page.

Resulting hierarchy: H1 "The people behind our expertise" → H3 per member → H2 "Talk to us about what you are trying to achieve".

### 5.2 State role facts in prose, not just markup

Answer engines get asked "who is Cosive's CTO?" The schema answers it, but a sentence in the page body is corroboration and is what tends to get quoted. Consider adding one line under the hero subtitle, e.g.:

> Cosive was founded in 2015 by Terry MacDonald and Chris Horsley, who lead the business as COO and CTO.

Only publish this if it's accurate — confirm the founding history before it goes live.

### 5.3 Fix the placeholder links

Six members have `href="#"` LinkedIn links. Dead links are a quality signal against the page and give crawlers a broken relationship to follow. Use Conditional Visibility to hide the icon when the field is empty, rather than rendering a link to nowhere.

### 5.4 Alt text carrying role

Alt is currently just the name. Include the role — it associates person and job title for crawlers that don't parse JSON-LD:

```
Terry MacDonald, Principal Security Consultant and COO at Cosive
```

### Optional: `knowsAbout` per person

Adding `knowsAbout` to the consultants' Person entities is a strong disambiguation signal (it's already used on the Organization). I've deliberately left it out — it's a claim about a real person's expertise and shouldn't be auto-generated from a job title. Fill in per person if you want it, drawing from the Organization's existing list: Cyber Threat Intelligence, MISP, Threat Intelligence Sharing, Fraud Data Sharing, Security Operations, STIX, TAXII, CloudMISP.

### Bio pages

Each of the four bio pages should carry `ProfilePage` schema with `mainEntity` pointing at the **same `@id`** used here, plus the fuller `description` those pages already have in prose. Same-`@id` reuse across pages is what merges them into one entity rather than four.

---

## 6. Pre-publish checklist

- [ ] Page title and meta description set in Page Settings
- [ ] `images/og/og-team.png` created at 1200×630 and uploaded
- [ ] OG/Twitter/canonical tags in Page Settings → Head
- [ ] JSON-LD block added; bio slugs verified; Neethu's image URL added
- [ ] `organization-jsonld.html` employee list extended to 10
- [ ] Member names changed from div to H3
- [ ] Placeholder `href="#"` LinkedIn links hidden via Conditional Visibility
- [ ] Alt text updated to name + role on all ten avatars
- [ ] Slug confirmed as `/team` (unchanged — no redirect needed)
- [ ] Validated in [Schema Markup Validator](https://validator.schema.org/) and Rich Results Test
- [ ] Contact form restored (currently zero `<form>` elements on the live page — a page with a broken conversion path wastes the traffic this kit earns)
