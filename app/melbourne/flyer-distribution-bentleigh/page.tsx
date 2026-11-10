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

const PAGE_PATH = "/melbourne/flyer-distribution-bentleigh";

// About 7,500 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Bentleigh VIC 3204 | South East Flyers" },
  description:
    "Flyer distribution in Bentleigh 3204, from Centre Road to the family streets around it. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Bentleigh VIC 3204 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Bentleigh 3204. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Bentleigh?",
    answer:
      "About 7,500. Bentleigh is mostly separate houses, so nearly every home has a street letterbox a walker can reach.",
  },
  {
    question: "When is the best time for a drop in Bentleigh?",
    answer:
      "Family services do best around late January and the start of each school term, when parents are choosing activities.",
  },
  {
    question: "Why is Bentleigh strong for family-focused flyers?",
    answer:
      "Families buy here for the government secondary school zones and tend to stay, so school and family services get repeat local demand.",
  },
  {
    question: "Can I target just the streets around Centre Road?",
    answer:
      "Yes. Point us to your shop and the nearby streets, and we'll quote that block.",
  },
  {
    question: "Do you also deliver in Bentleigh East and Caulfield?",
    answer:
      "Yes. Both sit beside Bentleigh in the City of Glen Eira, so one run can cover a couple of them together.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Bentleigh VIC 3204",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Bentleigh, VIC 3204",
    address: { "@type": "PostalAddress", addressLocality: "Bentleigh", addressRegion: "VIC", postalCode: "3204", addressCountry: "AU" },
  },
};

export default function Bentleigh() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Bentleigh" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Bentleigh"
        lead="Get your flyers into letterboxes around Centre Road and across 3204 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "7,500", label: "homes in Bentleigh 3204, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Centre Road" first>
        <p>
          Centre Road is Bentleigh&rsquo;s shopping strip, and Bentleigh and Patterson stations sit on the Frankston
          line within the suburb. A suburb-wide run reaches up to 7,500 Bentleigh homes.
        </p>
      </Section>

      <Section title="Bentleigh's school zones draw families">
        <p>
          Buyers pick Bentleigh for its government secondary school zones, and families who move in tend to stay. That
          keeps steady demand for tutors, kids&rsquo; activities and family services.
        </p>
        <p>
          Those businesses do best dropping around late January and the fortnight before each term, when parents are
          deciding what their kids will do.
        </p>
      </Section>

      <Section title="A suburb of separate houses">
        <p>
          Bentleigh is mostly separate houses, with townhouses and a few apartments near the stations. Houses line most
          streets, so a walker works down a whole street without skipping doors.
        </p>
        <p>
          Most shops open with 1,000 to 2,500 flyers in the streets closest to the door, then push further out once the
          GPS map shows which blocks responded.
        </p>
      </Section>

      <Reveal as="figure" className="mx-auto mt-14 mb-0 max-w-[1144px] px-[clamp(20px,4vw,48px)] flex flex-col gap-3">
        <div className="rounded-card overflow-hidden aspect-[21/8]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker beside a letterbox on a quiet Bentleigh street"
            width={1144}
            height={436}
            className="w-full h-full object-cover object-[50%_45%]"
          />
        </div>
        <figcaption className="text-sm text-muted">A walker on a Bentleigh street.</figcaption>
      </Reveal>

      <Section title="Centre Road shops and the family market">
        <p>
          The Centre Road strip competes for the same local households, so a flyer delivered on its own, not folded
          into a stack of offers, is the one that gets read on the bench.
        </p>
        <p>
          Centre Road itself is one of the south-east&rsquo;s busier eating strips, with a long run of cafes, bakeries
          and restaurants between Bentleigh and Patterson stations. A new menu or opening offer dropped into the streets
          either side of the strip reaches the households who walk to it, rather than drivers passing through.
        </p>
        <p>
          Because Bentleigh skews family rather than short-stay rental, a flyer that sits in the house for a few weeks
          has more chances to be acted on than in a suburb with faster turnover.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Bentleigh">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes near the school zones</>,
            <>Plumbers, electricians and other <TextLink href="/industries/home-services">home services</TextLink></>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> along Centre Road</>,
            <>Cafes and shops on Centre Road</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Bentleigh and nearby suburbs"
        >
          <p className="m-0">
            In Bentleigh your flyer is delivered on its own, <strong className="text-ink">never stacked with another advertiser&rsquo;s</strong>. We
            also cover <TextLink href="/melbourne/flyer-distribution-bentleigh-east">Bentleigh East</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink> next door, so a Glen Eira
            campaign can take in a few suburbs together. Quantities and pricing sit on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> shows where else
            we deliver.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Bentleigh drop"
        lead="Point us to your streets or a block around your shop, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Bentleigh, Bentleigh East, Caulfield"
      />

      <FAQSection items={faqs} title="Bentleigh letterbox drop FAQs" />
    </>
  );
}
