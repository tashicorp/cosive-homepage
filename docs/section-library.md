# Section Library

A catalogue of every reusable section layout across the Cosive landing pages. Consult this before building a new page — prefer reusing an existing section over creating a new one.

**Pages indexed:**
index.html, cyber-threat-intelligence.html, fraud-data-sharing.html, security-operations.html, improve-cti-team.html, consume-share-threat-intelligence.html, consume-share-fraud-data.html, build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html, start-cti-sharing-community.html, start-sharing-community.html

---

## Universal sections (all pages)

### 1. Page Banner — Hub Variant

**Classes:** `div.page-banner`
**Background:** `Color/Dark` (#0e141c) with background image, grayscale filter, and rgba overlay
**Layout:** Stacked — breadcrumb nav above H1
**Elements:** Breadcrumb nav with home icon, badge-tagged category link, H1 heading
**Best for:** Hub landing page heroes (CTI, Fraud Data Sharing, Security Operations) where a single heading is enough
**Used on:** cyber-threat-intelligence.html, fraud-data-sharing.html, security-operations.html

**Skeleton:**
```html
<div class="page-banner">
  <img src="images/[bg].webp" alt="">
  <div class="page-banner-inner">
    <div class="container">
      <nav class="breadcrumb">
        <a href="index.html" class="breadcrumb-home">
          <svg><!-- home icon --></svg>Home
        </a>
        <span class="separator">/</span>
        <span class="current badge-cti">Page Title</span>
      </nav>
      <h1 class="heading-style-h1">Page Title</h1>
    </div>
  </div>
</div>
```

---

### 2. Page Banner — Task Variant (with Form)

**Classes:** `div.page-banner` + `div.banner-grid`
**Background:** `Color/Dark` (#0e141c) with background image, grayscale filter, and rgba overlay
**Layout:** 2-column grid (`banner-grid`): left text, right form card
**Elements:** Breadcrumb nav, H1, description paragraph, inline contact form in frosted-glass card
**Best for:** Task-level pages where you want to capture leads directly from the hero
**Used on:** build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html, improve-cti-team.html, consume-share-threat-intelligence.html, consume-share-fraud-data.html, start-cti-sharing-community.html, start-sharing-community.html

**Skeleton:**
```html
<div class="page-banner">
  <img src="images/[bg].webp" alt="">
  <div class="page-banner-inner">
    <div class="container">
      <nav class="breadcrumb">
        <a href="index.html" class="breadcrumb-home"><svg><!-- home --></svg>Home</a>
        <span class="separator">/</span>
        <a href="[hub].html" class="badge-cti">Hub Name</a>
        <span class="separator">/</span>
        <span class="current">Task Name</span>
      </nav>
      <div class="banner-grid">
        <div class="banner-text">
          <h1 class="heading-style-h1">Page Title</h1>
          <p class="banner-description">Description text</p>
        </div>
        <div class="banner-form-card">
          <h3 class="heading-style-h4">Form heading</h3>
          <form class="contact-form" action="#" method="post">
            <input type="hidden" name="category" value="Category">
            <div class="form-row">
              <div class="form-group">
                <label for="fname">First name</label>
                <input type="text" id="fname" name="first_name" required>
              </div>
              <div class="form-group">
                <label for="lname">Last name</label>
                <input type="text" id="lname" name="last_name" required>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 3. Credentials Section (Social Proof / Why Work With Us)

**Classes:** `section.credentials-section`
**Background:** `#121212` (dark) with full-bleed background image, grayscale filter, radial gradient overlay
**Layout:** Positioned — white `credentials-box` overlaid on dark photo background
**Elements:** Sinewave separator SVG, label, H2, `icon-credentials` list (icon + bold title + description), optional `credentials-photo` with caption
**Best for:** Social proof / credentials / "Why work with us" blocks
**Used on:** All pages

**Skeleton:**
```html
<section class="credentials-section">
  <div class="credentials-inner">
    <div class="credentials-box">
      <div class="credentials-separator">
        <svg viewBox="0 0 310 142" fill="none"><!-- dual sinewave --></svg>
      </div>
      <div class="credentials-label">Why work with us</div>
      <h2 class="heading-style-h2">Heading</h2>
      <div class="icon-credentials">
        <div class="icon-item">
          <div class="icon-item-icon"><svg><!-- icon --></svg></div>
          <div class="icon-item-text"><strong>Credential title</strong> — description</div>
        </div>
        <!-- repeat icon-item -->
      </div>
    </div>
  </div>
  <div class="credentials-caption">Photo caption</div>
</section>
```

---

### 4. FAQ Section (Accordion + Image)

**Classes:** `section.faq-section`
**Background:** `Color/White` (#ffffff)
**Layout:** 2-column (`faq-inner`): left accordion (3fr), right sticky image (2fr)
**Elements:** Section label, H2, `<details>` accordion items with chevron SVG, optional sidebar image
**Best for:** Frequently asked questions on any page
**Used on:** All pages (except index.html)

**Skeleton:**
```html
<section class="faq-section">
  <div class="container">
    <div class="section-label">FAQ</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-3xl);">Frequently asked questions</h2>
    <div class="faq-inner">
      <div class="faq-list">
        <details>
          <summary>
            Question text?
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div class="faq-answer"><p>Answer text.</p></div>
        </details>
        <!-- repeat details -->
      </div>
      <div class="faq-image">
        <img src="images/[faq].webp" alt="">
      </div>
    </div>
  </div>
</section>
```

---

### 5. Sinewave Divider

**Classes:** `div.people-cta-separator`
**Background:** `Color/White` (#ffffff)
**Layout:** Centered SVG divider
**Elements:** Dual-line sinewave SVG (grey `#bdbdbd` + red `Color/Accent`)
**Best for:** Visual separator between credentials section and contact CTA
**Used on:** All pages

**Skeleton:**
```html
<div class="people-cta-separator">
  <svg viewBox="0 0 310 142" fill="none">
    <!-- dual sinewave paths: one #bdbdbd, one #e53834 -->
  </svg>
</div>
```

---

### 6. Contact CTA Section

**Classes:** `section.final-cta`
**Background:** `Color/White` (#ffffff)
**Layout:** Centered text block with CTA button
**Elements:** H2, paragraph, accent button linking to contact page
**Best for:** Final call-to-action at the bottom of every page
**Used on:** All pages

**Skeleton:**
```html
<section class="final-cta">
  <div class="container">
    <h2 class="heading-style-h1">Talk to us about your goals</h2>
    <p>Supporting paragraph.</p>
    <a href="/contact-us" class="final-cta-btn">Contact Us
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="10" cy="10" r="8.5"/><path d="M9 7l3 3-3 3"/>
      </svg>
    </a>
  </div>
</section>
```

---

## Hub page sections (index.html + hub pages)

### 7. Hero — Goal-Selection Card Grid

**Classes:** `section.hero` + `div.industry-grid`
**Background:** `Color/White` (#ffffff)
**Layout:** Stacked: H1 + subtitle, then 3-column image card grid
**Elements:** H1 with `span.highlight` accent underline, subtitle with chevron icon, `industry-card` links (background image + gradient overlay + title + CTA)
**Best for:** Top-of-page topic/goal selection on the homepage or hub pages
**Used on:** index.html

**Skeleton:**
```html
<section class="hero">
  <div class="container">
    <h1 class="heading-style-h1">
      Heading with <span class="highlight">highlighted text</span>
    </h1>
    <h3 class="heading-style-h3" style="color: var(--color-text-secondary); margin-bottom: var(--space-xl);">
      Subtitle <span class="chevron-circle"><svg><!-- down chevron --></svg></span>
    </h3>
    <div class="industry-grid">
      <a href="[page].html" class="industry-card" data-cluster="0">
        <img src="images/[card].webp" alt="Card title">
        <div class="industry-card-content">
          <h2>Card Title</h2>
          <div class="card-actions">
            <span class="card-cta">Learn More <svg><!-- circle-arrow --></svg></span>
          </div>
        </div>
      </a>
      <!-- repeat industry-card ×3–6 -->
    </div>
  </div>
</section>
```

---

### 8. Audience Segment Strip

**Classes:** `section.customers-section` + `div.customers-strip`
**Background:** `Color/White` (#ffffff)
**Layout:** 4-column flex row of bordered items
**Elements:** Section label, `customer-item` cards with tag pills, H3, description
**Best for:** Showing who you work with — audience segments with tags
**Used on:** cyber-threat-intelligence.html, fraud-data-sharing.html, security-operations.html

**Skeleton:**
```html
<section class="customers-section">
  <div class="container">
    <div class="section-label">Who we work with</div>
    <div class="customers-strip">
      <div class="customer-item">
        <div class="customer-item-tags">
          <span class="tag">TAG</span>
        </div>
        <h3>Segment Title</h3>
        <p>Description text.</p>
      </div>
      <!-- repeat customer-item ×4 -->
    </div>
  </div>
</section>
```

---

### 9. Services Grid (3-Column Bordered Cards)

**Classes:** `section.services-section` + `div.services-grid`
**Background:** `Color/White` (#ffffff), border-top 1px `Color/Border`
**Layout:** 3-column grid of cards
**Elements:** Section label, H2, `service-card` items (H3, paragraph, card-cta link)
**Best for:** Listing 3 service offerings or capabilities
**Used on:** cyber-threat-intelligence.html, fraud-data-sharing.html, security-operations.html, index.html

**Skeleton:**
```html
<section class="services-section">
  <div class="container">
    <div class="section-label">How we can help</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-3xl);">Services heading</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3 class="heading-style-h3">Service title</h3>
        <p>Service description.</p>
        <a class="card-cta">Read more <svg><!-- circle-arrow --></svg></a>
      </div>
      <!-- repeat service-card ×3 -->
    </div>
  </div>
</section>
```

---

### 10. Customer Panels (Full-Width Photo Rows)

**Classes:** `section.customers-section` + `div.customers-panels`
**Background:** `Color/White` (#ffffff); panels have dark gradient overlays on background images
**Layout:** Stacked full-width rows, each with background image + left-to-right gradient overlay
**Elements:** Panel icon SVG, panel title, customer names with dot separators
**Best for:** Showing customer sectors/segments with photographic backgrounds
**Used on:** index.html

**Skeleton:**
```html
<section class="customers-section">
  <div class="container">
    <div class="customers-label">Our customers</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-3xl);">Who we work with</h2>
  </div>
  <div class="customers-panels">
    <div class="panel">
      <div class="panel-bg" style="background-image: url('images/[panel].webp')"></div>
      <div class="panel-overlay"></div>
      <div class="panel-content">
        <div class="panel-header">
          <div class="panel-icon"><svg><!-- sector icon --></svg></div>
          <div class="panel-title">Sector Name</div>
        </div>
        <div class="panel-right">
          <div class="panel-customers-label">Example customers</div>
          <div class="panel-customers">
            <span>Customer 1</span>
            <svg class="dot" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill="currentColor"/></svg>
            <span>Customer 2</span>
          </div>
        </div>
      </div>
    </div>
    <!-- repeat panel ×3–5 -->
  </div>
</section>
```

---

## Task page sections (multiple pages)

### 11. Infra Section — White Background (2-Col Text + Image)

**Classes:** `section.infra-section`
**Background:** `Color/White` (#ffffff)
**Layout:** 2-column `infra-intro-grid` (text left, image right) with optional `build-grid` (3-col feature cards) below
**Elements:** Section label, H2, body text, optional CTA button, image, optional numbered feature cards
**Best for:** Standard content blocks describing a capability, service, or approach
**Used on:** build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html, improve-cti-team.html, consume-share-threat-intelligence.html, consume-share-fraud-data.html, start-cti-sharing-community.html, start-sharing-community.html

**Skeleton:**
```html
<section class="infra-section">
  <div class="container">
    <div class="infra-intro-grid">
      <div>
        <div class="section-label">Section Label</div>
        <h2 class="heading-style-h2">Heading</h2>
        <p>Body text.</p>
        <a href="#" class="btn-primary" style="margin-top: var(--space-lg);">CTA</a>
      </div>
      <div>
        <img src="images/[img].webp" alt="" style="width: 100%; aspect-ratio: 2.14/1; object-fit: cover; border-radius: var(--radius-lg);">
      </div>
    </div>

    <!-- Optional: numbered feature grid below -->
    <div class="build-grid">
      <div class="build-feature">
        <div class="build-feature-number">01</div>
        <h3 class="build-feature-title">Feature title</h3>
        <p class="build-feature-desc">Description.</p>
      </div>
      <!-- repeat build-feature ×3–6 -->
    </div>
  </div>
</section>
```

---

### 12. Infra Section — Light Grey Background

**Classes:** `section.infra-section.infra-section--alt`
**Background:** `Color/Light Grey` (#f8f9fa)
**Layout:** Same as #11 — 2-column or stacked content
**Elements:** Same as #11 with light grey background for visual alternation
**Best for:** Alternating background rhythm between content blocks
**Used on:** All task pages

**Skeleton:**
```html
<section class="infra-section infra-section--alt">
  <div class="container">
    <!-- Same inner structure as #11 -->
  </div>
</section>
```

---

### 13. Help Section (Icon Credentials on Light Background)

**Classes:** `section.infra-section.infra-section--alt.help-section`
**Background:** `Color/Light Grey` (#f8f9fa)
**Layout:** Stacked — heading, then `icon-credentials` vertical list, then optional centred CTA
**Elements:** Section label, H2, `icon-credentials` list (same component as credentials section but on light background), centred CTA block
**Best for:** "How we help" or "Our approach" sections with a list of capabilities/methods
**Used on:** build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html, improve-cti-team.html

**Skeleton:**
```html
<section class="infra-section infra-section--alt help-section">
  <div class="container">
    <div class="section-label">Section Label</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-xl);">Heading</h2>
    <div class="icon-credentials">
      <div class="icon-item">
        <div class="icon-item-icon"><svg><!-- icon --></svg></div>
        <div class="icon-item-text"><strong>Bold title</strong> — description text</div>
      </div>
      <!-- repeat icon-item ×5–7 -->
    </div>
    <div style="margin-top: var(--space-6xl); text-align: center;">
      <h3 class="heading-style-h3" style="margin-bottom: var(--space-sm);">CTA heading</h3>
      <p>Supporting text.</p>
      <a href="#" class="btn-primary">CTA Button</a>
    </div>
  </div>
</section>
```

---

### 14. Infra Section — Dark Background (SVG Diagram Card)

**Classes:** `section.infra-section.infra-section--dark`
**Background:** `Color/Dark` (#0e141c)
**Layout:** 2-column `misp-grid` (text left, diagram card right) with optional centred CTA below
**Elements:** Section label (60% white), H2 (white), body text (70% white), `subsection-box` with `outcome-diagram` SVG/image
**Best for:** Technical architecture diagrams, platform overviews on dark background
**Used on:** build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html

**Skeleton:**
```html
<section class="infra-section infra-section--dark">
  <div class="container">
    <div class="misp-grid">
      <div class="infra-intro">
        <div class="section-label" style="color: rgba(255,255,255,0.6);">Section Label</div>
        <h2 class="heading-style-h2" style="color: white; margin-bottom: var(--space-lg);">Heading</h2>
        <p style="color: rgba(255,255,255,0.7);">Body text.</p>
      </div>
      <div class="subsection-box" style="margin-top: 0; max-width: none;">
        <div class="outcome-diagram">
          <img src="images/[diagram].svg" alt="" style="width: 100%; height: auto;">
        </div>
      </div>
    </div>
    <div style="margin-top: var(--space-6xl); text-align: center;">
      <h3 class="heading-style-h3" style="color: white; margin-bottom: var(--space-sm);">CTA heading</h3>
      <p style="color: rgba(255,255,255,0.7);">Supporting text.</p>
      <a href="#" class="btn-primary">CTA</a>
    </div>
  </div>
</section>
```

---

### 15. Before/After Diagram Comparison

**Classes:** `.infra-section` + `.before-after-grid`
**Background:** Inherits from parent `infra-section` variant (typically `--alt` or `--dark`)
**Layout:** 2-column grid of comparison boxes
**Elements:** `subsection-box` cards each with label ("Before"/"After"), H3, body text, and `outcome-diagram` image/SVG
**Best for:** Showing transformation — current state vs. desired state with diagrams
**Used on:** build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html

**Skeleton:**
```html
<!-- Nested inside an infra-section -->
<div class="before-after-grid" style="margin-top: var(--space-3xl);">
  <div class="subsection-box subsection-box--white">
    <div class="infra-intro">
      <div class="subsection-label">Before</div>
      <h3 class="heading-style-h3" style="margin-bottom: var(--space-sm);">Before heading</h3>
      <p>Before description.</p>
    </div>
    <div class="outcome-diagram">
      <img src="images/[before].svg" alt="">
    </div>
  </div>
  <div class="subsection-box subsection-box--white">
    <div class="infra-intro">
      <div class="subsection-label">After</div>
      <h3 class="heading-style-h3" style="margin-bottom: var(--space-sm);">After heading</h3>
      <p>After description.</p>
    </div>
    <div class="outcome-diagram">
      <img src="images/[after].svg" alt="">
    </div>
  </div>
</div>
```

---

### 16. Navigation Cards (Jump Links)

**Classes:** `.infra-section` + `.nav-cards-grid`
**Background:** `Color/White` (#ffffff)
**Layout:** 3-column grid of pill-shaped link cards
**Elements:** `nav-cards-heading` with H3, `nav-card` links with title and down-arrow CTA icon
**Best for:** In-page jump navigation letting users pick their path
**Used on:** consume-share-threat-intelligence.html, improve-cti-team.html

**Skeleton:**
```html
<section class="infra-section">
  <div class="container">
    <div class="nav-cards-heading">
      <h3 class="heading-style-h3">What would you like to do?</h3>
    </div>
    <div class="nav-cards-grid">
      <a href="#section-id" class="nav-card">
        <div class="nav-card-title">Card title</div>
        <span class="card-cta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14m0 0l-6-6m6 6l6-6"/></svg></span>
      </a>
      <!-- repeat nav-card ×3 -->
    </div>
  </div>
</section>
```

---

### 17. Hero Testimonial (Centred Blockquote)

**Classes:** `section.hero-testimonial`
**Background:** `Color/White` (#ffffff)
**Layout:** Centred single-column
**Elements:** Sinewave SVG, testimonial label, blockquote (`Text/4XL`), cite, optional dot navigation for carousel
**Best for:** Prominent customer quote / social proof between content sections
**Used on:** index.html, consume-share-threat-intelligence.html

**Skeleton:**
```html
<section class="hero-testimonial">
  <div class="testimonial-inner">
    <img src="icons/cosive-sinewave.svg" alt="Cosive" class="testimonial-sinewave">
    <div class="testimonial-label">What our customers say</div>
    <blockquote>&ldquo;Customer quote text.&rdquo;</blockquote>
    <cite>&mdash; Name, Title</cite>
    <div class="hero-dots">
      <button class="hero-dot active" data-index="0" aria-label="Testimonial 1"></button>
      <button class="hero-dot" data-index="1" aria-label="Testimonial 2"></button>
    </div>
  </div>
</section>
```

---

### 18. Full-Width SVG Diagram (Stacked Layout)

**Classes:** `.infra-section` + `.infra-intro-grid.infra-intro-grid--stacked` + `.outcome-diagram`
**Background:** Inherits from parent `infra-section` variant
**Layout:** Single-column stacked — text block above, full-width SVG diagram below
**Elements:** Section label, H2, body text with optional bullet lists, full-width `outcome-diagram` image/SVG
**Best for:** Detailed technical diagrams that need full container width
**Used on:** consume-share-threat-intelligence.html, build-and-integrate-cti-tools.html, build-and-integrate-fraud-tools.html

**Skeleton:**
```html
<section class="infra-section infra-section--alt">
  <div class="container">
    <div class="infra-intro-grid infra-intro-grid--stacked">
      <div class="infra-intro">
        <div class="section-label">Section Label</div>
        <h2 class="heading-style-h2" style="margin-bottom: var(--space-lg);">Heading</h2>
        <p>Body text.</p>
        <ul>
          <li>Point one</li>
          <li>Point two</li>
        </ul>
      </div>
      <div class="outcome-diagram">
        <img src="images/[diagram].svg" alt="" style="width: 100%; height: auto;">
      </div>
    </div>
  </div>
</section>
```

---

### 19. Challenge Section (Red Stripe Border)

**Classes:** `section.infra-section.infra-section--danger`
**Background:** `#fefcfc` (near-white with warm tint)
**Layout:** Stacked — diagonal red-stripe SVG bar at top, then section label with warning icon, H2, body text, `challenge-list` items
**Elements:** Red/dark-red diagonal stripe pattern SVG, warning triangle icon in label, H2, paragraph, `challenge-list` (red-tinted items with checkbox-style `::before`), closing reassurance H3 with checkmark
**Best for:** Highlighting challenges, pain points, or risks that the service addresses
**Used on:** start-sharing-community.html, start-cti-sharing-community.html

**Skeleton:**
```html
<section class="infra-section infra-section--danger">
  <svg style="position: absolute; top: 0; left: 0; width: 100%; height: calc(var(--space-2xs) + 2px);" preserveAspectRatio="none">
    <defs>
      <pattern id="challenge-stripe" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(45)">
        <rect width="8" height="16" fill="#e53834"/>
        <rect x="8" width="8" height="16" fill="#c1121f"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#challenge-stripe)"/>
  </svg>
  <div class="container">
    <div class="section-label">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="vertical-align: -2px; margin-right: var(--space-xs);">
        <path d="M8 1L15 14H1L8 1Z" stroke="#e53834" stroke-width="1.5" fill="none"/>
        <line x1="8" y1="6" x2="8" y2="10" stroke="#e53834" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="8" cy="12" r="0.75" fill="#e53834"/>
      </svg>The Challenge
    </div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-lg);">Challenge heading</h2>
    <p>Intro paragraph.</p>
    <ul class="challenge-list">
      <li>Challenge point</li>
      <!-- repeat -->
    </ul>
    <h3 class="heading-style-h3" style="font-size: var(--text-3xl); margin-top: var(--space-3xl);">
      <svg><!-- checkmark icon --></svg>Reassurance message
    </h3>
  </div>
</section>
```

---

## Specialised sections (1–3 pages)

### 20. Differentiators Section (Full-Bleed Photo + Numbered Cards)

**Classes:** `section.differentiators-section`
**Background:** `Color/Mid Grey` (#f0f0f0)
**Layout:** 2-column grid (2fr content, 1fr photo), content area contains a 3×2 grid of numbered cards
**Elements:** Sinewave separator SVG, label, H2, `diff-card` items (number, H3, paragraph), full-height grayscale photo with caption
**Best for:** "What makes us different" or competitive advantages with a supporting photo
**Used on:** index.html

**Skeleton:**
```html
<section class="differentiators-section">
  <div class="differentiators-inner">
    <div class="differentiators-content">
      <div class="differentiators-separator">
        <svg viewBox="0 0 310 142" fill="none"><!-- dual sinewave --></svg>
      </div>
      <div class="differentiators-label">What makes us different</div>
      <h2 class="heading-style-h2">Heading</h2>
      <div class="differentiators-grid">
        <div class="diff-card">
          <div class="diff-number">01</div>
          <h3 class="heading-style-h4">Card title</h3>
          <p>Card description.</p>
        </div>
        <!-- repeat diff-card ×6 -->
      </div>
    </div>
    <div class="differentiators-photo">
      <img src="images/[photo].webp" alt="">
      <div class="differentiators-caption">Photo caption</div>
    </div>
  </div>
</section>
```

---

### 21. Metrics Section (Dark Stats Display)

**Classes:** `section.metrics-section`
**Background:** `Color/Dark` (#0e141c)
**Layout:** Stacked heading, then flex-wrap row of metric cards
**Elements:** Optional icon SVG, section label (white), H2 (white), `metrics-grid` of `metric-card` items (large number + label)
**Best for:** Key statistics / impact numbers
**Used on:** consume-share-threat-intelligence.html, consume-share-fraud-data.html, start-cti-sharing-community.html, start-sharing-community.html

**Skeleton:**
```html
<section class="metrics-section">
  <div class="container">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style="margin-bottom: var(--space-sm);">
      <!-- optional icon -->
    </svg>
    <div class="section-label">Key Outcomes</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-3xl);">Heading</h2>
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-number">50+</div>
        <div class="metric-label">Metric description</div>
      </div>
      <!-- repeat metric-card ×4–5 -->
    </div>
  </div>
</section>
```

---

### 22. Case Studies Section (3-Column Cards)

**Classes:** `section.cases-section`
**Background:** `Color/White` (#ffffff)
**Layout:** 3-column grid of image cards
**Elements:** Section label, H2, intro paragraph, `cases-grid` of `case-card` items (image, tag, H3, description)
**Best for:** Case study / customer success story cards
**Used on:** index.html (as `case-studies-section`), consume-share-threat-intelligence.html

**Skeleton:**
```html
<section class="cases-section">
  <div class="container">
    <div class="section-label">Case Studies</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-md);">Heading</h2>
    <p class="cases-intro">Intro text.</p>
    <div class="cases-grid">
      <div class="case-card">
        <img src="images/[case].webp" alt="">
        <div class="case-card-body">
          <span class="case-card-tag">Tag</span>
          <h3>Case study title</h3>
          <p>Description.</p>
        </div>
      </div>
      <!-- repeat case-card ×3 -->
    </div>
  </div>
</section>
```

---

### 23. Pricing / Product Tier Cards

**Classes:** `section.tiers-section`
**Background:** `Color/White` (#ffffff)
**Layout:** 3-column grid of tier cards with optional add-ons row below
**Elements:** Section label, H2, `tiers-intro` paragraph, `tiers-grid` of `tier-card` items (H3, subtitle, feature list), optional `.is-featured` / `.is-gold` modifiers, `tiers-addons` grid of `addon-card` items
**Best for:** Product tiers, pricing plans, package comparisons
**Used on:** consume-share-threat-intelligence.html, improve-cti-team.html

**Skeleton:**
```html
<section class="tiers-section">
  <div class="container">
    <div class="section-label">Product</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-lg);">Heading</h2>
    <div class="tiers-intro"><p>Intro text.</p></div>
    <div class="tiers-grid">
      <div class="tier-card">
        <h3>Tier Name</h3>
        <div class="tier-card-subtitle">Subtitle</div>
        <ul class="tier-features">
          <li>Feature one</li>
          <!-- repeat -->
        </ul>
      </div>
      <div class="tier-card is-featured">
        <h3>Featured Tier</h3>
        <div class="tier-card-subtitle">Subtitle</div>
        <ul class="tier-features"><li>Feature</li></ul>
      </div>
      <div class="tier-card is-gold">
        <h3>Premium Tier</h3>
        <div class="tier-card-subtitle">Subtitle</div>
        <ul class="tier-features"><li>Feature</li></ul>
      </div>
    </div>
    <p class="tiers-footnote">* Footnote text.</p>
    <div class="tiers-addons">
      <div class="tiers-addons-label">Optional add-ons</div>
      <div class="tiers-addons-grid">
        <div class="addon-card">
          <div class="addon-card-icon"><svg><!-- icon --></svg></div>
          <div class="addon-card-content">
            <div class="addon-card-title">Add-on name</div>
            <div class="addon-card-desc">Description.</div>
          </div>
        </div>
        <!-- repeat addon-card -->
      </div>
    </div>
  </div>
</section>
```

---

### 24. Who Section — Full-Bleed Photo Panels (Narrative)

**Classes:** `section.who-section` + `div.panels`
**Background:** `Color/White` (#ffffff); panels have dark gradient overlays on background images
**Layout:** Container heading, then full-bleed stacked panels with background images and gradient overlays
**Elements:** Section label, H2 in container, `panels` div containing `panel.is-narrative` items (background image, overlay, tags, title, description)
**Best for:** "Who we work with" showcasing customer/community types with photographic panels
**Used on:** start-sharing-community.html, start-cti-sharing-community.html, consume-share-fraud-data.html

**Skeleton:**
```html
<section class="who-section">
  <div class="container">
    <div class="section-label">Who we work with</div>
    <h2 class="heading-style-h2" style="margin-bottom: var(--space-3xl);">Heading</h2>
  </div>
  <div class="panels">
    <div class="panel is-narrative">
      <div class="panel-bg" style="background-image: url('images/[panel].webp')"></div>
      <div class="panel-overlay"></div>
      <div class="panel-content">
        <div class="panel-header">
          <div class="panel-tags"><span class="tag">TAG</span></div>
          <div class="panel-title">Panel Title</div>
        </div>
        <div class="panel-desc">Description text.</div>
      </div>
    </div>
    <!-- repeat panel ×3–5 -->
  </div>
</section>
```

---

### 25. Vision + Maturity Gauge (Staircase)

**Classes:** `.infra-section.infra-section--alt` + `.vision-list` + `.staircase-wrap`
**Background:** `Color/Light Grey` (#f8f9fa)
**Layout:** Stacked — vision heading + bullet list, then maturity gauge row (4 steps)
**Elements:** `vision-heading-wrap` (label, H2, paragraph, `vision-list` bold-titled bullets), `staircase-wrap` containing `gauge-row` of 4 `gauge-step` items (bar with tick marks, fill level, step number, title, description), CTA paragraph
**Best for:** Illustrating a maturity model or progression with a visual gauge
**Used on:** start-sharing-community.html, start-cti-sharing-community.html

**Skeleton:**
```html
<section class="infra-section infra-section--alt">
  <div class="container">
    <div class="vision-heading-wrap">
      <div class="section-label">The Vision</div>
      <h2 class="heading-style-h2" style="margin-bottom: var(--space-lg);">Heading</h2>
      <p>Intro paragraph.</p>
      <ul class="vision-list">
        <li><b>Bold title</b> — description</li>
        <!-- repeat ×4–6 -->
      </ul>
    </div>

    <div class="staircase-wrap">
      <h3 class="heading-style-h3" style="font-size: var(--text-3xl); margin: 0 0 var(--space-2xl) 0;">Gauge heading</h3>
      <div class="gauge-row">
        <div class="gauge-step">
          <div class="gauge-bar">
            <div class="gauge-tick-marks"><span></span><span></span><span></span><span></span></div>
            <div class="gauge-fill gauge-fill--25"></div>
          </div>
          <div class="gauge-step-num">1</div>
          <div class="gauge-step-title">Step title</div>
          <div class="gauge-step-desc">Step description.</div>
        </div>
        <!-- repeat gauge-step ×4 (--25, --50, --75, --100) -->
      </div>
      <p class="gauge-cta">CTA text with <a href="#">link</a>.</p>
    </div>

    <p class="vision-tagline">Closing tagline.</p>
  </div>
</section>
```

---

### 26. Scenario Cards (3-Column, Bordered, With Images)

**Classes:** `.infra-section` + `.scenarios-grid`
**Background:** `Color/White` (#ffffff)
**Layout:** 3-column grid of bordered image cards with lists
**Elements:** `scenarios-heading` (label + title), `scenario-card` items (image, category label, title with accent spans, body text, bullet list, card-cta link)
**Best for:** Service/capability breakdowns with supporting imagery and feature lists
**Used on:** start-sharing-community.html, start-cti-sharing-community.html, consume-share-fraud-data.html

**Skeleton:**
```html
<section class="infra-section">
  <div class="container">
    <div class="scenarios-heading">
      <div class="section-label">Our Services</div>
      <div class="scenarios-title">What we can help you with</div>
    </div>
    <div class="scenarios-grid">
      <div class="scenario-card">
        <img class="scenario-card-img" src="images/[scenario].webp" alt="" loading="lazy">
        <div class="scenario-card-number">Category</div>
        <div class="scenario-card-title">Title with <span style="color: var(--color-accent);">accent</span></div>
        <div class="scenario-card-body">Description text.</div>
        <ul class="scenario-list">
          <li>Feature point</li>
          <!-- repeat -->
        </ul>
        <a href="#" class="card-cta">Learn more <svg><!-- circle-arrow --></svg></a>
      </div>
      <!-- repeat scenario-card ×3 -->
    </div>
  </div>
</section>
```

---

## Page composition patterns

### Standard page structure

Every page follows this general ordering:

1. **Sticky header** (shared)
2. **Page banner** (#1 or #2) — always first
3. **Content sections** (variable, drawn from #7–#26)
4. **Credentials section** (#3) — always present, typically near the bottom
5. **FAQ section** (#4) — always present (except index.html)
6. **Sinewave divider** (#5) — always present
7. **Contact CTA** (#6) — always last content section
8. **Footer** (shared)

### Background alternation

Alternate between white and light-grey backgrounds for adjacent content sections to create visual rhythm:

- White → Light Grey → White → Dark → White → Light Grey → ...
- Never place two same-background sections adjacent unless separated by a full-bleed section (credentials, metrics, differentiators)

### Hub page pattern

1. Page Banner (hub variant, #1)
2. Audience Segment Strip (#8) or Customer Panels (#10)
3. Credentials (#3)
4. Services Grid (#9)
5. FAQ (#4)
6. Sinewave (#5) + Contact CTA (#6)

### Task page pattern

1. Page Banner (task variant with form, #2)
2. 2–5 content sections mixing: Infra (#11/#12), Stacked Diagrams (#18), Nav Cards (#16), Before/After (#15), Dark Diagram (#14), Help Section (#13)
3. Credentials (#3)
4. FAQ (#4)
5. Sinewave (#5) + Contact CTA (#6)
