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
      "About 7,500, mostly separate houses with a street letterbox, so our walkers reach nearly every door.",
  },
  {
    question: "When is the best time for a drop in Bentleigh?",
    answer:
      "Tutors and family services do well dropping at the start of each school term, when parents are planning activities.",
  },
  {
    question: "Is Bentleigh good for family-focused flyers?",
    answer:
      "Yes. Families move here for the government school zones, so tutoring, kids' activities and family services land well.",
  },
  {
    question: "Can I target just the streets around Centre Road?",
    answer:
      "Yes. Send us your shop address and we'll quote for the streets around it, not the whole suburb.",
  },
  {
    question: "Do you also deliver in Bentleigh East and Caulfield?",
    answer:
      "Yes. Both are in our Glen Eira service area, so one campaign can cover Bentleigh and either suburb, with one GPS report.",
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
          Centre Road is Bentleigh&rsquo;s shopping strip of more than 250 shops, with Bentleigh and Patterson
          stations on the Frankston line. A targeted letterbox campaign across Bentleigh can reach up to 7,500 homes.
        </p>
      </Section>

      <Section title="Letterbox drops near Bentleigh's school zones">
        <p>
          Families move to Bentleigh for its government secondary school zones. Tutors, kids&rsquo; activities and
          family services do well with a drop at the start of each school term.
        </p>
      </Section>

      <Section title="Start with the streets around Centre Road">
        <p>
          Most Bentleigh homes have a letterbox on the street, so our walkers reach nearly every door. Shops can start
          with 1,000 to 2,500 flyers in the nearby streets, then cover more of the suburb.
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

      <Section title="Who uses letterbox drops in Bentleigh">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes near the school zones</>,
            <>Plumbers, electricians and other <TextLink href="/industries/home-services">home services</TextLink></>,
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
            Every drop is exclusive, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>. We also cover{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh-east">Bentleigh East</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink>, so campaigns can be spread
            across different suburbs. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
            or the rest of our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>{" "}
            to see how we can help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Bentleigh drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Bentleigh, Bentleigh East, Caulfield"
      />

      <FAQSection items={faqs} title="Bentleigh letterbox drop FAQs" />
    </>
  );
}
