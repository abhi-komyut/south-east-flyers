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

const PAGE_PATH = "/melbourne/flyer-distribution-bentleigh";

// About 7,500 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Bentleigh VIC 3204 | South East Flyers" },
  description:
    "Flyer distribution in Bentleigh 3204, from Centre Road to the family streets around it. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Bentleigh VIC 3204 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Bentleigh 3204. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Bentleigh?",
    answer:
      "Bentleigh 3204 has about 7,500 homes, mostly separate houses with street letterboxes. That gives a route high coverage across most of the suburb.",
  },
  {
    question: "What does a letterbox drop across all of Bentleigh cost?",
    answer:
      "About $1,500 at $200 per 1,000 flyers. A first test run of 1,000 flyers around Centre Road costs $200, and most businesses expand from there once they can see which streets are actually calling.",
  },
  {
    question: "Is Bentleigh a good suburb for family-focused flyers?",
    answer:
      "Yes. Many buyers choose Bentleigh for nearby government secondary school zoning, so flyers for tutoring, kids' activities and family services tend to do well here.",
  },
  {
    question: "Can I target just the streets around Centre Road?",
    answer:
      "Yes. Give us your shop address and we will quote for the surrounding streets rather than the whole suburb, which is the usual starting point for shops and cafes along the strip.",
  },
  {
    question: "Are Bentleigh and Patterson train stations both inside the drop area?",
    answer:
      "Yes, both sit on the Frankston line within Bentleigh, and we can plan a route around either or both depending on where your customers are.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Bentleigh VIC 3204",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Bentleigh, VIC 3204",
    address: { "@type": "PostalAddress", addressLocality: "Bentleigh", addressRegion: "VIC", postalCode: "3204", addressCountry: "AU" },
  },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
};

export default function Bentleigh() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Bentleigh" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Bentleigh"
        lead="Flyer distribution in Bentleigh 3204, from Centre Road out through the family streets around it. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "Full suburb about $1,500"]}
        ctaLabel="Get a Free Bentleigh Quote"
      />

      <ProofStrip />

      <Section title="Bentleigh at a glance">
        <p>
          Bentleigh is a family suburb in the City of Glen Eira, with Centre Road as its main strip of more
          than 250 shops, cafes and services. Bentleigh and Patterson stations both sit on the Frankston line
          within the suburb.
        </p>
        <p>
          For a letterbox drop that means about 7,500 homes, most of them separate houses, with a smaller mix
          of townhouses and apartments closer to Centre Road and the stations.
        </p>
      </Section>

      <Section title="A suburb chosen for its school zoning" tone="gray">
        <p>
          A lot of Bentleigh&rsquo;s buyer demand comes from families chasing well-regarded government
          secondary school zones nearby. That keeps the suburb full of school-age families, which supports
          steady demand for tutoring, kids&rsquo; activities and family services through the school year.
        </p>
        <p>
          Flyers timed to late January and the fortnight before each school term tend to land when parents are
          actually deciding on activities and services for their kids.
        </p>
      </Section>

      <Section title="Mostly houses, so coverage runs high">
        <p>
          Houses make up most of Bentleigh&rsquo;s homes, with letterboxes on the street rather than shared
          mail rooms, so a route reaches a high share of the suburb. Townhouses and apartments near Centre Road
          and the stations fill in the rest.
        </p>
        <p>
          Shops along Centre Road draw from the blocks within walking distance, so a 1,000 to 2,500 flyer drop
          around the strip is a sensible first test before covering more of the suburb.
        </p>
        <p>
          Whether you search for letterbox drop Bentleigh, letterbox distribution Bentleigh, leaflet
          distribution Bentleigh or pamphlet delivery Bentleigh, you&rsquo;ll land on the same service:
          exclusive delivery, GPS-tracked.
        </p>
      </Section>

      <Section title="Centre Road trade and the family market" tone="gray">
        <p>
          Centre Road&rsquo;s long run of shops competes for the same local households, so a flyer delivered on
          its own, rather than folded into a stack of other offers, is more likely to get read on the kitchen
          bench.
        </p>
        <p>
          Because Bentleigh skews family rather than high-turnover rental, a flyer that stays in the house for a
          few weeks has more chances to be acted on than in a suburb with faster tenant churn.
        </p>
      </Section>

      <Section title="Who letterbox drops in Bentleigh suit">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes near the school zones</>,
            <><TextLink href="/industries/home-services">Home services</TextLink> such as <TextLink href="/industries/plumbers">plumbers</TextLink> and <TextLink href="/industries/electricians">electricians</TextLink></>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> along Centre Road</>,
            <>Cafes and shops on Centre Road</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <Section title="Letterbox drop cost in Bentleigh">
        <p>
          Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively. A first test run costs
          $200; the whole suburb costs about $1,500. Our flyer distribution across Glen Eira also reaches
          Caulfield. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Bentleigh Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Bentleigh letterboxes?"
        body="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
      />
    </>
  );
}
