# South East Flyers: DESIGN.md

The visual system for southeastflyers.com.au, extracted from the October 2026 redesign
(`docs/redesign/design/*.dc.html`). Read with `PRODUCT.md`. Identity is preserved from the
existing site: same teal, beige, orange and the same three font families.

## Feel

Confident local operator, slightly premium. Generous whitespace, real photography of walkers
and letterboxes, one accent colour, quiet motion. Never SaaS, never a bargain courier.

## Colour tokens

| Token | Value | Use |
|---|---|---|
| `teal` | `#046B6B` | Brand primary. Links, numbers, quote band background, selected pills |
| `teal-deep` | `#053F3F` | Hero and "how it works" bands |
| `ink` | `#10302F` | Headings and primary text (never pure black) |
| `body` | `#3E5251` | Paragraph text on white and beige |
| `muted` | `#4B5E5D` | Captions, labels, meta (passes AA on white and beige) |
| `beige` | `#EDE4D3` | Section bands, callout panels, footer (existing `--color-cream`) |
| `orange` | `#E97B1F` | CTA background only |
| `orange-hover` | `#F2913F` | CTA hover |
| `orange-on-dark` | `#F2A462` | Step numbers and check icons on teal backgrounds |
| `required` | `#B4540A` | Required-field asterisk |
| `field-border` | `#A9B5B4` | Inputs, unselected pills |
| `line` | `rgba(16,48,47,0.12)` | Hairlines and dividers |

Rules:
- **CTA text is `ink` on `orange`**, not white. White on `#E97B1F` is 2.9:1 and fails WCAG AA.
- White text on teal surfaces uses opacity (`white/80` to `/85`) for secondary copy.
- One accent (orange) for actions, everywhere. No other accent colours.

Note: PRODUCT.md lists teal as `#069494`, but `globals.css` uses `#046B6B`. The redesign follows `globals.css`. Update PRODUCT.md to match.

## Typography

| Role | Font | Spec |
|---|---|---|
| Display (H1, section H2) | Lora 500 | H1 `clamp(40px, 4.6vw, 64px)`, line-height 1.05, letter-spacing -0.02em. Section H2 `clamp(28px, 3.4vw, 46px)`, -0.015em |
| UI headings (H3, labels, buttons, nav) | Montserrat 600/700 | H3 18–21px; nav 14px; buttons 14–16px |
| Body | Roboto Slab 400 | 16–17px, line-height 1.65–1.75, max ~65ch |
| Big figures | Lora 500 | 36–60px, `font-variant-numeric: tabular-nums` |

`text-wrap: balance` on h1–h3, `text-wrap: pretty` on paragraphs. Sentence case everywhere.
No small uppercase tracked labels above headings (the redesign removed the one in the hero).

## Shape and space

- Radius: **14px** cards, image frames, panels; **999px** buttons and pills; **10px** inputs.
- Container: content `max-width: 1144px`; header `1240px`; side padding `clamp(20px, 4vw, 48px)`.
- Section padding: `clamp(80px, 9vw, 128px)` vertical.
- Shadows: teal-tinted only, e.g. `0 24px 48px -28px rgba(4,60,60,0.45)`. Never paired with a border.
- Touch targets ≥ 44px. Buttons: primary 54px tall, header 44px.

## Components (see `docs/redesign/HANDOFF.md` for the full list)

Header (with mobile menu), split PageHero, overlapping FactsStrip, editorial Section (H2 left,
body right), beige Callout, dark StepsBand, QuoteBand, two-column FAQ, LogoWall, Footer.

## Motion

- Press: `transform: scale(0.97)`, 160ms `cubic-bezier(0.23, 1, 0.32, 1)`.
- Hover only under `@media (hover: hover) and (pointer: fine)`.
- Image hover zoom `scale(1.035)` over 500ms on gallery tiles.
- `prefers-reduced-motion: reduce` removes transforms and keeps colour changes.
- Planned, not yet built: hero load stagger, gentle scroll reveal on sections, GPS route line draw.

## Bans

Em dashes in copy, gradient text, glassmorphism, side-stripe borders, identical card grids,
animated counters that render "0" to crawlers, invented stats, any national/Sydney wording,
any GST mention.
