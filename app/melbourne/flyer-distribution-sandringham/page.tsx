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
    "Flyer distribution in Sandringham 3191, around the village and the beach. Cover the whole compact suburb in one GPS-tracked run. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Sandringham VIC 3191 | South East Flyers",
    description: "GPS-tracked letterbox drops across Sandringham 3191, around the village. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Sandringham?",
    answer:
      "About 4,900, nearly all houses and townhouses with a street letterbox a walker can reach.",
  },
  {
    question: "Can a letterbox drop cover all of Sandringham at once?",
    answer:
      "Yes. The suburb is compact, so most businesses cover all 4,900 homes in one run.",
  },
  {
    question: "Can I target just the streets around Sandringham village?",
    answer:
      "Yes. Give us your address and we'll quote the village streets only.",
  },
  {
    question: "When is the best time for a drop in Sandringham?",
    answer:
      "Spring and early summer for gardens, pools and hospitality. Agents send appraisal flyers in late winter.",
  },
  {
    question: "Do you also deliver in Hampton and Black Rock?",
    answer:
      "Yes. Both border Sandringham in the City of Bayside, so one run can cover a few suburbs.",
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
          foreshore, the harbour and the yacht club. A targeted letterbox campaign across Sandringham can reach up to
          4,900 homes. Flyer distribution in Sandringham runs across the 3191 postcode.
        </p>
      </Section>

      <Section title="Letterbox drops for the village and bayside trades">
        <p>
          Sandringham is a strong area for the village cafes, butchers and boutiques that locals walk to, and for
          landscapers, pool services and painters on the beachside houses. Agents send appraisal flyers to long-term
          owners. Start with the village streets, or cover the whole suburb in one run.
        </p>
      </Section>

      <Section title="Time drops to the beach season">
        <p>
          As summer nears, residents spend on gardens, pools and outdoor living. Book a late-winter drop to land before
          the rush.
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
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink>, Black Rock and Beaumaris, so
            campaigns can be spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Sandringham drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Sandringham, Hampton, Black Rock"
      />

      <FAQSection items={faqs} title="Sandringham letterbox drop FAQs" />
    </>
  );
}
