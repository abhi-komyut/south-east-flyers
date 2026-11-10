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

const PAGE_PATH = "/melbourne/flyer-distribution-brighton";

// About 10,500 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton VIC 3186 | South East Flyers" },
  description:
    "Flyer distribution in Brighton 3186: exclusive, GPS-tracked letterbox drops, never bundled, from 1,000 flyers. Free quote, quick turnaround.",
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
      "About 10,500, mostly houses with a street letterbox, so a run covers almost every home on a street.",
  },
  {
    question: "When is the best time for a drop in Brighton?",
    answer:
      "Agents and renovators do best in the weeks before the spring selling season, from September to early December.",
  },
  {
    question: "Is Brighton good for appraisal flyers?",
    answer:
      "Yes. Bayside homes change hands slowly, so a just-sold or appraisal flyer stands out when a neighbour's place sells.",
  },
  {
    question: "Can I target just the streets around Church Street?",
    answer:
      "Yes. Give us your address and the blocks you want covered, and we'll price just those streets.",
  },
  {
    question: "Do you also deliver in Hampton and Brighton East?",
    answer:
      "Yes. Both sit in the City of Bayside with Brighton, so one run can take in a couple of suburbs.",
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
        lead="Get your flyers into letterboxes around Church Street and across 3186 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "10,500", label: "homes in Brighton 3186, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Church Street" first>
        <p>
          Church Street and Bay Street are Brighton&rsquo;s shopping strips, with the Sandringham line running through
          the middle. A full Brighton campaign can reach up to 10,500 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Brighton agents and trades">
        <p>
          Brighton suits <TextLink href="/industries/real-estate">real estate agents</TextLink> running appraisal
          campaigns on its established homes, and the{" "}
          <TextLink href="/industries/renovation">renovators</TextLink> and{" "}
          <TextLink href="/industries/roofing">roofers</TextLink> who work on them. Bayside cafes and restaurants draw
          steady custom too.
        </p>
      </Section>

      <Section title="Separate houses, easy to cover">
        <p>
          Brighton is street after street of period and post-war houses, so a walker covers almost every home on a
          street in one pass. Apartment towers, where locked mail rooms cut the count down, are the exception here.
        </p>
        <p>
          A shop might begin with a run of 1,000 to 2,500 flyers in the blocks within walking distance, then widen
          the next drop once the GPS map shows which streets responded.
        </p>
      </Section>

      <Reveal as="figure" className="mx-auto mt-14 mb-0 max-w-[1144px] px-[clamp(20px,4vw,48px)] flex flex-col gap-3">
        <div className="rounded-card overflow-hidden aspect-[21/8]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker beside a brick letterbox on a leafy Brighton street"
            width={1144}
            height={436}
            className="w-full h-full object-cover object-[50%_45%]"
          />
        </div>
        <figcaption className="text-sm text-muted">A walker on a Brighton street.</figcaption>
      </Reveal>

      <Section title="Timing drops around the selling season">
        <p>
          Melbourne&rsquo;s spring selling season runs from September to early December. Brighton agents push appraisal
          flyers in the weeks before, and the renovators and painters who get homes ready to sell follow close behind.
        </p>
        <p>
          If your work rides that cycle, book your Brighton drops for late winter, when owners are planning rather than
          already mid-campaign.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Brighton">
        <Bullets
          items={[
            <>Real estate agents running appraisal and just-sold campaigns</>,
            <>Renovators, roofers and painters working on older homes</>,
            <><TextLink href="/industries/healthcare">Dentists, physios and GPs</TextLink> taking on new patients</>,
            <>Cafes and restaurants on the shopping strips</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Brighton and nearby suburbs"
        >
          <p className="m-0">
            Your Brighton flyer goes out on its own, <strong className="text-ink">never bundled with another advertiser&rsquo;s</strong>. We also
            deliver in <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton-east">Brighton East</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink> across the bayside, so a
            campaign can take in several suburbs. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page sets out quantities, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> shows every bayside
            suburb we reach.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Brighton drop"
        lead="Give us your streets or the blocks around your shop, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Brighton, Brighton East, Hampton"
      />

      <FAQSection items={faqs} title="Brighton letterbox drop FAQs" />
    </>
  );
}
