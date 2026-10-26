# Redesign handoff for Claude Code

Implement the October 2026 redesign of southeastflyers.com.au in this Next.js repo.

## Read first

1. `AGENTS.md` (this Next.js version has breaking changes; check `node_modules/next/dist/docs/`).
2. `PRODUCT.md` (audience, business rules, anti-references).
3. `DESIGN.md` at the repo root (tokens, type, spacing, motion, bans).
4. The design files in `docs/redesign/design/`. Each `*.dc.html` is one page or shared section,
   written as HTML with inline styles. Treat them as the visual spec: layout, spacing, sizes and
   colours are exact. Ignore the `<x-dc>`, `<helmet>`, `<sc-for>`, `<sc-if>`, `<dc-import>` and
   `DCLogic` wrappers; they belong to the design tool, not the site.

## Ground rules

- **Do not change URLs, metadata, canonical tags, JSON-LD, H1 wording or body copy** beyond the
  copy changes listed below. These pages rank; the copy in the design files was taken from the
  current pages.
- Keep the Formspree forms (`QuickQuoteForm`, contact page `useForm("xzdqreda")`), their field
  names and the `trackEvent` / `data-quote-cta` analytics hooks.
- Keep `FAQSection`'s FAQPage schema. Only its visual layout changes (two-column, always open,
  not an accordion).
- Tailwind v4 is already set up (`globals.css` `@theme`). Add the DESIGN.md tokens there and use
  them instead of the hex values inlined in the design files.
- Fonts stay `next/font` (Montserrat, Roboto Slab, Lora); weights already loaded are enough.
- Server Components by default; client components only for the mobile menu, pricing calculator,
  client filter and forms.

## Design file to route map

| Design file | Implements | Notes |
|---|---|---|
| `Main.dc.html` | `app/page.tsx` | Homepage |
| `Header.dc.html` | `app/components/Header.tsx` | Adds a mobile menu below 980px |
| `Footer.dc.html` | `app/components/Footer.tsx` | Beige footer |
| `QuoteBand.dc.html` | `app/components/QuickQuoteForm.tsx` | Teal band, white form card; heading and lead are props per page |
| `Service.dc.html` | `app/services/*/page.tsx` (4 pages) | Template for all service pages |
| `Suburb.dc.html` | `app/melbourne/flyer-distribution-*/page.tsx` (8 suburb pages) | Template; Brighton is the example |
| `Industry.dc.html` | `app/industries/*/page.tsx` (7 pages) | Template; real estate is the example |
| `Pricing.dc.html` | `app/letterbox-drop-cost/page.tsx` | Adds an interactive quantity calculator |
| `Contact.dc.html` | `app/contact/page.tsx` | Form card overlapping the hero |
| `Clients.dc.html` | `app/portfolio/PortfolioContent.tsx` | Filterable logo grid |

Not designed separately: the Melbourne hub (`melbourne/flyer-distribution-melbourne`), the
industries hub, the blog and 404. Build them from the same components.

## Components to build (in `app/components/`)

Most suburb, industry and pricing pages already go through `components/landing.tsx`. Restyle
those exports and every page picks the redesign up at once.

| Component | Where it appears | Spec |
|---|---|---|
| `PageHero` | all inner pages | Deep teal split: breadcrumbs, Lora H1, lead, CTA + call button on the left; full-height photo on the right (stacks on mobile). Pricing swaps the photo for the calculator card; Contact and Clients use a text-only hero |
| `FactsStrip` | Home, Suburb, Industry | White panel, 14px radius, overlaps the hero by -72 to -80px, four figures in Lora with a label each. Replaces `ProofStrip` |
| `Section` | long-form pages | H2 on the left (flex 1 / 300px), body on the right (flex 1.7 / 480px), hairline top border between sections |
| `Callout` | cost sections, "what you need to provide" | Beige panel, 14px radius, big Lora figures plus text |
| `StepsBand` | `HowItWorks` and service steps | Deep teal band, four steps with a top hairline, orange-on-dark numbers |
| `QuoteBand` | before every FAQ | Restyle `QuickQuoteForm` to `QuoteBand.dc.html`; accept `heading` and `lead` props (each page's old `CtaBanner` title and body) |
| `FAQSection` | all pages | Two columns: title left, `<dl>` right, all answers visible |
| `LogoWall` | Home, Industry | Single-colour logos (see assets), no labels under them |
| `PricingCalculator` | Pricing | Client component; pills for 1,000 / 2,500 / 5,000 / 10,000 / 20,000 with `aria-pressed`; total = qty / 1000 × `PRICE_PER_THOUSAND` |
| `ClientFilter` | Our clients | Client component; All / Real estate / Healthcare / Trades |

Remove `CtaBanner` usage after the quote band (it duplicated the CTA), and remove `CountUp`
(PRODUCT.md bans animated counters).

## Copy changes already agreed

- Every primary button reads **"Get a free quote"** (was page-specific, e.g. "Get a Free Brighton Quote").
- Homepage hero label is plain orange sentence case, not small caps.
- Removed the "44% of shoppers read letterbox flyers" stat and the homepage "200+ happy clients" and "50K+" figures.
- Clients page: removed "We set the standard for professional letterbox distribution in Australia" (implies national coverage).
- Testimonials on the homepage are lightly trimmed.
- Service page H1 is sentence case: "Professional flyer distribution". Other H1s keep their words in sentence case.

## Assets (`docs/redesign/assets/`)

Copy into `public/images/redesign/` and use `next/image`. Photos are already cropped (AI sparkle
watermark removed) and resized.

| File | Used for |
|---|---|
| `walker-foot.jpg` | Homepage hero (walker posting a flyer) |
| `walker-street.jpg` | Homepage team gallery, Suburb mid-page image |
| `walker-ebike.jpg` | Homepage team gallery, Service "what you get", Clients commitment |
| `letterbox-hand.jpg` | Service hero, Homepage gallery, Industry Just Sold section |
| `delivery-real.jpg` | Homepage gallery (real photo), Contact page |
| `gps-strava.jpg` | Homepage GPS proof section |
| `suburb-map.jpg` | Suburb hero |
| `ind-realestate.jpg`, `ind-trades.jpg`, `ind-health.jpg` | Industry cards and Industry hero |
| `logo-*.png` | Logo wall: single-colour ink versions with transparent backgrounds |
| `sef-logo.png` | Header and footer logo (trimmed) |

The design files reference images as `/_blob/<id>`. Mapping:

| Blob id | File |
|---|---|
| `435e8a047f99d21dc25823e5d7929d79` | walker-foot.jpg |
| `e26cacc056c2bb14ba90e4ccb6ccacdd` | walker-street.jpg |
| `7efa8c46755bef6cf95a67d088ee8ee4` | walker-ebike.jpg |
| `b1c01a59118f52fd914e23210d1eefd0` | letterbox-hand.jpg |
| `8ea1d6be7005db433ae682cfe80ada60` | delivery-real.jpg |
| `d26d859d6bf798b6acddb8c3ef83c86d` | gps-strava.jpg |
| `2c517c038552062b0a38c2decd615911` | suburb-map.jpg |
| `2db14ccc8748ad3b2b27a73ab6baa906` | ind-realestate.jpg |
| `56d1b3d0a0479a12abfffd9efe380b38` | ind-trades.jpg |
| `4e7ec0fd656c9ae7cabf9f995a679fc2` | ind-health.jpg |
| `9667249954ab9b0e1fc4945821bff009` | sef-logo.png |
| `d8183737c83834b725a610e504300370` | logo-marshallwhite.png |
| `de1308dbf365e7a564cebf27c00bb4d4` | logo-mcgrath.png |
| `951b423aa0af1475a4bafc833d44c20f` | logo-belle.png |
| `5c231dda4ea3309f3dc813b1e843bf3e` | logo-barryplant.png |
| `c384bb5cbcf3e3c7b4a318ad01b9228f` | logo-buxton.png |
| `e2883d790f6a04b0f229902fd132af5b` | logo-highdental.png |
| `c3b6f59f0f243c58332fa3542e9db2b5` | logo-stormshield.png |

Missing: clean Ray White and Harcourts logos (the Ray White file in `public/logos` is a photo).

## Known gaps to finish during the build

1. Scroll motion: hero load stagger (60ms steps), gentle reveal on section entry, GPS route line
   draw. Must render visible content by default and respect reduced motion. The existing
   `Reveal.tsx` can be reused if it meets that.
2. Mobile check at 375, 768 and 1440 widths; no horizontal scroll. The design used fluid flex
   layouts; confirm the hero splits and overlapping strips behave.
3. Run `/impeccable audit` against the running site. The design-file audit flagged 24
   "cramped padding" warnings that are likely false positives from `clamp()` padding; confirm in
   a real browser.
4. Lighthouse: hero image `priority`, everything else lazy.
5. Update `PRODUCT.md` teal to `#046B6B`.

## Suggested order

Tokens in `globals.css`, then Header and Footer, then `landing.tsx` components, then the
homepage, then each template page, then Pricing, Contact and Clients, then motion, then audit.
Commit per step.
