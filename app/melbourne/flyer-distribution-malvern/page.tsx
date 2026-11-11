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

const PAGE_PATH = "/melbourne/flyer-distribution-malvern";

// About 4,800 homes in Malvern 3144 (household count used only for the
// full-coverage cost estimate; Malvern East is a separate suburb).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Malvern VIC 3144 | South East Flyers" },
  description:
    "Flyer distribution in Malvern 3144, around Glenferrie Road and High Street. GPS-tracked letterbox drops for trades and shops. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Malvern VIC 3144 | South East Flyers",
    description: "GPS-tracked letterbox drops across Malvern 3144, around Glenferrie Road. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Malvern?",
    answer:
      "About 4,800, mostly houses and townhouses with a street letterbox. It is small enough to cover in one run.",
  },
  {
    question: "Can a letterbox drop cover all of Malvern at once?",
    answer:
      "Yes. At about 4,800 homes most businesses cover the whole suburb in a single run.",
  },
  {
    question: "Is Malvern a good fit for trades on period homes?",
    answer:
      "Yes. Roofs, wiring, plumbing and gardens on the older homes need regular work, and owners keep a trade's flyer.",
  },
  {
    question: "Do you deliver flyers for health practices near Cabrini?",
    answer:
      "Yes. Clinics near Cabrini Malvern often cover the surrounding streets. Send your address and we'll quote that radius.",
  },
  {
    question: "Do you also deliver in Armadale and Glen Iris?",
    answer:
      "Yes. Both sit beside Malvern, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Malvern VIC 3144",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Malvern, VIC 3144",
    address: { "@type": "PostalAddress", addressLocality: "Malvern", addressRegion: "VIC", postalCode: "3144", addressCountry: "AU" },
  },
};

export default function Malvern() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Malvern" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Malvern"
        lead="Get your flyers into letterboxes between Glenferrie Road and High Street, and across 3144, with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "4,800", label: "homes in Malvern 3144, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Glenferrie Road, Malvern" first>
        <p>
          Malvern sits in the City of Stonnington, its shops along Glenferrie Road and the High Street boutiques it
          shares with Armadale, with trams on Glenferrie, Wattletree and High Street. A targeted letterbox campaign
          across Malvern can reach up to 4,800 homes. Flyer distribution in Malvern runs across the 3144 postcode.
        </p>
      </Section>

      <Section title="Letterbox drops for Malvern's trades and shops">
        <p>
          Malvern is a strong area for <TextLink href="/industries/roofing">roofers</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink> and painters on its period homes, and for the
          Glenferrie Road and High Street shops. Start with the streets around your shop or clinic, or cover the whole
          suburb in one run.
        </p>
      </Section>

      <Section title="Period homes keep the trades busy">
        <p>
          Malvern&rsquo;s Victorian and Edwardian houses need constant work on roofs, wiring and gardens. A photo of a
          restored roof on a similar house does more than any discount.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Malvern">
        <Bullets
          items={[
            <>Trades and restoration specialists working on period homes</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> farming Malvern&rsquo;s heritage streets</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink> near Cabrini and Glenferrie Road</>,
            <>Cafes, restaurants and boutiques on Glenferrie Road and High Street</>,
            <>Tutors and kids&rsquo; programs serving local families</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Malvern and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover Armadale,{" "}
            <TextLink href="/melbourne/flyer-distribution-glen-iris">Glen Iris</TextLink> and Caulfield North, so
            campaigns can be spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Malvern drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Malvern, Armadale, Glen Iris"
      />

      <FAQSection items={faqs} title="Malvern letterbox drop FAQs" />
    </>
  );
}
