import type { Metadata } from "next";
import QuickQuoteForm from "../components/QuickQuoteForm";
import FAQSection from "../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  TextLink,
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

const trades: { title: string; href: string; body: string }[] = [
  {
    title: "Home Services",
    href: "/industries/home-services",
    body: "Plumbers, electricians, roofers, builders, renovators and cleaners reaching the households they service.",
  },
  {
    title: "Plumbers",
    href: "/industries/plumbers",
    body: "Plumbing flyers delivered on their own to the streets around your base and your active jobs.",
  },
  {
    title: "Electricians",
    href: "/industries/electricians",
    body: "Switchboard, safety and solar flyers reaching the suburbs where older wiring needs upgrading.",
  },
  {
    title: "Roofing",
    href: "/industries/roofing",
    body: "Roof restoration and repair flyers delivered after storms and around ageing roof lines.",
  },
  {
    title: "Builders",
    href: "/industries/builders",
    body: "Construction flyers for the neighbours of each site and the streets where owners rebuild.",
  },
  {
    title: "Renovation",
    href: "/industries/renovation",
    body: "Kitchen, bathroom and whole-home renovators reaching homes that are due for work.",
  },
  {
    title: "Cleaning",
    href: "/industries/cleaning",
    body: "House and bathroom cleaners adding clients along the routes they already run.",
  },
];

const local: { title: string; href: string; body: string }[] = [
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    body: "Just Listed, Open Home, Auction and Sold campaigns delivered to the streets around your listings.",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    body: "Local-area awareness for new practices, clinics and services opening or growing across Melbourne.",
  },
  {
    title: "Local Businesses",
    href: "/industries/local-businesses",
    body: "Shops, cafes, clinics and studios putting their offer in the letterboxes around them.",
  },
];

const hospitality: { title: string; href: string; body: string }[] = [
  {
    title: "Restaurants & Cafes",
    href: "/industries/restaurants",
    body: "Takeaway menus and opening offers delivered to the streets that can order tonight.",
  },
  {
    title: "Dog Groomers & Dog Washes",
    href: "/industries/pet-groomers",
    body: "Salons, mobile groomers and dog washes reaching dog owners nearby.",
  },
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
        <Bullets
          items={trades.map((t) => (
            <>
              <TextLink href={t.href}>{t.title}</TextLink>: {t.body}
            </>
          ))}
        />
      </Section>

      <Section title="Real estate, healthcare and local business">
        <p>
          Agents, clinics and local shops use letterbox drops to reach the streets around a listing, a practice or a
          storefront.
        </p>
        <Bullets
          items={local.map((t) => (
            <>
              <TextLink href={t.href}>{t.title}</TextLink>: {t.body}
            </>
          ))}
        />
      </Section>

      <Section title="Hospitality and pet services">
        <p>Restaurants, cafes and pet groomers reach the households within walking or driving distance of their door.</p>
        <Bullets
          items={hospitality.map((t) => (
            <>
              <TextLink href={t.href}>{t.title}</TextLink>: {t.body}
            </>
          ))}
        />
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
