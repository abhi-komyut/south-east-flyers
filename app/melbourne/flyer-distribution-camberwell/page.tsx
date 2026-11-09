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

const PAGE_PATH = "/melbourne/flyer-distribution-camberwell";

// About 9,000 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Camberwell VIC 3124 | South East Flyers" },
  description:
    "Flyer distribution in Camberwell 3124, from Camberwell Junction to the surrounding streets. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Camberwell VIC 3124 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Camberwell 3124. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Camberwell?",
    answer:
      "Camberwell 3124 has about 9,000 homes, mostly houses with street letterboxes. That makes coverage close to complete across most of the suburb, unlike apartment-heavy suburbs where locked mail rooms cut the reachable count down.",
  },
  {
    question: "When is the best time for a Camberwell drop?",
    answer:
      "Camberwell's selling season peaks from September to early December. Agents, renovators and the services around the Grammar schools are busiest in the weeks before, so a run around Camberwell Junction then lands well.",
  },
  {
    question: "Is Camberwell a good suburb for appraisal flyers?",
    answer:
      "Yes. Many homes have long-term owners, so a drop timed around a nearby sale result or ahead of spring and autumn selling seasons tends to land when owners are weighing up their options.",
  },
  {
    question: "Can I target just the streets around Camberwell Junction?",
    answer:
      "Yes. Give us your shop address and we will quote for the surrounding streets rather than all of Camberwell, which suits most retailers and cafes better than a full-suburb run anyway.",
  },
  {
    question: "Do you deliver in Surrey Hills and Burwood too?",
    answer:
      "Yes, both are in our service area, so a campaign can cover Camberwell alongside either with a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Camberwell VIC 3124",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Camberwell, VIC 3124",
    address: { "@type": "PostalAddress", addressLocality: "Camberwell", addressRegion: "VIC", postalCode: "3124", addressCountry: "AU" },
  },
};

export default function Camberwell() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Camberwell" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Camberwell"
        lead="Get your flyers into letterboxes around Camberwell Junction and across 3124 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "9,000", label: "homes in Camberwell 3124, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Camberwell Junction" first>
        <p>
          Camberwell Junction, where Burke, Camberwell and Riversdale roads meet, is the suburb&rsquo;s main
          shopping hub, with the station and the Sunday market a short walk away. A targeted letterbox campaign
          across Camberwell can reach up to 9,000 homes.
        </p>
      </Section>

      <Section title="Letterbox drops for Camberwell agents and trades">
        <p>
          Camberwell is a strong area for <TextLink href="/industries/real-estate">real estate agents</TextLink>{" "}
          running appraisal campaigns, and lucrative for <TextLink href="/industries/roofing">roofers</TextLink>{" "}
          working on its established homes. Its homes, mostly older houses, need regular repairs and upkeep,
          so <TextLink href="/industries/plumbers">plumbers</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink> and painters find steady work here too.
        </p>
      </Section>

      <Section title="Start with the streets around the Junction">
        <p>
          Most Camberwell homes have their own letterbox on the footpath, so our walkers reach nearly every door.
          Shops around the Junction can start with 1,000 to 2,500 flyers in the nearby streets, then cover more of
          the suburb.
        </p>
      </Section>

      <Reveal as="figure" className="mx-auto mt-14 mb-0 max-w-[1144px] px-[clamp(20px,4vw,48px)] flex flex-col gap-3">
        <div className="rounded-card overflow-hidden aspect-[21/8]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker beside a letterbox on a leafy Camberwell street"
            width={1144}
            height={436}
            className="w-full h-full object-cover object-[50%_45%]"
          />
        </div>
        <figcaption className="text-sm text-muted">A walker on a Camberwell street.</figcaption>
      </Reveal>

      <Section title="Camberwell Junction and the Grammar schools">
        <p>
          Camberwell Grammar School and Camberwell Girls Grammar School draw families to the area, which keeps
          demand steady for tutors, uniform and school-supply businesses and family-oriented local services
          through the school term.
        </p>
        <p>
          Retailers around the Junction and the Sunday market benefit from flyers timed to market weekends and
          the start of each school term, when local foot traffic is highest.
        </p>
      </Section>

      <Section title="Agents, renovators and Junction trades in Camberwell">
        <Bullets
          items={[
            <>Agents with appraisal and just-sold campaigns aimed at long-term owners</>,
            <>Builders and renovators working on Camberwell&rsquo;s established homes</>,
            <><TextLink href="/industries/plumbers">Plumbers</TextLink>, <TextLink href="/industries/electricians">electricians</TextLink> and other <TextLink href="/industries/home-services">home services</TextLink> trades</>,
            <>Tutors and services aimed at families near the Grammar schools</>,
            <>Shops and cafes around Camberwell Junction</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Covering Camberwell's 9,000 homes"
        >
          <p className="m-0">
            Every Camberwell drop goes out on its own, with <strong className="text-ink">no other advertisers&rsquo; flyers in the run</strong>. Our flyer
            distribution across Boroondara also reaches Hawthorn, Kew and{" "}
            <TextLink href="/melbourne/flyer-distribution-glen-iris">Glen Iris</TextLink>. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
            <TextLink href="/melbourne/flyer-distribution-hawthorn">Hawthorn</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Camberwell drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Camberwell, Hawthorn, Kew"
      />

      <FAQSection items={faqs} title="Camberwell letterbox drop FAQs" />
    </>
  );
}
