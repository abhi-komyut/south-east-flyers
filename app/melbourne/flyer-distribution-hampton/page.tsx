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

const PAGE_PATH = "/melbourne/flyer-distribution-hampton";

// About 7,900 homes in Hampton 3188 (household count used only to describe
// how much of the suburb a drop covers; Hampton East is a separate suburb).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Hampton VIC 3188 | South East Flyers" },
  description:
    "Flyer distribution in Hampton 3188, along Hampton Street to the beach. GPS-tracked letterbox drops for agents, builders and cafes. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Hampton VIC 3188 | South East Flyers",
    description: "GPS-tracked letterbox drops across Hampton 3188, around Hampton Street. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many homes can a letterbox drop in Hampton reach?",
    answer:
      "About 7,900, mostly houses and townhouses, with some apartments near the station.",
  },
  {
    question: "Is Hampton the same as Hampton East?",
    answer:
      "No. Hampton East is a separate suburb east of the Nepean Highway, with its own shops. We can quote both together.",
  },
  {
    question: "Can I target just the streets around Hampton Street?",
    answer:
      "Yes. Send your address and we'll quote the streets a short walk from the strip.",
  },
  {
    question: "When is the best time for a drop in Hampton?",
    answer:
      "Late winter for outdoor trades and builders. Agents drop before the spring and autumn selling seasons.",
  },
  {
    question: "Do you also deliver in Brighton and Sandringham?",
    answer:
      "Yes. Both sit beside Hampton in the City of Bayside, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Hampton VIC 3188",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Hampton, VIC 3188",
    address: { "@type": "PostalAddress", addressLocality: "Hampton", addressRegion: "VIC", postalCode: "3188", addressCountry: "AU" },
  },
};

export default function Hampton() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Hampton" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Hampton"
        lead="Get your flyers into letterboxes around Hampton Street and across 3188 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "7,900", label: "homes in Hampton 3188, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Hampton Street" first>
        <p>
          Hampton Street runs from the station down towards the beach and carries most of the suburb&rsquo;s shops,
          cafes and clinics. A targeted letterbox campaign across Hampton can reach up to 7,900 homes. Flyer distribution in Hampton follows the street from the station down to the beach.
        </p>
      </Section>

      <Section title="Letterbox drops for Hampton agents and trades">
        <p>
          Hampton is a strong area for agents working its family homes, and for the{" "}
          <TextLink href="/industries/builders">builders</TextLink> and{" "}
          <TextLink href="/industries/carpenters">carpenters</TextLink> rebuilding and extending them. Hampton Street
          cafes draw steady trade. Start with the streets around your shop, then widen the run.
        </p>
      </Section>

      <Section title="Rebuilt homes keep the trades busy">
        <p>
          The streets between Hampton Street and the beach are full of family homes, many rebuilt in recent years.
          Owners spend on gardens, pools, decks and second storeys, so a late-winter drop lands before the summer rush.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Hampton">
        <Bullets
          items={[
            <>Cafes, restaurants and shops on Hampton Street</>,
            <>Landscapers, pool services and outdoor trades before summer</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working bayside family homes</>,
            <>Gyms, physios and health practices near the station</>,
            <><TextLink href="/industries/cleaning">Cleaners</TextLink>, <TextLink href="/industries/plumbers">plumbers</TextLink> and other <TextLink href="/industries/home-services">home services</TextLink></>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Hampton and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton-east">Brighton East</TextLink>, so campaigns can be
            spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Hampton drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Hampton, Sandringham, Brighton"
      />

      <FAQSection items={faqs} title="Hampton letterbox drop FAQs" />
    </>
  );
}
