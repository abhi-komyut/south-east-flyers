# South East Flyers & Marketing Solutions — PRODUCT.md

## Register
`brand` — this is a marketing site (SEO landing pages + homepage + contact). Design IS the product: visual craft directly affects whether a Melbourne business owner calls.

## What this is
South East Flyers (SEF) is a flyer distribution / letterbox drop company serving Melbourne's south-east and eastern suburbs. One service, one differentiator: every flyer goes in the letterbox by itself (never bundled with other advertisers' flyers), and every run is GPS-tracked so the client gets proof.

## Users
Local business owners and marketing managers (real estate agencies, roofers, plumbers, electricians, dentists, retail) deciding whether to trust a flyer distributor with a real marketing budget. They are not designers and not technical. They are comparing SEF against: (a) big national bundling operators, (b) other small local distributors, (c) just not doing flyers at all. They convert by calling 0402 824 070 or submitting the quote form — that is the only goal of every page (target: 10 organic calls/day).

## Business facts that constrain design (not just copy)
- Melbourne-only. Never imply national/Sydney coverage.
- $200 per 1,000 flyers, 1,000 minimum. Numbers shown must look like real, specific business figures (rounded suburb dwelling counts, "about $X"), never like SaaS pricing-tier cards.
- No invented stats, no animated-counter theatre that renders as "0" to crawlers — numbers must be real and server-rendered.
- GST is never mentioned anywhere on the site.
- Proof-of-delivery (GPS tracking, exclusivity) is the entire trust story. The design's job is to make that credible and concrete, not abstract.

## Brand personality
Confident local operator. Not corporate, not a tech startup, not a bargain-bin courier. The feel of a small, serious, well-run local trade business that a real estate agency or roofer would trust with their marketing spend — competent, direct, slightly premium, zero fluff.

## Anti-references (explicitly NOT this)
- Generic SaaS/tech startup aesthetic — no hero-metric glass tiles, no gradient accents, no "platform" feel. SEF sells a physical, local, boots-on-the-ground service, not software.
- Cheap/budget courier-service look — nothing that reads as a low-cost bulk operator, since SEF's whole pitch is the opposite of the bundled, high-minimum competitors.
- Stiff corporate enterprise — no faceless B2B enterprise polish either; this is a local operator, not a national brand.

## Reference point
No single named reference site. Trust judgment: closer to a premium local trade/services brand (think: the quality bar of a well-run boutique real estate agency's site, not a logistics SaaS) than to any tech product.

## Design principles (see DESIGN.md for the full token/type/spacing system)
- Primary brand color: teal `#046B6B` (`--color-navy` token name is historical, value is teal). Full palette — `teal-deep`, `ink`, `body`, `muted`, `beige`, `orange`, `orange-hover`, `orange-on-dark`, `required`, `field-border`, `line` — lives in `DESIGN.md`, sourced from the October 2026 redesign.
- Secondary: true beige `#EDE4D3` (`--color-cream` token), used as section background, not as pure off-white.
- CTA/accent: orange `#E97B1F`. CTA text is `ink` on orange, never white (white on `#E97B1F` is 2.9:1, fails WCAG AA).
- Headings: Montserrat (sans, confident/geometric). Body: Roboto Slab (slab serif — deliberate "craft/local-trade" pairing, contrast axis against the sans heading). Display accent: Lora (serif, used for H1s and section H2s).
- WCAG AA contrast is non-negotiable: opacity-based white (`white/80`–`/85`) on teal backgrounds, not fixed gray shades.
- No em dashes in copy, no side-stripe borders, no gradient text, no glassmorphism, no identical card grids as default, no tiny uppercase eyebrow kickers repeated per section, no numbered 01/02/03 scaffolding unless a section is a genuine sequence, no animated counters that render "0" to crawlers.

## Accessibility
WCAG AA minimum. Skip-to-content link present. Visible focus states required on all interactive elements. This audience includes older trade-business owners on varied devices — legibility and obvious affordances matter more than cleverness.
