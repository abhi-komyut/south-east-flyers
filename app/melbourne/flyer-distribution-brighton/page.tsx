import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  ProofStrip,
  Section,
  Bullets,
  Steps,
  CtaBanner,
  TextLink,
  JsonLd,
  coverageCost,
  formatAud,
} from "../../components/landing";

const PAGE_PATH = "/melbourne/flyer-distribution-brighton";
const ABS_URL = "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL20337";

// ABS 2021 Census QuickStats, Brighton (Vic.) SAL20337: 10,536 private dwellings
const DWELLINGS_ROUNDED = 10500;
const FULL_COST = coverageCost(DWELLINGS_ROUNDED);

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton VIC 3186 | South East Flyers" },
  description:
    "Flyer distribution in Brighton 3186: exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers, from 1,000. Free quote in 24 hours.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton VIC 3186 | South East Flyers",
    description:
      "Exclusive, GPS-tracked letterbox drops across Brighton 3186. Your flyer on its own, never bundled. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton?",
    answer: `Brighton 3186 has about ${DWELLINGS_ROUNDED.toLocaleString("en-AU")} private dwellings (ABS 2021 Census). We reach every open street letterbox and skip apartment blocks with locked mail rooms. Your quote shows the exact count for the streets you choose.`,
  },
  {
    question: "How much does a letterbox drop cost in Brighton?",
    answer: `We charge $200 per 1,000 flyers, delivered exclusively. A 1,000-flyer test run costs $200, and covering every letterbox in Brighton costs about ${formatAud(FULL_COST)}.`,
  },
  {
    question: "Can I target only certain streets in Brighton?",
    answer:
      "Yes. Choose a few streets, a radius around your shop or listing, or the whole suburb. We confirm the letterbox count for that area before you book.",
  },
  {
    question: "How do I know my flyers were delivered?",
    answer:
      "Every walker records the route in Strava. When the drop finishes you get the GPS map and a summary of the streets covered.",
  },
  {
    question: "Do you deliver to letterboxes with a No Junk Mail sign?",
    answer:
      "No. We skip them on every run, so your flyer never lands where the household has asked not to receive advertising.",
  },
  {
    question: "How soon can a Brighton campaign start?",
    answer:
      "Urgent campaigns can start within 48 hours of your flyers arriving. Standard campaigns usually start within 3 to 5 business days, and quotes are sent within 24 hours.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Brighton VIC 3186",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Brighton, VIC 3186",
    address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "VIC", postalCode: "3186", addressCountry: "AU" },
  },
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "AUD",
    description: "Per 1,000 flyers, exclusive delivery, never bundled",
  },
};

export default function Brighton() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Brighton" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Brighton"
        lead="GPS-tracked flyer distribution across Brighton 3186. Your flyer goes into each letterbox on its own, never bundled with other advertising, and we skip every No Junk Mail sign."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "GPS route report with every drop"]}
        ctaLabel="Get a Free Brighton Quote"
      />

      <ProofStrip />

      <Section title="Reaching Brighton households">
        <p>
          Brighton has about {DWELLINGS_ROUNDED.toLocaleString("en-AU")} homes and a median household income
          of $2,710 a week (
          <a href={ABS_URL} className="underline" rel="noopener" target="_blank">
            ABS 2021 Census
          </a>
          ). Our flyer distribution in Brighton covers the suburb on foot and by e-bike, from North Road down to
          the Hampton border.
        </p>
        <p>
          You pick the streets, we walk them, and you get a GPS map of the route once the drop is done.
        </p>
      </Section>

      <Section title="Why Brighton businesses choose South East Flyers" tone="gray">
        <Bullets
          items={[
            <><strong>Exclusive delivery.</strong> Your flyer goes into the letterbox by itself, not folded inside a bundle of catalogues.</>,
            <><strong>GPS proof on every run.</strong> Each walker records the route in Strava, and you receive the map and a drop summary.</>,
            <><strong>No Junk Mail respected.</strong> We skip those letterboxes, so your brand never arrives where it is not wanted.</>,
            <><strong>Small runs welcome.</strong> Start with 1,000 flyers and test one part of Brighton before covering the rest.</>,
            <><strong>Fast starts.</strong> Urgent campaigns can begin within 48 hours of your flyers arriving.</>,
          ]}
        />
      </Section>

      <Section title="Letterbox drops across Brighton 3186">
        <p>
          Brighton&rsquo;s occupied homes are 57% separate houses, 22% townhouses and semis, and 20% flats or
          apartments (ABS 2021). Houses and townhouses have open street letterboxes, so coverage there is close to
          complete. Apartment blocks with locked mail rooms are skipped, and the GPS report shows exactly where.
        </p>
        <p>
          You can cover the whole suburb or pick the streets closest to your shop, office or listing. Your quote shows
          the letterbox count for exactly the area you choose.
        </p>
      </Section>

      <Section title="Who we deliver for in Brighton" tone="gray">
        <p>
          About 73% of Brighton homes are owner-occupied and 58% of families have children (ABS 2021). That makes
          flyer distribution in Brighton a strong fit for businesses that sell to homeowners and families:
        </p>
        <Bullets
          items={[
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink>: just listed, just sold and appraisal flyers</>,
            <><TextLink href="/industries/home-services">Home services</TextLink>: <TextLink href="/industries/plumbers">plumbers</TextLink>, electricians, roofers, builders and renovators</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink>: dentists, GPs and physios</>,
            <>Pet businesses: dog groomers and vet clinics</>,
            <>Local food: restaurants, cafes and takeaway menus</>,
          ]}
        />
        <p>
          Not on the list? Our <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>{" "}
          page covers how other Brighton businesses use letterbox drops.
        </p>
      </Section>

      <Section title="How a Brighton letterbox drop works">
        <Steps
          steps={[
            { title: "Tell us your target", body: "Name the streets or area, the quantity and your start date." },
            { title: "Get a quote within 24 hours", body: "It includes the letterbox count and a timeline." },
            { title: "Send us your printed flyers", body: "We distribute; we don't print. Any print shop's flyers work." },
            { title: "We deliver", body: "Walkers and e-bike riders cover the route, recorded by GPS." },
            { title: "Get your report", body: "You receive the route map, drop count and dates covered." },
          ]}
        />
      </Section>

      <Section title="Letterbox drop cost in Brighton" tone="gray">
        <p>
          Letterbox drops in Brighton cost <strong>$200 per 1,000 flyers</strong>, delivered exclusively. At our
          1,000-flyer minimum, a first test run costs $200. Covering every Brighton letterbox (about{" "}
          {DWELLINGS_ROUNDED.toLocaleString("en-AU")}) costs about {formatAud(FULL_COST)}.
        </p>
        <p>
          See how pricing works on our <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or
          compare Brighton with the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Brighton Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Brighton letterboxes?"
        body="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
      />
    </>
  );
}
