import type { Metadata } from "next";
import Image from "next/image";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import Reveal from "../../components/Reveal";
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

const PAGE_PATH = "/melbourne/flyer-distribution-glen-waverley";

// About 16,500 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Glen Waverley 3150 | South East Flyers" },
  description:
    "Flyer distribution in Glen Waverley 3150: 16,500 homes, mostly houses. Exclusive, GPS-tracked, bilingual flyers welcome, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Glen Waverley 3150 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Glen Waverley 3150. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Glen Waverley?",
    answer:
      "About 16,500, almost all separate houses, so a route misses very few homes across the suburb.",
  },
  {
    question: "Should my Glen Waverley flyer be bilingual?",
    answer:
      "Worth considering. Glen Waverley has a large Mandarin- and Cantonese-speaking community, so an English flyer with key lines in Chinese reads well to both.",
  },
  {
    question: "Can I target the streets around the Kingsway or The Glen?",
    answer:
      "Yes. Name a radius from your shop or The Glen, and we'll price that area, not the whole suburb.",
  },
  {
    question: "When is the best time for a drop in Glen Waverley?",
    answer:
      "Restaurants pull custom any week; family services land best as a new school term begins.",
  },
  {
    question: "Do you also deliver in Mount Waverley and Wheelers Hill?",
    answer:
      "Yes. Both border Glen Waverley in the City of Monash, so a single run can cover all three.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Glen Waverley VIC 3150",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Glen Waverley, VIC 3150",
    address: { "@type": "PostalAddress", addressLocality: "Glen Waverley", addressRegion: "VIC", postalCode: "3150", addressCountry: "AU" },
  },
};

export default function GlenWaverley() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Glen Waverley" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Glen Waverley"
        lead="Get your flyers into letterboxes around the Kingsway and across 3150 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "16,500", label: "homes in Glen Waverley 3150, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around the Kingsway" first>
        <p>
          The Kingsway is Glen Waverley&rsquo;s restaurant and cafe strip, with The Glen shopping centre and the station
          close by. At full coverage a campaign reaches up to 16,500 Glen Waverley homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Glen Waverley restaurants and trades">
        <p>
          The Kingsway restaurants compete hard, so a takeaway menu delivered on its own is the one that sticks to the
          fridge. A suburb full of houses also keeps <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink> and other{" "}
          <TextLink href="/industries/home-services">home services</TextLink> busy.
        </p>
      </Section>

      <Section title="A suburb of houses, so routes miss little">
        <p>
          Apartments are rare here, so almost every letterbox sits at a front gate and a route misses very few homes.
          That keeps the cost per home low on a full-suburb campaign.
        </p>
        <p>
          Glen Waverley is large, so most businesses split it into two or three drops a few weeks apart, starting with
          the streets nearest their shop and widening as the GPS maps come back.
        </p>
      </Section>

      <Reveal as="figure" className="mx-auto mt-14 mb-0 max-w-[1144px] px-[clamp(20px,4vw,48px)] flex flex-col gap-3">
        <div className="rounded-card overflow-hidden aspect-[21/8]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker beside a letterbox on a quiet Glen Waverley street"
            width={1144}
            height={436}
            className="w-full h-full object-cover object-[50%_45%]"
          />
        </div>
        <figcaption className="text-sm text-muted">Almost every Glen Waverley home has a letterbox at the front gate.</figcaption>
      </Reveal>

      <Section title="Bilingual flyers reach more homes">
        <p>
          Glen Waverley has large Mandarin- and Cantonese-speaking communities, and a sizeable Sri Lankan one. An
          English flyer with a line or two in Chinese often gets more attention, and we deliver whatever you print.
        </p>
        <p>
          The GPS map lets you run a bilingual flyer on some streets and an English one on others, then compare which
          pulled more calls.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Glen Waverley">
        <Bullets
          items={[
            <>Restaurants and cafes on the Kingsway</>,
            <>Tutoring centres, music schools and holiday programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes in school zones</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> near The Glen</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Glen Waverley and nearby suburbs"
        >
          <p className="m-0">
            Each Glen Waverley drop carries <strong className="text-ink">only your flyer, never a bundle</strong>. We also deliver in{" "}
            <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> and Wheelers Hill
            next door, so a Monash campaign can run across a few suburbs. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page lays out quantities, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> covers the other
            suburbs we reach.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Glen Waverley drop"
        lead="Name your streets or a radius from your shop, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Glen Waverley, Mount Waverley, Wheelers Hill"
      />

      <FAQSection items={faqs} title="Glen Waverley letterbox drop FAQs" />
    </>
  );
}
