import type { Metadata } from "next";
import Link from "next/link";
import QuickQuoteForm from "../components/QuickQuoteForm";
import FAQSection from "../components/FAQSection";
import Reveal from "../components/Reveal";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  JsonLd,
  HowItWorks,
} from "../components/landing";

const PAGE_PATH = "/industries";

export const metadata: Metadata = {
  title: { absolute: "Industries We Work With | South East Flyers" },
  description:
    "Flyer and letterbox distribution for local businesses, home services trades, real estate and healthcare across Melbourne's south-east and eastern suburbs.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Industries We Work With | South East Flyers",
    description:
      "Flyer and letterbox distribution for local businesses, home services trades, real estate and healthcare across Melbourne's south-east and eastern suburbs.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

function Icon({ path }: { path: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const ICONS = {
  home: "M4 11l8-7 8 7M6 9.5V20h12V9.5M10 20v-6h4v6",
  wrench: "M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2z",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  roof: "M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10",
  hammer: "M3 16h18M6 16a6 6 0 0112 0M12 8.5V11",
  roller: "M4 5h13a1 1 0 011 1v4a1 1 0 01-1 1H4zM10 11v8M10 19h3",
  sparkle: "M6 3v4M4 5h4M18 13v4M16 15h4M11 5l1.8 5.2L18 12l-5.2 1.8L11 19l-1.8-5.2L4 12l5.2-1.8L11 5z",
  key: "M15 7a4 4 0 10-3.874 5H5l-2 2v3h3v-2h2v-2h2.126A4 4 0 0015 7zM15 7h.01",
  heart: "M12 20s-7-4.4-9.3-8.8C1.3 8 2.6 5 5.6 5c1.8 0 3 1 4 2.3C10.6 6 11.8 5 13.6 5c3 0 4.3 3 3.9 6.2C15.1 15.6 12 20 12 20z",
  storefront: "M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 19v-5h2v5h2v-5h2v5",
  cup: "M5 4h10v9a5 5 0 01-10 0V4zM15 6h2a2 2 0 010 4h-2M3 20h14",
  paw: "M8 10a1.5 2 0 100-4 1.5 2 0 000 4zM13 8a1.5 2 0 100-4 1.5 2 0 000 4zM5.5 13.5a1.3 1.8 0 100-3.6 1.3 1.8 0 000 3.6zM16.5 13.5a1.3 1.8 0 100-3.6 1.3 1.8 0 000 3.6zM11 20c-2.5 0-5-1.3-5-3.3C6 14.5 8 13 11 13s5 1.5 5 3.7c0 2-2.5 3.3-5 3.3z",
};

const trades: { title: string; href: string; body: string; icon: keyof typeof ICONS }[] = [
  { title: "Home Services", href: "/industries/home-services", body: "Plumbers, electricians, roofers, builders, renovators and cleaners reaching the households they service.", icon: "home" },
  { title: "Plumbers", href: "/industries/plumbers", body: "Plumbing flyers delivered on their own to the streets around your base and your active jobs.", icon: "wrench" },
  { title: "Electricians", href: "/industries/electricians", body: "Switchboard, safety and solar flyers reaching the suburbs where older wiring needs upgrading.", icon: "bolt" },
  { title: "Roofing", href: "/industries/roofing", body: "Roof restoration and repair flyers delivered after storms and around ageing roof lines.", icon: "roof" },
  { title: "Builders", href: "/industries/builders", body: "Construction flyers for the neighbours of each site and the streets where owners rebuild.", icon: "hammer" },
  { title: "Renovation", href: "/industries/renovation", body: "Kitchen, bathroom and whole-home renovators reaching homes that are due for work.", icon: "roller" },
  { title: "Cleaning", href: "/industries/cleaning", body: "House and bathroom cleaners adding clients along the routes they already run.", icon: "sparkle" },
];

const local: { title: string; href: string; body: string; icon: keyof typeof ICONS }[] = [
  { title: "Real Estate", href: "/industries/real-estate", body: "Just Listed, Open Home, Auction and Sold campaigns delivered to the streets around your listings.", icon: "key" },
  { title: "Healthcare", href: "/industries/healthcare", body: "Local-area awareness for new practices, clinics and services opening or growing across Melbourne.", icon: "heart" },
  { title: "Local Businesses", href: "/industries/local-businesses", body: "Shops, cafes, clinics and studios putting their offer in the letterboxes around them.", icon: "storefront" },
];

const hospitality: { title: string; href: string; body: string; icon: keyof typeof ICONS }[] = [
  { title: "Restaurants & Cafes", href: "/industries/restaurants", body: "Takeaway menus and opening offers delivered to the streets that can order tonight.", icon: "cup" },
  { title: "Dog Groomers & Dog Washes", href: "/industries/pet-groomers", body: "Salons, mobile groomers and dog washes reaching dog owners nearby.", icon: "paw" },
];

const faqs = [
  {
    question: "What if my business doesn't fit one of these industries?",
    answer:
      "Tell us what you do and the suburbs you want to reach. Letterbox drops work for most local businesses with a real catchment area, even if there's no dedicated page for your trade.",
  },
  {
    question: "Can one campaign cover more than one industry?",
    answer:
      "Yes. A real estate agency running appraisal flyers and a trade targeting the same streets can both be quoted together or separately, with their own GPS reports.",
  },
  {
    question: "Which industry pages have the most detail?",
    answer:
      "Each page above covers timing, targeting and what to put on the flyer for that trade. Start with the one closest to your business, or ask us directly if you're not sure.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution by industry",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

function IndustryGrid({ items }: { items: { title: string; href: string; body: string; icon: keyof typeof ICONS }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
      {items.map((t, i) => (
        <Reveal key={t.title} delay={i * 60} className="group h-full">
          <Link
            href={t.href}
            className="press flex h-full flex-col gap-4 rounded-card bg-white p-6 no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(4,60,60,0.45)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
              <Icon path={ICONS[t.icon]} />
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="font-heading font-semibold text-lg text-ink transition-colors duration-300 group-hover:text-navy">
                {t.title}
              </span>
              <span className="text-[15px] leading-relaxed text-body">{t.body}</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function Industries() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
        h1="Industries We Work With"
        lead="Flyer and letterbox distribution built around how different local businesses actually reach customers across Melbourne's south-east and east."
        image={{ src: "/images/redesign/letterbox-hand.jpg", alt: "A hand posting a flyer into a steel letterbox" }}
      />

      <FactsStrip
        stats={[
          { value: "10", label: "industries we specialise in" },
          { value: "40+", label: "suburbs covered" },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Trades and home services" first>
        <p>
          Plumbers, electricians, roofers, builders, renovators and cleaners use flyers to reach the households they
          actually service, not the whole city.
        </p>
        <IndustryGrid items={trades} />
      </Section>

      <Section title="Real estate, healthcare and local business">
        <p>
          Agents, clinics and local shops use letterbox drops to reach the streets around a listing, a practice or a
          storefront.
        </p>
        <IndustryGrid items={local} />
      </Section>

      <Section title="Hospitality and pet services">
        <p>Restaurants, cafes and pet groomers reach the households within walking or driving distance of their door.</p>
        <IndustryGrid items={hospitality} />
      </Section>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach local customers?"
        lead="Tell us your target suburbs and flyer quantity for a free, no-obligation quote."
      />

      <FAQSection items={faqs} title="Industries FAQs" />
    </>
  );
}
