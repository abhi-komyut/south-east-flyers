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

const PAGE_PATH = "/melbourne/flyer-distribution-brighton";

// About 10,500 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton VIC 3186 | South East Flyers" },
  description:
    "Flyer distribution in Brighton 3186: exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers, from 1,000. Free quote in 24 hours.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton VIC 3186 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Brighton 3186. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton?",
    answer:
      "Brighton 3186 has about 10,500 homes. Most are houses and townhouses with street letterboxes. Your quote gives the exact count for the streets you pick.",
  },
  {
    question: "What does it cost to cover all of Brighton?",
    answer:
      "About $2,100. We charge $200 per 1,000 flyers, so a drop to roughly 10,500 homes comes to around that figure. A 1,000-flyer test run costs $200.",
  },
  {
    question: "Do Brighton apartments get flyers?",
    answer:
      "Only where the letterboxes can be reached from the street. Blocks with locked mail rooms are skipped, and the GPS report shows which ones.",
  },
  {
    question: "Where in Brighton should a first drop go?",
    answer:
      "Shops and cafes usually start with the streets around Church Street or Bay Street. Agents start with the blocks around a listing. Trades start closest to their base.",
  },
  {
    question: "Can one campaign cover Brighton and Brighton East?",
    answer:
      "Yes. We deliver in both, as well as Hampton, Elsternwick and Sandringham, and can quote them as one campaign with a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Brighton VIC 3186",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Brighton, VIC 3186",
    address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "VIC", postalCode: "3186", addressCountry: "AU" },
  },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
};

export default function Brighton() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Brighton" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Brighton"
        lead="Flyer distribution in Brighton 3186, from North Road to the Hampton border. Your flyer goes into each letterbox on its own, every route is GPS-tracked, and you can start with 1,000 homes."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "Full suburb about $2,100"]}
        ctaLabel="Get a Free Brighton Quote"
      />

      <ProofStrip />

      <Section title="Brighton at a glance">
        <p>
          Brighton is one of the most established suburbs we cover: large period and post-war homes, wide tree-lined
          streets, and owners who have often lived in the same house for decades. Its shops sit along Church Street
          and Bay Street, and the Sandringham line runs down the middle of the suburb.
        </p>
        <p>
          For a letterbox drop that means about 10,500 homes, most of them houses with street letterboxes, and
          households that read what arrives rather than skimming it.
        </p>
      </Section>

      <Section title="Long-term owners, big decisions" tone="gray">
        <p>
          Households that have owned their home for decades make the large, considered purchases: selling and
          downsizing, renovating a kitchen, replacing a roof, choosing a new dentist. Those decisions take weeks, and a
          flyer that stays on the bench gets looked at more than once.
        </p>
        <p>
          That suits businesses with a high-value job and a long decision, such as{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink> running appraisal campaigns,{" "}
          <TextLink href="/industries/roofing">roofers</TextLink>, renovators and{" "}
          <TextLink href="/industries/healthcare">health practices</TextLink>. Repeat drops to the same streets work
          better here than one big blast.
        </p>
      </Section>

      <Section title="Mostly houses, so coverage is high">
        <p>
          Most Brighton homes are houses and townhouses with letterboxes on the street, so a drop reaches nearly every
          door on the route. In suburbs with more apartment towers, locked mail
          rooms cut that number down.
        </p>
        <p>
          Shops and cafes around Church Street and Bay Street draw from the blocks within walking distance, so a
          1,000 to 2,500 flyer drop around the strip is a sensible first test. Trades and agents usually pick the
          streets nearest their base or their listing.
        </p>
      </Section>

      <Section title="Timing a Brighton drop around the property market" tone="gray">
        <p>
          Melbourne&rsquo;s busiest selling season runs from September to early December, with a smaller peak in
          autumn. Brighton agents push appraisal flyers in the weeks before each season, and renovators, painters and
          landscapers follow, because owners getting ready to sell want the house looking its best.
        </p>
        <p>
          If your business benefits from that cycle, book your Brighton drops for late winter and late summer, when
          owners are planning rather than already in the middle of a campaign.
        </p>
      </Section>

      <Section title="Who letterbox drops in Brighton suit">
        <Bullets
          items={[
            <>Agents with appraisal and just-sold campaigns aimed at long-term owners</>,
            <>Builders and renovators working on Brighton&rsquo;s older homes</>,
            <><TextLink href="/industries/plumbers">Plumbers</TextLink>, <TextLink href="/industries/electricians">electricians</TextLink> and other trades based in the bayside suburbs</>,
            <>Dentists, physios and GPs taking on new patients</>,
            <>Cafes and restaurants near Church Street and Bay Street</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <Section title="Letterbox drop cost in Brighton">
        <p>
          Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively. A first test costs $200; the
          whole suburb costs about $2,100. The <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
          has more quantities, and our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
          lists every suburb we cover, including <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Brighton Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Brighton letterboxes?"
        body="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
      />
    </>
  );
}
