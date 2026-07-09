<!-- CLAUDE: When you start building a page in Webflow, update its checkbox from [ ] to [~] (in progress). When the build is complete, update it to [x] (done). -->

# Webflow Build Progress

Tracking which pages have been built in Webflow from the HTML prototypes.

## Home

- [x] Home (`index.html`)

## Cyber Threat Intelligence

- [x] CTI hub (`cyber-threat-intelligence.html`)
- [x] Improve your threat intelligence team (`improve-cti-team.html`)
- [x] Consume & share cyber threat intelligence (`consume-and-share-cti.html`)
- [x] Start a threat intel sharing community (`start-threat-intel-sharing-community.html`)
- [~] Manage my MISP for me (`manage-my-misp.html`)
  <details>
  <summary>Webflow element structure</summary>

  #### Section 1: Header (shared)
  Reuse existing site-wide Header symbol.

  #### Section 2: Page Banner
  ```
  [Section] Page Banner
    [Image] Banner Background Image          ← images/cti/banner-bg-manage-misp.webp
    [Div Block] Page Banner Inner
      [Div Block] Container
        [Nav] Breadcrumb
          [Link Block] Breadcrumb Home        ← href: index.html
            [Image] Home Icon                 ← icons/home.svg
            [Text Block] "Home"
          [Text Block] Separator "/"
          [Link] Badge CTI                    ← href: cyber-threat-intelligence.html
            [Text Block] "Cyber Threat Intelligence"
          [Text Block] Separator "/"
          [Text Block] Current "Manage my MISP for me"
        [Div Block] Banner Grid
          [Div Block] Banner Text
            [Heading H1] "Manage my MISP for me"
            [Paragraph] Banner Description    ← "Running MISP yourself means updates..."
          [Div Block] Banner Form Card
            [Heading H3] "Talk to us about managed MISP"
            [Form Block] Contact Form
              [Input - Hidden] category = "Cyber Threat Intelligence"
              [Div Block] Form Row
                [Div Block] Form Group
                  [Label] "First name"
                  [Input - Text] first_name (required)
                [Div Block] Form Group
                  [Label] "Last name"
                  [Input - Text] last_name (required)
              [Div Block] Form Group
                [Label] "Email"
                [Input - Email] email (required)
              [Div Block] Form Group
                [Label] "Company"
                [Input - Text] company
              [Div Block] Form Group
                [Label] "Message"
                [Textarea] message (3 rows)
              [Button] "Send"
  ```

  #### Section 3: Navigation Cards
  ```
  [Section] Nav Cards Section
    [Div Block] Container
      [Div Block] Nav Cards Heading
        [Heading H3] "What would you like to know?"
      [Div Block] Nav Cards Grid
        [Link Block] Nav Card               ← href: #pain-of-self-hosting
          [Div Block] Nav Card Title "The pain of running MISP yourself"
          [Div Block] Card CTA
            [Image] Down Arrow Icon          ← icons/chevron-circle-down.svg
        [Link Block] Nav Card               ← href: #cloudmisp-solution
          [Div Block] Nav Card Title "How CloudMISP solves this"
          [Div Block] Card CTA
            [Image] Down Arrow Icon
        [Link Block] Nav Card               ← href: #consulting
          [Div Block] Nav Card Title "MISP consulting & migration"
          [Div Block] Card CTA
            [Image] Down Arrow Icon
  ```

  #### Section 4: The Pain of Self-Hosting (Danger section)
  ```
  [Section] Danger Section                   ← id: pain-of-self-hosting
    [HTML Embed] Striped SVG bar             ← red diagonal stripe pattern
    [Div Block] Container
      [Div Block] Section Label
        [Image] Warning Icon                 ← inline SVG triangle
        [Text Block] "The cost of self-hosting MISP"
      [Heading H2] "Running MISP yourself is harder than it looks"
      [Paragraph] Intro text                 ← "MISP is a powerful platform..."
      [List] Challenge List (unordered)
        [List Item] "Keep up with 14–26 MISP releases per year..."
        [List Item] "Recover from broken upstream updates..."
        [List Item] "Test every update against your data..."
        [List Item] "Accept your threat analysts doing sysadmin work..."
        [List Item] "Take system administrators away from other priorities..."
        [List Item] "Schedule downtime and patching windows..."
        [List Item] "Build and maintain SSO integration yourself..."
      [Div Block] CTA Block (centered)
        [Heading H3] (with inline checkmark SVG) "Outsource all of that to us"
        [Paragraph] "With CloudMISP, you hand all of this to us..."
        [Link Block] Button Primary          ← href: #contact, "Talk to us about CloudMISP"
  ```

  #### Section 5: How CloudMISP Solves This
  ```
  [Section] CloudMISP Section (alt bg)       ← id: cloudmisp-solution
    [Div Block] Container
      [Div Block] Infra Intro Grid
        [Div Block] Infra Intro (text side)
          [Div Block] Section Label "CloudMISP"
          [Heading H2] "Let us run MISP so your team doesn't have to"
          [Paragraph] "CloudMISP is our fully managed MISP hosting service..."
          [Paragraph] "Your instance runs in a dedicated VPC..."
          [Div Block] CTA Wrapper
            [Link Block] Button Primary      ← href: #contact, "Talk to us about CloudMISP"
        [Div Block] Infra Intro Image
          [Image] CloudMISP UI Screenshot    ← images/cti/cloudmisp-insight-ui-events-index
      [Div Block] Build Grid (3×2 feature grid)
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Login Icon               ← inline SVG (arrow-right-to-bracket)
          [Text Block] Build Feature Number "01"
          [Heading H3] Build Feature Title "SSO done for you"
          [Paragraph] Build Feature Desc     ← "Built to meet the needs..."
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Refresh Icon             ← inline SVG (refresh-arrows)
          [Text Block] Build Feature Number "02"
          [Heading H3] "Blue/green deployments"
          [Paragraph] "We build new upgraded infrastructure..."
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Globe Icon               ← inline SVG
          [Text Block] Build Feature Number "03"
          [Heading H3] "Any AWS region globally"
          [Paragraph] "Deploy in the AWS region..."
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Pulse Icon               ← inline SVG (heartbeat line)
          [Text Block] Build Feature Number "04"
          [Heading H3] "Automated monitoring & alerting"
          [Paragraph] "24/7 infrastructure monitoring..."
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Shield Check Icon        ← inline SVG
          [Text Block] Build Feature Number "05"
          [Heading H3] "Security patches applied for you"
          [Paragraph] "OS, PHP, MySQL, and MISP patches..."
        [Div Block] Build Feature
          [Div Block] Build Feature Icon
            [Image] Database Icon            ← inline SVG
          [Text Block] Build Feature Number "06"
          [Heading H3] "Enterprise-grade backups"
          [Paragraph] "Automated backups with point-in-time recovery..."
  ```

  #### Section 6: MISP Consulting & Migration
  ```
  [Section] Services Section                 ← id: consulting
    [Div Block] Container
      [Div Block] Services Intro Grid
        [Div Block] Services Intro (text side)
          [Div Block] Section Label "MISP consulting"
          [Heading H2] "We help you get more from MISP..."
          [Paragraph] Section Intro          ← "Whether you're transitioning..."
          [Div Block] CTA Wrapper
            [Link Block] Button Primary      ← href: #contact, "Discuss MISP consulting"
        [Div Block] Services Intro Image
          [Image] Consulting Photo           ← images/cti/misp-consulting-collaboration.jpg
      [Div Block] Build Grid (3×2 feature grid)
        [Div Block] Build Feature
          [Text Block] Build Feature Number "01"
          [Heading H3] "Migrate from self-hosted MISP"
          [Paragraph] "We help you export your data..."
        [Div Block] Build Feature
          [Text Block] "02"
          [Heading H3] "Build workflows that match your team"
          [Paragraph] "CTI teams work differently..."
        [Div Block] Build Feature
          [Text Block] "03"
          [Heading H3] "Integrate threat intel into your security tools"
          [Paragraph] "Connect MISP to your SIEM, SOAR, EDR..."
        [Div Block] Build Feature
          [Text Block] "04"
          [Heading H3] "Find good sources of threat intelligence"
          [Paragraph] "We help you evaluate and connect..."
        [Div Block] Build Feature
          [Text Block] "05"
          [Heading H3] "Improve your CTI practices"
          [Paragraph] "From collection and analysis..."
        [Div Block] Build Feature
          [Text Block] "06"
          [Heading H3] "Develop your CTI roadmap"
          [Paragraph] "We assess where your CTI capability is now..."
  ```
  Note: This section's Build Features have **no icons** — only numbers, titles, and descriptions.

  #### Section 7: Key Outcomes / Metrics
  ```
  [Section] Metrics Section (dark bg)
    [Div Block] Container
      [Image] Checkmark Icon                 ← inline SVG (white check in rounded rect)
      [Div Block] Section Label "Key outcomes"
      [Heading H2] "Results from our managed MISP work"
      [Div Block] Metrics Grid
        [Div Block] Metric Card
          [Text Block] Metric Number "450+"
          [Div Block] Metric Label
            [Text Block] "Organisations on the national CTIS sharing platform..."
            [Link] "(ASD Report 2024-25)"    ← external link
        [Div Block] Metric Card
          [Text Block] Metric Number "0"
          [Text Block] Metric Label "Broken MISP updates reaching CloudMISP customers..."
        [Div Block] Metric Card
          [Text Block] Metric Number "14–26"
          [Text Block] Metric Label "MISP updates per year handled for you..."
        [Div Block] Metric Card
          [Text Block] Metric Number "24hr"
          [Text Block] Metric Label "Full replacement environment stood up..."
  ```

  #### Section 8: Credentials / Why Work With Us
  ```
  [Section] Credentials Section (dark bg)
    [Div Block] Credentials Inner
      [Div Block] Credentials Box
        [Div Block] Credentials Separator
          [Image] Cosive Sinewave            ← icons/cosive-sinewave.svg
        [Div Block] Credentials Label "Why work with us"
        [Heading H2] "MISP expertise you can trust"
        [Div Block] Icon Credentials
          [Div Block] Icon Item
            [Div Block] Icon Item Icon
              [Image] Code Icon              ← inline SVG (code brackets)
            [Div Block] Icon Item Text
              [Text Block] "Core contributors to MISP — we don't just host it..."
          [Div Block] Icon Item
            [Div Block] Icon Item Icon
              [Image] Layout Icon            ← inline SVG (layout/dashboard)
            [Div Block] Icon Item Text
              [Text Block] "Creators of MISP's Insight UI theme..."
          [Div Block] Icon Item
            [Div Block] Icon Item Icon
              [Image] Education Icon         ← inline SVG (graduation cap)
            [Div Block] Icon Item Text
              [Text Block] "The world's most respected MISP trainers..."
          [Div Block] Icon Item
            [Div Block] Icon Item Icon
              [Image] Globe Icon             ← inline SVG
            [Div Block] Icon Item Text
              [Text Block] "Built Australia's national CTI sharing platform..."
          [Div Block] Icon Item
            [Div Block] Icon Item Icon
              [Image] Building Icon          ← inline SVG
            [Div Block] Icon Item Text
              [Text Block] "Managed MISP for government & enterprise..."
      [Div Block] Credentials Photo
        [Image] Terry Presenting             ← images/shared/terry-presenting.jpg
        [Text Block] Credentials Caption     ← "Cosive co-founder Terry MacDonald..."
  ```

  #### Section 9: Case Study
  ```
  [Section] Case Study Section (alt bg)      ← id: case-studies
    [Div Block] Container
      [Div Block] Section Label "Case study"
      [Heading H2] "Real-world experience at national scale"
      [Div Block] Infra Intro Grid
        [Div Block] Infra Intro (text side)
          [Paragraph] "Cosive designed and built the infrastructure..."
          [Paragraph] "We operated this platform with high-availability..."
          [List] (unordered)
            [List Item] "Designed and built infrastructure for Australia's national CTI sharing platform"
            [List Item] "Integrated with government and critical infrastructure organisations"
            [List Item] "Operated at scale with high-availability requirements"
            [List Item] "Demonstrated the managed hosting model that became CloudMISP"
        [Div Block] Infra Intro Image
          [Image] CTIS Architecture Diagram  ← images/cti/diagram-ctis-sharing.svg
  ```

  #### Section 10: Testimonial
  ```
  [Section] Hero Testimonial (dark bg)
    [Div Block] Testimonial Inner
      [Image] Cosive Sinewave                ← icons/cosive-sinewave.svg
      [Div Block] Testimonial Label "What our customers say about us"
      [Block Quote] "Cosive brought a high level of expertise..."
      [Text Block] Cite "— Sasenka Abeysooriya, Program Director"
      [Image] Testimonial Logo               ← logos/uq.svg
  ```

  #### Section 11: FAQ
  ```
  [Section] FAQ Section
    [Div Block] Container
      [Div Block] Section Label "Frequently asked questions"
      [Heading H2] "Common questions about working with us"
      [Div Block] FAQ Inner
        [Div Block] FAQ List
          [Div Block] FAQ Item (×5)
            [Div Block] FAQ Summary
              [Text Block] Question text
              [Image] Chevron Down Icon      ← icons/chevron-circle-down.svg
            [Div Block] FAQ Answer (collapsed by default)
              [Paragraph] Answer text
          — Q1: "What happens to our existing data if we move to a managed instance?"
          — Q2: "Can you help us get more value from MISP without replacing our current setup?"
          — Q3: "How do you handle MISP updates and security patches?"
          — Q4: "Can you help us connect to threat intelligence feeds and sharing communities?"
          — Q5: "How do we know which of your services is right for us?"
        [Div Block] FAQ Image
          [Image] FAQ Sidebar Image          ← images/cti/faq-misp-services.webp
  ```

  #### Section 12: Wavy Separator
  ```
  [Div Block] People CTA Separator
    [Image] Wavy Separator                   ← icons/wavy-separator.svg
  ```

  #### Section 13: Contact Form
  ```
  [Section] Contact Section                  ← id: contact
    [Div Block] Container
      [Div Block] Contact Inner
        [Div Block] Section Label "Get in touch"
        [Heading H2] "Stop running MISP yourself"
        [Paragraph] Contact Subtitle         ← "Tell us about your MISP situation..."
        [Form Block] Contact Form
          [Input - Hidden] category = "Cyber Threat Intelligence"
          [Div Block] Form Row
            [Div Block] Form Group
              [Label] "First name"
              [Input - Text] first_name (required)
            [Div Block] Form Group
              [Label] "Last name"
              [Input - Text] last_name (required)
          [Div Block] Form Group
            [Label] "Email"
            [Input - Email] email (required)
          [Div Block] Form Group
            [Label] "Company"
            [Input - Text] company
          [Div Block] Form Group
            [Label] "Message"
            [Textarea] message (5 rows)
          [Button] "Send"
  ```

  #### Section 14: Footer (shared)
  Reuse existing site-wide Footer symbol.

  </details>
- [ ] Find useful threat intelligence feeds (`find-useful-threat-intel-feeds.html`)
- [ ] Build and integrate CTI tools (`build-and-integrate-cti-tools.html`)

## Security Operations

- [x] SecOps hub (`security-operations.html`)
- [ ] Improve my cybersecurity ops team (`improve-secops-team.html`)
- [ ] Start a new cybersecurity ops team (`start-new-cybersecurity-ops-team.html`)
- [ ] Automate your cybersecurity ops team (`automate-cybersecurity-ops-team.html`)
- [ ] Use the ATT&CK Framework (`use-attack-framework.html`)
- [ ] Integrate my security tools (`build-and-integrate-secops-tools.html`)
- [ ] Help us join FIRST.org (`help-us-join-first.html`)

## Fraud Data Sharing

- [x] Fraud hub (`fraud-data-sharing.html`)
- [x] Consume & share fraud data (`consume-and-share-fraud-data.html`)
- [x] Build and integrate fraud tools (`build-and-integrate-fraud-tools.html`)
- [x] Start a fraud data sharing community (`start-fraud-data-sharing-community.html`)
