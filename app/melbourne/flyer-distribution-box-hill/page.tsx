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

const PAGE_PATH = "/melbourne/flyer-distribution-box-hill";

// About 7,800 homes in Box Hill 3128 (household count used only for the
// full-coverage cost estimate; Box Hill North and Box Hill South are separate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Box Hill VIC 3128 | South East Flyers" },
  description:
    "Flyer distribution in Box Hill 3128, around Box Hill Central and the house streets. GPS-tracked drops checked block by block. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Box Hill VIC 3128 | South East Flyers",
    description: "GPS-tracked letterbox drops across Box Hill 3128, around Box Hill Central. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Box Hill?",
    answer:
      "About 7,800, more than half apartments. Your quote gives the reachable count for your streets.",
  },
  {
    question: "Does a drop reach the apartment towers?",
    answer:
      "We deliver to every mailroom we can reach from the street, and the GPS report shows which blocks were covered.",
  },
  {
    question: "Can I send bilingual flyers in Box Hill?",
    answer:
      "Yes. Print English and Chinese and we deliver them like any flyer. We distribute only, so printing stays with you.",
  },
  {
    question: "Where should a Box Hill drop start?",
    answer:
      "Start around your shop or clinic. Many trades start in the house streets toward Box Hill South and Surrey Hills.",
  },
  {
    question: "Do you also deliver in Blackburn and Burwood?",
    answer:
      "Yes. Both sit near Box Hill in the City of Whitehorse, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Box Hill VIC 3128",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Box Hill, VIC 3128",
    address: { "@type": "PostalAddress", addressLocality: "Box Hill", addressRegion: "VIC", postalCode: "3128", addressCountry: "AU" },
  },
};

export default function BoxHill() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Box Hill" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Box Hill"
        lead="Get your flyers into letterboxes around Box Hill Central and across 3128 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "7,800", label: "homes in Box Hill 3128, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Box Hill Central" first>
        <p>
          Box Hill is the main centre of the City of Whitehorse. Box Hill Central sits on the station and bus
          interchange, with the shops along Whitehorse Road and Station Street and the hospital precinct close by. A
          targeted letterbox campaign across Box Hill can reach up to 7,800 homes. Flyer distribution in Box Hill runs across the 3128 postcode. Our flyer distribution reaches Whitehorse suburbs from Blackburn to Nunawading. Our walkers skip locked mailrooms,
          and your GPS report shows every block covered.
        </p>
      </Section>

      <Section title="Letterbox drops for Box Hill venues and trades">
        <p>
          Box Hill is a strong area for restaurants and grocers around Market Street and Station Street, and for
          clinics near Box Hill Hospital and Epworth Eastern. It suits trades working the house streets toward Surrey
          Hills and Box Hill South. Start around your shop, then widen the run.
        </p>
      </Section>

      <Section title="Bilingual flyers reach more homes">
        <p>
          Many Box Hill venues print English on one side and Chinese on the other. We deliver them like any flyer, so a
          menu or offer lands in the language a household reads.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Box Hill">
        <Bullets
          items={[
            <>Restaurants, grocers and takeaway around Market Street and Station Street</>,
            <>Clinics and allied health near Box Hill Hospital and Epworth Eastern</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> selling apartments and older houses</>,
            <>Tutoring centres and kids&rsquo; programs</>,
            <><TextLink href="/industries/builders">Builders</TextLink> and trades working the house streets</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Box Hill and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover Blackburn,
            Burwood and Nunawading, so campaigns can be spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Box Hill drop"
        lead="Send us your venue or streets, and we'll come back with the reachable letterbox number and a quote, quickly."
        suburbHint="e.g. Box Hill, Blackburn, Burwood"
      />

      <FAQSection items={faqs} title="Box Hill letterbox drop FAQs" />
    </>
  );
}
