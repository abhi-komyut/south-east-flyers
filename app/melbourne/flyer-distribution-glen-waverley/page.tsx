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
    "Flyer distribution in Glen Waverley 3150: 16,500 homes, mostly houses. Exclusive, GPS-tracked, bilingual flyers welcome. $200 per 1,000, from 1,000.",
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
      "Glen Waverley 3150 has about 16,500 homes, mostly separate houses with letterboxes on the street. That makes it one of the largest suburbs we cover and one of the easiest to reach in full.",
  },
  {
    question: "What does it cost to cover all of Glen Waverley?",
    answer:
      "About $3,300 at $200 per 1,000 flyers. Many businesses split it into two or three drops a few weeks apart, starting with the streets nearest their shop.",
  },
  {
    question: "Should my Glen Waverley flyer be bilingual?",
    answer:
      "It is worth considering. Glen Waverley has a large Mandarin- and Cantonese-speaking community, and an English flyer with key lines in Chinese reads well to both. We deliver whatever you print.",
  },
  {
    question: "Can I target the streets around the Kingsway or The Glen?",
    answer:
      "Yes. Tell us your address and how far customers travel, and we quote for those streets rather than the whole suburb. Restaurants on the Kingsway often start with a 1,000 to 2,500 flyer radius.",
  },
  {
    question: "Do you deliver in Mount Waverley and Wheelers Hill too?",
    answer:
      "Yes. Both border Glen Waverley and are in our service area, so one campaign can cover all three with a single GPS report rather than booking separately.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Glen Waverley 3150, one of the largest and most house-heavy suburbs we cover. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "16,500", label: "homes in Glen Waverley 3150, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$3,300", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Glen Waverley at a glance" first>
        <p>
          Glen Waverley is a big, family suburb in the City of Monash, built mostly from the 1950s to the 1980s on
          quarter-acre-style blocks. The Kingsway is its restaurant and cafe strip, The Glen is the major shopping
          centre, and the station is the end of the Glen Waverley line.
        </p>
        <p>
          For a letterbox drop that means about 16,500 homes, around half as many again as Brighton or Kew, and
          street after street of houses with letterboxes at the front gate.
        </p>
      </Section>

      <Section title="Bilingual flyers reach more of the suburb">
        <p>
          Glen Waverley has a large Chinese-speaking community, with many households speaking Mandarin or Cantonese
          at home, and a sizeable Sri Lankan community too. An English-only flyer still works, but a headline or offer
          repeated in Chinese often gets more attention from those households.
        </p>
        <p>
          We don&rsquo;t translate or print, but we deliver any language you print, and the GPS report lets you
          compare a bilingual run with an English-only one on different streets.
        </p>
      </Section>

      <Section title="Houses everywhere means near-full coverage">
        <p>
          Apartments are the exception here, so almost every letterbox sits on the street. A drop in Glen Waverley
          reaches a higher share of homes per street than in suburbs with more apartment blocks, which makes your cost
          per household reached low.
        </p>
        <p>
          The suburb is large, so most businesses don&rsquo;t cover it all at once. Restaurants and shops on the
          Kingsway or near The Glen start with the surrounding streets; trades start with the streets closest to their
          base and expand as calls come in.
        </p>
      </Section>

      <Reveal as="figure" className="mx-auto mt-14 mb-0 max-w-[1144px] px-[clamp(20px,4vw,48px)] flex flex-col gap-3">
        <div className="rounded-card overflow-hidden aspect-[21/8]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker beside a letterbox on a quiet residential street"
            width={1144}
            height={436}
            className="w-full h-full object-cover object-[50%_45%]"
          />
        </div>
        <figcaption className="text-sm text-muted">Almost every Glen Waverley home has a letterbox right on the street.</figcaption>
      </Reveal>

      <Section title="Kingsway restaurants and takeaway menus">
        <p>
          The Kingsway is a busy dining strip, so restaurants there compete hard for the same
          households. A takeaway menu delivered on its own, not inside a bundle with other menus, is the
          one that ends up stuck to the fridge.
        </p>
        <p>
          Restaurants usually start with the streets within a short drive of the Kingsway, then expand into
          Mount Waverley and Wheelers Hill once they know which areas order. A bilingual menu often helps here too.
        </p>
      </Section>

      <Section title="Glen Waverley businesses that use letterbox drops">
        <p>
          Glen Waverley is a family suburb, and its secondary school zones draw families who stay for years. That
          suits:
        </p>
        <Bullets
          items={[
            <>Tutoring centres, music schools and holiday programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes in school zones</>,
            <>Restaurants and cafes on the Kingsway</>,
            <><TextLink href="/industries/electricians">Electricians</TextLink>, <TextLink href="/industries/plumbers">plumbers</TextLink> and other <TextLink href="/industries/home-services">home services</TextLink> for a suburb full of houses</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> near The Glen</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Letterbox drop cost in Glen Waverley"
          figures={[
            { value: "$500", label: "2,500 flyers, around the Kingsway" },
            { value: "$3,300", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively. Our flyer
          distribution across Monash also reaches Mount Waverley. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Glen Waverley letterboxes?"
        lead="Tell us your streets and quantity, and we'll quote with the letterbox count within 24 hours."
        suburbHint="e.g. Glen Waverley, Mount Waverley, Wheelers Hill"
      />

      <FAQSection items={faqs} title="Glen Waverley letterbox drop FAQs" />
    </>
  );
}
