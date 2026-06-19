# Project Instructions

## Webflow Variables

This design is being implemented in Webflow. When providing styling values (in plans, guidance, or code), always use **Webflow variable names** rather than absolute values or CSS custom property names. Include the resolved value in parentheses for reference.

**Do:** `Space/XL` (2rem), `Color/Accent` (#e53834), `Radius/LG` (12px)
**Don't:** `32px`, `#e53834`, `--space-xl`

### Variable quick-reference

**Colors**
`Color/Dark` (#0e141c) · `Color/White` (#ffffff) · `Color/Background` (#ffffff) · `Color/Light Grey` (#f8f9fa) · `Color/Border` (#e8eaed) · `Color/Text Primary` (#1a1a1a) · `Color/Text Secondary` (#5f6368) · `Color/Accent` (#e53834) · `Color/Accent Dark` (#c1121f) · `Color/Mid Grey` (#f0f0f0) · `Color/Blue` (#2ab6f6)

**Spacing**
`Space/2XS` (0.25rem) · `Space/XS` (0.5rem) · `Space/SM` (0.75rem) · `Space/MD` (1rem) · `Space/LG` (1.5rem) · `Space/XL` (2rem) · `Space/2XL` (2.5rem) · `Space/3XL` (3rem) · `Space/4XL` (4rem) · `Space/5XL` (5rem) · `Space/6XL` (6rem) · `Space/7XL` (8rem) · `Space/8XL` (10rem)

**Font sizes**
`Text/XS` (0.75rem) · `Text/SM` (0.875rem) · `Text/Base` (1rem) · `Text/LG` (1.125rem) · `Text/XL` (1.25rem) · `Text/2XL` (1.5rem) · `Text/3XL` (1.75rem) · `Text/4XL` (2rem) · `Text/5XL` (2.5rem) · `Text/6XL` (3rem)

**Line heights**
`Leading/Tight` (1.1em) · `Leading/Snug` (1.3em) · `Leading/Normal` (1.55em) · `Leading/Loose` (1.75em)

**Letter spacing**
`Tracking/Uppercase` (0.08em)

**Border radius**
`Radius/None` (0) · `Radius/SM` (4px) · `Radius/MD` (8px) · `Radius/LG` (12px) · `Radius/XL` (16px)

**Fonts**
`Font/Heading` (Manrope) · `Font/Body` (Manrope)

Full reference: `webflow-variables.md`

## Tone of Voice

Before writing or editing any copy (headings, body text, CTAs, meta descriptions, etc.), read the tone-of-voice and key messages guide in `tov/` for instructions on the Cosive tone of voice.

## SVG Icons

When saving an SVG file to `icons/`, use the **actual color the icon renders as in the full design** — not `currentColor` or CSS custom properties. Standalone SVG assets uploaded to Webflow don't inherit CSS color, so they need hardcoded values.

Look at the HTML/CSS where the icon is used to determine the rendered color, then use that value in the SVG `stroke` or `fill` attribute.

**Tight viewBox:** The saved SVG's `viewBox` must be cropped to the icon's visible bounds (path geometry + half `stroke-width` on each side) so the content fills the viewport with no outer whitespace. The viewBox must always be **square** (equal width and height) to maintain a 1:1 aspect ratio — use the larger dimension for both and center the icon on the shorter axis. Do not use the source icon's default `viewBox` (e.g. `0 0 24 24`) if it leaves padding around the artwork.

**Existing examples:**
- `icons/home.svg` → `stroke="#e8eaed"` (`Color/Border`)
- `icons/circle-chevron-right.svg` → `stroke="#e53834"` (`Color/Accent`)
- `icons/chevron-circle-down.svg` → `stroke="#5f6368"` (`Color/Text Secondary`)
- `icons/circle-arrow-right.svg` → `stroke="rgba(255,255,255,0.85)"`
