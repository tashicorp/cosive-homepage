# Testimonial avatar — Webflow build spec

Adds a headshot inline to the left of the citation in the homepage testimonial slider, without
displacing the UQ logo.

Every value below was measured from the rendered live homepage at 1440px, not read off a stylesheet.
The design is already built and verified in the repo — see `.hero-testimonial` on `cti-cmm.html`
(preview at `/cti-cmm.html#customer-quote`), `improve-cti-team.html`, `manage-my-misp.html` and
`consume-share-threat-intelligence.html`.

---

## Element tree

Slide 1 only. New elements marked; everything else is untouched.

```
div.v2-testimonial-slide-inner              flex · column · align centre · justify centre
├─ blockquote.v2-testimonial-quote
├─ div.v2-testimonial-attribution     ← NEW  flex · row · centre · gap Space/MD
│  ├─ img.v2-testimonial-avatar       ← NEW  56 × 56 · circular · cover
│  └─ div.v2-testimonial-citation           moved inside, otherwise unchanged
└─ img.v2-testimonial-logo                  unchanged, still the last child
```

**The parent is already a centred flex column.** This is the load-bearing detail: the new row centres
itself and shrinks to its content, exactly as the citation does today. It needs no `margin: 0 auto`,
no width, and no alignment overrides.

---

## Styles

| Element | Property | Value |
|---|---|---|
| `.v2-testimonial-attribution` | display | flex, horizontal |
| | align items | centre |
| | justify content | centre |
| | gap | `Space/MD` (1rem = 16px) |
| `.v2-testimonial-avatar` | size | 56 × 56px |
| | border radius | **100%** — literal, see below |
| | object fit | cover |
| | flex child | don't shrink (`flex-shrink: 0`) |
| | alt | `Sasenka Abeysooriya` |

**There is no `Radius/Full` variable.** The set is None/SM/MD/LG/XL, so enter a literal `100%` —
or add the variable if you want it reusable.

**56px is not arbitrary.** It reuses `.cti-expertise-strip__faces img` (`cti-cmm.html:671-676`), the
existing precedent for a person photo on white. The 44px `.blog-card-avatar` is sized for a 14px
byline and reads small against this 20px citation.

**No border.** `.blog-card-avatar`'s 2px `Color/Light Grey` (#f8f9fa) ring would be invisible on the
testimonial's white ground.

### The asset

`images/shared/sasenka-abeysooriya.jpg` — **168 × 168, 8.7KB.**

Sized for its only use. At 56px CSS that is exactly 3× DPR, so it is pin-sharp on the densest phone
screens with no wasted bytes. This deliberately departs from the 800 × 800 masters beside it in
`images/homepage/` — those are shared with the team and author-bio layouts, which render up to 120px;
this one is never drawn larger than 56.

Derived from the supplied 1080 × 1080 original by cropping to `(60, 10, 880, 830)` then resizing.
That crop tightens the framing to match `chris-horsley.jpg` — the original is a looser upper-body
shot with the face left of centre, which at 56px left dead wall inside the circle and rendered the
face illegible. Keep the crop box if the asset is ever regenerated.

WebP would take it to 4.1KB, but the 3KB saved isn't worth breaking the `.jpg` convention every other
headshot in that folder follows — the real win was the resize, which cut 95%.

### Context these sit in — do not change

| Element | Value |
|---|---|
| `.v2-testimonial-quote` | 32px / 500 Manrope, line-height 41.6px, centred, margin `0 0 24px`, `Color/Dark` |
| `.v2-testimonial-citation` | 20px / 500, `Color/Text Secondary` (#5f6368), line-height 32.4px, margin 0 |
| `.v2-testimonial-logo` | 183 × 48, `margin-top: Space/LG` (1.5rem = 24px), last child |

---

## Build order

**The slide is a Webflow Component.** Its citation is bound to a property (auto-named `Text 3`), so
the structural work below happens **inside the main component** — instances can only take property
values, they cannot be restructured. Enter it by double-clicking an instance, or right-click →
Edit Component.

1. Upload `images/shared/sasenka-abeysooriya.jpg` (168 × 168, 8.7KB) to Assets.
2. Inside the main component, add a Div Block immediately before the citation, class
   `v2-testimonial-attribution`.
3. Drag the citation into it **in the Navigator** — far easier than on canvas inside a slider.
4. Style the row per the table above.
5. Add an Image inside the row, *before* the citation, class `v2-testimonial-avatar`.
6. Give the avatar two properties, because both slides are instances of this one component:
   - an **Image property**, so each instance supplies its own photo
   - a **Visibility property** — "Show avatar" — so slide 2 can switch it off
7. Set the values per instance in the **Settings panel** (`D`) with the *instance* selected.

---

## Gotchas

**Slide 2 must not get an avatar.** Its anonymous "Principal Threat Analyst" quote has no headshot,
and no logo either — `.v2-testimonial-industry` occupies that slot. Since both slides are instances
of the same component, the avatar cannot simply be added: it needs the Visibility property in step 6,
the same mechanism the breadcrumb uses for `Show parent` (`breadcrumb-component.md`).

There is already a working example of this inside the component. The third child differs by slide:

```
slide 1:  blockquote → citation → img.v2-testimonial-logo
slide 2:  blockquote → citation → div.v2-testimonial-industry
```

An Image on one instance and a Div on the other, in the same slot, is what paired Visibility
properties look like. Copy whatever is already toggling those two.

**The slider gets ~24px taller.** It's a cross-fade with both slides in the DOM, so the mask sizes to
the tallest. The row is 56px where the citation alone was 32px, taking slide 1 from 292 to ~316px.
Slide 1 already governs the height so nothing breaks, but slide 2 gains that much slack — eyeball it.

**Drop the em-dash.** The citation is one string, `— Sasenka Abeysooriya, Program Director`. The dash
signals attribution on a text-only line; beside a photo it reads as a stray mark. Already removed in
the prototype.

**The citation computes `text-align: left`** and is centred only by the parent's `align-items:
center`. That still holds inside the row. At narrow widths the name wraps to two left-aligned lines
beside the avatar — verified acceptable at 390px.

---

## Acceptance checks

1. Verify in **Preview or on the published staging domain**, not the Designer canvas — it renders
   sliders differently.
2. **The UQ logo is still there**: 183 × 48, centred, directly below the attribution row. Check the
   rendered pixels, not the markup.
3. Avatar renders 56 × 56, circular, undistorted, and does not shrink when the name is long.
4. Row is horizontally centred; avatar is vertically centred against the citation.
5. Slide 2 has no avatar and still reads as balanced at the new slider height.
6. Tablet and Mobile breakpoints keep the row on one line with the text wrapping, rather than
   stacking the avatar above the name.
7. Side-by-side against `/cti-cmm.html#customer-quote`.
