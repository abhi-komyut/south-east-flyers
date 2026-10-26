import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  Callout,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/cleaning";

export const metadata: Metadata = {
  title: { absolute: "House Cleaning Flyers Melbourne | South East Flyers" },
  description:
    "House cleaning flyers delivered on their own to the streets on your cleaning routes in Melbourne's south-east. GPS-tracked, $200 per 1,000, from 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "House Cleaning Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for cleaning businesses across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do house cleaning flyers work?",
    answer:
      "They suit cleaning well because one new client can mean a booking every week or fortnight for years. A flyer that reaches the streets you already clean in adds clients without adding travel time between jobs.",
  },
  {
    question: "Where should a cleaner drop flyers?",
    answer:
      "In the streets around clients you already have. Cleaning is a route business, so a new client two doors from an existing one is worth more than one across town. Give us your current suburbs and we'll quote those streets.",
  },
  {
    question: "Can I advertise bathroom deep cleans and end-of-lease cleans?",
    answer:
      "Yes, but give each its own drop. Regular cleans suit family-home streets. End-of-lease cleans suit apartment and rental streets, such as around St Kilda or Box Hill, timed for the busy moving months from December to February.",
  },
  {
    question: "What should a cleaning flyer offer?",
    answer:
      "A clear first-clean offer, what is included, your police checks and insurance, and how to book. Owners are letting someone into their home, so trust details matter more than a low price.",
  },
  {
    question: "How many flyers should a cleaner start with?",
    answer:
      "1,000 to 2,500 homes around your current clients, at $200 to $500. Repeat the same streets a month later. Cleaning is a regular service, and most bookings come after a household has seen your name twice.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for cleaning businesses",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "House cleaning and bathroom cleaning businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Cleaning() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Cleaning" },
        ]}
        h1="House cleaning flyers for Melbourne cleaners"
        lead="House cleaning flyers delivered on their own to the streets you already clean in, so each new client fits your route. Every run is GPS-tracked."
        image={{ src: "/images/redesign/letterbox-hand.jpg", alt: "A hand posting a flyer into a steel letterbox" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Cleaning is a route business" first>
        <p>
          A cleaner&rsquo;s profit depends on travel. Three homes in the same street can be done in a morning; three
          homes in three suburbs take the whole day. The most valuable new client lives near the clients you already
          have.
        </p>
        <p>
          Letterbox drops let you choose exactly those streets. Give us the suburbs on your current route, we cover the
          homes around them, and the GPS report shows which streets received your flyer.
        </p>
      </Section>

      <Section title="One client, years of bookings">
        <p>
          A regular clean is booked every week or fortnight. A household that signs up from a $200 drop can be worth
          thousands of dollars a year, which is why cleaning businesses can afford to repeat drops in the same
          streets.
        </p>
        <p>
          Most households don&rsquo;t book after the first flyer. They keep it, mention it to a partner and book when
          life gets busy. A second drop four to six weeks later is often the one that brings the call.
        </p>
      </Section>

      <Section title="Regular, bathroom and end-of-lease cleans">
        <Bullets
          items={[
            <><strong>Regular house cleans</strong> suit family streets in suburbs like <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> and <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>, where both parents work.</>,
            <><strong>Bathroom deep cleans</strong> work as an entry offer. Bathroom cleaning flyers with a fixed price get a first booking that often becomes regular.</>,
            <><strong>End-of-lease cleans</strong> suit rental streets in <TextLink href="/melbourne/flyer-distribution-st-kilda">St Kilda</TextLink> and <TextLink href="/melbourne/flyer-distribution-box-hill">Box Hill</TextLink>, timed for December to February.</>,
          ]}
        />
      </Section>

      <Section title="What a cleaning flyer needs">
        <Bullets
          items={[
            <><strong>A first-clean offer</strong> with a clear price or what is included.</>,
            <><strong>Trust details:</strong> police checks, insurance and whether the same cleaner comes each time.</>,
            <><strong>A simple way to book</strong>, by phone, text or a short web address.</>,
          ]}
        />
        <p>
          Owners are letting someone into their home. A photo of you or your team does more for a cleaning business
          flyer than any stock image of a spotless kitchen.
        </p>
      </Section>

      <Section title="Measuring house cleaning flyers">
        <p>
          Give each drop its own first-clean code, and note the street of every booking. After two or three runs you
          will see which streets book and which don&rsquo;t, and the GPS report shows exactly where each flyer went.
        </p>
        <p>
          Count the value over time, not just the first booking. A client who books a fortnightly clean from a $200
          drop pays for that drop many times over in the first few months. That is the number to compare when you
          decide whether to repeat a street.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities and cost"
          figures={[{ value: "$200", label: "1,000 homes on your route" }, { value: "$500", label: "2,500 homes, repeat monthly" }]}
        >
          Every drop is $200 per 1,000 flyers, exclusive, from 1,000. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more quantities. Cleaning is
          part of our <TextLink href="/industries/home-services">home services</TextLink> page, alongside{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink> and{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Fill the gaps in your cleaning route"
        lead="Tell us the suburbs you clean in now. We'll quote the streets around them within 24 hours."
      />

      <FAQSection items={faqs} title="Cleaning business letterbox drop FAQs" />
    </>
  );
}
