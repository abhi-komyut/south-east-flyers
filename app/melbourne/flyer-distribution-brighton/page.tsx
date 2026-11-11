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
    "Flyer distribution in Brighton 3186, around Church Street and Bay Street. GPS-tracked letterbox drops for agents, trades and cafes. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton VIC 3186 | South East Flyers",
    description: "GPS-tracked letterbox drops across Brighton 3186, around Church Street and Bay Street. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton?",
    answer:
      "About 10,500, mostly houses with a street letterbox. A run covers almost every home on a street.",
  },
  {
    question: "When is the best time for a drop in Brighton?",
    answer:
      "Late winter, before the September-to-December selling season, when owners are planning.",
  },
  {
    question: "Is Brighton good for appraisal flyers?",
    answer:
      "Yes. Homes change hands slowly, so an appraisal flyer stands out when a neighbour sells.",
  },
  {
    question: "Can I target just the streets around Church Street?",
    answer:
      "Yes. Give us your address and the blocks you want, and we'll quote those streets.",
  },
  {
    question: "Do you also deliver in Hampton and Brighton East?",
    answer:
      "Yes. Both sit beside Brighton in the City of Bayside, so one run can cover a few suburbs.",
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

      <Section title="Flyer distribution around Church Street, Brighton" first>
        <p>
          Church Street and Bay Street are Brighton&rsquo;s shopping strips, with the Sandringham line running between
          them. A targeted letterbox campaign across Brighton can reach up to 10,500 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Brighton agents and trades">
        <p>
          Brighton is a strong area for real estate agents running appraisal campaigns on its established homes, and for
          the <TextLink href="/industries/renovation">renovators</TextLink> and{" "}
          <TextLink href="/industries/roofing">roofers</TextLink> who work on them. Bayside cafes and restaurants draw
          steady trade. Start with the blocks around your shop, then widen the run.
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

      <Section title="Time drops to the selling season">
        <p>
          The spring selling season runs September to early December. Agents and the trades getting homes ready to sell
          do best with a drop in late winter, before the rush.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Brighton">
        <Bullets
          items={[
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> running appraisal and just-sold campaigns</>,
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
        <Callout title="Brighton and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton-east">Brighton East</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Brighton drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Brighton, Brighton East, Hampton"
      />

      <FAQSection items={faqs} title="Brighton letterbox drop FAQs" />
    </>
  );
}
