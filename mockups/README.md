# Mockups

Forked pages used to compare design options before one is rolled out. **Not part
of the site.** They are browser-loadable (so they preview on `localhost:8765` and
on the GitHub Pages URL and can be sent to someone), but each carries
`<meta name="robots" content="noindex, nofollow">` and nothing links to them.

Each file opens with a comment block stating the problem it addresses, the fix
it applies and the trade-off it accepts. Delete a mockup once its question has
been answered.

## Current: "this page doesn't look scrollable"

Both fork `cti/consume-share-cyber-threat-intelligence.html`.

The banner there is `.page-banner-inner { padding: var(--space-6xl) 0 }` — 96px
above and below a `.banner-form-card` of about 540px. The banner comes to 741px,
so on a 1440x800 viewport its bottom edge lands at y=822, past the fold: nothing
below it is visible and the page reads as a paragraph and a contact form. It is
in fact 11,768px long across ten sections.

| File | Approach | Keeps the banner form? |
|---|---|---|
| `consume-share-nav.html` | Form out of the banner, sticky section nav in — names six sections, last item links to `#contact` | No |
| `consume-share-arrow.html` | A chevron in a translucent disc, pinned inside the banner, smooth-scrolls to the first section | Yes |
| `consume-share-nav-form.html` | Both: the same section nav, with the form kept and the banner tightened to make room for it | Yes |

Measured at 1440x800, banner bottom edge (the fold is y=800):

| | banner bottom | what the reader sees below it |
|---|---|---|
| original | y=822 | nothing — the banner overshoots the fold |
| `consume-share-nav.html` | y=579 | the whole nav bar (579–644), then 156px of the next section |
| `consume-share-arrow.html` | y=822 | unchanged; the cue sits inside the banner at y=734 |
| `consume-share-nav-form.html` | y=618 | the whole nav bar (618–683), then 117px of the next section |

`consume-share-nav-form.html` only works because the banner gives up ~130px:
at the original padding the nav bar sat at 822–886, entirely below the fold,
which would have made it worse than useless. That height comes out of
`.page-banner-inner` and the form card's internal spacing — all five fields are
kept, but the card is tighter than the site standard (449px, down from ~540px).
It is the busiest of the three: banner, form and nav bar all at once.

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
- `consume-share-nav.html` ports the section nav verbatim from
  `capabilities/misp-kickstart-training.html` (CSS, markup and scrollspy), which
  lifted it from `cti-cmm.html`. If that pattern changes, change it there first.
- The arrow's `bottom` is set by script, not CSS. Pinned to the banner's foot it
  fell below the fold; pinned to the viewport's foot it landed on the white
  section below the banner on tall windows. It now takes whichever is higher.

Whichever wins also applies to the other `.page-banner` pages.
