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
    "Flyer distribution in Camberwell 3124, from Camberwell Junction to the surrounding streets. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers.",
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
    question: "What does a letterbox drop across all of Camberwell cost?",
    answer:
      "About $1,800 at $200 per 1,000 flyers. A first test run of 1,000 flyers around Camberwell Junction costs $200.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Camberwell 3124, from Camberwell Junction out through the surrounding streets. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "9,000", label: "homes in Camberwell 3124, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$1,800", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyers, a $200 test run" },
        ]}
      />

      <Section title="Camberwell at a glance" first>
        <p>
          Camberwell Junction, where Burke Road meets Camberwell Road, has been the suburb&rsquo;s trading hub
          since the 1880s, with Camberwell station right at the corner and the Sunday Camberwell Market a short
          walk away. The Belgrave, Lilydale and Alamein lines put the CBD about 20 minutes away.
        </p>
        <p>
          For a letterbox drop that means about 9,000 homes, most of them houses with letterboxes on the street,
          in a suburb known for long-term ownership rather than fast turnover.
        </p>
      </Section>

      <Section title="Long-term owners, considered decisions">
        <p>
          Camberwell households tend to stay put for years, so the decisions that lead to a call are the big
          ones: selling the family home, a kitchen renovation, replacing a roof, choosing a new GP. Those
          decisions take weeks, and a flyer that sits on the bench gets looked at more than once.
        </p>
        <p>
          That suits businesses with a high-value job and a longer decision window, such as{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink> running appraisal campaigns and{" "}
          <TextLink href="/industries/roofing">roofers</TextLink> working on established homes.
        </p>
      </Section>

      <Section title="Mostly houses, so coverage runs high">
        <p>
          Houses make up the majority of Camberwell&rsquo;s homes, with townhouses and a smaller share of
          apartments mixed in. Most streets have individual letterboxes on the footpath, so a route reaches
          close to every door rather than being cut down by locked apartment mail rooms.
        </p>
        <p>
          Shops around the Junction draw from the surrounding blocks, so a 1,000 to 2,500 flyer drop there is a
          sensible first test before covering more of the suburb.
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
        <figcaption className="text-sm text-muted">Most Camberwell homes have letterboxes right on the footpath.</figcaption>
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

      <Section title="Who letterbox drops in Camberwell suit">
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
          title="Letterbox drop cost in Camberwell"
          figures={[
            { value: "$200", label: "first test, 1,000 flyers" },
            { value: "$1,800", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively. Our flyer
          distribution across Boroondara also reaches Hawthorn and Kew. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-hawthorn">Hawthorn</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Camberwell letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 5 minutes."
        suburbHint="e.g. Camberwell, Hawthorn, Kew"
      />

      <FAQSection items={faqs} title="Camberwell letterbox drop FAQs" />
    </>
  );
}
