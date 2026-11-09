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

const PAGE_PATH = "/melbourne/flyer-distribution-brighton-east";

// About 6,400 homes in Brighton East 3187 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton East 3187 | South East Flyers" },
  description:
    "Flyer distribution in Brighton East 3187: about 6,400 homes, mostly family houses. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton East 3187 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Brighton East 3187. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton East?",
    answer:
      "Brighton East 3187 has about 6,400 homes. Around seven in ten are separate houses and most of the rest are townhouses, so almost every home on a route has a letterbox at the street.",
  },
  {
    question: "Is Brighton East different from Brighton for a letterbox drop?",
    answer:
      "Yes. Brighton East has fewer apartments and more family houses on quieter streets, away from the beach and Church Street. Family services and home trades often do better here than in central Brighton.",
  },
  {
    question: "Can I cover the whole of Brighton East in one run?",
    answer:
      "Many businesses do. At about 6,400 homes, it fits a single campaign, and a GPS report shows every street covered. Others start with the streets around Hawthorn Road and extend from there.",
  },
  {
    question: "Can one campaign cover Brighton East, Brighton and Bentleigh?",
    answer:
      "Yes. All three are in our service area, along with Hampton and Caulfield South, and we can quote them together with a single GPS report.",
  },
  {
    question: "When do agents drop flyers in Brighton East?",
    answer:
      "Before the spring and autumn selling seasons, and around every new listing. Many family homes here are held for a long time, so appraisal flyers to long-term owners are a common first campaign.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Brighton East VIC 3187",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Brighton East, VIC 3187",
    address: { "@type": "PostalAddress", addressLocality: "Brighton East", addressRegion: "VIC", postalCode: "3187", addressCountry: "AU" },
  },
};

export default function BrightonEast() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Brighton East" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Brighton East"
        lead="Flyer distribution in Brighton East 3187, the family-house side of Brighton, away from the beach. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "6,400", label: "homes in Brighton East 3187, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="6,400 homes, almost all houses" first>
        <p>
          Brighton East sits in the City of Bayside, east of the Nepean Highway, between Brighton and Bentleigh. Hawthorn Road carries its main shops, and Dendy Park and the public golf course give it more
          open space than its better-known neighbour.
        </p>
        <p>
          For a letterbox drop that means about 6,400 homes, mostly houses and townhouses on quiet residential streets.
          It is a suburb most businesses can cover in full.
        </p>
      </Section>

      <Section title="Houses, not apartments">
        <p>
          Unlike central Brighton, Brighton East has very few apartment blocks. Almost every home has a letterbox at
          the street, so a walker reaches nearly every household on the route and your flyer isn&rsquo;t stopped at a
          locked mailroom.
        </p>
        <p>
          Those houses also need upkeep. Gardens, pools, roofs, extensions and second-storey additions keep{" "}
          <TextLink href="/industries/home-services">home services</TextLink> busy, and owners here keep the flyer of
          a trade who works locally.
        </p>
      </Section>

      <Section title="Families and long-term owners">
        <p>
          Many Brighton East families have been in the same house for years, and school-age children keep them there.
          That makes it a strong suburb for tutoring, music and swim schools, family health practices and
          after-school programs.
        </p>
        <p>
          Long-term ownership also means quiet streets for agents. An appraisal flyer reaches owners who may not have
          had their home valued in a decade. See our{" "}
          <TextLink href="/industries/real-estate">real estate letterbox drops</TextLink> page for campaign timing.
        </p>
      </Section>

      <Section title="Hawthorn Road and the local shops">
        <p>
          Hawthorn Road is Brighton East&rsquo;s main shopping street, with cafes, takeaway and everyday services
          serving the surrounding streets. A 1,000 to 2,500 flyer drop around the strip reaches the households most
          likely to walk or drive in.
        </p>
        <p>
          Businesses near the eastern edge can extend the same drop into Bentleigh, since residents cross the
          boundary for shopping without thinking about it.
        </p>
      </Section>

      <Section title="Agents, renovators and Hawthorn Road trades in Brighton East">
        <Bullets
          items={[
            <>Landscapers, pool services, <TextLink href="/industries/roofing">roofers</TextLink> and other home trades</>,
            <>Real estate agents working family homes and long-held properties</>,
            <>Cafes, takeaway and services on Hawthorn Road</>,
            <>Tutors, swim schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/dentists">Dental</TextLink> and family health practices</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Covering Brighton East's 6,400 homes">
          <p className="m-0">
            Every Brighton East drop is yours alone, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>, from
            1,000 flyers. Our flyer distribution across Bayside also covers{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> next door. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Brighton East drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Brighton East, Brighton, Bentleigh"
      />

      <FAQSection items={faqs} title="Brighton East letterbox drop FAQs" />
    </>
  );
}
