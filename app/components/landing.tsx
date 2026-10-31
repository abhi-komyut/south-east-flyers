import Link from "next/link";
import Image from "next/image";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Reveal from "./Reveal";

/**
 * Shared building blocks for SEO landing pages (suburb, industry, hub and
 * pricing pages). Each page supplies its own copy; these components only
 * keep layout, CTAs and the proof strip consistent.
 *
 * Content rules for every page live in docs/seo/sef-page-build-context.md.
 */

export const SITE_URL = "https://www.southeastflyers.com.au";
export const PHONE_DISPLAY = "0402 824 070";
export const PHONE_TEL = "tel:+61402824070";

const linkClass = "text-navy underline underline-offset-2 hover:text-teal-deep";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

/**
 * Split hero: breadcrumbs, Lora H1, lead, CTA + call button on the left;
 * a full-height photo on the right (stacks on mobile). Pass `rightSlot`
 * instead of `image` to swap the photo for custom content (the pricing
 * calculator card, or nothing for a text-only hero on Contact/Clients).
 */
export function PageHero({
  crumbs,
  h1,
  lead,
  tagline,
  ctaLabel = "Get a free quote",
  image,
  rightSlot,
}: {
  crumbs?: Crumb[];
  h1: string;
  lead: React.ReactNode;
  tagline?: string;
  ctaLabel?: string;
  image?: { src: string; alt: string };
  rightSlot?: React.ReactNode;
}) {
  const hasRight = Boolean(image || rightSlot);

  if (rightSlot && !image) {
    return (
      <section className="bg-teal-deep text-white px-[clamp(20px,4vw,48px)] py-10 sm:py-[clamp(40px,5vw,64px)]">
        <div className="max-w-[1144px] mx-auto flex flex-col gap-10">
          {crumbs && <Breadcrumbs items={crumbs} />}
          <div className="flex flex-wrap gap-12 gap-x-20 items-center">
            <div className="hero-stagger flex-[1.1_1_440px] flex flex-col gap-6">
              <h1 className="m-0 font-display font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.06] tracking-[-0.02em]">
                {h1}
              </h1>
              <p className="m-0 text-[clamp(17px,1.4vw,19px)] leading-relaxed text-white/85 max-w-[520px]">{lead}</p>
              {tagline && <p className="m-0 font-heading font-semibold text-base text-cta-on-dark">{tagline}</p>}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  data-quote-cta
                  className="press inline-flex items-center min-h-[54px] px-[30px] rounded-full bg-cta text-ink no-underline font-heading font-bold text-base hover:bg-cta-hover transition-colors"
                >
                  {ctaLabel}
                </Link>
                <a
                  href={PHONE_TEL}
                  className="press inline-flex items-center min-h-[54px] px-[26px] rounded-full border border-white/55 text-white no-underline font-heading font-semibold text-base [font-variant-numeric:tabular-nums] hover:bg-white/10 transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex-[1_1_400px]">{rightSlot}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-wrap bg-teal-deep text-white">
      <div
        className={`flex justify-end px-[clamp(20px,4vw,64px)] sm:px-[clamp(20px,4vw,64px)] py-10 sm:py-[clamp(72px,9vw,120px)] ${
          hasRight ? "flex-[1_1_560px] pb-[clamp(72px,9vw,160px)]" : "flex-1 pb-10 sm:pb-[clamp(72px,9vw,120px)]"
        }`}
      >
        <div className={`hero-stagger w-full flex flex-col gap-6 ${hasRight ? "max-w-[600px]" : "max-w-3xl"}`}>
          {crumbs && <Breadcrumbs items={crumbs} />}
          <h1 className="m-0 font-display font-medium text-[clamp(40px,4.6vw,64px)] leading-[1.06] tracking-[-0.02em]">
            {h1}
          </h1>
          <p className="m-0 text-[clamp(17px,1.4vw,19px)] leading-relaxed text-white/85 max-w-[540px]">{lead}</p>
          {tagline && <p className="m-0 font-heading font-semibold text-base text-cta-on-dark">{tagline}</p>}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              data-quote-cta
              className="press inline-flex items-center min-h-[54px] px-[30px] rounded-full bg-cta text-ink no-underline font-heading font-bold text-base hover:bg-cta-hover transition-colors"
            >
              {ctaLabel}
            </Link>
            <a
              href={PHONE_TEL}
              className="press inline-flex items-center min-h-[54px] px-[26px] rounded-full border border-white/55 text-white no-underline font-heading font-semibold text-base [font-variant-numeric:tabular-nums] hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      {image && (
        <div className="flex-[1_1_480px] relative min-h-[clamp(320px,40vw,620px)] bg-[#DCE7E6] overflow-hidden">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
        </div>
      )}
    </section>
  );
}

/**
 * White panel overlapping the hero below it by ~-80px. Pass exactly the
 * figures that should show; each gets a hairline border from the second
 * column on.
 */
export function FactsStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section aria-label="At a glance" className="relative z-[2] px-[clamp(20px,4vw,48px)]">
      <div className="max-w-[1144px] mx-auto -mt-20 bg-white rounded-card shadow-[0_24px_48px_-28px_rgba(4,60,60,0.45)] flex flex-wrap">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-[1_1_240px] px-[34px] py-8 flex flex-col gap-1.5 ${i > 0 ? "border-l border-line" : ""}`}
          >
            <p className="m-0 font-display font-medium text-[38px] leading-[1.1] text-navy [font-variant-numeric:tabular-nums]">
              {s.value}
            </p>
            <p className="m-0 text-[15px] leading-snug text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Sitewide proof strip (docs/seo/sef-page-build-context.md, section 2a). */
/**
 * Editorial content section: H2 on the left (flex 1 / 300px), body on
 * the right (flex 1.7 / 480px), with a hairline top border between
 * sections. Pass `first` on the first section in an article to drop
 * that border and its top padding.
 */
export function Section({
  title,
  children,
  first = false,
}: {
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <Reveal
      as="section"
      className={`max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] flex flex-wrap gap-5 gap-x-[88px] ${first ? "" : "pt-14 border-t border-line"}`}
    >
      <h2 className="flex-[1_1_300px] m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
        {title}
      </h2>
      <div className="flex-[1.7_1_480px] flex flex-col gap-[18px] text-[17px] leading-[1.75] text-body">
        {children}
      </div>
    </Reveal>
  );
}

/**
 * Beige callout panel for cost breakdowns and "what you need to
 * provide" blocks: title + big Lora figures on the left, a paragraph
 * on the right.
 */
export function Callout({
  title,
  figures,
  children,
}: {
  title: string;
  figures?: { value: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <Reveal
      as="section"
      className="bg-cream rounded-card p-9 sm:p-16 flex flex-wrap gap-8 gap-x-[72px] items-start"
    >
      <div className="flex-[1_1_300px] flex flex-col gap-[22px]">
        <h2 className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">{title}</h2>
        {figures && (
          <div className="flex flex-wrap gap-7 gap-x-12">
            {figures.map((f) => (
              <div key={f.label}>
                <p className="m-0 font-display text-[40px] leading-none text-navy [font-variant-numeric:tabular-nums]">
                  {f.value}
                </p>
                <p className="mt-2 mb-0 text-sm text-muted">{f.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex-[1.6_1_440px] flex flex-col gap-4 text-[17px] leading-[1.75] text-body">{children}</div>
    </Reveal>
  );
}

/**
 * Dark teal band of numbered steps, used for "How it works" and
 * service-specific process explanations. The numbering is legitimate
 * here since each list genuinely is an ordered sequence.
 */
export function StepsBand({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; body: React.ReactNode }[];
}) {
  return (
    <section className="bg-teal-deep text-white py-[clamp(72px,8vw,112px)] px-[clamp(20px,4vw,48px)]">
      <div className="max-w-[1144px] mx-auto flex flex-col gap-12">
        <Reveal>
          <h2 className="m-0 font-display font-medium text-[clamp(32px,3.4vw,44px)] leading-[1.1] max-w-[620px]">
            {title}
          </h2>
        </Reveal>
        <ol className="list-none m-0 p-0 flex flex-wrap gap-9 gap-x-8">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="flex-[1_1_220px] flex flex-col gap-3.5 pt-[22px] border-t border-white/20">
              <span className="font-display text-[22px] text-cta-on-dark [font-variant-numeric:tabular-nums]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-heading font-semibold text-[19px] leading-snug">{s.title}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-white/80">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-none m-0 p-0 flex flex-wrap gap-4 gap-x-8">
      {items.map((item, i) => (
        <li key={i} className="flex-[1_1_260px] flex gap-3 text-base leading-snug">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; body: React.ReactNode }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 80} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-semibold">
            {i + 1}
          </span>
          <div>
            <h3 className="font-heading font-semibold text-ink">{s.title}</h3>
            <p className="text-body">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/**
 * Sitewide "how it works" block. Deliberately identical on every page and kept
 * short, so suburb and industry pages spend their words on page-specific facts.
 */
export function HowItWorks({
  title = "How it works",
  steps = [
    { title: "Tell us the area", body: "Streets, a radius or whole suburbs, plus quantity and start date." },
    { title: "Quote with a quick turnaround", body: "Letterbox count, total cost and timeline." },
    { title: "Send your printed flyers", body: "We distribute; we don't print." },
    { title: "We deliver and report", body: "Walkers and e-bike riders cover the route; you get the GPS map." },
  ],
}: {
  title?: string;
  steps?: { title: string; body: React.ReactNode }[];
} = {}) {
  return <StepsBand title={title} steps={steps} />;
}

/** Single-colour client logos, no labels, used on Home and the industries hub. */
export const ALL_CLIENT_LOGOS: { src: string; alt: string; height: number }[] = [
  { src: "/images/redesign/logo-marshallwhite.png", alt: "Marshall White", height: 18 },
  { src: "/images/redesign/logo-mcgrath.png", alt: "McGrath", height: 26 },
  { src: "/images/redesign/logo-belle.png", alt: "Belle Property", height: 58 },
  { src: "/images/redesign/logo-barryplant.png", alt: "Barry Plant", height: 17 },
  { src: "/images/redesign/logo-buxton.png", alt: "Buxton", height: 28 },
  { src: "/images/redesign/logo-highdental.png", alt: "High Dental Melbourne", height: 50 },
  { src: "/images/redesign/logo-stormshield.png", alt: "Storm Shield Roofing", height: 50 },
];

export function LogoWall({
  heading = "Trusted by Melbourne agencies, clinics and trades",
  logos = ALL_CLIENT_LOGOS,
}: {
  heading?: string;
  logos?: { src: string; alt: string; height: number }[];
}) {
  return (
    <section aria-label={heading} className="py-[88px] px-[clamp(20px,4vw,48px)]">
      <div className="max-w-[1144px] mx-auto flex flex-col items-center gap-10">
        <h2 className="m-0 font-heading font-semibold text-[15px] text-muted text-center">{heading}</h2>
        <Reveal className="flex flex-wrap justify-center items-center gap-x-16 gap-y-9 opacity-[0.82]">
          {logos.map((l) => (
            <Image key={l.alt} src={l.src} alt={l.alt} width={160} height={l.height} style={{ height: l.height, width: "auto" }} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
