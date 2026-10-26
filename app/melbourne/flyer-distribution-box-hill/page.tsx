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

const PAGE_PATH = "/melbourne/flyer-distribution-box-hill";

// About 7,800 homes in Box Hill 3128 (household count used only for the
// full-coverage cost estimate; Box Hill North and Box Hill South are separate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Box Hill VIC 3128 | South East Flyers" },
  description:
    "Flyer distribution in Box Hill 3128, from Whitehorse Road towers to the house streets around them. Exclusive, GPS-tracked, never bundled. $200 per 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Box Hill VIC 3128 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Box Hill 3128. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Box Hill?",
    answer:
      "Box Hill 3128 has about 7,800 homes, and more than half are apartments. Many towers have mailrooms we can't enter, so your quote counts the letterboxes our walkers can actually reach from the street.",
  },
  {
    question: "What does it cost to cover all of Box Hill?",
    answer:
      "About $1,600 at $200 per 1,000 flyers, before you remove any locked buildings. Most businesses start with 1,000 to 2,500 flyers around their shop or clinic and widen the area once calls come in.",
  },
  {
    question: "Can I send bilingual flyers in Box Hill?",
    answer:
      "Yes. Many Box Hill businesses print English on one side and Chinese on the other, and we deliver them the same way as any flyer. We distribute only, so the printing and translation stay with you.",
  },
  {
    question: "Can one campaign cover Box Hill, Blackburn and Burwood?",
    answer:
      "Yes. All three are in our Whitehorse service area, along with Box Hill North, Box Hill South and Nunawading, and we can quote them together with a single GPS report.",
  },
  {
    question: "Do you deliver to the house streets south of Whitehorse Road?",
    answer:
      "Yes. The streets of older houses towards Box Hill South and Surrey Hills have letterboxes at the front gate, so coverage there is close to every home on the route. Many trades start in those streets.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Box Hill VIC 3128",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Box Hill, VIC 3128",
    address: { "@type": "PostalAddress", addressLocality: "Box Hill", addressRegion: "VIC", postalCode: "3128", addressCountry: "AU" },
  },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
};

export default function BoxHill() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Box Hill" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Box Hill"
        lead="Flyer distribution in Box Hill 3128, the busiest centre in Melbourne's east, where apartment towers sit a block from streets of older houses. Your flyer goes in on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "7,800", label: "homes in Box Hill 3128, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$1,600", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Box Hill at a glance" first>
        <p>
          Box Hill is the main centre of the City of Whitehorse. Box Hill Central sits on top of the train station and
          bus interchange, Whitehorse Road and Station Street carry most of the shops, and Box Hill Hospital, Epworth
          Eastern and Box Hill Institute bring thousands of people in each day.
        </p>
        <p>
          For a letterbox drop that means about 7,800 homes, and the mix matters more here than in most suburbs.
          Towers line Whitehorse Road and the streets around the station, while the blocks towards Surrey Hills and
          Box Hill South are still mostly houses.
        </p>
      </Section>

      <Section title="Towers, mailrooms and what we can reach">
        <p>
          Apartment growth is the big change in Box Hill, with more towers approved around the station and the future
          Suburban Rail Loop stop. Some buildings have letterbox banks at the street entrance; others keep them in a
          locked mailroom that walkers can&rsquo;t enter.
        </p>
        <p>
          We tell you this up front. Your quote counts only the letterboxes we can reach, and the GPS report shows the
          route walked. For tower-heavy streets, many businesses put more of their budget into the house streets
          nearby, where almost every home has a letterbox at the gate.
        </p>
      </Section>

      <Section title="A food and shopping centre for the whole east">
        <p>
          Box Hill draws diners and shoppers from well beyond its postcode. The restaurant strip around Market Street
          and Carrington Road, the grocers inside Box Hill Central and the cafes along Station Street all compete for
          the same households.
        </p>
        <p>
          A drop of 1,000 to 2,500 flyers around your venue reaches the residents who can walk in tonight. Many venues
          print a menu in English and Chinese, and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> businesses do the same
          for a similar reason. Our <TextLink href="/industries/restaurants">restaurant and cafe flyers</TextLink> page
          covers menu design and timing.
        </p>
      </Section>

      <Section title="Hospitals, students and health practices">
        <p>
          Box Hill Hospital and Epworth Eastern make the suburb a base for specialists, allied health and family
          clinics, and Box Hill Institute brings in students who rent nearby. Clinics often cover the streets within a
          kilometre to reach patients who would rather not drive.
        </p>
        <p>
          Students and renters move often, so a practice or gym that drops at the start of each semester reaches new
          arrivals before they settle on a provider. See <TextLink href="/industries/healthcare">healthcare flyers</TextLink>{" "}
          for what a clinic flyer should include.
        </p>
      </Section>

      <Section title="Who letterbox drops in Box Hill suit">
        <Bullets
          items={[
            <>Restaurants, grocers and takeaway in the Market Street and Station Street precinct</>,
            <>Clinics and allied health near Box Hill Hospital and Epworth Eastern</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> selling apartments and older houses on big blocks</>,
            <>Tutoring centres and kids&rsquo; programs serving local families</>,
            <><TextLink href="/industries/builders">Builders</TextLink> and other trades working on the house streets</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Letterbox drop cost in Box Hill"
          figures={[
            { value: "$200", label: "first test, 1,000 flyers" },
            { value: "$1,600", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively, with a
          1,000-flyer minimum. Our flyer distribution across Whitehorse also reaches Blackburn, Burwood and Nunawading.
          See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, our{" "}
          <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east and eastern Melbourne</TextLink>{" "}
          suburb list, or{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> to the south.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Box Hill letterboxes?"
        lead="Tell us your venue or streets and quantity. We'll quote with the reachable letterbox count within 24 hours."
        suburbHint="e.g. Box Hill, Blackburn, Burwood"
      />

      <FAQSection items={faqs} title="Box Hill letterbox drop FAQs" />
    </>
  );
}
