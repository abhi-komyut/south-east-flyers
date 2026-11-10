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
    "Flyer distribution in Mount Waverley 3149: family homes, school zones and two village strips. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Mount Waverley 3149 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Mount Waverley 3149. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Mount Waverley?",
    answer:
      "About 13,900, mostly houses with a letterbox at the front gate. It is one of the larger suburbs we cover, so most businesses start with one part of it.",
  },
  {
    question: "How much of Mount Waverley can a letterbox drop cover?",
    answer:
      "Up to all 13,900 homes, though many businesses split it into two or three drops, starting with the streets nearest their shop or base.",
  },
  {
    question: "Which part of Mount Waverley should a first drop cover?",
    answer:
      "Shops usually start around the Mount Waverley village strip by the station or Pinewood. Trades start closest to their base, and agents start with the blocks around a listing.",
  },
  {
    question: "Is Mount Waverley good for knockdown-rebuild and renovation flyers?",
    answer:
      "A strong fit. Much of the suburb is post-war housing on generous blocks, where owners weigh renovating against rebuilding. A builder's flyer with a nearby project photo lands well.",
  },
  {
    question: "Do you also deliver in Glen Waverley and Chadstone?",
    answer:
      "Yes. Both sit near Mount Waverley in the City of Monash, with Oakleigh and Wheelers Hill close by, so one campaign can take in several suburbs under a single GPS report.",
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
          Mount Waverley is a family suburb in the City of Monash, between Glen Waverley and Chadstone. Two stations on
          the Glen Waverley line, Mount Waverley and Syndal, bracket a village strip by the station and another around
          Pinewood, and the secondary school zones keep families here for years. A campaign across the whole suburb
          reaches up to 13,900 homes, usually planned in stages.
        </p>
      </Section>

      <Section title="Renovate or rebuild: a suburb in transition">
        <p>
          Much of Mount Waverley went up in the post-war decades on generous blocks. Many of those homes are now being
          extended, renovated or knocked down for two-storey family houses, so there is a steady flow of owners weighing
          up big building decisions.
        </p>
        <p>
          That suits builders, renovators, <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink> and landscapers. A neighbour drop around a current
          project, with a photo of the finished house, turns one job into the next enquiry. Our{" "}
          <TextLink href="/industries/home-services">home services</TextLink> page has timing and flyer tips.
        </p>
      </Section>

      <Section title="School-zone families">
        <p>
          Families move to Mount Waverley for its schools and tend to stay through the school years. That makes it a
          strong suburb for tutoring centres, music and swim schools, holiday programs and family health practices.
        </p>
        <p>
          Aim those drops at the week or two before each term starts, when parents are locking in the year&rsquo;s
          activities. Like <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> next
          door, many households speak Mandarin or Cantonese at home, so a flyer with a key line in Chinese reaches more
          of the suburb.
        </p>
      </Section>

      <Section title="Planning a drop across a big suburb">
        <p>
          At nearly 14,000 homes, Mount Waverley is too large for most businesses to cover in one go, and it
          doesn&rsquo;t need to be. Highbury Road and Waverley Road split it into natural sections, and the two stations
          give it two separate local centres.
        </p>
        <p>
          A sensible plan starts with the section nearest your shop or base, tracks the calls for a few weeks, then
          rolls into the next section with the same flyer. Three runs of around 4,500 homes each cover the suburb over a
          season, with a GPS report for every one.
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
            On a Mount Waverley drop your flyer goes out by itself, <strong className="text-ink">with nothing else packed in beside it</strong>. We
            also cover <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>, Wheelers
            Hill, Oakleigh and Chadstone across Monash, so a campaign can run over several suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for what each quantity costs, and
            the <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> for the other
            suburbs we reach.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Mount Waverley drop"
        lead="Give us a section of the suburb or a school zone, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Mount Waverley, Glen Waverley, Chadstone"
      />

      <FAQSection items={faqs} title="Mount Waverley letterbox drop FAQs" />
    </>
  );
}
