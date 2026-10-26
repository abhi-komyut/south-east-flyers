import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  ProofStrip,
  Section,
  Bullets,
  CtaBanner,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/melbourne/flyer-distribution-kew";

// About 10,600 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Kew VIC 3101 | South East Flyers" },
  description:
    "Flyer distribution in Kew 3101 for families, schools and Kew Junction shops. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers, from 1,000.",
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
      "Kew 3101 has about 10,600 homes. It has a fair number of apartments, and blocks with locked mail rooms are skipped, so your quote gives the reachable count for your streets.",
  },
  {
    question: "What does a letterbox drop across all of Kew cost?",
    answer:
      "About $2,100 at $200 per 1,000 flyers. Most businesses start smaller: 1,000 flyers around Kew Junction or one school catchment costs $200, then expand once they know which streets respond.",
  },
  {
    question: "Is Kew a good suburb for tutoring and kids' activity flyers?",
    answer:
      "Yes. Kew is a family suburb with several large schools. Drops in late January and before each school term line up with when parents plan activities.",
  },
  {
    question: "Can I target just the streets near Kew Junction?",
    answer:
      "Yes. Give us your shop address and how far your customers walk or drive, and we will quote for those streets only, which is the usual starting point for Junction cafes and shops.",
  },
  {
    question: "Should Kew flyers be in English and Chinese?",
    answer:
      "Consider it if your customers include Kew's Chinese-speaking families. An English flyer with a short Chinese line works; we deliver whatever you print.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Kew 3101, from Kew Junction out to the streets near the Yarra. Each flyer is delivered on its own and every route is GPS-tracked."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "Full suburb about $2,100"]}
        ctaLabel="Get a Free Kew Quote"
      />

      <ProofStrip />

      <Section title="Kew at a glance">
        <p>
          Kew is a family suburb in the City of Boroondara, with large period homes, townhouses and apartment blocks.
          Kew Junction, where High Street meets Cotham Road, is the main shopping and dining strip, and the suburb runs
          north and west down to the Yarra.
        </p>
        <p>
          For a letterbox drop that means about 10,600 homes, with more apartments than Brighton or Glen Waverley,
          which affects how many letterboxes a route can reach.
        </p>
        <p>
          Whether you search for letterbox drop Kew, letterbox distribution Kew, leaflet distribution Kew or
          pamphlet delivery Kew, you&rsquo;ll land on the same service: exclusive delivery, GPS-tracked.
        </p>
      </Section>

      <Section title="Families and school catchments" tone="gray">
        <p>
          Kew is full of school-age families, and the suburb is home to several large schools, including
          Xavier College, Trinity Grammar and Methodist Ladies&rsquo; College. That makes Kew a strong suburb for
          tutors, music teachers, swim schools, holiday programs and childcare.
        </p>
        <p>
          Timing matters for these businesses. Parents plan activities in late January and in the fortnight before
          each term, so a drop in those windows lands when the decision is being made.
        </p>
      </Section>

      <Section title="Planning around Kew's apartments">
        <p>
          Kew has more apartments than most suburbs we cover. Blocks with locked mail rooms can&rsquo;t be reached, so a street with
          several of them yields fewer letterboxes than a street lined with houses.
        </p>
        <p>
          We plan routes around this. If your customers are homeowners, we weight the drop toward the house streets.
          If you sell to renters or young professionals, we include the apartment blocks we can reach, and the GPS
          report shows which ones those were.
        </p>
      </Section>

      <Section title="Kew Junction shops and cafes" tone="gray">
        <p>
          Most of Kew&rsquo;s retail and dining sits around Kew Junction and along High Street. Customers for those
          businesses mostly walk or make a short drive, so a drop of 1,000 to 2,500 flyers in the streets around the
          Junction reaches the people most likely to come in this week.
        </p>
        <p>
          A new cafe or restaurant can repeat the drop with a different offer each time: an opening offer, then a
          weekday lunch deal, then a family dinner night. The GPS reports show which streets each drop reached, so you
          can match them against redemptions.
        </p>
      </Section>

      <Section title="Businesses that do well with Kew letterbox drops">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working the suburb&rsquo;s period homes and townhouses</>,
            <><TextLink href="/industries/home-services">Home services</TextLink> such as <TextLink href="/industries/plumbers">plumbers</TextLink> and <TextLink href="/industries/roofing">roofers</TextLink> maintaining older homes</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> near Kew Junction</>,
            <>Cafes and restaurants on High Street</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <Section title="Letterbox drop cost in Kew">
        <p>
          Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively. One school catchment or the
          streets around the Junction (1,000 flyers) costs $200; the whole suburb is about $2,100. Our flyer
          distribution across Boroondara also reaches Hawthorn and Camberwell. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Kew Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Kew families?"
        body="Tell us your streets or school catchment and quantity. We'll quote within 24 hours."
      />
    </>
  );
}
