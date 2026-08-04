# Lead capture: Webflow forms → Make → Pipedrive

**Decision:** Build the lead forms **natively in Webflow** (pixel-perfect styling, fully custom
surrounding copy) and pipe submissions into **Pipedrive via Make**. We are **not** using Pipedrive's
native Web Forms.

**Why not native Pipedrive Web Forms:** they embed only as a cross-domain **iframe** (can't be styled
with our site CSS — never a design match), they force their own mandatory intro block (can't wrap just
the fields with Webflow text), and they have no hidden fields. Webflow-native forms solve all three,
and Webflow **does** support hidden fields — which gives us cleaner page/interest attribution than
Pipedrive forms ever could.

---

## How it works (architecture)

All three apps have **native connectors in Make** — no code.

1. **Trigger — Make "Webflow › Watch Form Submissions"** fires in real time on every submission (via
   Webflow's `form_submission` webhook). Payload includes all visible fields **+ hidden fields**.
2. **(opt) Pipedrive "Search or Create Organization"** — match/create by company name.
3. **(opt) Pipedrive "Search or Create Person"** — match by email (avoids duplicate contacts), link to org.
4. **Pipedrive "Create a Lead"** — map fields:
   - Title → `{{category}} · {{page}} – {{organisation}}`
   - Custom fields → `Service interest = {{category}}`, `Source page = {{page}}`, `Enquiry details = {{message}}`
   - Owner / Label → optionally set by category (via a Make router)
5. **(opt) Notify** — Slack/email; or router branches owners/labels by category.

**One scenario covers everything.** Because the hidden fields travel with each submission, a single Make
scenario watches all form submissions site-wide and tags each lead correctly — no need for 20 forms or 20
scenarios. Covers all 40 embeds (20 pages × banner + footer).

### Hidden fields on every Webflow form
```
page      = <page-slug>              e.g. consume-share-threat-intelligence
category  = CTI | Fraud | SecOps | MISP | General
placement = banner | footer          (optional — which embed converted)
```

### Example
CTI page, banner form submitted → Make creates a Pipedrive lead
`CTI · Consume & Share Threat Intelligence – Acme Bank`, with `Service interest = CTI`,
`Source page = consume-share-threat-intelligence`, `placement = banner`, and the enquiry text.

---

## Practicalities
- **Real-time** (webhook, not polling) — leads land in seconds.
- **Make cost** = per operation (~3–5 ops per submission); free tier ~1,000 ops/mo, so low/moderate
  volume is ~free.
- Keep the Webflow form's own success message / redirect for the visitor.
- **Spam:** reCAPTCHA/hCaptcha or honeypot on the Webflow form + a spam filter step in Make.
- Webflow webhooks/API need a paid Site plan (already have it if live on the domain).

---

## TODO

### Webflow (design/build team)
- [ ] Build the 2 forms per landing page (banner + footer), styled to match the design.
- [ ] Add hidden fields to every form: `page`, `category`, `placement`.
- [ ] Add the surrounding copy (heading + intro) — use the copy already written in
      `pipedrive/cosive-pipedrive-lead-forms.xlsx` (still valid; it's just the wording).
- [ ] Add reCAPTCHA/hCaptcha (or honeypot) + set the success/thank-you message.
- [ ] Confirm consistent field names across all forms (Full name, Work email, Organisation, Phone, Enquiry).

### Pipedrive admin
- [ ] Create custom fields: `Service interest` (single option: CTI, Fraud, SecOps, MISP, General),
      `Source page` (text), `Enquiry details` (large text), `Consent` (single option, required).
- [ ] Connect Pipedrive to Make (OAuth / API token).

### Make (whoever owns automation)
- [ ] Connect Webflow + Pipedrive accounts.
- [ ] Build one scenario: Watch Form Submissions → (Search/Create Org) → (Search/Create Person) →
      Create Lead, with the field mapping above.
- [ ] Optional router: assign owner / add label by `category`.
- [ ] Test one submission per category end-to-end; confirm the lead lands with correct page + category.

### Decisions to confirm
- [ ] **Make vs Webflow Logic → Pipedrive webhook** (no middleware, a bit more setup) vs **Zapier**.
- [ ] Create submissions as **Leads** or **Deals** in Pipedrive.
- [ ] Owner routing rules per category (who gets CTI / Fraud / SecOps / MISP).

---

## Next deliverable (offered)
Revise `pipedrive/cosive-pipedrive-lead-forms.xlsx` for this architecture:
- Per page: Webflow form names + exact **hidden field values** (`page`/`category`/`placement`) + the copy.
- A companion **"Make scenario + field-mapping" spec sheet** for whoever builds the automation.

## Sources
- Webflow form-submission webhook — https://developers.webflow.com/data/reference/webhooks/events/form-submission
- Make + Webflow walkthrough — https://nocodequest.com/simple-webflow-form-submits-with-integromat/
- Outfunnel — Pipedrive forms & integrations — https://outfunnel.com/pipedrive-forms/
- Webflow ↔ Pipedrive — https://webflow.com/integrations/pipedrive
