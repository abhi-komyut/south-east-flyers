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
    "Flyer distribution in Kew 3101 for families, schools and Kew Junction shops. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Kew VIC 3101 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Kew 3101. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Kew?",
    answer:
      "About 10,600. Kew has more apartments than most, so locked mail rooms are skipped and the GPS report shows your real reach.",
  },
  {
    question: "When is the best time for a drop in Kew?",
    answer:
      "Tutors and family services should drop at the start of each school term, when parents are planning activities.",
  },
  {
    question: "Can I target just the streets around Kew Junction?",
    answer:
      "Yes. Send us your shop address and we'll quote for the streets around it, not the whole suburb.",
  },
  {
    question: "Should Kew flyers be in English and Chinese?",
    answer:
      "Consider it if your customers include Kew's Chinese-speaking families. We deliver whatever you print.",
  },
  {
    question: "Do you also deliver in Hawthorn and Camberwell?",
    answer:
      "Yes. Both are in our Boroondara service area, so one campaign can cover Kew and either suburb, with one GPS report.",
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
          Kew Junction, where High Street meets Cotham Road, is the suburb&rsquo;s main shopping and dining strip. A
          targeted letterbox campaign across Kew can reach up to 10,600 homes.
        </p>
      </Section>

      <Section title="Letterbox drops near Kew's schools">
        <p>
          Kew is a family suburb, home to Xavier College, Trinity Grammar and Methodist Ladies&rsquo; College. Tutors,
          music teachers and kids&rsquo; activities do well with a drop at the start of each term.
        </p>
      </Section>

      <Section title="Start with the streets around the Junction">
        <p>
          Most Kew homes have a letterbox on the street, so our walkers reach nearly every door, though locked
          apartment mail rooms are skipped. Shops can start with 1,000 to 2,500 flyers in the nearby streets, then
          cover more of the suburb.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Kew">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working period homes and townhouses</>,
            <>Plumbers, roofers and other <TextLink href="/industries/home-services">home services</TextLink> on older homes</>,
            <>Cafes and restaurants on High Street</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Kew and nearby suburbs"
        >
          <p className="m-0">
            Every drop is exclusive, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>. We also cover{" "}
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
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Kew, Kew East, Hawthorn"
      />

      <FAQSection items={faqs} title="Kew letterbox drop FAQs" />
    </>
  );
}
