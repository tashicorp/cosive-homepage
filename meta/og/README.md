# Blog OG card generator

Renders a branded 1200×630 Open Graph card for a live Cosive blog post, reproducing that post's own
banner.

```bash
npm run og -- https://www.cosive.com/blog/<slug>

# several at once — one browser launch, one page each
npm run og -- https://www.cosive.com/blog/<slug-a> https://www.cosive.com/blog/<slug-b>
```

Each card lands in its own folder, named for the post's slug:

```
images/og/blog/<slug>/og-blog-post-<slug>.png
```

When the run finishes it opens every card produced, then each post's folder in Finder, so the result
can be eyeballed and dragged straight into Webflow. There are no options: the size is fixed at the
standard OG 1200×630 and every style value comes from the live banner.

## Why it exists

Webflow binds `og:image` to the post's featured image. When a post has no featured image it does not
omit the tag — it emits an empty one:

```html
<meta content="" property="og:image"/>
<meta content="" name="twitter:image"/>
```

Scrapers honour the empty value and render a bare link card, and there is nothing to fall through
to. Webflow has no per-collection fallback, and its OG image picker only accepts Image fields, so
there is no way to point at a default from the Designer. Generating a card per post fixes that, and
also improves posts that *do* have a featured image — a raw photo cropped to 1.91:1 carries no
title, category or branding.

## What it captures

The Cosive reverse logo at the top, matching the existing cards in `images/og/`, and the post's
banner content at the bottom: title, category badge, publish date, and every author with avatar,
name and role. No breadcrumb — that is banner chrome, not content.

Two background variants, chosen automatically:

- **Featured image present** — the image at `opacity: .06` over `Color/Dark`, exactly as the live
  site does it. Note the live rule fades the image itself rather than laying a scrim over a
  full-opacity image; `blog-post.html` in this repo reaches the same result the other way
  (`grayscale(1)` plus an `rgba(14,20,28,0.94)` `::after`).
- **No featured image** — the `hero-wave-field.svg` wave field with the left-fading gradient, sized
  `120% 100%` at `50% -30px`. These are the live banner's values, and `blog-post-no-image.html`
  now carries the same ones. Because the card is 1.9:1 and the banner 3.06:1, identical values
  render the waves taller and steeper here; matching the numbers is the convention, not matching
  the rendered proportions.

Detection is just the presence of `img.v2-blog-banner-featured-background`. Webflow removes the node
entirely rather than emitting an empty `src`, so it is an unambiguous signal.

## How it renders

The card is drawn at true 1200×630 with no transform scaling, so type stays crisp. Every token is
used at its real pixel value, verified against the live banner measured at a 1440px viewport:

| | Live banner | Card |
|---|---|---|
| Section padding | 80px (`Space/5XL`) | same |
| Side margin | 48px (`Space/3XL`) | same |
| Content column | 66% | same |
| Title | Manrope 700, 48px/52.8px | same |
| Badge / date | Geist Mono 700, 14px, line box 32.4px | **18px, line box 42px** |
| Avatar | 60×60, `2px solid rgba(248,249,250,.8)` | **72×72**, same border |
| Author name | Manrope 600, 16px, `Color/Light Grey` @ 90% | **24px**, same |
| Author role | Manrope 400, 14px, `Color/Mid Grey` @ 75% | **20px**, same |

Everything below the title is scaled up from the banner, because a share card is viewed at a
fraction of the banner's size and 14px metadata disappears at thumbnail scale — the badge and date
by two steps, the author name and role by three. The title is already large enough and stays at the
banner's 48px.

The live section is 1440×470 (3.06:1) and a share card is 1.91:1, so the card is proportionally
taller. That extra height is spent on `justify-content: space-between` — logo pinned to the top
padding, post details to the bottom — rather than scaling the banner up to fill it. The only other
visible difference is that titles wrap earlier: the content column is 729px here versus 887px on the
live page.

Fonts and `hero-wave-field.svg` are inlined as data URIs, and author avatars and the featured image are
fetched and inlined before the screenshot, so the render never races the network.

Two warnings guard the layout rather than letting a bad card ship silently:

- **Vertical** — a long title pushes the details up into the logo. `space-between` only holds the
  two blocks apart while slack remains, so the check measures both together against the padded
  height. There is headroom for a four-line title with two authors.
- **Horizontal** — author names and roles do not wrap, so a wide row is clipped at the card edge
  rather than reflowing. Warns past 1104px (1200 less the two 48px margins). Two authors with long
  role titles run to roughly 880px, so three is where this starts to matter.

## ⚠️ Gotchas

**The live author class names are inverted.** `.v2-blog-post-card-author-title` holds the person's
**name**; `.v2-blog-post-card-author-name` holds their **role**.

**Live tokens have drifted from `CLAUDE.md`.** `Color/Accent Dark` is `#a31621` live (not
`#c1121f`), `Color/Text Primary` is `#0e141c` (not `#1a1a1a`), and `Color/Blue` is `#0e4f6b` (not
`#2ab6f6`). There is also a `dark-grey` (`#bbb`) — used for the publish date, and the only one of
these that this card depends on.

**Dates are copied verbatim.** The live site formats as "December 13, 2022"; the local prototypes
use "2 Mar 2026". No reformatting happens here.

## If the banner markup changes

The scrape depends on these selectors, and the script fails loudly naming the URL if the title or
date goes missing:

| Field | Selector |
|---|---|
| Title | `h1.v2-heading-1` |
| Category | `a.v2-blog-category-badge` |
| Date | `.v2-blog-post-publish-date` |
| Featured image | `img.v2-blog-banner-featured-background` |
| Author row | `.v2-blog-post-avatar-item` |
| Author avatar | `img.v2-blog-post-author-avatar` |

To re-derive the style values, measure the live banner rather than reading the published stylesheet.
`cosive.webflow.shared.*.min.css` is minified with media queries flattened, so several selectors
appear two or three times and the later copies are **mobile** overrides — reading it top-down gives
you the wrong values.

## Using the output in Webflow

Webflow's OG picker only accepts Image fields, so either:

- add a **Social image** image field to the Blog Posts collection, upload the PNG, and bind
  `og:image` to it; or
- store the URL in a plain text field and write the tag by hand in Collection page settings →
  Custom code → Inside `<head>` using **+ Add Field**, with the OG tab's image set to none.

Both social scrapers cache aggressively — force a re-scrape through the Facebook Sharing Debugger
and LinkedIn Post Inspector rather than trusting a first look.

Worth fixing at the same time: posts currently emit `og:type: website`, where `article` is correct.
