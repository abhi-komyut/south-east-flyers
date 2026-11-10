import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Callout,
  Bullets,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/melbourne/flyer-distribution-sandringham";

// About 4,900 homes in Sandringham 3191 (household count used only for the
// full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Sandringham VIC 3191 | South East Flyers" },
  description:
    "Flyer distribution in Sandringham 3191, from the village to the beach. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Sandringham VIC 3191 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Sandringham 3191. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Sandringham?",
    answer:
      "About 4,900. Nearly all are houses and townhouses with a street letterbox, so a walking route reaches most of the suburb in a single run.",
  },
  {
    question: "Can a letterbox drop cover all of Sandringham at once?",
    answer:
      "Yes. The suburb is compact, so most businesses cover all 4,900 homes in one run rather than testing a single pocket first.",
  },
  {
    question: "Can I target just the streets around Sandringham village?",
    answer:
      "Yes. Village cafes and shops often start with the surrounding streets. Give us your address and we'll quote that ring only, with a GPS map of the route.",
  },
  {
    question: "When is the best time for a drop in Sandringham?",
    answer:
      "Spring and early summer suit gardens, pools and hospitality as the beach season starts. Agents send appraisal flyers in late winter, before the spring market.",
  },
  {
    question: "Do you also deliver in Hampton and Black Rock?",
    answer:
      "Yes. Both border Sandringham in the City of Bayside, with Beaumaris and Brighton close by, so one run can take in a few bayside suburbs with a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Sandringham VIC 3191",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Sandringham, VIC 3191",
    address: { "@type": "PostalAddress", addressLocality: "Sandringham", addressRegion: "VIC", postalCode: "3191", addressCountry: "AU" },
  },
};

export default function Sandringham() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Sandringham" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Sandringham"
        lead="Get your flyers into letterboxes around Sandringham village and across 3191 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "4,900", label: "homes in Sandringham 3191, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Sandringham village" first>
        <p>
          Sandringham village wraps around the station at the end of the Sandringham line, a short walk from the
          foreshore, the harbour and the yacht club. The suburb sits in the City of Bayside between Hampton and Black
          Rock. A full campaign across Sandringham reaches up to 4,900 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for the village and bayside trades">
        <p>
          The village runs on walk-in trade. People stroll or ride to its cafes, butchers and boutiques, so a shop
          wins the households within a kilometre or so of the strip. Our walkers cover those streets directly, and an
          opening offer or a changed menu lands while locals are deciding where to spend this week.
        </p>
        <p>
          The beachside houses behind the village keep landscapers, pool services,{" "}
          <TextLink href="/industries/roofing">roofers</TextLink> and painters in work, and{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink> send appraisal flyers to owners who
          have held the same home for years.
        </p>
      </Section>

      <Section title="A compact suburb, covered in one run">
        <p>
          Sandringham is small and almost all houses and townhouses on quiet streets, so a walker reaches nearly every
          letterbox and one run can take in the whole suburb. Most businesses cover all of it rather than starting with
          a single pocket.
        </p>
        <p>
          Because it is compact, a monthly or seasonal drop to every home stays affordable, and each run comes with its
          own GPS map, so you can hold one month against the next.
        </p>
      </Section>

      <Section title="Beach season sets the calendar">
        <p>
          Demand in Sandringham follows the weather. As summer nears, residents spend on gardens, pools and outdoor
          living, and the spring property market brings appraisal and renovation decisions forward.
        </p>
        <p>
          If your work rides that cycle, book a late-winter drop to land before the rush, while your diary still has
          room. Sandringham Hospital on the edge of the suburb also brings steady demand for nearby health and allied
          services.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Sandringham">
        <Bullets
          items={[
            <>Cafes, restaurants and shops in Sandringham village</>,
            <>Landscapers, pool services and outdoor trades before summer</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working the bayside streets</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink> near Sandringham Hospital and the village</>,
            <><TextLink href="/industries/plumbers">Plumbers</TextLink>, <TextLink href="/industries/electricians">electricians</TextLink> and other <TextLink href="/industries/home-services">home services</TextLink></>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Sandringham and nearby suburbs">
          <p className="m-0">
            No other advertiser rides along on a Sandringham drop, so <strong className="text-ink">the run is yours and yours only</strong>. We
            also deliver in <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink>, Black Rock,
            Beaumaris and <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>, so a bayside
            campaign can span several suburbs. Pricing by quantity is on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> lists the rest.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Sandringham drop"
        lead="Name the village streets or the whole suburb, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Sandringham, Hampton, Black Rock"
      />

      <FAQSection items={faqs} title="Sandringham letterbox drop FAQs" />
    </>
  );
}
