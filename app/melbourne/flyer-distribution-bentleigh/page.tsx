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
    "Flyer distribution in Bentleigh 3204, around Centre Road and the family streets. GPS-tracked letterbox drops straight to the door. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Bentleigh VIC 3204 | South East Flyers",
    description: "GPS-tracked letterbox drops across Bentleigh 3204, around Centre Road. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Bentleigh?",
    answer:
      "About 7,500, mostly separate houses, each with a letterbox at the front gate.",
  },
  {
    question: "When should Bentleigh family services drop?",
    answer:
      "Around late January and just before each term, as parents plan the year's activities.",
  },
  {
    question: "Why is Bentleigh strong for family-focused flyers?",
    answer:
      "Families buy here for the government secondary school zones and tend to stay, so family services get repeat local demand.",
  },
  {
    question: "Can I target just the streets around Centre Road?",
    answer:
      "Yes. Point us to your shop and the nearby streets, and we'll quote that block.",
  },
  {
    question: "Do you also deliver in Bentleigh East and Caulfield?",
    answer:
      "Yes. Both sit beside Bentleigh in the City of Glen Eira, so one run can cover a few suburbs.",
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

      <Section title="Flyer distribution around Centre Road, Bentleigh" first>
        <p>
          Centre Road is Bentleigh&rsquo;s shopping strip, with Bentleigh and Patterson stations on the Frankston line
          in the suburb. A targeted letterbox campaign across Bentleigh can reach up to 7,500 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Bentleigh's family market">
        <p>
          Bentleigh is a strong area for tutors, kids&rsquo; activities and family services, with buyers drawn to its
          government secondary school zones. The Centre Road strip and the trades on its houses do well too. Start with
          the streets nearest your door, then widen the run.
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

      <Section title="Time school drops to the term">
        <p>
          Family services do best in late January and the weeks before a new term, as parents lock in what their kids
          will do.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Bentleigh">
        <Bullets
          items={[
            <>Tutors, kids&rsquo; sport and music lessons</>,
            <><TextLink href="/industries/real-estate">Agents</TextLink> selling family homes near the school zones</>,
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
        <Callout title="Bentleigh and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover{" "}
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
