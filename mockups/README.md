# Mockups

Forked pages used to compare design options before one is rolled out. **Not part
of the site.** They are browser-loadable (so they preview on `localhost:8765` and
on the GitHub Pages URL and can be sent to someone), but each carries
`<meta name="robots" content="noindex, nofollow">` and nothing links to them.

Each file opens with a comment block stating the problem it addresses, the fix
it applies and the trade-off it accepts. Delete a mockup once its question has
been answered.

## Current: "this page doesn't look scrollable"

All three fork `cti/consume-share-cyber-threat-intelligence.html`, with the
banner form card resized to match production.

### The banner form card is a Pipedrive iframe

Measured on https://www.cosive.com/cti/consume-share-cyber-threat-intelligence
at 1440 wide, 2026-09-28:

| | production | Webflow variable |
|---|---|---|
| card | 432 x 695 | — |
| padding | 24px | `Space/LG` |
| background | `rgb(240,240,240)` | `Color/Mid Grey` |
| radius | 12px | `Radius/LG` |
| grid | `864px 432px`, gap 48px | `Space/3XL` |

The card's only child is a Pipedrive webform iframe 645px tall. There is no
heading in the card — the form's heading is rendered inside the iframe. **That
645px is Pipedrive's to set, not ours**, so in these mockups the card's height
is pinned to `645px + 2 x Space/LG` and the stand-in native fields are laid out
inside it, rather than the card being sized by whatever those fields add up to.
The mockups do not embed the real iframe: nobody should be able to submit a
live lead from a mockup.

Two things this corrected, both of which had been flattering the mockups:

- `grid-template-columns: 2fr 1fr` carries a min-content floor, and the form's
  two-up name row pushed the right column to 488px instead of 432px. It is now
  `minmax(0, 2fr) minmax(0, 1fr)`.
- The stand-in `h3` sat outside the 645px budget, making the card 745px.

### The problem, with production numbers

On production the banner runs 887px and its bottom edge lands at **y=967** — so
on a 1440x800 viewport it overshoots the fold by 167px, and still by 67px at
900. Nothing below it is visible and the page reads as a paragraph and a
contact form, when it is ten sections and ~11,700px long.

| File | Approach | Keeps the banner form? |
|---|---|---|
| `consume-share-nav.html` | Form out of the banner, sticky section nav in — names six sections, last item links to `#contact` | No |
| `consume-share-arrow.html` | A chevron in a translucent disc, pinned inside the banner, smooth-scrolls to the first section | Yes |
| `consume-share-nav-form.html` | Both: the same section nav, with the form kept and the banner padding cut to make room | Yes |

Banner bottom edge, and whether the nav bar clears the fold:

| | banner bottom | 800 tall | 900 tall | 1080 tall |
|---|---|---|---|---|
| original / production | 966 | — | — | — |
| `consume-share-nav.html` | 579 | nav visible | nav visible | nav visible |
| `consume-share-arrow.html` | 966 | cue visible | cue visible | cue visible |
| `consume-share-nav-form.html` | 830 | **nav BELOW fold** | nav visible | nav visible |

### `consume-share-nav-form.html` does not fit an 800px window

This is arithmetic, not tuning. The 693px card + the 81px sticky header + the
64px nav bar is 838px before the banner gets any padding at all. On a 1440x800
viewport the nav bar cannot reach above the fold whatever the padding is set
to. Its padding is already down to `Space/XL` / `Space/LG`.

It clears at 900px tall and up. If it has to work at 800, the nav must move
**above** the banner instead of below it — a different design, not a tweak.

### Notes for whoever picks one

- **Nav order is DOM order.** The scrollspy highlights the *last* intersecting
  section, so a nav listed in any other order highlights out of sequence. On
  this page that puts the proof sections (Expertise, Outcomes, Case studies)
  before the service sections (Consume, Share, CloudMISP). If the nav should
  read service-first, the sections have to be reordered in the page first.
- The FAQ section has no link of its own, so it folds into CloudMISP via the
  script's `navMapping` — the underline holds rather than going blank.
- This page already has its own "What would you like to do?" card row linking to
  `#consume`, `#share` and `#cloudmisp`. The section nav partly duplicates it;
  worth deciding whether both earn their place.
- The nav mockups port the section nav verbatim from
  `capabilities/misp-kickstart-training.html` (CSS, markup and scrollspy), which
  lifted it from `cti-cmm.html`. If that pattern changes, change it there first.
- The arrow's `bottom` is set by script, not CSS. Pinned to the banner's foot it
  fell below the fold; pinned to the viewport's foot it landed on the white
  section below the banner on tall windows. It now takes whichever is higher.
- The page-foot contact form is a second Pipedrive iframe, 640 x 608. These
  mockups leave it as the local native form — it is well below the fold and
  plays no part in the comparison.

Whichever wins also applies to the other `.page-banner` pages.
