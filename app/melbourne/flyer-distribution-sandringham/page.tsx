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
    "Flyer distribution in Sandringham 3191, from the village to the beach. Exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Sandringham VIC 3191 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Sandringham 3191. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Sandringham?",
    answer:
      "Sandringham 3191 has about 4,900 homes. Most are houses and townhouses with street letterboxes, so coverage on a standard walking route is high.",
  },
  {
    question: "What does it cost to cover all of Sandringham?",
    answer:
      "About $1,000 at $200 per 1,000 flyers. Because the suburb is compact, many businesses cover all of it in one run.",
  },
  {
    question: "Can I target just the streets around Sandringham village?",
    answer:
      "Yes. Shops and cafes in the village often start with the surrounding streets. Give us your address and we will quote for that area only.",
  },
  {
    question: "Can one campaign cover Sandringham, Hampton and Black Rock?",
    answer:
      "Yes. All three are in our service area, along with Beaumaris and Brighton, and we can quote them together with a single GPS report.",
  },
  {
    question: "When is the best time for a letterbox drop in Sandringham?",
    answer:
      "Spring and early summer suit outdoor, pool, landscaping and hospitality businesses as the beach season starts. Agents push appraisal flyers before the spring selling season.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Sandringham 3191, a compact bayside suburb with a village heart and a long stretch of beach. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "4,900", label: "homes in Sandringham 3191, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$1,000", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Sandringham at a glance" first>
        <p>
          Sandringham sits in the City of Bayside between Hampton and Black Rock. Sandringham station, the end of the
          Sandringham line, opens straight onto the village shopping strip, and the foreshore, harbour and yacht club
          sit a few minutes&rsquo; walk away. Sandringham Hospital serves the wider bayside area.
        </p>
        <p>
          For a letterbox drop that means about 4,900 homes, mostly houses and townhouses on quiet streets. It is a
          suburb most businesses can cover in full.
        </p>
      </Section>

      <Section title="A village customers walk to">
        <p>
          Much of Sandringham&rsquo;s daily spending happens in the village around the station. Locals walk or ride to
          its cafes, restaurants, butchers and boutiques, so the households within a kilometre or so are the ones a
          village business can win.
        </p>
        <p>
          A 1,000 to 2,500 flyer drop around the village reaches those households directly. An opening offer, a new
          menu or a seasonal special works well, and a repeat drop a few weeks later keeps the name familiar.
        </p>
      </Section>

      <Section title="Beach season and the spring market">
        <p>
          Demand in beachside Sandringham follows the seasons. As the weather warms, residents spend
          on gardens, pools, outdoor living and hospitality, and the spring property market brings appraisal and
          renovation decisions forward.
        </p>
        <p>
          Landscapers, pool services, <TextLink href="/industries/roofing">roofers</TextLink> and painters do well
          with a drop in late winter, before the rush. <TextLink href="/industries/real-estate">Real estate agents</TextLink>{" "}
          use the same window for appraisal flyers to long-term owners.
        </p>
      </Section>

      <Section title="Small enough to cover every month">
        <p>
          At about $1,000 for the whole suburb, Sandringham is one of the few places where a local business can
          afford to reach every household regularly. A monthly or seasonal drop to all 4,900 homes builds the kind of
          familiarity that a single campaign can&rsquo;t.
        </p>
        <p>
          Village cafes and shops use this to announce changing menus and seasonal stock. Trades and agents use it to
          stay the name residents think of first when a job or a sale comes up. Each run comes with its own GPS report,
          so you can compare one month with the next.
        </p>
      </Section>

      <Section title="Who letterbox drops in Sandringham suit">
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
        <Callout
          title="Letterbox drop cost in Sandringham"
          figures={[
            { value: "$200", label: "first test, 1,000 flyers" },
            { value: "$1,000", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively. Our flyer
          distribution across Bayside also reaches Hampton, Black Rock, Beaumaris and{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Sandringham letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
        suburbHint="e.g. Sandringham, Hampton, Black Rock"
      />

      <FAQSection items={faqs} title="Sandringham letterbox drop FAQs" />
    </>
  );
}
