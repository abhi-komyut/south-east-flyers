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

const PAGE_PATH = "/melbourne/flyer-distribution-brighton-east";

// About 6,400 homes in Brighton East 3187 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton East 3187 | South East Flyers" },
  description:
    "Flyer distribution in Brighton East 3187, around Hawthorn Road and Dendy Park. GPS-tracked letterbox drops straight to the door. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton East 3187 | South East Flyers",
    description: "GPS-tracked letterbox drops across Brighton East 3187, around Hawthorn Road. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton East?",
    answer:
      "About 6,400, around seven in ten separate houses, so nearly every home has a letterbox at the street.",
  },
  {
    question: "Is a Brighton East drop different from central Brighton?",
    answer:
      "Yes. Brighton East has fewer apartments and more family houses on quiet streets, so family services and home trades do well here.",
  },
  {
    question: "Can I cover the whole of Brighton East in one run?",
    answer:
      "Yes. At about 6,400 homes it fits a single campaign, with a GPS map of every street.",
  },
  {
    question: "When do agents drop flyers in Brighton East?",
    answer:
      "Before the spring and autumn selling seasons, and around each new listing. Many homes here are held for years.",
  },
  {
    question: "Do you also deliver in Brighton and Bentleigh?",
    answer:
      "Yes. Both border Brighton East, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Brighton East VIC 3187",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Brighton East, VIC 3187",
    address: { "@type": "PostalAddress", addressLocality: "Brighton East", addressRegion: "VIC", postalCode: "3187", addressCountry: "AU" },
  },
};

export default function BrightonEast() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Brighton East" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Brighton East"
        lead="Get your flyers into letterboxes along Hawthorn Road and across 3187 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "6,400", label: "homes in Brighton East 3187, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Hawthorn Road, Brighton East" first>
        <p>
          Brighton East sits east of the Nepean Highway, between Brighton and Bentleigh, with Hawthorn Road carrying its
          main shops and Dendy Park and the public golf course nearby. A targeted letterbox campaign across Brighton
          East can reach up to 6,400 homes. Flyer distribution in Brighton East runs across the 3187 postcode.
        </p>
      </Section>

      <Section title="Letterbox drops for Brighton East agents and trades">
        <p>
          Brighton East is a strong area for agents working its long-held family homes, and for the home trades keeping
          the houses in shape. Family services do well in the quiet streets. Start with the streets around Hawthorn
          Road, or cover the whole suburb in one run.
        </p>
      </Section>

      <Section title="Houses, not apartments">
        <p>
          With very few apartment blocks, almost every home has a letterbox at the street, so a walker reaches nearly
          every household on the route.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Brighton East">
        <Bullets
          items={[
            <>Landscapers, pool services, <TextLink href="/industries/roofing">roofers</TextLink> and other home trades</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes and long-held properties</>,
            <>Cafes, takeaway and services on Hawthorn Road</>,
            <>Tutors, swim schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/dentists">Dental</TextLink> and family health practices</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Brighton East and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Brighton East drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Brighton East, Brighton, Bentleigh"
      />

      <FAQSection items={faqs} title="Brighton East letterbox drop FAQs" />
    </>
  );
}
