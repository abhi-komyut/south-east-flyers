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

const PAGE_PATH = "/melbourne/flyer-distribution-kew";

// About 10,600 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Kew VIC 3101 | South East Flyers" },
  description:
    "Flyer distribution in Kew 3101, around Kew Junction and the school streets. GPS-tracked letterbox drops checked block by block. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Kew VIC 3101 | South East Flyers",
    description: "GPS-tracked letterbox drops across Kew 3101, around Kew Junction. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Kew?",
    answer:
      "About 10,600, with more apartments than most suburbs we cover. Your quote gives the reachable count for your streets. A letterbox drop in Kew starts from 1,000 flyers.",
  },
  {
    question: "Which schools make Kew good for family flyers?",
    answer:
      "Xavier College, Trinity Grammar and Methodist Ladies' College all sit in Kew. Tutoring and kids' activity flyers do well at the start of each term.",
  },
  {
    question: "Can I target just the streets near Kew Junction?",
    answer:
      "Yes. Tell us your shop and how far your customers travel, and we'll quote a radius around it.",
  },
  {
    question: "Should Kew flyers be in English and Chinese?",
    answer:
      "Consider it if your customers include Kew's Chinese-speaking families. We deliver whatever you print.",
  },
  {
    question: "Do you also deliver in Hawthorn and Camberwell?",
    answer:
      "Yes. Both border Kew in the City of Boroondara, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Kew VIC 3101",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Kew, VIC 3101",
    address: { "@type": "PostalAddress", addressLocality: "Kew", addressRegion: "VIC", postalCode: "3101", addressCountry: "AU" },
  },
};

export default function Kew() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Kew" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Kew"
        lead="Get your flyers into letterboxes around Kew Junction and across 3101 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "10,600", label: "homes in Kew 3101, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Kew Junction" first>
        <p>
          Kew Junction, where High Street meets Cotham Road, is the suburb&rsquo;s shopping and dining hub, with the
          streets running down to the Yarra. A targeted letterbox campaign across Kew can reach up to 10,600 homes. Flyer distribution in Kew runs across the 3101 postcode. Our
          walkers skip locked mailrooms, and your GPS report shows every block covered.
        </p>
      </Section>

      <Section title="Letterbox drops for Kew's schools and shops">
        <p>
          Kew is a strong area for tutors, music teachers and swim schools, with Xavier College, Trinity Grammar and
          Methodist Ladies&rsquo; College in the suburb. Cafes and trades on the older homes do well too. Start with the
          streets around the Junction or your nearest school.
        </p>
      </Section>

      <Section title="Time school drops to the term">
        <p>
          Parents choose activities in late January and the fortnight before each term. Book a drop into those windows.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Kew">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working period homes and townhouses</>,
            <>Plumbers, roofers and other <TextLink href="/industries/home-services">home services</TextLink> on older homes</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> near the Junction</>,
            <>Cafes and restaurants on High Street</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Kew and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-hawthorn">Hawthorn</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Kew drop"
        lead="Send us your streets and flyer count, and we'll come back with the reachable letterbox number and a quote, quickly."
        suburbHint="e.g. Kew, Kew East, Hawthorn"
      />

      <FAQSection items={faqs} title="Kew letterbox drop FAQs" />
    </>
  );
}
