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

const PAGE_PATH = "/melbourne/flyer-distribution-glen-iris";

// About 11,300 homes in Glen Iris 3146 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Glen Iris VIC 3146 | South East Flyers" },
  description:
    "Flyer distribution in Glen Iris 3146, from High Street to Burke Road. GPS-tracked letterbox drops checked block by block. Get a fast free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Glen Iris VIC 3146 | South East Flyers",
    description: "GPS-tracked letterbox drops across Glen Iris 3146, along Gardiners Creek. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Glen Iris?",
    answer:
      "About 11,300. Just over half are houses, the rest townhouses and apartments. Your quote gives the reachable count for your streets.",
  },
  {
    question: "Glen Iris is in two councils. Does that matter for a drop?",
    answer:
      "Not for delivery; we plan by streets, not council lines. It can matter for your message, since each side shops at a different centre.",
  },
  {
    question: "How much of Glen Iris can one drop cover?",
    answer:
      "The suburb is long and narrow, so covering it all usually takes two or three runs. Most businesses start near their shop.",
  },
  {
    question: "Do you deliver to apartment blocks in Glen Iris?",
    answer:
      "Yes, where the letterboxes can be reached from the street. Locked mailrooms are skipped and your quote counts only what we can reach.",
  },
  {
    question: "Do you also deliver in Malvern and Camberwell?",
    answer:
      "Yes. Glen Iris sits between them, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Glen Iris VIC 3146",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Glen Iris, VIC 3146",
    address: { "@type": "PostalAddress", addressLocality: "Glen Iris", addressRegion: "VIC", postalCode: "3146", addressCountry: "AU" },
  },
};

export default function GlenIris() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Glen Iris" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Glen Iris"
        lead="Get your flyers into letterboxes along High Street and across 3146 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "11,300", label: "homes in Glen Iris 3146, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution along Gardiners Creek" first>
        <p>
          Glen Iris follows Gardiners Creek between Malvern and Camberwell, split between Stonnington in the west and
          Boroondara in the east, with Gardiner and Glen Iris stations in the middle. A targeted letterbox campaign
          across Glen Iris can reach up to 11,300 homes. Our walkers skip locked mailrooms, and your GPS report shows
          every block covered.
        </p>
      </Section>

      <Section title="Letterbox drops for Glen Iris trades and shops">
        <p>
          Glen Iris is a strong area for <TextLink href="/industries/renovation">renovators</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>, painters and gardeners on its established
          homes, and for the shops on High Street and near Burke Road. Start near your shop, then widen the run.
        </p>
      </Section>

      <Section title="Two sides, two shopping centres">
        <p>
          Residents in the west shop on High Street; those in the east head to Burke Road and Camberwell Junction. Drop
          around the strip your customers actually use.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Glen Iris">
        <Bullets
          items={[
            <>Renovators, electricians, painters and gardeners working on established homes</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes and townhouses</>,
            <>Cafes and shops on High Street and near Burke Road</>,
            <>Tutors, music schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/healthcare">Physios, dentists and GPs</TextLink> serving local families</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Glen Iris and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Glen Iris drop"
        lead="Send us your streets and flyer count, and we'll come back with the reachable letterbox number and a quote, quickly."
        suburbHint="e.g. Glen Iris, Malvern, Camberwell"
      />

      <FAQSection items={faqs} title="Glen Iris letterbox drop FAQs" />
    </>
  );
}
