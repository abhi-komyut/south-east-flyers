# South East Flyers: SEO Page Build Context

Read this file before creating or editing any SEO page on southeastflyers.com.au. It holds the business facts, the page plan, the keyword data, and the rules every page must pass.

Companion files (put them in the repo next to this one, for example under `/docs/seo/`):
- `sef-page-plan.csv`: all 80 pages (incl. homepage, Melbourne page and the local-advertising guide) with URL, title, H1, primary and secondary keywords, and priority
- `sef-keyword-data.csv`: Google Keyword Planner volumes (Melbourne VIC, Oct 2025 to Sep 2026, pulled 25 Oct 2026)
- `sef-image-list.csv`: 30 industry-page images with file names, briefs, alt text and sizes. Use the exact file names and alt text. Flyer samples use fictional business names only, never real brands or client logos. Hero photos must be real SEF walkers.
- Brighton page draft (the approved template): https://claude.ai/artifact/Nsu8rjoihwqDuXfGTXAhq1

---

## 1. Goal

Get **10 organic calls a day** from the website alone. Every page exists to make a local business owner call 0402 824 070 or submit the quote form. Rankings without calls do not count.

## 2. Business facts (only use these; never invent others)

| Fact | Value |
| --- | --- |
| Business name | South East Flyers & Marketing Solutions (SEF) |
| Service | Flyer distribution and letterbox drops |
| Phone | 0402 824 070 |
| Email | abhiram@southeastflyers.com.au |
| Service area | Melbourne only, focused on the 56 key suburbs in section 4 |
| Price | **$200 per 1,000 flyers**, exclusive delivery (GST treatment to be confirmed by Abhi) |
| Minimum order | 1,000 flyers (so the smallest job is $200) |
| Delivery method | Walkers on foot and e-bike riders |
| Proof of delivery | Every route GPS-tracked in Strava; client gets the map and drop summary |
| No Junk Mail | Always respected |
| Bundling | None. Exclusive delivery: the flyer goes in by itself, never bundled |
| Turnaround | 48-hour start available; quote within 24 hours |
| Client logos on site | Ray White, McGrath, Marshall White, Belle Property, Barry Plant, Buxton, Harcourts, High Dental, Storm Shield Roofing |

**Confirmed:** SEF distributes but does not print (stated on the live site). Do not build the flyer printing page; say "we distribute, we don't print".

**Unknown, ask Abhi before writing:** whether the $200 includes GST, real campaign results, client permission to name them.

**Pricing maths for pages:** cost = dwellings ÷ 1,000 × $200. Round dwellings to the nearest 100 and say "about". Example: Brighton has about 10,500 dwellings, so full coverage is about $2,100.

**No delivery zones or street boundaries.** Don't split suburbs into named zones. Say the client can cover the whole suburb or pick the streets nearest their business.

## 2a. Sitewide stats block (homepage stats section + reusable on every page)

Approved copy (Abhi's draft, edited to pass the fact and style rules):

> **Your flyer, on its own, in the letterbox.**
> A flyer campaign is only as good as its delivery. In shared distribution, your flyer arrives inside a bundle of other advertising. Ours never does. Every South East Flyers drop is exclusive: your flyer, by itself, in every letterbox on the route.
> Every run across Melbourne's south-east is GPS-tracked, so you see the exact streets covered before you pay for the next one. And people do read them: 44% of Australian shoppers read unaddressed catalogues and flyers to find sales and specials.¹
>
> ¹ ACRS Omnibus Survey, reported by [B&T, March 2016](https://www.bandt.com.au/marketing/nine-out-of-10-aussies-still-shop-from-catalogues-study)

Stat strip (render server-side, not as animated zeros):

| Stat | Label |
| --- | --- |
| Exclusive | No bundling, ever |
| 100% | Of runs GPS-tracked |
| 1,000 | Minimum flyers |
| 44% | Of shoppers read letterbox flyers for specials¹ |

On suburb and industry pages, reuse the strip and at most one sentence of the copy. Don't paste the whole block on every page; that repeats text across dozens of pages (7.1).

**Removed from Abhi's original draft, and why. Do not add these back without a source:**
- "71% of people read letterbox drops": no study behind it (Abhi confirmed). Never use it.
- "1% to 3% response rate": an industry rule of thumb with no published Australian source.
- "bundle your brand with up to 10 competitors": unverified number.
- "or worse, end up dumped": implies other distributors dump flyers, which can't be proven.
- "100% category exclusivity": removed by Abhi. Never claim category exclusivity. The only wording allowed is "exclusive and not bundled" (or "exclusive delivery, never bundled").
- The rhetorical-question opener and the em dash break the style rules in 7.5.

## 3. Scope decisions already made

- **Remove Sydney everywhere.** Strip "Sydney" from the homepage title, meta description, meta keywords, hero, stats copy, testimonials intro, FAQ and footer ("Sydney Metropolitan"). 301-redirect any `/sydney*` URLs to `/melbourne/flyer-distribution-melbourne`.
- **Fix the stat counters.** The homepage counters render as "0" in the server HTML (0K+, 0+, 0%), and that is what Google sees. Render the real numbers server-side; animate on the client only.
- **The main money keyword** is "flyer distribution melbourne" (100 to 1K searches a month). The homepage and `/melbourne/flyer-distribution-melbourne` own it. No other page targets it as primary.
- **Lead with "flyer distribution"** in titles; "letterbox drop" is the secondary phrase.

## 4. Page plan summary (full detail in `sef-page-plan.csv`)

| Cluster | Pages | URL pattern |
| --- | --- | --- |
| Suburb | 56 | `/melbourne/flyer-distribution-{suburb}` |
| Industry | 16 (incl. 2 hubs) | `/industries/{industry}` |
| Service | 5 | `/services/...`, `/letterbox-drop-cost`, south-east hub |

**Build order:** P1 first (12 suburbs, 11 industries, 3 services), then measure in Search Console for 4 to 6 weeks before P2 and P3.

**P1 suburbs:** Brighton, Kew, Glen Waverley, Box Hill, St Kilda, Hawthorn, Camberwell, Caulfield, Bentleigh, Malvern, Mount Waverley, Sandringham.

**P1 industries (Abhi's priority list):** Local Businesses hub, Home Services hub, Real estate (existing page, optimise it), plumbers, electricians, roofers, builders, renovation, cleaning (house and bathroom on one page), dog groomers and dog wash (one page), restaurants and cafes.

**P2/P3 industries:** carpenters, dentists, vets (P2); GPs and medical clinics, schools and childcare (P3).

**Merges (do not split):** house cleaning and bathroom cleaning share one page; dog grooming and dog wash share one page. Separate pages would be near-duplicates with almost no search volume each.

**P1 services:** letterbox drop cost page, South East and Eastern Melbourne hub. (Flyer printing page dropped: SEF doesn't print.)

**Small suburbs:** Gardenvale, Ripponlea, St Kilda West, Middle Park, Box Hill South, Blackburn North and similar P3 pockets can be a section on the nearest bigger page instead of a standalone page. Ask Abhi before creating a page under 2,000 dwellings.

## 5. Keyword data you must respect

- Only **Brighton, Kew and Bayside** have measurable suburb-level search (10 to 100 a month). Every other suburb shows no data (under 10 a month). Suburb pages win on long-tail, map pack and conversion, not volume.
- Industry terms with volume (10 to 100 a month): local business flyers, small business flyers, local marketing melbourne, plumber flyers, plumbing flyers, electrician flyers, roofing flyers, construction flyers, builder marketing, renovation flyers, carpentry flyers, house cleaning flyers, cleaning flyers, real estate marketing melbourne, restaurant flyers, cafe flyers, dog grooming marketing, handyman flyers, painter flyers, dental flyers, vet marketing, childcare marketing.
- No measurable volume: bathroom cleaning flyers, dog wash marketing, kitchen or bathroom renovation flyers, tradie flyers. Use them as secondary keywords only.
- Pricing intent: letterbox drop cost, flyer distribution cost, leaflet drop cost, leaflet distribution price (10 to 100 each, high buying intent).
- Never claim a search volume that is not in `sef-keyword-data.csv`.

## 5a. Hyperlocal and "near me" keywords

Melbourne volumes (Keyword Planner, Oct 2025 to Sep 2026), each 10 to 100 a month:

| Cluster | Keywords | Owner page | How to win |
| --- | --- | --- | --- |
| Near me | flyer distribution near me, flyer distributors near me, flyer delivery near me, letterbox distribution near me, leaflet distribution near me, leaflet drop near me, pamphlet distribution near me, pamphlet delivery near me | Google Business Profile + homepage | The profile ranks on distance, relevance and reviews; the homepage supports it with the root terms ("flyer distributors", "pamphlet delivery") and strong local signals |
| Near me, commercial | flyer distribution service near me, flyer delivery service near me, flyer distribution companies near me | `/melbourne/flyer-distribution-melbourne` | Use the root phrases ("flyer distribution service", "flyer distribution company") in H2s and copy |
| Local | local flyer distribution, local letterbox drop, local leaflet distribution, local flyer delivery | Homepage + Local Businesses hub | "Local" is normal English: use it naturally in copy and one H2 |
| Local advertising (how-to) | how to advertise local business, how to advertise my business locally, advertising for local business, local business advertising ideas, local advertising melbourne, local marketing near me | New guide `/guides/how-to-advertise-local-business-melbourne` | An honest comparison of letterbox drops with Google Business Profile, local Facebook groups, signage and Google Ads; links to the hub and cost page |
| Hyperlocal (suburb, postcode) | "flyer distribution 3186", "letterbox drop {suburb}" | Suburb pages | No measurable volume, but suburb + postcode in the title and H1 catches long-tail and map searches |

**"Near me" rules:**
- Never in a title, H1, URL, meta description, image alt or schema.
- At most **one** natural use in body copy, only on the homepage and the Melbourne page, as an FAQ question a customer would really ask (for example, "Is there a flyer distribution service near me in the south-east?"), answered with the suburbs served.
- Local signals that actually drive near-me ranking, on every page: business name + phone in the footer exactly matching the Google Business Profile, the `LocalBusiness` schema in 7.7a, suburb names in body copy where natural, an embedded map of the service area on the homepage and hub, and links to the Google Business Profile.
- Off-site (Abhi): verify the Google Business Profile, set it up as a service-area business listing the key suburbs, choose the closest primary category, post weekly, add photos of walkers in named suburbs, and ask every client for a Google review.

## 6. Competitor (letterboxdistributors.com.au): what to beat

- Their depot is in Campbellfield (north). Their suburb pages are mostly north and west Melbourne. They cover only **Glen Waverley and Mount Waverley** from SEF's 56 suburbs.
- Minimum **10,000 homes**, **shared (bundled) distribution**, no GPS proof. SEF's 1,000 minimum, solo delivery and GPS proof go in every page's first screen.
- They list homes and postcodes per suburb. SEF pages must do the same, from ABS data.
- Their cost page has FAQs but no prices. SEF's cost page publishes its price: $200 per 1,000, exclusive. Their shared rate is lower ($75 to $98 per 1,000) but bundled with other flyers and needs a 10,000-home minimum. Frame SEF's price as the cost of exclusive delivery and small minimums. Never quote their prices on SEF pages.
- They have no pages for pet groomers, vets, dentists, medical clinics or roofers.
- Never copy, paraphrase or mention their text or brand on SEF pages.

---

## 7. Content rules

### 7.1 Uniqueness: no scaled content abuse

Google demotes or removes sets of near-identical location pages. Every suburb page must carry at least **five page-specific facts** that would be wrong on any other suburb page:

1. ABS 2021 dwelling count and postcode (source: ABS QuickStats, linked)
2. Dwelling mix: houses vs townhouses vs apartments, and what that means for coverage
3. Full-suburb coverage cost at $200 per 1,000 (from the ABS dwelling count)
4. Who buys there, tied to an ABS figure (owner-occupancy, families with children, income)
5. One real SEF campaign in or near that suburb (ask Abhi; never invent one)
6. Suburb-specific FAQs (at least two of the six)
7. Links to that suburb's actual neighbours

**Test:** Swap the suburb name for another. If more than about 30% of the body still reads as true, rewrite it. Never generate pages by find-and-replace on a template.

Industry pages follow the same idea: real reasons that trade uses letterbox drops, its seasonal timing, what its flyer must say, and how it is measured.

### 7.2 Keyword usage: no stuffing

| Placement | Rule |
| --- | --- |
| Title tag | Primary keyword once, near the start. 50 to 60 characters. Format: `{Primary} {Suburb} VIC {postcode} \| Letterbox Drops \| SEF` |
| Meta description | 140 to 155 characters. Includes the primary keyword once, one proof point and one call to action |
| H1 | One per page. Contains the primary keyword or its closest natural form |
| First 100 words | Primary keyword once |
| H2s | Primary keyword in one H2 only; other H2s describe the section in plain words |
| Body | Primary exact match **2 to 4 times on a 900 to 1,300 word page** (about 1% max). Each secondary keyword once |
| Image alt | Describes the image; the keyword may appear once across all alts |
| URL | Lowercase, hyphenated, no stop words, no dates |

Never: repeat the suburb name in every sentence, list suburbs or keywords as a block of text, hide text, or use bold on keywords. "Near me" follows section 5a only.

### 7.3 FAQs

- 4 to 6 FAQs per page, written from questions real buyers ask (cost, minimum, targeting, proof, No Junk Mail, timing).
- At least two FAQs must be specific to that page (letterbox count, full-coverage cost, an industry's timing).
- Answer in the first sentence, in 40 to 60 words total. No "Great question" openers.
- FAQ text visible on the page must match the FAQPage JSON-LD word for word.
- Never repeat the same FAQ answer word for word on more than 3 pages. Vary the answer with page-specific facts.
- No FAQs that only restate the page's headings.

### 7.4 Internal linking

Each new page gets **5 to 8 contextual links**, placed in body sentences, not footer blocks:

| From | Links to |
| --- | --- |
| Suburb page | South-east hub (1), 2 to 3 real neighbouring suburbs, 1 to 2 relevant industry pages, quote page |
| Industry page | Its hub (Local Businesses or Home Services), 3 to 5 P1 suburb pages, cost page, quote page |
| Local Businesses hub | Every industry page, Home Services hub, cost page |
| Home Services hub | Plumbers, electricians, roofers, builders, renovation, carpenters, cleaning |
| Hub page | Every suburb page, grouped by council (Bayside, Glen Eira, Port Phillip, Stonnington, Boroondara, Monash, Kingston, Whitehorse) |
| Cost page | Melbourne page, hub, top industries |
| Homepage and Melbourne page | South-east hub, Local Businesses hub, Home Services hub, cost page |

Rules:
- **Anchor text:** descriptive and varied. Exact-match keyword anchors on at most 1 in 3 links to the same page. Never "click here".
- Every new page must be linked from at least 2 existing pages within one click of the homepage. No orphan pages.
- No links to pages that don't exist yet. Add the link when the target page publishes.
- Breadcrumbs on every page: Home > Melbourne > {Suburb} or Home > Industries > {Industry}, with BreadcrumbList schema.

### 7.5 Writing style: anti-AI patterns

Write like a local operator who has walked these streets, not like a marketing brochure.

**Do:**
- Start each section with the point, then the proof
- Use concrete details: numbers with units, street names, days, counts
- Keep sentences under 25 words; mix short and medium lengths; paragraphs up to 3 sentences
- Use Australian English (organise, colour, neighbour, enquiry)
- Use "we" for SEF and "you" for the reader

**Never use these words or patterns:**
- Vocabulary: delve, unlock, elevate, seamless, robust, leverage, empower, tailored, cutting-edge, game-changer, landscape, realm, bustling, vibrant, nestled, tapestry, testament, navigate (figurative), boost your business, take it to the next level, look no further, in today's fast-paced world
- Openers: "When it comes to…", "In the world of…", "Are you looking for…", "Whether you're X or Y…"
- Closers: "In conclusion", "Ultimately", "At the end of the day"
- Rule-of-three adjective lists ("fast, reliable and affordable")
- Em dashes as a stylistic tic; use full stops or commas
- Sentences of the form "It's not just X, it's Y"
- Rhetorical questions in headings
- Exclamation marks
- Generic praise of the suburb ("Brighton is a beautiful bayside suburb")

### 7.6 Facts and claims (truth guard)

- Every statistic needs a source: ABS QuickStats link, SEF's own data (say so), or Keyword Planner. No unsourced numbers.
- Never invent clients, testimonials, reviews, campaign results, response rates or prices. Use a `[TODO: …]` placeholder and list it for Abhi.
- Don't say a logo client used SEF in a specific suburb unless Abhi confirms it.
- Don't claim "best", "No.1", "cheapest" or a guarantee.
- The homepage testimonials (Sarah M., James T., Priya K.): confirm with Abhi that they are real before reusing any of them on new pages.

### 7.7 Schema (JSON-LD in each page's head)

- **Suburb pages:** `LocalBusiness` (name, phone, url, areaServed with suburb and postcode), `Service` (serviceType "Flyer distribution"), `FAQPage`, `BreadcrumbList`
- **Industry pages:** `Service` (with audience), `FAQPage`, `BreadcrumbList`
- **Cost page:** `FAQPage` and `Offer` (price 200, priceCurrency AUD, unit "per 1,000 flyers"; add the GST note once confirmed)
- Validate each page in Google's Rich Results Test before merging. No review or AggregateRating schema unless real, verifiable reviews exist.

### 7.7a Sitewide LocalBusiness schema (supports "flyer distribution near me")

Put one `LocalBusiness` JSON-LD block in the root layout so it renders on every page. Page-level schema (7.7) references it by `@id` instead of repeating it.

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.southeastflyers.com.au/#business",
  "name": "South East Flyers & Marketing Solutions",
  "url": "https://www.southeastflyers.com.au",
  "telephone": "+61402824070",
  "email": "abhiram@southeastflyers.com.au",
  "logo": "https://www.southeastflyers.com.au/logo.png",
  "image": "https://www.southeastflyers.com.au/og-logo.jpg",
  "description": "Exclusive, GPS-tracked flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Never bundled. From 1,000 flyers.",
  "priceRange": "$200 per 1,000 flyers",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": [
    {"@type": "City", "name": "Brighton, VIC 3186"}
    /* …one entry per suburb in sef-page-plan.csv (56), "Suburb, VIC postcode" */
  ],
  "sameAs": [
    "https://www.facebook.com/southeastflyers",
    "https://www.instagram.com/southeastflyers",
    "https://www.linkedin.com/company/southeastflyers",
    "[TODO: Google Business Profile URL]"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Letterbox distribution",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flyer distribution"}, "price": "200", "priceCurrency": "AUD", "description": "Per 1,000 flyers, exclusive delivery, never bundled"}
    ]
  }
}
```

Rules:
- **Name, phone and address must match the Google Business Profile exactly**, character for character. Ask Abhi for the profile's exact name and address before shipping.
- SEF is a service-area business. Leave out `streetAddress`, `postalCode` and `geo` unless Abhi confirms a public street address that matches the profile.
- Build `areaServed` from the suburb list in `sef-page-plan.csv`, not by hand.
- On suburb pages, add a `Service` block with `"provider": {"@id": "https://www.southeastflyers.com.au/#business"}` and `areaServed` for that one suburb only.
- No `aggregateRating` or `review` until real, verifiable Google reviews exist on the profile.
- Never put "near me" in titles or schema; body copy follows the "near me" rules in 5a.
- Validate in the Rich Results Test and the Schema.org validator before merging.

### 7.8 Page structure template (suburb)

1. H1 + one-line proof (solo delivery, GPS, No Junk Mail) + Quote button + click-to-call
2. Intro: dwellings, one local fact, the primary keyword once (80 to 120 words)
3. H2: Why {Suburb} businesses choose SEF (4 to 5 proof bullets)
4. H2: Letterbox drops across {Suburb} {postcode} (dwelling mix from ABS; whole suburb or chosen streets)
5. H2: Who we deliver for in {Suburb} (industries, with links)
6. H2: How it works (5 numbered steps)
7. H2: Cost ($200 per 1,000, minimum job and full-suburb cost; link to the cost page)
8. FAQs (4 to 6)
9. Closing call to action + quote form

Target length: 900 to 1,300 words. The quote form and phone number must be visible without scrolling on mobile.

### 7.9 Technical (Next.js)

- Use `generateMetadata` for the title, description, canonical and Open Graph tags on each page. Canonical is the page's own URL.
- Render all content server-side, with no client-only content.
- Add each new page to `sitemap.xml` and keep `robots` set to index, follow.
- Use one H1, and headings in order (H2 then H3, never skipping levels).
- Images: Next `<Image>`, WebP or AVIF, descriptive file names (`flyer-delivery-brighton.webp`), width and height set, lazy-loaded below the fold.
- Mark the phone number up as a `tel:` link and track clicks as a conversion event (needed to measure the 10-calls goal).

---

## 8. Workflow for each page

1. Read the page's row in `sef-page-plan.csv`.
2. Collect page-specific facts: ABS QuickStats for the suburb, plus SEF data from Abhi.
3. Draft using the template in 7.8 and the Brighton page as the model.
4. Run the QA checklist below. Fix everything before showing the page to Abhi.
5. List every `[TODO]` for Abhi in the PR description.
6. Add internal links to and from existing pages (7.4).
7. Add the page to the sitemap and validate the schema.

## 9. QA checklist (all must pass)

- [ ] Primary keyword in the title, H1, first 100 words and one H2; 2 to 4 exact uses in the body
- [ ] Title 50 to 60 characters; meta description 140 to 155 characters
- [ ] At least 5 page-specific facts; the swap test passes
- [ ] Every number sourced; no invented clients, results or prices
- [ ] 4 to 6 FAQs, 2 or more page-specific, matching the JSON-LD exactly
- [ ] 5 to 8 internal links, varied anchors, no dead links, at least 2 inbound links added
- [ ] None of the banned words or patterns in 7.5; Australian spelling
- [ ] No mention of Sydney
- [ ] Schema validates in the Rich Results Test
- [ ] Quote form and phone link visible above the fold on mobile
- [ ] 900 to 1,300 words


## 10. Build status

- Batch 1 (PR `seo/batch-1-pages`): Brighton, letterbox drop cost, Local Businesses hub, Home Services hub (replaces Trades & Services, 308 redirect), Plumbers. Shared components in `app/components/landing.tsx`. New suburb pages must be added to `suburbPages` in the Melbourne page.
