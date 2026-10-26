import Link from "next/link";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

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
/** Price per 1,000 flyers, exclusive delivery. */
export const PRICE_PER_THOUSAND = 200;

export function formatAud(n: number) {
  return `$${n.toLocaleString("en-AU")}`;
}

/** Full-coverage cost, rounded to the nearest $100 because dwelling counts are rounded. */
export function coverageCost(dwellings: number) {
  return Math.round((dwellings / 1000) * PRICE_PER_THOUSAND / 100) * 100;
}

const linkClass = "text-navy underline underline-offset-2 hover:text-navy-light";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

export function PageHero({
  crumbs,
  h1,
  lead,
  proof,
  ctaLabel = "Get a Free Quote",
}: {
  crumbs: Crumb[];
  h1: string;
  lead: React.ReactNode;
  proof: string[];
  ctaLabel?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">{h1}</h1>
          <p className="text-lg text-white/85 mb-6">{lead}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80 mb-8">
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              data-quote-cta
              className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
            >
              {ctaLabel}
            </Link>
            <a
              href={PHONE_TEL}
              className="inline-block border border-white/60 text-white font-semibold px-6 py-3 rounded text-center hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Sitewide proof strip (docs/seo/sef-page-build-context.md, section 2a). */
export function ProofStrip() {
  const stats = [
    { value: "Exclusive", label: "Your flyer on its own, never bundled" },
    { value: "100%", label: "Of runs GPS-tracked" },
    { value: "1,000", label: "Minimum flyers" },
    { value: "44%", label: "Of shoppers read letterbox flyers for specials*" },
  ];
  return (
    <section className="bg-white border-b border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl sm:text-3xl font-bold text-navy">{s.value}</dd>
              <dd className="text-sm text-gray-600 mt-1">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-gray-500 text-center mt-6">
          *ACRS Omnibus Survey, reported by{" "}
          <a
            href="https://www.bandt.com.au/marketing/nine-out-of-10-aussies-still-shop-from-catalogues-study"
            className="underline"
            rel="noopener"
            target="_blank"
          >
            B&amp;T, March 2016
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function Section({
  title,
  children,
  tone = "white",
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  tone?: "white" | "gray";
  wide?: boolean;
}) {
  return (
    <section
      className={`py-14 sm:py-16 border-t border-gray-200 ${tone === "gray" ? "bg-cream" : "bg-white"}`}
    >
      <div className={`${wide ? "max-w-7xl" : "max-w-3xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cta shrink-0" aria-hidden="true" />
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
        <li key={s.title} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-semibold">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-black">{s.title}</h3>
            <p className="text-gray-700">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CtaBanner({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          {title}
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            data-quote-cta
            className="inline-block bg-cta text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
          <a
            href={PHONE_TEL}
            className="inline-block border border-white/60 text-white font-semibold px-8 py-3 rounded hover:bg-white/10 transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/**
 * Sitewide "how it works" block. Deliberately identical on every page and kept
 * short, so suburb and industry pages spend their words on page-specific facts.
 */
export function HowItWorks() {
  return (
    <Section title="How it works" tone="gray">
      <Steps
        steps={[
          { title: "Tell us the area", body: "Streets, a radius or whole suburbs, plus quantity and start date." },
          { title: "Quote within 24 hours", body: "Letterbox count, total cost and timeline." },
          { title: "Send your printed flyers", body: "We distribute; we don't print." },
          { title: "We deliver and report", body: "Walkers and e-bike riders cover the route; you get the GPS map." },
        ]}
      />
    </Section>
  );
}
