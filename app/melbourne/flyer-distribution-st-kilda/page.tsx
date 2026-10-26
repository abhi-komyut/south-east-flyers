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

const PAGE_PATH = "/melbourne/flyer-distribution-st-kilda";

// About 14,100 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution St Kilda VIC 3182 | South East Flyers" },
  description:
    "Flyer distribution St Kilda 3182: Fitzroy Street, Acland Street. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers, from 1,000. Free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution St Kilda VIC 3182 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across St Kilda 3182. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in St Kilda?",
    answer:
      "St Kilda 3182 has about 14,100 homes, almost all apartments. Many blocks have shared mail rooms rather than individual street letterboxes, so your quote gives the reachable count for your streets.",
  },
  {
    question: "What does a letterbox drop across all of St Kilda cost?",
    answer:
      "About $2,800 at $200 per 1,000 flyers, though that figure assumes every block is reachable, which isn't the case in an apartment suburb. Most St Kilda businesses start much smaller: 1,000 flyers around Fitzroy Street or Acland Street costs $200, and you can expand from there once you see which streets respond.",
  },
  {
    question: "Does a letterbox drop still work in an apartment suburb?",
    answer:
      "Yes, where mail rooms allow access. We reach what we can from the street and report exactly which blocks were covered, so you know your real reach before you book a bigger run.",
  },
  {
    question: "Is St Kilda worth repeat drops given how many renters move through?",
    answer:
      "Often, yes. With tenants turning over, a quarterly drop reaches a fresh audience each time rather than repeating the same households, which suits hospitality and rental-focused agents.",
  },
  {
    question: "Can you target just Fitzroy Street or just Acland Street?",
    answer:
      "Yes. Tell us which strip your customers come from and we will quote for the surrounding streets only, rather than all of St Kilda. Most new venues start this way, then widen the run once they know which blocks are actually generating calls.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in St Kilda VIC 3182",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "St Kilda, VIC 3182",
    address: { "@type": "PostalAddress", addressLocality: "St Kilda", addressRegion: "VIC", postalCode: "3182", addressCountry: "AU" },
  },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
};

export default function StKilda() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "St Kilda" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in St Kilda"
        lead="Flyer distribution in St Kilda 3182, across Fitzroy Street, Acland Street and the streets around them. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "Full suburb about $2,800"]}
        ctaLabel="Get a Free St Kilda Quote"
      />

      <ProofStrip />

      <Section title="St Kilda at a glance">
        <p>
          St Kilda is Melbourne&rsquo;s beachside entertainment suburb: Luna Park, the Palais Theatre and St Kilda
          Pier sit close to Fitzroy Street&rsquo;s bars and restaurants, with Acland Street&rsquo;s cafes and cake
          shops a short walk away. The Route 96 tram runs the length of both strips.
        </p>
        <p>
          For a letterbox drop that means about 14,100 homes, almost all of them apartments rather than houses,
          which changes how a route is planned compared with a suburb like Brighton or Camberwell.
        </p>
      </Section>

      <Section title="An apartment suburb needs a different kind of route" tone="gray">
        <p>
          Most St Kilda buildings are flats, many of them older art deco blocks with a shared mail room rather
          than individual letterboxes on the street. Where a mail room is accessible, we deliver into it; where
          it is locked, that block is skipped and shown as such on your GPS report.
        </p>
        <p>
          This means a St Kilda quote is about the reachable letterboxes on your chosen streets, not a simple
          multiple of homes. We tell you the real number before you commit to a run.
        </p>
        <p>
          Whether you search for letterbox drop St Kilda, letterbox distribution St Kilda, leaflet
          distribution St Kilda or pamphlet delivery St Kilda, you&rsquo;ll land on the same service: exclusive
          delivery, GPS-tracked.
        </p>
      </Section>

      <Section title="A renter suburb with regular turnover">
        <p>
          St Kilda has one of the highest renter populations we service, with young professionals and creatives
          moving through often. That turnover is a reason to drop more than once: a flyer that reached last
          quarter&rsquo;s tenants will reach a different set of households this quarter.
        </p>
        <p>
          It also suits rental-focused real estate agents directly, since a steady stream of new arrivals is
          always looking for their next place nearby.
        </p>
      </Section>

      <Section title="Fitzroy Street and Acland Street trade" tone="gray">
        <p>
          Hospitality drives St Kilda&rsquo;s economy. Bars, restaurants and cafes on both strips compete for the
          same passing foot traffic and the same nearby apartments, so a flyer delivered on its own, not folded
          into a stack of other offers, stands out.
        </p>
        <p>
          A new venue typically starts with 1,000 to 2,500 flyers in the blocks immediately behind its strip,
          then repeats the drop each season with a different offer.
        </p>
      </Section>

      <Section title="Who letterbox drops in St Kilda suit">
        <Bullets
          items={[
            <>Bars, restaurants and cafes on Fitzroy Street and Acland Street</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working rentals and apartment sales</>,
            <>Local businesses: boutiques, galleries and beauty studios</>,
            <><TextLink href="/industries/healthcare">Health and wellness practices</TextLink> near the beach and the strips</>,
            <>Events and venues promoting gigs, markets or festival dates</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <Section title="Letterbox drop cost in St Kilda">
        <p>
          Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively. A 1,000-flyer drop around one
          strip costs $200; the whole suburb costs about $2,800. St Kilda sits in the City of Port Phillip, so our
          flyer distribution across Port Phillip also reaches St Kilda East, Elwood, Balaclava and Albert Park.
          See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="St Kilda Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach St Kilda letterboxes?"
        body="Tell us your strip and quantity, and we'll send a quote with the reachable letterbox count within 24 hours."
      />
    </>
  );
}
