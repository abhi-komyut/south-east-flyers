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
      "Bentleigh East 3165 has about 12,000 homes, and roughly two in three are separate houses with a letterbox at the gate. That makes it one of the larger suburbs we cover, with high coverage on almost every street.",
  },
  {
    question: "How long does a full Bentleigh East drop take?",
    answer:
      "Covering all of Bentleigh East usually works best over three or four runs, each one GPS-tracked, so you get a map after every one. Most businesses start with 1,000 to 2,500 homes near their base, then extend.",
  },
  {
    question: "Is Bentleigh East good for builders and renovators?",
    answer:
      "Very. Many original houses on large blocks are being knocked down for new homes or split into townhouses. Neighbour drops around a current build reach owners who are weighing up the same decision.",
  },
  {
    question: "Can one campaign cover Bentleigh East and Bentleigh?",
    answer:
      "Yes. Both are in our Glen Eira service area, along with Carnegie, Ormond and McKinnon, and we can quote them together with a single GPS report.",
  },
  {
    question: "Bentleigh East has no train station. Does that change where to drop?",
    answer:
      "It does. Residents shop at local strips such as Centre Road and East Boundary Road or drive further, so each strip draws from its own few streets. Drop around the strip nearest your business rather than across the whole suburb.",
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
        lead="Flyer distribution in Bentleigh East 3165, a big family suburb of houses on wide streets. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
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

      <Section title="12,000 homes, two in three separate houses" first>
        <p>
          Bentleigh East is one of the largest suburbs in the City of Glen Eira, stretching east from Bentleigh towards
          Moorabbin and Clarinda. It has no train station of its own, so daily life runs on local shopping strips,
          bus routes and the car.
        </p>
        <p>
          For a letterbox drop that means about 12,000 homes, most of them houses with a letterbox at the front gate.
          Coverage per street is high, and the suburb is big enough that most businesses plan it in stages.
        </p>
      </Section>

      <Section title="Knockdowns, townhouses and new owners">
        <p>
          Bentleigh East is changing fast. Post-war houses on large blocks are being replaced by new family homes or
          pairs of townhouses, and each sale brings a new owner who needs trades, furniture and local services.
        </p>
        <p>
          That suits <TextLink href="/industries/builders">builders</TextLink>,{" "}
          <TextLink href="/industries/renovation">renovators</TextLink> and landscapers, who can drop around a current
          job, and agents, who can reach owners thinking about selling to a developer.
        </p>
      </Section>

      <Section title="Local strips instead of a station">
        <p>
          Without a station, Bentleigh East shoppers use the strips closest to home: Centre Road, East Boundary Road
          and the smaller shopping parades scattered through the suburb. Each one draws from a tight ring of streets.
        </p>
        <p>
          A cafe, pharmacy or takeaway does best with a 1,000 to 2,500 flyer drop around its own strip. A trade or
          mobile service can start near its base and work outwards, comparing calls from each section using the GPS
          report from every run.
        </p>
      </Section>

      <Section title="Families and school zones">
        <p>
          Bentleigh East is a family suburb, with primary schools spread across it and Bentleigh Secondary College
          nearby. Families tend to stay through the school years, which suits tutoring, swimming and music schools,
          childcare and family health practices.
        </p>
        <p>
          Time those drops for late January and the fortnight before each term. See our{" "}
          <TextLink href="/industries/schools-childcare">school and childcare</TextLink> page for enrolment timing.
        </p>
      </Section>

      <Section title="Builders, agents and local-strip trades in Bentleigh East">
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
        <Callout title="Covering Bentleigh East's 12,000 homes">
          <p className="m-0">
            Every Bentleigh East drop is yours alone, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>, from
            1,000 flyers. Our flyer distribution across Glen Eira also covers{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> next door and{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink>. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or our{" "}
            <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east Melbourne</TextLink> suburb list.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Bentleigh East drop"
        lead="Send us your streets or the strip you're on, and we'll come back with the letterbox count and a quote, quickly."
        suburbHint="e.g. Bentleigh East, Bentleigh, Carnegie"
      />

      <FAQSection items={faqs} title="Bentleigh East letterbox drop FAQs" />
    </>
  );
}
