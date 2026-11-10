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

const PAGE_PATH = "/melbourne/flyer-distribution-hampton";

// About 7,900 homes in Hampton 3188 (household count used only to describe
// how much of the suburb a drop covers; Hampton East is a separate suburb).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Hampton VIC 3188 | South East Flyers" },
  description:
    "Flyer distribution in Hampton 3188, from Hampton Street to the beach. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Hampton VIC 3188 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Hampton 3188. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Hampton?",
    answer:
      "About 7,900. Most are houses and townhouses, with a smaller band of apartments near the station, so a walking route covers a high share of the suburb.",
  },
  {
    question: "Is Hampton the same as Hampton East?",
    answer:
      "No. Hampton East is a separate suburb east of the Nepean Highway, with more units and its own shops. Businesses near the boundary often cover both, and we can quote them together.",
  },
  {
    question: "Can I target just the streets around Hampton Street?",
    answer:
      "Yes. Shops and clinics on Hampton Street usually start with the streets a short walk away. Send your address and we'll quote that area, with a GPS map of the route.",
  },
  {
    question: "When is the best time for a drop in Hampton?",
    answer:
      "Late winter suits outdoor trades and builders before the summer rush. Agents drop before the spring and autumn selling seasons, when Hampton's family homes draw the most interest.",
  },
  {
    question: "Do you also deliver in Brighton and Sandringham?",
    answer:
      "Yes. Both sit beside Hampton in the City of Bayside, with Brighton East and Black Rock nearby, so one campaign can take in several suburbs under a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Hampton VIC 3188",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Hampton, VIC 3188",
    address: { "@type": "PostalAddress", addressLocality: "Hampton", addressRegion: "VIC", postalCode: "3188", addressCountry: "AU" },
  },
};

export default function Hampton() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Hampton" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Hampton"
        lead="Get your flyers into letterboxes around Hampton Street and across 3188 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "7,900", label: "homes in Hampton 3188, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Hampton Street" first>
        <p>
          Hampton Street is the suburb&rsquo;s spine. It runs from the station down towards the beach and carries most
          of Hampton&rsquo;s shops, cafes and clinics, with the City of Bayside stretching either side between Brighton
          and Sandringham. A full Hampton campaign reaches up to 7,900 homes.
        </p>
      </Section>

      <Section title="One street carries most of the trade">
        <p>
          Because so much sits on the one strip, a Hampton Street business lives on the streets within a short walk of
          it. Our walkers drop those blocks first, so an opening offer or a changed menu reaches the people most likely
          to call in this week.
        </p>
        <p>
          Hampton East, east of the Nepean Highway, is a separate suburb with its own shops. A business near the
          boundary can run both in one campaign, and the GPS map keeps the two sides clearly apart.
        </p>
      </Section>

      <Section title="Rebuilt homes keep the trades busy">
        <p>
          The streets between Hampton Street and the beach are full of family homes, many rebuilt or extended in recent
          years. Owners spend on gardens, pools, decks and second storeys, and they keep the flyer of a trade who works
          nearby.
        </p>
        <p>
          That suits landscapers, pool services,{" "}
          <TextLink href="/industries/carpenters">carpenters</TextLink> building decks and pergolas, and{" "}
          <TextLink href="/industries/builders">builders</TextLink>. A late-winter drop lands before the summer rush,
          while your diary still has room.
        </p>
      </Section>

      <Section title="A strong suburb for agents">
        <p>
          Hampton&rsquo;s family homes pull buyers from across Melbourne, and every listing draws attention from
          neighbours as well. Just-listed, open-home and sold flyers around a property keep an agent&rsquo;s name in
          front of the next person thinking of selling.
        </p>
        <p>
          See our <TextLink href="/industries/real-estate">real estate letterbox drops</TextLink> page for how agents
          plan a campaign around a single listing.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Hampton">
        <Bullets
          items={[
            <>Cafes, restaurants and shops on Hampton Street</>,
            <>Landscapers, pool services and outdoor trades before summer</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working bayside family homes</>,
            <>Gyms, physios and health practices near the station</>,
            <><TextLink href="/industries/cleaning">Cleaners</TextLink>, <TextLink href="/industries/plumbers">plumbers</TextLink> and other <TextLink href="/industries/home-services">home services</TextLink></>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Hampton and nearby suburbs">
          <p className="m-0">
            A Hampton drop carries your flyer and <strong className="text-ink">nothing else beside it</strong>. We
            also cover <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton-east">Brighton East</TextLink> across the bayside, so a
            campaign can take in a few suburbs at once. Quantities and pricing sit on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> shows where else
            we deliver.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Hampton drop"
        lead="Point us at Hampton Street or the streets around your shop, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Hampton, Sandringham, Brighton"
      />

      <FAQSection items={faqs} title="Hampton letterbox drop FAQs" />
    </>
  );
}
