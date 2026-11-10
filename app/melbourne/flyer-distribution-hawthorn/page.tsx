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

const PAGE_PATH = "/melbourne/flyer-distribution-hawthorn";

// About 11,900 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Hawthorn VIC 3122 | South East Flyers" },
  description:
    "Flyer distribution in Hawthorn 3122, around Glenferrie Road and Swinburne. GPS-tracked letterbox drops checked block by block. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Hawthorn VIC 3122 | South East Flyers",
    description: "GPS-tracked letterbox drops across Hawthorn 3122, around Glenferrie Road. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Hawthorn?",
    answer:
      "About 11,900, a mix of houses and apartments. Your quote gives the reachable count for your streets.",
  },
  {
    question: "Does Hawthorn suit flyers aimed at students?",
    answer:
      "Yes, around Swinburne University and the station, where share houses and apartments cluster. Further out it is family homeowners.",
  },
  {
    question: "Can you target just the streets near Glenferrie Road?",
    answer:
      "Yes. Send your shop address and we'll quote the surrounding streets.",
  },
  {
    question: "Where should a Hawthorn drop start?",
    answer:
      "The station end for students, the house streets toward Hawthorn East and Kew for homeowners. Tell us your audience.",
  },
  {
    question: "Do you also deliver in Camberwell and Kew?",
    answer:
      "Yes. Both border Hawthorn in the City of Boroondara, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Hawthorn VIC 3122",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Hawthorn, VIC 3122",
    address: { "@type": "PostalAddress", addressLocality: "Hawthorn", addressRegion: "VIC", postalCode: "3122", addressCountry: "AU" },
  },
};

export default function Hawthorn() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Hawthorn" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Hawthorn"
        lead="Get your flyers into letterboxes around Glenferrie Road and across 3122 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "11,900", label: "homes in Hawthorn 3122, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Glenferrie Road" first>
        <p>
          Hawthorn is an inner-east suburb in the City of Boroondara, with Glenferrie Road as its main strip and
          Hawthorn and Glenferrie stations on the Belgrave, Lilydale and Alamein lines. A targeted letterbox campaign
          across Hawthorn can reach up to 11,900 homes. Our walkers skip locked mailrooms, and your GPS report shows
          every block covered.
        </p>
      </Section>

      <Section title="Letterbox drops for two audiences">
        <p>
          Swinburne University sits in Hawthorn, so the blocks near the station suit cafes and services aimed at
          students, while the house streets further out suit trades and family services. Scotch College families add to
          the Glenferrie Road trade. Tell us your audience and we plan the route around it.
        </p>
      </Section>

      <Section title="Apartments near the station, houses further out">
        <p>
          Blocks near Glenferrie Road are mostly flats; the streets toward Hawthorn East and Kew are houses with a
          letterbox at the gate, where coverage is near complete.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Hawthorn">
        <Bullets
          items={[
            <>Cafes, cheap eats and services aimed at students near Swinburne</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working both rentals and family homes</>,
            <><TextLink href="/industries/home-services">Home services</TextLink> such as <TextLink href="/industries/plumbers">plumbers</TextLink> and <TextLink href="/industries/roofing">roofers</TextLink> on the older houses</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> along Glenferrie Road</>,
            <>Tutors and services aimed at families in the quieter streets</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Hawthorn and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Hawthorn drop"
        lead="Send us your streets and flyer count, and we'll come back with the reachable letterbox number and a quote, quickly."
        suburbHint="e.g. Hawthorn, Hawthorn East, Kew"
      />

      <FAQSection items={faqs} title="Hawthorn letterbox drop FAQs" />
    </>
  );
}
