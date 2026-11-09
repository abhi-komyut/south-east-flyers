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
      "About 10,500. Most are houses with a street letterbox, so our walkers reach nearly every door.",
  },
  {
    question: "When is the best time for a drop in Brighton?",
    answer:
      "Agents and renovators do well before the spring selling season, from August to early December.",
  },
  {
    question: "Is Brighton good for appraisal flyers?",
    answer:
      "Yes. Many owners have been here for years, so an appraisal flyer after a nearby sale gets their attention.",
  },
  {
    question: "Can I target just the streets around Church Street?",
    answer:
      "Yes. Send us your shop address and we'll quote for the streets around it, not the whole suburb.",
  },
  {
    question: "Do you also deliver in Hampton and Brighton East?",
    answer:
      "Yes. Both are in our Bayside service area, so one campaign can cover Brighton and either suburb, with one GPS report.",
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
          Church Street and Bay Street are the suburb&rsquo;s shopping strips, with the Sandringham line running
          through the middle. A targeted letterbox campaign across Brighton can reach up to 10,500 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Brighton agents and trades">
        <p>
          Brighton suits <TextLink href="/industries/real-estate">real estate agents</TextLink> running appraisal
          campaigns on its established homes, and the{" "}
          <TextLink href="/industries/renovation">renovators</TextLink> and{" "}
          <TextLink href="/industries/roofing">roofers</TextLink> who work on them. Local cafes and restaurants draw
          steady custom too.
        </p>
      </Section>

      <Section title="Start with the streets near a listing or shop">
        <p>
          Most Brighton homes have a letterbox on the street, so our walkers reach nearly every door. Shops can start
          with 1,000 to 2,500 flyers in the nearby streets, then cover more of the suburb.
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

      <Section title="When Brighton owners are deciding">
        <p>
          Melbourne&rsquo;s selling season runs from September to early December. Brighton agents, and the renovators
          and painters who follow them, do best dropping in the weeks before.
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
            Every drop is exclusive, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>. We also cover{" "}
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
