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

const PAGE_PATH = "/melbourne/flyer-distribution-st-kilda";

// About 14,100 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution St Kilda VIC 3182 | South East Flyers" },
  description:
    "Flyer distribution St Kilda 3182: Fitzroy Street, Acland Street. Exclusive, GPS-tracked, never bundled, from 1,000 flyers. Free quote.",
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
      "About 14,100 homes, almost all apartments. Many blocks have shared mailrooms rather than street letterboxes, so your quote gives the reachable count for your streets.",
  },
  {
    question: "Does a letterbox drop still work in an apartment suburb?",
    answer:
      "Yes, where mailrooms allow access. We deliver what we can from the street and report which blocks were covered, so you know your real reach before booking a bigger run.",
  },
  {
    question: "How much of St Kilda can a drop reach?",
    answer:
      "Most of the 14,100 homes, though lower than a simple full-suburb count since not every block is reachable. Most businesses start with 1,000 flyers around Fitzroy or Acland Street and widen from there.",
  },
  {
    question: "Is St Kilda worth repeat drops given how many renters move through?",
    answer:
      "Often, yes. With tenants turning over, a quarterly drop reaches a fresh audience each time rather than the same households, which suits hospitality and rental-focused agents.",
  },
  {
    question: "Can you target just Fitzroy Street or just Acland Street?",
    answer:
      "Yes. Tell us which strip your customers come from and we'll quote the surrounding streets only. Most new venues start this way, then widen once they see which blocks generate calls.",
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
        lead="Get your flyers into letterboxes around Acland and Fitzroy Streets, and across 3182, with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "14,100", label: "homes in St Kilda 3182, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Fitzroy and Acland Streets" first>
        <p>
          St Kilda is Melbourne&rsquo;s beachside entertainment suburb: Luna Park, the Palais Theatre and St Kilda Pier
          sit close to Fitzroy Street&rsquo;s bars and restaurants, with Acland Street&rsquo;s cafes and cake shops a
          short walk away. The Route 96 tram runs the length of both strips. A St Kilda campaign can take in up to
          14,100 homes, though as an apartment suburb the reachable count is lower and set street by street.
        </p>
      </Section>

      <Section title="An apartment suburb needs a different route">
        <p>
          Most St Kilda buildings are flats, many of them older art deco blocks with a shared mailroom rather than
          letterboxes on the street. Where a mailroom is open, our walkers deliver into it; where it is locked, that
          block is skipped and marked as such on your GPS report.
        </p>
        <p>
          So a St Kilda quote counts the reachable letterboxes on your chosen streets, not a flat multiple of homes. We
          tell you the real number before you commit to a run.
        </p>
      </Section>

      <Section title="A renter suburb with regular turnover">
        <p>
          St Kilda has one of the highest renter populations we cover, with young professionals and creatives moving
          through often. That turnover is a reason to drop more than once: a flyer that reached last quarter&rsquo;s
          tenants reaches a different set of households this quarter.
        </p>
        <p>
          It suits rental-focused real estate agents directly, since a steady stream of new arrivals is always looking
          for their next place nearby.
        </p>
      </Section>

      <Section title="Fitzroy Street and Acland Street trade">
        <p>
          Hospitality drives St Kilda&rsquo;s economy. Bars, restaurants and cafes on both strips compete for the same
          passing foot traffic and the same nearby apartments, so a flyer that lands on its own, clear of a pile of
          other offers, is the one a resident actually reads.
        </p>
        <p>
          A new venue usually starts with a run around the blocks right behind its strip, then repeats each season with
          a different offer.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in St Kilda">
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

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="St Kilda and nearby suburbs">
          <p className="m-0">
            A St Kilda run is yours and no one else&rsquo;s, with <strong className="text-ink">no second advertiser folded into the drop</strong>. St
            Kilda sits in the City of Port Phillip, so we also deliver in St Kilda East, Elwood, Balaclava and Albert
            Park, and in <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> down the bay. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page shows the price at each quantity,
            and the <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> lists
            every suburb we run.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your St Kilda drop"
        lead="Tell us your strip and quantity, and we'll send back the reachable letterbox count and a price."
        suburbHint="e.g. St Kilda, St Kilda East, Elwood"
      />

      <FAQSection items={faqs} title="St Kilda letterbox drop FAQs" />
    </>
  );
}
