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
    "Flyer distribution in Bentleigh East 3165, around Centre Road and East Boundary Road. GPS-tracked letterbox drops to the door. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Bentleigh East 3165 | South East Flyers",
    description: "GPS-tracked letterbox drops across Bentleigh East 3165, around Centre Road. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Bentleigh East?",
    answer:
      "About 12,000, roughly two in three separate houses with a letterbox at the gate. It is one of the larger suburbs we cover.",
  },
  {
    question: "How long does a full Bentleigh East drop take?",
    answer:
      "It works best over three or four GPS-tracked runs. Most businesses start nearest their base, then extend.",
  },
  {
    question: "Is Bentleigh East good for builders and renovators?",
    answer:
      "Yes. Old houses on large blocks are being rebuilt or split into townhouses, so a drop around a build reaches owners weighing the same move.",
  },
  {
    question: "Bentleigh East has no train station. Does that change the drop?",
    answer:
      "Yes. People shop at the nearest strip, so drop around Centre Road or East Boundary Road closest to your business.",
  },
  {
    question: "Do you also deliver in Bentleigh and Carnegie?",
    answer:
      "Yes. Both sit near Bentleigh East in the City of Glen Eira, so one run can cover a few suburbs.",
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
          Bentleigh East is one of the largest suburbs in the City of Glen Eira. It has no train station, so daily life
          runs on the Centre Road and East Boundary Road strips. A targeted letterbox campaign across Bentleigh East can
          reach up to 12,000 homes, usually planned in stages.
        </p>
      </Section>

      <Section title="Letterbox drops for builders, agents and local strips">
        <p>
          Bentleigh East is a strong area for{" "}
          <TextLink href="/industries/builders">builders</TextLink> and{" "}
          <TextLink href="/industries/renovation">renovators</TextLink>, with old houses being replaced by new homes and
          townhouses, and for agents reaching owners thinking of selling. Cafes and pharmacies work their own strip.
          Start nearest your base, then widen the run.
        </p>
      </Section>

      <Section title="A family suburb with schools across it">
        <p>
          Primary schools are spread through the suburb, with Bentleigh Secondary College close by, so tutoring,
          swimming and music schools do well. Time those drops to the start of each term.
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
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Bentleigh East drop"
        lead="Send us the strip you're on or your streets, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Bentleigh East, Bentleigh, Carnegie"
      />

      <FAQSection items={faqs} title="Bentleigh East letterbox drop FAQs" />
    </>
  );
}
