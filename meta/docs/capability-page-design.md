# Capability page — design brief

The design system for the **Capability page family** (everything under the Capabilities nav
dropdown). First instance: `/cti-cmm`, whose copy is written and waiting in
`content/cti-cmm/copy.md`. Likely siblings: SIM3, SOC-CMM, MITRE ATT&CK.

**The goal:** these pages must feel like a distinct chapter of the same book. Same shell —
same top nav, same sitemap footer, same typeface, same spacing grid — but a different interior,
so the site stops reading as one long identical page.

Per `CLAUDE.md`, all values below are given as **Webflow variable names** with the resolved
value in parentheses.

---

## 1. Why this template exists — the diagnosis

The monotony is structural, not a matter of taste. Measured across the existing pages:

| Finding | Evidence |
|---|---|
| **Four surfaces, always in the same order** | Every page: dark photo banner → white → dark credentials → white/grey alternation → white FAQ → grey contact. `docs/section-library.md:958-963` prescribes it as a rule. |
| **One component does nearly all the work** | Every page body is `.infra-section` + a modifier (`--alt`, `--dark`, `--danger`, `.help-section`). Seven components across the whole site. |
| **Everything centred, symmetric, identically spaced** | `.container` is `max-width: 100%` with `Space/3XL` (48px) gutters — no measure anywhere. `Space/8XL` (10rem) is the vertical padding on essentially every section. All grids are `repeat(2\|3, 1fr)`. |
| **Flat and static** | No card or panel carries a shadow at rest — every shadow is a `:hover`. One `@keyframes` on the entire site. |
| **One accent, applied identically** | A red uppercase eyebrow (`.section-label`) opens 4–11 sections *per page*, byte-identical in 23 of 24 definitions. |
| **Every large photo desaturated the same way** | `grayscale(0.4)` at 45% opacity under a 40% navy scrim, on all 18 page banners. |

### Align with where the site is already heading

`about.html`, `team.html`, the profile pages and the blog family were rebuilt recently and agree
on a direction the older pages haven't caught up with. **This template should extend that, not
invent a third language:**

- Editorial heroes, oversized type, **no red eyebrow** — `about.html:193-196` sets `.section-label { display: none }`.
- Dark bands are **textured, not photographic** — the 24px dot grid at `about.html:344-351`, `blog.html:206-214`, `blog-post.html:377-386`.
- **Asymmetric layouts with something pinned** — `1fr 2fr` sticky heading (`about.html:540-551`), `2fr 1fr` sticky CTA (`blog-post.html:344-375`).
- **Hairline rules instead of cards** — `.community-item`, `.post-card`; `.values-grid` has no cards at all.
- One easing curve, small distances, a `prefers-reduced-motion` fallback.

---

## 2. Design principles

1. **Blue on dark, deep-blue on light.** The accent inverts with the surface. This is a contrast requirement, not a preference — see §3.
2. **Texture, not photography.** Dark grounds carry the dot grid and the sinewave field. No grayscale stock photos in the hero.
3. **Asymmetry with an anchor.** Something is pinned — the section nav, a heading column. The standard template is symmetric and stacked; this one is not.
4. **Rules over boxes.** Prefer hairline-separated rows to bordered cards. Weight goes into type and space.
5. **Vary the rhythm.** Not every section at `Space/8XL` (10rem). Dense reference sections sit tighter; statement sections breathe.

---

## 3. Palette

Implemented as a page-level variable layer over the shared tokens — the mechanism already used
in `build-and-integrate-cti-tools.html:31-36` (`--page-accent`, `--page-secondary`).

> ### ⚠️ The constraint that drives the whole design
> `Color/Blue` (#2ab6f6) scores **2.30:1 on white** — below even the 3:1 large-text floor. **It can
> never carry text, labels or icons on a light surface.** It scores **8.03:1 on `Color/Dark`**.
> Blue belongs on dark ground. Everywhere else, use `Color/Blue Deep`.

| Variable | Value | Status | Use |
|---|---|---|---|
| `Color/Blue` | #2ab6f6 | exists | **Dark surfaces only.** Rules, active states, icons, gauge fills, diagram strokes, hero tint. |
| `Color/Blue Deep` | #2d6da3 | **new** | **Light surfaces.** Eyebrow labels, links, button fills, numerals. |
| `Color/Blue Tint` | #eef4fa | **new** | Light section ground, replacing `Color/Light Grey` on this family. |

Both new values are **already on the site** — they are the stroke and fill colours in the 14
hand-authored diagram SVGs in `images/cti/`. We are promoting an existing sub-language, not
inventing one, which also means new diagrams will match the page for free.

### Measured contrast (record these; do not re-derive)

| Pair | Ratio | Verdict |
|---|---|---|
| `Color/Blue` (#2ab6f6) on white | 2.30:1 | ✗ fails everything — never do this |
| `Color/Blue` (#2ab6f6) on `Color/Dark` (#0e141c) | 8.03:1 | ✓ AA |
| `Color/Blue Deep` (#2d6da3) on white | 5.49:1 | ✓ AA |
| White on `Color/Blue Deep` (#2d6da3) — button | 5.49:1 | ✓ AA |
| Text on `Color/Blue Tint` (#eef4fa) | 4.95–15.71:1 | ✓ AA for all three text tokens |
| *(reference)* White on `Color/Accent` (#e53834) | 4.25:1 | ✗ the current red button fails AA |

The blue button is therefore an **accessibility improvement** on the existing red one.

### Where red survives

`Color/Accent` (#e53834) appears **only** in the shared header and footer — the nav's Contact Us
button, footer link hovers, and the sinewave's red stroke. Nowhere in the page body.

---

## 4. Typography

Manrope only, existing scale. The differentiation is in **register**, not new fonts.

| Element | Spec |
|---|---|
| Hero H1 | `Text/6XL` (3rem) → up to 4rem at wide widths, weight 800, `Leading/Tight` (1.1em), `Tracking/Tight` (-0.02em), `Color/White`. Off-scale sizing has precedent at `about.html:242`. |
| Hero subtitle | `Text/3XL` (1.75rem)–`Text/5XL` (2.5rem), **weight 400**, `rgba(255,255,255,0.7)`, max-width ~600px. Pattern from `about.html:264-274`. |
| Section eyebrow | `Text/SM` (0.875rem), weight 700, uppercase, `Tracking/Uppercase` (0.08em) — **`Color/Blue Deep` on light, `Color/Blue` on dark.** Never red. |
| H2 | `Text/4XL` (2rem), weight 700, `Leading/Snug` (1.3em) |
| Body | `Text/Base` (1rem), `Leading/Normal` (1.55em) |
| Prose measure | **~68–72 characters.** The site currently has none — introduce one for the explanatory sections. |

**Optional metadata layer:** the blog family loads Geist Mono (`blog-post.html:10,28`) for dates,
badges and labels. Adopting it for framework version numbers and level IDs (CTI0–CTI3) would
reinforce the "reference document" feel. Costs one extra font request — decide at build time.

---

## 5. Page structure — mapping `content/cti-cmm/copy.md`

Every section in the copy maps to a named component. **R** = reuse as-is · **S** = reuse, re-skinned blue · **N** = new.

| Copy § | Component | | Treatment |
|---|---|---|---|
| 1 | **Capability hero** | **N** | See §6. Dark, textured, typographic. No photo. |
| — | **Sticky section nav** | **S** | See §7. |
| 2 | **Lede + summary** | **N** | Asymmetric `1fr 2fr` with sticky heading column (`about.html:540-551`). Prose at the measure. White ground. The answer-first capsule is the visual anchor — set it larger than body. |
| 3 | **Quote** | **S** | `.cm-quotes__card` (`cloudmisp.html:468-504`): square corners, no border, 3px left rule, oversized quote mark, hairline-split attribution. Rule and mark in `Color/Blue Deep`. Preferred over `.hero-testimonial` — it suits a two-line attribution and carries the placeholder state at `cloudmisp.html:507-523`. |
| 4 | **Domain matrix** + **Level ladder** | **N** | See §8. The two signature components. |
| 5 | **Tool band** | **N** | Full-width `Color/Blue Tint` (#eef4fa) band. Centred, generous padding, one blue button. Deliberately the only tinted band on the page so it reads as an offer, not a section. |
| 6 | **Why it helps** | **S** | Four numbered items. Use the wipe-in accent rule from `blog.html:392-411` in `Color/Blue Deep`, or the oversized accent numeral from `about.html:735-743`. Hairline-separated rows, not bordered cards. |
| 7 | **Case studies** | **S** | `.case-studies-*` grid. Blue tags. Copy ships with `[PLACEHOLDER]` cards — build the dashed placeholder state from `cloudmisp.html:507-523`. |
| 8 | **Engagement cycle** | **N** | See §8.3. Dark ground. |
| 9 | **Credentials** | **S** | `.credentials-section` (`improve-cti-team.html:1684`) — dark split with photo. Icons and rules to `Color/Blue`. Keeps the page recognisably Cosive. |
| 10 | **FAQ** | **S** | `.faq-section` `<details>` accordion, hairline stack. Chevron to `Color/Blue Deep`. |
| 11 | **Sinewave divider** | **R** | Unchanged — `icons/cosive-sinewave.svg` at 80px. A brand anchor; keep the red stroke. |
| 12 | **Contact** | **S** | `.contact-section#contact`. Blue submit button, blue focus ring. Hidden fields per the copy file. |

Page ends with the standard `_footer.html` via `footer-include.js`. **No bespoke footer** —
this is the deliberate difference from CloudMISP.

---

## 6. The hero — the biggest single differentiator

Replaces `.page-banner` entirely. Four stacked layers on `Color/Dark` (#0e141c):

1. **Dot grid** — `radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)`, `background-size: 24px 24px`. Lifted verbatim from `about.html:344-351`.
2. **Sinewave field** — the 12 phase-shifted `t·sin(5t)` paths from `blog.html:616-628`, the Cosive mark's own equation as an ambient texture. Currently used twice, both on the blog. **This is the family signature.**
3. **Blue ambient tint** — a soft `radial-gradient` in `Color/Blue`, echoing the construction at `cloudmisp.html:276-283` but blue-led rather than red.
4. **Content** — breadcrumb, badge row, H1, subtitle.

**Badges:** tinted-blue chips using the recipe at `about.html:283-294` (colour at 0.9, background at 0.1, 1px border at 0.3 — swap red for `Color/Blue`). Carry the framework version and Cosive's standing: `CTI-CMM v1.3` · `We're contributors`.

**No photograph.** That single decision separates it from all 18 existing banners at a glance,
and it removes the grayscale-stock-photo tell that makes the current pages interchangeable.

Padding: `Space/7XL` (8rem) top, `Space/8XL` (10rem) bottom.

---

## 7. Sticky section nav

Reuse `.cm-section-nav` (`cloudmisp.html:228-271`) and its scrollspy (`cloudmisp.html:2336-2411`)
— including `updateOffsets()`, which measures the real header height and writes `scrollPaddingTop`
onto `<html>`. Also inherits the mobile horizontal-scroll variant with its gradient fade mask
(`cloudmisp.html:1409+`).

Changes: active link colour and 2px underline become `Color/Blue` (8.03:1 on the dark strip).
Sits at `top: Space/5XL` (5rem), directly under the shared header.

Links for `/cti-cmm`: What it is · Domains · Levels · Why it helps · Case studies · How it works · FAQ.

---

## 8. The three new components

### 8.1 Domain matrix — the reference grid

CTI-CMM has **11 domains**. Nothing on the site can display eleven of anything: every grid is
`repeat(2|3, 1fr)` and no table is styled outside `blog-post.html`.

- A dense grid — 3 or 4 across at desktop, collapsing to 2 then 1.
- **Hairline cells, not cards.** 1px `Color/Border` (#e8eaed) separators; no fill, no radius, no shadow. Follows `.community-item` (`about.html:664-678`).
- Each cell: a mono/tabular index (01–11) in `Color/Blue Deep`, the domain name at `Text/Base` weight 600, and room for a one-line purpose.
- Tighter vertical padding than the rest of the page — this is reference material and should feel like it.
- Must tolerate 8–15 items so SIM3 and SOC-CMM fit.

### 8.2 Level ladder — the signature motif

Four maturity levels, CTI0 → CTI3. **Rebuild the existing gauge on-palette.**

The current gauge (`start-cti-sharing-community.html:1363-1502`) is hardcoded Material teal —
`#00695c`, `#26a69a`, `#4db6ac`, `#80cbc4`, `#b2dfdb`, `#004d40`, `#2a5e56` — none of which is in
the token set. The exported `images/shared/maturity-gauge-*.svg` carry the same teal.

- Keep the structure: four steps, fills at 25/50/75/100%, tick marks, numeral, title, description.
- Restate the fill as a `Color/Blue` ramp **on `Color/Dark` ground**, where blue reads at 8.03:1 and the teal never belonged.
- Numerals become the level IDs (CTI0–CTI3), not 1–4.
- Regenerate the four SVG exports to match.

This retires an off-brand component and gives the family its motif in one move. Generalises to any
level-based framework.

### 8.3 Engagement cycle

Four steps — assess → plan → deploy → measure — that must read as a **loop**, not a list, because
the copy's whole argument is that assessment is repeated.

Start from the numbered `.icon-item-step` pattern at `use-attack-framework.html:1311-1369`; add a
visual return from step 04 to step 01. Dark ground, `Color/Blue` connectors.

---

## 9. Motion

Adopt the site's existing vocabulary rather than adding to it.

- **Easing:** `cubic-bezier(0.33, 1, 0.68, 1)` — the site's only custom curve (`blog.html:392-411`).
- **Wipe-in accent:** a 3px rule, `transform: scaleX(0) → scaleX(1)`, origin left, 0.3s. In `Color/Blue Deep`.
- **Arrow nudge:** `translateX(4px)` on CTA hover (`blog.html:588-595`).
- **Lift:** `translateY(-3px)` plus a soft shadow, on interactive cards only.
- **Scrollspy underline** on the section nav.
- Distances stay at 3–4px. No entrance animations, no parallax.
- **Required:** a `prefers-reduced-motion` block, per `about.html:426-432` — currently the only one on the site.

---

## 10. Responsive

Existing breakpoints, unchanged: **1200px** → 2-col · **900px** → 1-col + hamburger · **600px** → compress.

- Hero H1 steps down; the sinewave texture stays (it is resolution-independent).
- Section nav becomes a horizontal scroller — behaviour already built.
- Domain matrix: 4 → 3 → 2 → 1.
- Level ladder: the four gauges go horizontal-scroll or stack; do not shrink below legibility.
- Section padding steps `Space/8XL` (10rem) → `Space/7XL` (8rem) → `Space/5XL` (5rem), matching the rest of the site.

---

## 11. Accessibility

- **Never put `Color/Blue` (#2ab6f6) on a light surface.** 2.30:1. Use `Color/Blue Deep` (#2d6da3).
- Body text on any surface must clear 4.5:1; the table in §3 covers every combination in use.
- The dot grid and sinewave field are decorative — `pointer-events: none`, no contrast contribution.
- Section-nav links need a visible focus state, not just hover.
- Level ladder and domain matrix must not encode meaning in colour alone — the numerals and labels carry it.
- `prefers-reduced-motion` is mandatory (§9).

---

## 12. What stays fixed

Non-negotiable, so the page still belongs to the site:

Manrope only · the shared `_header.html` and full `_footer.html` sitemap footer · the 80px
two-stroke sinewave divider with its red stroke · `Radius/SM` (4px) buttons and `Radius/LG` (12px)
cards · 1px `Color/Border` (#e8eaed) hairlines · `Space/3XL` (48px) container gutters so the header
and footer keep aligning · the existing spacing and type scales.

---

## 13. Applying this to a second capability page

The template is content-shaped, not CTI-CMM-shaped. For SIM3, SOC-CMM or ATT&CK:

| Slot | Varies by page |
|---|---|
| Hero badges | Framework name + version, Cosive's standing |
| Section nav | Rename links; the scrollspy is generic |
| Domain matrix | Any 8–15 item taxonomy |
| Level ladder | Any 3–5 level model; relabel numerals |
| Engagement cycle | Fixed at four steps — Cosive's method doesn't change per framework |
| Tool band | Optional; drop it where no free tool exists |

Everything else — quote, case studies, credentials, FAQ, contact — is shared.

---

## 14. Follow-ups

- **Rebuild `images/shared/maturity-gauge-*.svg`** on-palette; the current four carry Material teal.
- **`docs/section-library.md` is stale.** It indexes 11 pages and predates the about/team/blog/CloudMISP redesigns, so its "standard page structure" now describes roughly half the site. Add this template to it once built.
- **Decide on Geist Mono** (§4) at build time.
- **Dead CSS worth harvesting:** the unused asymmetric photo-card pattern at `about.html:436-531`, and `.section-banner` at `improve-cti-team.html:322-369`.
- The blue-vs-red button split means `/cti-cmm` will have a red Contact Us in the nav above a blue CTA in the body. Intentional — the chrome is site-wide, the body is family-specific — but worth eyeballing once built.
