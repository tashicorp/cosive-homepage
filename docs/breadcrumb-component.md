# Breadcrumb — Webflow component spec

One reusable component covers all 41 breadcrumbs on the site. They differ by four data values, one
ground swap and two container-level layout exceptions — nothing else.

This spec is derived from the shipped prototype and every value below was measured from a rendered
page, not read off a stylesheet. See `section-library.md` for the design rationale.

---

## Element tree

```
Breadcrumb            Nav        .breadcrumb           aria-label="Breadcrumb"
├─ Home Link          Link → /   .breadcrumb__link
│  ├─ Icon            Embed      .breadcrumb__icon     inline SVG, fixed
│  └─ "Home"          Text
├─ Separator          Text "/"   .breadcrumb__sep
├─ Parent Group       Div        .breadcrumb__parent   ← Show parent
│  ├─ Parent Link     Link       .breadcrumb__link     ← Show as link
│  ├─ Parent Text     Text       .breadcrumb__plain    ← inverse of Show as link
│  └─ Separator       Text "/"   .breadcrumb__sep
└─ Current            Text       .breadcrumb__current  aria-current="page"
```

**Parent Group is a flex container with the same gap as the nav** — not a `display: contents`
wrapper, which Webflow's designer handles poorly. Matching gaps give identical spacing either way:

```
Home · 8 · / · 8 · Parent · 8 · / · 8 · Current
```

**Home is hard-coded.** Same label, link and icon on all 41 pages; exposing it only invites drift.

### The icon

One glyph everywhere. Paste as an Embed so the `stroke` stays CSS-controlled — do **not** use an
Image or a Webflow icon, and do not set `stroke` on the SVG itself.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
```

---

## Styles

| Element | Property | Value |
|---|---|---|
| `.breadcrumb` | display | flex, align centre |
| | gap | `Space/XS` (0.5rem = 8px) |
| | margin-bottom | `Space/XL` (2rem = 32px) |
| | font family | `Font/Body` (Manrope) |
| | font size | `Text/SM` (0.875rem = 14px) |
| | font weight | 400 |
| `.breadcrumb__parent` | display | flex |
| | gap | `Space/XS` (0.5rem = 8px) |
| `.breadcrumb__link` | display | inline-flex, align centre |
| | gap | 4px |
| | transition | color 0.2s |
| `.breadcrumb__icon` | size | 14 × 14px, flex-shrink 0 |
| `.breadcrumb__current` | font weight | 400 |

**Weight is 400 throughout, including the current crumb.** A bolded current crumb was one of the
original sources of drift — hierarchy is carried by colour alone.

### Colour — six new variables

Add these under `Color/`. They are the one part of the component that must not be eyeballed.

| Variable | Value | Applies to |
|---|---|---|
| `Color/Crumb Separator` | `rgba(255, 255, 255, 0.75)` | separator text + icon stroke |
| `Color/Crumb Link` | `rgba(255, 255, 255, 0.85)` | link |
| `Color/Crumb Current` | `#ffffff` | current crumb |
| `Color/Crumb Separator Light` | `rgba(26, 26, 26, 0.65)` | separator text + icon stroke |
| `Color/Crumb Link Light` | `rgba(26, 26, 26, 0.75)` | link |
| `Color/Crumb Current Light` | `rgba(26, 26, 26, 0.9)` | current crumb |

Hover: `Color/White` (#ffffff) on dark, `Color/Text Primary` (#1a1a1a) on light.

The nav itself carries the separator colour; the separators inherit it, so only the icon needs it
set explicitly.

> ### Do not lighten the dark ramp
>
> Several banners sit on a **photograph** behind an overlay, so the governing backdrop is not
> `Color/Dark` — it is the brightest patch of that photo. On `improve-secops-team` that is
> `rgb(85, 91, 100)`, where the separator measures **4.70:1**. AA, with little margin.
>
> An earlier version of this ramp passed a flat-colour check at 5.3:1 and was actually failing at
> **3.04:1** on those pages. When adding a page with a photographic banner, screenshot the region
> behind the breadcrumb with the text hidden and sample the worst pixel — do not trust the
> section's declared `background-color`.

### Variant

One combo class, **`is-light`**, overriding only the three colour values. 11 pages.

---

## Properties

| Property | Type | Purpose |
|---|---|---|
| Parent label | Text | middle crumb text |
| Parent link | Link | middle crumb destination |
| Show parent | Visibility | off for the 12 two-crumb pages |
| Show as link | Visibility | off where the parent has no page behind it |
| Current label | Text | last crumb |

---

## Per-page overrides

The **default instance** — dark, parent shown, parent linked — covers 27 pages. Everything below is
a deviation from it.

### Show parent = OFF (12 pages, two crumbs)

`about` · `blog` · `cloudmisp` · `cyber-threat-intelligence` ·
`fraud-data-sharing` · `security-operations` · `newsletter` · plus the 5 legal pages

### Parent values (28 pages, three crumbs)

| Parent label | Parent link | Pages |
|---|---|---|
| Blog | `blog.html` | 7 — `blog-post` + 6 `category-*` |
| Security Operations | `security-operations.html` | 6 |
| Cyber Threat Intelligence | `cyber-threat-intelligence.html` | 6 |
| Team | `team.html` | 4 profile pages |
| Fraud Data Sharing | `fraud-data-sharing.html` | 3 |
| About | `about.html` | 1 — `team.html` |
| **Capabilities** | **none** | 1 — `cti-cmm.html` |

### is-light (11 pages)

The 5 legal pages · `team` + 4 profiles · `newsletter`

### Show as link = OFF (1 page)

`cti-cmm.html` only. "Capabilities" has no page behind it, so it renders as text. Pointing it at
`#` would look clickable and go nowhere; its `BreadcrumbList` entry likewise carries a `name` and
no `item`.

### Layout exceptions — container, not component

- **5 legal pages** — the breadcrumb shares a flex row with the Download PDF button and carries no
  bottom margin. Drop the instance into that row and let the row own the spacing.
- **`newsletter`** — centred single column; `justify-content: center` on the instance's wrapper.

Neither is a component variant. Both belong to the surrounding layout.

---

## Not componentisable

The **`BreadcrumbList` JSON-LD** must match each page's visible trail exactly and lives in
`<head>`, so it stays per-page custom code. Track it per page in `WEBFLOW-PROGRESS.md` — it is the
piece most likely to be skipped, and schema that disagrees with the page is worse than none.

A crumb with no page behind it gets a `name` and no `item`:

```json
{ "@type": "ListItem", "position": 2, "name": "Capabilities" }
```

---

## Acceptance checks

1. Breadcrumb renders at `Text/SM`, weight 400, 8px gaps, 32px above the H1.
2. Icon is 14 × 14 and takes its stroke from CSS — it changes colour with the `is-light` variant.
3. On a photographic banner, sample the painted backdrop behind the breadcrumb: **≥ 4.5:1** for
   separator, link and current.
4. `aria-label="Breadcrumb"` on the nav, `aria-current="page"` on the current crumb.
5. Page's `BreadcrumbList` names match the rendered crumbs, in order.
