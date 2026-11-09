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
      "Hampton 3188 has about 7,900 homes. Most are houses and townhouses, with a smaller share of apartments near Hampton Street, so coverage on a standard walking route is high.",
  },
  {
    question: "Can I target just the streets around Hampton Street?",
    answer:
      "Yes. Shops, cafes and clinics on Hampton Street usually start with the streets within a short walk. Give us your address and we'll quote that area only, with a GPS map of the route.",
  },
  {
    question: "Is Hampton different from Hampton East?",
    answer:
      "Yes. Hampton East is a separate suburb east of the Nepean Highway, with more units and a different shopping area. Many businesses near the boundary cover both, and we can quote them together.",
  },
  {
    question: "Can one campaign cover Hampton, Sandringham and Brighton?",
    answer:
      "Yes. All three are in our Bayside service area, along with Brighton East and Black Rock, and we can quote them together with a single GPS report.",
  },
  {
    question: "When is the best time for a letterbox drop in Hampton?",
    answer:
      "Spring suits outdoor trades, pool services and hospitality as the beach season starts. Agents drop before the spring and autumn selling seasons, when Hampton's family homes see the most interest.",
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

      <Section title="Hampton at a glance" first>
        <p>
          Hampton sits in the City of Bayside between Brighton and Sandringham. Hampton station on the Sandringham line
          opens onto Hampton Street, which runs down towards the beach and carries most of the suburb&rsquo;s shops,
          cafes and services.
        </p>
        <p>
          For a letterbox drop that means about 7,900 homes, mostly houses and townhouses, with some apartments close
          to the station and the shopping strip.
        </p>
      </Section>

      <Section title="One street does most of the trade">
        <p>
          Hampton Street is the suburb&rsquo;s centre. Locals walk or ride to its cafes, butchers, bakeries, gyms and
          clinics, so the households within a kilometre or so are the ones a Hampton Street business can win.
        </p>
        <p>
          A 1,000 to 2,500 flyer drop around the strip reaches those households directly. An opening offer, a new
          menu or a seasonal special works well, and a repeat drop a few weeks later keeps the name familiar.
        </p>
      </Section>

      <Section title="Beachside houses and busy trades">
        <p>
          The streets between Hampton Street and the beach are full of family homes, many rebuilt or extended in
          recent years. Owners spend on gardens, pools, outdoor areas and renovations, especially before summer.
        </p>
        <p>
          That suits landscapers, pool services,{" "}
          <TextLink href="/industries/carpenters">carpenters</TextLink> building decks and pergolas, and{" "}
          <TextLink href="/industries/builders">builders</TextLink>. A drop in late winter lands before the rush, while
          your diary still has room.
        </p>
      </Section>

      <Section title="A strong suburb for agents">
        <p>
          Hampton&rsquo;s family homes attract buyers from across Melbourne, and listings get attention from
          neighbours as well as buyers. Just listed, open home and sold flyers around each property keep an
          agent&rsquo;s name in front of the next vendor.
        </p>
        <p>
          See our <TextLink href="/industries/real-estate">real estate letterbox drops</TextLink> page for how agents
          plan a campaign around a listing.
        </p>
      </Section>

      <Section title="Who letterbox drops in Hampton suit">
        <Bullets
          items={[
            <>Cafes, restaurants and shops on Hampton Street</>,
            <>Landscapers, pool services and outdoor trades before summer</>,
            <>Real estate agents working bayside family homes</>,
            <>Gyms, physios and health practices near the station</>,
            <><TextLink href="/industries/cleaning">Cleaners</TextLink>, <TextLink href="/industries/plumbers">plumbers</TextLink> and other home services</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Letterbox drop quantities in Hampton">
          <p className="m-0">
            Every drop is <strong className="text-ink">delivered exclusively, never bundled</strong>, starting from
            1,000 flyers. Our flyer distribution across Bayside also covers{" "}
            <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton-east">Brighton East</TextLink>. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Hampton letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count, with a quick turnaround."
        suburbHint="e.g. Hampton, Sandringham, Brighton"
      />

      <FAQSection items={faqs} title="Hampton letterbox drop FAQs" />
    </>
  );
}
