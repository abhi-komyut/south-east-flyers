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

const PAGE_PATH = "/melbourne/flyer-distribution-bentleigh-east";

// About 12,000 homes in Bentleigh East 3165 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Bentleigh East 3165 | South East Flyers" },
  description:
    "Flyer distribution in Bentleigh East 3165: about 12,000 homes, mostly houses on wide streets. Exclusive, GPS-tracked letterbox drops from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Bentleigh East 3165 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Bentleigh East 3165. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Bentleigh East?",
    answer:
      "About 12,000, and roughly two in three are separate houses with a letterbox at the gate. That makes it one of the larger suburbs we cover, with high coverage on almost every street.",
  },
  {
    question: "How long does a full Bentleigh East drop take?",
    answer:
      "Covering all of it works best over three or four GPS-tracked runs, so a map comes back after each. Most businesses start with 1,000 to 2,500 homes near their base, then extend.",
  },
  {
    question: "Is Bentleigh East good for builders and renovators?",
    answer:
      "Very. Original houses on large blocks are being knocked down for new homes or split into townhouses, so a drop around a current build reaches owners weighing the same move.",
  },
  {
    question: "Bentleigh East has no train station. Does that change the drop?",
    answer:
      "It does. People shop at the strip nearest home, so Centre Road and East Boundary Road each draw from their own few streets. Drop around the strip closest to your business rather than across the whole suburb.",
  },
  {
    question: "Do you also deliver in Bentleigh and Carnegie?",
    answer:
      "Yes. Both sit near Bentleigh East in the City of Glen Eira, with Ormond and McKinnon close by, so one campaign can take in a few suburbs under a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Bentleigh East VIC 3165",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Bentleigh East, VIC 3165",
    address: { "@type": "PostalAddress", addressLocality: "Bentleigh East", addressRegion: "VIC", postalCode: "3165", addressCountry: "AU" },
  },
};

export default function BentleighEast() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Bentleigh East" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Bentleigh East"
        lead="Get your flyers into letterboxes along Centre Road and East Boundary Road, and across 3165, with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "12,000", label: "homes in Bentleigh East 3165, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution across Bentleigh East's strips" first>
        <p>
          Bentleigh East is one of the largest suburbs in the City of Glen Eira, running east from Bentleigh towards
          Moorabbin and Clarinda. It has no train station of its own, so daily life turns on local shopping strips, bus
          routes and the car. A campaign across the whole suburb reaches up to 12,000 homes, usually planned in stages.
        </p>
      </Section>

      <Section title="Knockdowns, townhouses and new owners">
        <p>
          Bentleigh East is changing fast. Post-war houses on large blocks are being replaced by new family homes or
          pairs of townhouses, and each sale brings an owner who needs trades, furniture and local services.
        </p>
        <p>
          That suits <TextLink href="/industries/builders">builders</TextLink>,{" "}
          <TextLink href="/industries/renovation">renovators</TextLink> and landscapers, who can drop around a job in
          progress, and agents, who can reach owners weighing up a sale to a developer.
        </p>
      </Section>

      <Section title="Local strips instead of a station">
        <p>
          With no station, Bentleigh East shoppers use the strip closest to home: Centre Road, East Boundary Road and
          the smaller parades dotted through the suburb. Each one pulls from a tight ring of streets.
        </p>
        <p>
          A cafe, pharmacy or takeaway does best with 1,000 to 2,500 flyers around its own strip. A trade or mobile
          service can start near its base and work outwards, weighing the calls from each section against the GPS map
          from every run.
        </p>
      </Section>

      <Section title="A family suburb with schools spread across it">
        <p>
          Bentleigh East is a family suburb, with primary schools scattered through it and Bentleigh Secondary College
          close by. Families tend to stay through the school years, which keeps demand steady for tutoring, swimming
          and music schools, childcare and family health practices.
        </p>
        <p>
          Those drops work best as each term approaches, when parents are choosing activities. Our{" "}
          <TextLink href="/industries/schools-childcare">school and childcare</TextLink> page sets out the enrolment
          windows.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Bentleigh East">
        <Bullets
          items={[
            <>Builders, renovators and landscapers working on new homes and townhouses</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes and development sites</>,
            <>Cafes, takeaway and pharmacies on Centre Road and East Boundary Road</>,
            <>Tutors, swim schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/cleaning">Cleaners</TextLink> and other home services building a local route</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Bentleigh East and nearby suburbs">
          <p className="m-0">
            Every Bentleigh East run is exclusive to you, with <strong className="text-ink">no second advertiser in the drop</strong>. We also
            cover <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> next door and{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink>, so a Glen Eira campaign can
            take in a few suburbs together. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for quantities, or the{" "}
            <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east Melbourne</TextLink> list for
            everywhere we run.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Bentleigh East drop"
        lead="Tell us the strip you're on or the streets you want, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Bentleigh East, Bentleigh, Carnegie"
      />

      <FAQSection items={faqs} title="Bentleigh East letterbox drop FAQs" />
    </>
  );
}
