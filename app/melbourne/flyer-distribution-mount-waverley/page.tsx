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

const PAGE_PATH = "/melbourne/flyer-distribution-mount-waverley";

// About 13,900 homes in Mount Waverley 3149 (household count used only for the
// full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Mount Waverley 3149 | South East Flyers" },
  description:
    "Flyer distribution in Mount Waverley 3149, around the village and Pinewood. GPS-tracked letterbox drops for builders, schools and shops. Free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Mount Waverley 3149 | South East Flyers",
    description: "GPS-tracked letterbox drops across Mount Waverley 3149, around the village. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many homes does a letterbox drop in Mount Waverley cover?",
    answer:
      "About 13,900, mostly houses with a letterbox at the front gate. It is one of the larger suburbs we cover.",
  },
  {
    question: "How much of Mount Waverley can a drop cover?",
    answer:
      "Most businesses split it into two or three runs, starting with the streets nearest their shop or base.",
  },
  {
    question: "Which part of Mount Waverley should a first drop cover?",
    answer:
      "Shops start around the village strip or Pinewood, trades nearest their base, agents around a listing.",
  },
  {
    question: "Is Mount Waverley good for knockdown-rebuild flyers?",
    answer:
      "Yes. Much of the suburb is post-war housing on big blocks, where owners weigh renovating against rebuilding.",
  },
  {
    question: "Do you also deliver in Glen Waverley and Chadstone?",
    answer:
      "Yes. Both sit near Mount Waverley in the City of Monash, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Mount Waverley VIC 3149",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Mount Waverley, VIC 3149",
    address: { "@type": "PostalAddress", addressLocality: "Mount Waverley", addressRegion: "VIC", postalCode: "3149", addressCountry: "AU" },
  },
};

export default function MountWaverley() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Mount Waverley" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Mount Waverley"
        lead="Get your flyers into letterboxes around Mount Waverley village and across 3149 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "13,900", label: "homes in Mount Waverley 3149, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Mount Waverley village" first>
        <p>
          Mount Waverley is a family suburb in the City of Monash, with two stations on the Glen Waverley line, a
          village strip by the station and another around Pinewood. A targeted letterbox campaign across Mount Waverley
          can reach up to 13,900 homes, usually planned in stages. Flyer distribution in Mount Waverley reaches both village strips and the school-zone streets between.
        </p>
      </Section>

      <Section title="Letterbox drops for builders, schools and shops">
        <p>
          Mount Waverley is a strong area for builders and renovators, with post-war homes being rebuilt on big blocks,
          and for the tutoring, music and swim schools its families use. The village and Pinewood shops do well too.
          Start nearest your base, then widen the run.
        </p>
      </Section>

      <Section title="Bilingual flyers reach more homes">
        <p>
          Like Glen Waverley next door, many households speak Mandarin or Cantonese. A flyer with a key line in Chinese
          reaches more of the suburb.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Mount Waverley">
        <Bullets
          items={[
            <>Builders, renovators and knockdown-rebuild specialists</>,
            <>Tutoring centres, music schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes in school zones</>,
            <>Cafes, restaurants and takeaway around the village strips and Pinewood</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> serving local families</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Mount Waverley and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>, Wheelers Hill and
            Oakleigh, so flyer distribution across Monash can run over several suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Mount Waverley drop"
        lead="Send us a section of the suburb or a school zone, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Mount Waverley, Glen Waverley, Chadstone"
      />

      <FAQSection items={faqs} title="Mount Waverley letterbox drop FAQs" />
    </>
  );
}
