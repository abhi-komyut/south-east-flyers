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
    "Flyer distribution in Hawthorn 3122, from Glenferrie Road to the streets near Swinburne. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Hawthorn VIC 3122 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Hawthorn 3122. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Hawthorn?",
    answer:
      "About 11,900, a mix of houses and apartment blocks. Your quote gives the reachable count for the streets you choose, since some blocks have shared mailrooms.",
  },
  {
    question: "Does Hawthorn suit flyers aimed at students?",
    answer:
      "Yes, around Swinburne University and the Glenferrie Road and station end, where share houses and apartments cluster. Further from the station the audience shifts to family homeowners.",
  },
  {
    question: "How much of Hawthorn can a letterbox drop cover?",
    answer:
      "Up to all 11,900 homes, though many Hawthorn businesses start with 1,000 to 2,500 flyers around Glenferrie Road or Swinburne before widening out.",
  },
  {
    question: "Can you target just the streets near Glenferrie Road?",
    answer:
      "Yes. Send your shop address and we'll quote the surrounding streets rather than the whole suburb. That is the usual starting point for cafes and shops living on foot traffic.",
  },
  {
    question: "Do you also deliver in Camberwell and Kew?",
    answer:
      "Yes. Both border Hawthorn in the City of Boroondara, so one campaign can cover all three under a single GPS report when your customers cross suburb lines.",
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
          Hawthorn is an established inner-east suburb in the City of Boroondara, with Glenferrie Road as its main strip
          of shops, cafes and banks. Hawthorn and Glenferrie stations sit on the Belgrave, Lilydale and Alamein lines,
          and trams 16 and 109 run through as well. A full Hawthorn campaign reaches up to 11,900 homes.
        </p>
      </Section>

      <Section title="Two audiences on the same streets">
        <p>
          Swinburne University&rsquo;s main campus sits in Hawthorn, so the blocks near the station and Glenferrie Road
          hold a large student and share-house population. A few streets out, the audience shifts to long-term family
          owners in houses.
        </p>
        <p>
          That split shapes the targeting. A flyer aimed at students does better close to the campus and station; a
          flyer aimed at homeowners does better in the residential streets further from Glenferrie Road. Tell us which
          audience you want and we plan the route around it.
        </p>
      </Section>

      <Section title="Apartments near the station, houses further out">
        <p>
          Blocks close to Glenferrie Road and the stations are mostly flats, some with shared mailrooms that limit how
          many letterboxes a route can reach. The quieter streets toward Hawthorn East and Kew are mostly houses with a
          letterbox at the front gate, so coverage there is close to complete.
        </p>
        <p>
          Our walkers plan each route around this. If your offer suits students, we work the station end; if it suits
          homeowners, we work the house streets.
        </p>
      </Section>

      <Section title="Glenferrie Road trade and Scotch College">
        <p>
          Glenferrie Road carries steady foot traffic from Swinburne, Scotch College families and local residents, so
          a shop or cafe there does better with a flyer that reaches the surrounding blocks directly than with one more
          sign competing on the strip.
        </p>
        <p>
          A typical first run is 1,000 to 2,500 flyers in the streets behind the strip, repeated each term as the
          student population turns over.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Hawthorn">
        <Bullets
          items={[
            <>Cafes, cheap eats and services aimed at students near Swinburne</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working both rentals and family homes</>,
            <><TextLink href="/industries/home-services">Home services</TextLink> such as <TextLink href="/industries/plumbers">plumbers</TextLink> and <TextLink href="/industries/roofing">roofers</TextLink> maintaining Hawthorn&rsquo;s older houses</>,
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
            Every Hawthorn run carries your flyer alone, <strong className="text-ink">never shared with another advertiser</strong>. We also
            deliver in <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> next door, so a Boroondara
            campaign can span a few suburbs at once. Quantity pricing is set out on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, with the full list on our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Hawthorn drop"
        lead="Say whether you want the student end or the house streets, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Hawthorn, Hawthorn East, Kew"
      />

      <FAQSection items={faqs} title="Hawthorn letterbox drop FAQs" />
    </>
  );
}
