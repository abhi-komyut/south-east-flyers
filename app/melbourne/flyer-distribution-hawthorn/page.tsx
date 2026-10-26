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
    "Flyer distribution in Hawthorn 3122, from Glenferrie Road to the streets near Swinburne. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers.",
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
      "Hawthorn 3122 has about 11,900 homes, a mix of houses and apartment blocks. Your quote gives the reachable count for the streets you choose, since some apartment blocks have shared mail rooms.",
  },
  {
    question: "What does a letterbox drop across all of Hawthorn cost?",
    answer:
      "About $2,400 at $200 per 1,000 flyers. Many Hawthorn businesses start with 1,000 to 2,500 flyers around Glenferrie Road or Swinburne before covering more of the suburb.",
  },
  {
    question: "Does Hawthorn suit flyers aimed at students?",
    answer:
      "Yes, around Swinburne University and the Glenferrie Road and station end of the suburb, where share houses and apartments are concentrated. Further from the station, the audience is more family homeowners.",
  },
  {
    question: "Can you target just the streets near Glenferrie Road?",
    answer:
      "Yes. Give us your shop address and we will quote for the surrounding streets rather than the whole suburb. That's the usual starting point for cafes and shops that draw from foot traffic on the strip itself.",
  },
  {
    question: "Do you deliver in Camberwell and Kew too?",
    answer:
      "Yes. Both border Hawthorn and are in our service area, so one campaign can cover all three with a single GPS report, which is useful if your customers don't stop neatly at a suburb boundary.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Hawthorn 3122, from Glenferrie Road out to the leafy streets around Swinburne. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "11,900", label: "homes in Hawthorn 3122, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$2,400", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Hawthorn at a glance" first>
        <p>
          Hawthorn is an established inner-east suburb in the City of Boroondara, with Glenferrie Road as its
          main strip of shops, cafes and banks. Hawthorn and Glenferrie stations sit on the Belgrave, Lilydale
          and Alamein lines, and trams 16 and 109 run through as well.
        </p>
        <p>
          For a letterbox drop that means about 11,900 homes, a mix of period houses on the quieter streets and
          apartment blocks closer to the station and Swinburne University.
        </p>
      </Section>

      <Section title="Two audiences on the same streets">
        <p>
          Swinburne University&rsquo;s main campus sits in Hawthorn, so the blocks near the station and Glenferrie
          Road have a large student and share-house population. A few streets further out, the audience shifts
          to long-term family owners in houses.
        </p>
        <p>
          That split matters for targeting. A flyer aimed at students does better close to the campus and
          station; a flyer aimed at homeowners does better in the residential streets further from Glenferrie
          Road. Tell us which audience you want and we will plan the route around it.
        </p>
      </Section>

      <Section title="Apartments near the station, houses further out">
        <p>
          Blocks close to Glenferrie Road and the stations are mostly flats, some with shared mail rooms that
          limit how many letterboxes a route can reach. The quieter streets toward Hawthorn East and Kew are
          mostly houses with a letterbox at the front gate, so coverage there is close to complete.
        </p>
        <p>
          We plan each route around this. If your offer suits students, we focus on the station end; if it
          suits homeowners, we focus on the house streets.
        </p>
      </Section>

      <Section title="Glenferrie Road trade and Scotch College">
        <p>
          Glenferrie Road carries steady foot traffic from Swinburne, Scotch College families and local
          residents, so shops and cafes there benefit from a flyer that reaches the surrounding blocks directly
          rather than competing for attention on the strip itself.
        </p>
        <p>
          A typical first run is 1,000 to 2,500 flyers in the streets behind the strip, repeated each term as
          the student population turns over.
        </p>
      </Section>

      <Section title="Who letterbox drops in Hawthorn suit">
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
        <Callout
          title="Letterbox drop cost in Hawthorn"
          figures={[
            { value: "$200", label: "first test, near Glenferrie Road" },
            { value: "$2,400", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively. Our flyer
          distribution across Boroondara also reaches Kew and Camberwell. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Hawthorn letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
        suburbHint="e.g. Hawthorn, Hawthorn East, Kew"
      />

      <FAQSection items={faqs} title="Hawthorn letterbox drop FAQs" />
    </>
  );
}
