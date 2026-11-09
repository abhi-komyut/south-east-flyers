# SEF heading and body audit: required vs repetitive (9 Nov 2026)

Scanned all 49 `page.tsx` files on `main` (commit f57c7eb). Use this guide with `sef-voice-guide.md` and `sef-page-build-context.md`.

## 1. Required on every page (keep)

| Element | Suburb pages | Industry pages | Service / hub pages |
| --- | --- | --- | --- |
| H1 | Primary keyword + suburb (+ postcode) | Trade + "flyers" or "letterbox marketing" | Service keyword |
| Text under H1 | Keyword line, one proof point, call to action | Same | Same |
| FactsStrip | Home count tile + 2 to 3 proof tiles | 3 to 4 proof tiles | 3 to 4 proof tiles |
| H2: local or trade detail | 3 to 4 sections only this page can have | 3 to 4 sections only this trade can have | Topic sections |
| H2: who it suits / what to put on the flyer | Yes, with links to industry pages | Yes, with links to suburb pages | Optional |
| H2: quantities / coverage | Yes, with the suburb's home count | Yes, trade-specific quantities | Cost page only |
| How it works | Shared component (fine as sitewide boilerplate) | Same | Same |
| FAQs | 4 to 6, at least 2 suburb-specific | 4 to 6, at least 2 trade-specific | 4 to 6 |
| Closing CTA + quote form | Yes | Yes | Yes |

## 2. Repetitive (fix)

### Headings
| Pattern | Pages | Problem | Fix |
| --- | --- | --- | --- |
| "{Suburb} at a glance" | 16 suburb pages | Same skeleton on every suburb page | Replace with a heading about that suburb's main fact (e.g. "10,600 homes, a fair share in apartments") |
| "Who letterbox drops in {Suburb} suit" | 14 | Template H2 | Name the real trades: "Agents, renovators and tutors in Kew" |
| "Letterbox drop quantities in {Suburb}" | 16 | Template H2 | Keep one quantity H2 but word it per page: "Covering Brighton's 10,500 homes" |
| "Ready to reach {Suburb} letterboxes?" (CTA) | 15 | Rhetorical question heading, breaks style rule | Plain CTA, worded per page |
| "Mostly houses, so coverage runs high" | Bentleigh, Camberwell (+ near copy on Brighton) | Exact duplicate | Rewrite on each page |
| "Quantities" | 12 industry pages | Bare, identical, no keyword | Trade-specific: "How many flyers a plumber needs" |
| "How it works" | 38 pages | Shared component | Keep; acceptable boilerplate |
| "Related services" | 2 service pages | Generic, adds nothing | Remove or fold into body links |

### FAQs
| Question | Pages | Fix |
| --- | --- | --- |
| "How many letterboxes are there in {Suburb}?" | 16 | Keep on max 3 pages as worded; rephrase elsewhere, or merge into the quantities section |
| "How much of {Suburb} can a letterbox drop cover?" | 10 (+6 near-copies) | Drop it where it repeats the first FAQ; replace with a suburb-only question |
| "Can one campaign cover {A} and {B}?" | 6 | Keep, but answers must differ |

### Body sentences (visible copy)
| Sentence | Pages | Fix |
| --- | --- | --- |
| "We'll quote with a quick turnaround." | 20 | Keep in CTA only; cut from body |
| "delivered exclusively, never bundled" | 17 | Say it once per page, vary wording |
| "Your flyer goes into each letterbox on its own, and every route is GPS-tracked." | 15 | Vary per page |
| "Tell us your streets and quantity, and we'll send a quote with the letterbox count, with a quick turnaround." | 9 | Rewrite; awkward double "with" |
| "Every drop is exclusive, from 1,000 flyers." | 9 | Vary per page |
| "Exclusive, GPS-tracked, never bundled, from 1,000 flyers." | 8 (+5 variant) | Rule-of-three list; rewrite |

## 3. Overlap and thin pages (decide)
- `/services/flyer-distribution`, `/services/letterbox-distribution`, `/services/targeted-flyer-distribution`, `/services/gps-tracked-flyer-distribution`: older pages with generic H1s ("Professional flyer distribution") and question H2s ("What is…?"). They compete with the homepage and Melbourne page for "flyer distribution". Rewrite each around one distinct intent, or 301 them into the Melbourne page.
- `/industries/healthcare` overlaps `/dentists`, `/medical-clinics` and `/vets`. Make it a short hub linking to those three, or merge.
- Homepage H2s end in full stops and read as slogans ("Proof it still works."). Fine for brand, but one H2 should carry "flyer distribution Melbourne".

## 4. Suggested order
1. Suburb pages: replace the 3 template H2s and the 2 template FAQs (16 pages).
2. Industry pages: rename "Quantities" (12 pages).
3. Repeated body sentences sitewide.
4. Decide on the 4 old service pages and the healthcare hub.
