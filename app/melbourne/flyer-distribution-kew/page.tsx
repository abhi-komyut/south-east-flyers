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

const PAGE_PATH = "/melbourne/flyer-distribution-kew";
const ABS_URL = "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21336";

// ABS 2021 Census QuickStats, Kew (Vic.) SAL21336: 10,593 private dwellings
const DWELLINGS_ROUNDED = 10600;
const FULL_COST = coverageCost(DWELLINGS_ROUNDED);

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Kew VIC 3101 | South East Flyers" },
  description:
    "Flyer distribution in Kew 3101: exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers, from 1,000. Free quote in 24 hours.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Kew VIC 3101 | South East Flyers",
    description:
      "Exclusive, GPS-tracked letterbox drops across Kew 3101. Your flyer on its own, never bundled. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Kew?",
    answer: `Kew 3101 has about ${DWELLINGS_ROUNDED.toLocaleString("en-AU")} private dwellings (ABS 2021 Census). We cover every open street letterbox and skip locked apartment mail rooms. Your quote will show the exact count for the streets you choose.`,
  },
  {
    question: "What does a letterbox drop cost in Kew?",
    answer: `Flyer distribution in Kew costs $200 per 1,000 flyers, delivered exclusively, with a 1,000-flyer minimum. Covering every Kew letterbox costs about ${formatAud(FULL_COST)}.`,
  },
  {
    question: "Can I target a few streets instead of all of Kew?",
    answer:
      "Yes. Pick a pocket near your shop, clinic or listing, or a run of streets close to the Kew Junction shops. We confirm the letterbox count for that area before you book.",
  },
  {
    question: "Is flyer distribution in Kew GPS-tracked?",
    answer:
      "Every walker logs their route in Strava as they go. Once the drop is finished you get the map and a summary of the streets covered, not just an invoice.",
  },
  {
    question: "Will you skip letterboxes marked No Junk Mail?",
    answer:
      "Always. Any letterbox showing a No Junk Mail or No Advertising Material sign is skipped on every run, in Kew and everywhere else we deliver.",
  },
  {
    question: "How quickly can a Kew campaign start?",
    answer:
      "Urgent runs can start within 48 hours of your flyers arriving. Standard campaigns usually begin within 3 to 5 business days, with a quote sent within 24 hours.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Kew VIC 3101",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Kew, VIC 3101",
    address: { "@type": "PostalAddress", addressLocality: "Kew", addressRegion: "VIC", postalCode: "3101", addressCountry: "AU" },
  },
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "AUD",
    description: "Per 1,000 flyers, exclusive delivery, never bundled",
  },
};

export default function Kew() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Kew" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Kew"
        lead="GPS-tracked flyer distribution across Kew 3101. Your flyer goes into each letterbox on its own, never bundled with other advertising, and we skip every No Junk Mail sign."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "GPS route report with every drop"]}
        ctaLabel="Get a Free Kew Quote"
      />

      <ProofStrip />

      <Section title="Reaching Kew households">
        <p>
          Kew has about {DWELLINGS_ROUNDED.toLocaleString("en-AU")} homes and a median household income of
          $2,497 a week (
          <a href={ABS_URL} className="underline" rel="noopener" target="_blank">
            ABS 2021 Census
          </a>
          ). Our flyer distribution in Kew covers the suburb on foot and by e-bike, from the Kew Junction
          shops down through the side streets toward the Yarra.
        </p>
        <p>
          You pick the streets, we walk them, and you get a GPS map of the route once the drop is done.
        </p>
      </Section>

      <Section title="Why Kew businesses choose South East Flyers" tone="gray">
        <Bullets
          items={[
            <><strong>Exclusive delivery.</strong> Your flyer goes into the letterbox by itself, not folded inside a bundle of catalogues.</>,
            <><strong>GPS proof on every run.</strong> Each walker records the route in Strava, and you receive the map and a drop summary.</>,
            <><strong>No Junk Mail respected.</strong> We skip those letterboxes, so your brand never arrives where it is not wanted.</>,
            <><strong>Small runs welcome.</strong> Start with 1,000 flyers and test one pocket of Kew before covering the rest.</>,
            <><strong>Fast starts.</strong> Urgent campaigns can begin within 48 hours of your flyers arriving.</>,
          ]}
        />
      </Section>

      <Section title="Letterbox drops across Kew 3101">
        <p>
          Kew&rsquo;s housing is a close three-way split: 51% separate houses, 24% townhouses and semis, and
          26% flats or apartments (ABS 2021). Houses and townhouses have open street letterboxes, so coverage
          there is close to complete for leaflet distribution in Kew. Apartment blocks with locked mail rooms
          are skipped, and the GPS report shows exactly where.
        </p>
        <p>
          You can cover the whole suburb or pick the streets closest to your shop, clinic or listing. Your
          quote shows the letterbox count for exactly the area you choose.
        </p>
      </Section>

      <Section title="Who we deliver for in Kew" tone="gray">
        <p>
          About 69% of Kew homes are owner-occupied and 60% of families have children (ABS 2021). That mix
          of established homeowners and young families makes letterbox distribution in Kew a strong fit for:
        </p>
        <Bullets
          items={[
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink>: just listed, just sold and appraisal flyers around the suburb&rsquo;s family homes</>,
            <><TextLink href="/industries/home-services">Home services</TextLink>: <TextLink href="/industries/plumbers">plumbers</TextLink>, electricians, roofers, builders and renovators</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink>: dentists, GPs and physios near Kew Junction</>,
            <>Private tutors and school-holiday programs reaching local families</>,
            <>Cafes and restaurants using pamphlet delivery in Kew for menus and specials</>,
          ]}
        />
        <p>
          Not on the list? Our <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>{" "}
          page covers how other Kew businesses use letterbox drops.
        </p>
      </Section>

      <Section title="How a Kew letterbox drop works">
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

      <Section title="Letterbox drop cost in Kew" tone="gray">
        <p>
          Letterbox drops in Kew cost <strong>$200 per 1,000 flyers</strong>, delivered exclusively. At our
          1,000-flyer minimum, a first test run costs $200. Covering every Kew letterbox (about{" "}
          {DWELLINGS_ROUNDED.toLocaleString("en-AU")}) costs about {formatAud(FULL_COST)}.
        </p>
        <p>
          See how pricing works on our <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page.
          Kew sits in the City of Boroondara, so our flyer distribution in Boroondara also reaches neighbouring
          Hawthorn, Camberwell and Balwyn, and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Kew Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Kew letterboxes?"
        body="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
      />
    </>
  );
}
