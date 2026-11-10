import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
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

const PAGE_PATH = "/melbourne/flyer-distribution-glen-iris";

// About 11,300 homes in Glen Iris 3146 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Glen Iris VIC 3146 | South East Flyers" },
  description:
    "Flyer distribution in Glen Iris 3146, across Stonnington and Boroondara. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Glen Iris VIC 3146 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Glen Iris 3146. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Glen Iris?",
    answer:
      "About 11,300. Just over half are separate houses, with the rest split between townhouses and apartments, so coverage varies by street. Your quote gives the exact count for your area.",
  },
  {
    question: "Glen Iris is in two councils. Does that matter for a drop?",
    answer:
      "Not for delivery. The western part sits in Stonnington and the eastern part in Boroondara, but we plan routes by streets, not council lines. It can matter for your message, since each side identifies with a different shopping centre.",
  },
  {
    question: "How much of Glen Iris can one drop cover?",
    answer:
      "Most businesses start with 1,000 to 2,500 homes near their shop or base. Glen Iris is long and narrow, so covering it all usually takes two or three runs, each with its own GPS report.",
  },
  {
    question: "Do you deliver to apartment blocks in Glen Iris?",
    answer:
      "Yes, where the letterboxes can be reached from the street or a common entry. Locked mailrooms can't be reached, so your quote counts only the letterboxes our walkers can get to.",
  },
  {
    question: "Do you also deliver in Malvern and Camberwell?",
    answer:
      "Yes. Glen Iris sits between them, with Armadale and Hawthorn East close by, so one campaign can take in several suburbs under a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Glen Iris VIC 3146",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Glen Iris, VIC 3146",
    address: { "@type": "PostalAddress", addressLocality: "Glen Iris", addressRegion: "VIC", postalCode: "3146", addressCountry: "AU" },
  },
};

export default function GlenIris() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Glen Iris" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Glen Iris"
        lead="Get your flyers into letterboxes along High Street and across 3146 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "11,300", label: "homes in Glen Iris 3146, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution along Gardiners Creek" first>
        <p>
          Glen Iris follows Gardiners Creek between Malvern and Camberwell. Its western streets fall in the City of
          Stonnington and its eastern streets in Boroondara, while Gardiner and Glen Iris stations on the Glen Waverley
          line serve the middle. A campaign across the whole suburb reaches up to 11,300 homes.
        </p>
      </Section>

      <Section title="Two councils, several shopping centres">
        <p>
          Glen Iris has no single centre. Residents in the west shop on High Street and towards Malvern; those in the
          east head to Burke Road and Camberwell Junction. Each strip pulls from its own pocket of streets.
        </p>
        <p>
          Plan the drop around the shops your customers actually use. A cafe on High Street and a physio near Burke
          Road reach different households, though both are in Glen Iris. Tell us where you are and our walkers cover the
          streets most likely to come to you.
        </p>
      </Section>

      <Section title="Established homes, constant upkeep">
        <p>
          Much of Glen Iris is interwar and post-war housing on settled gardens. Owners renovate, extend and maintain
          rather than move, which keeps <TextLink href="/industries/renovation">renovators</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>, painters and gardeners in work.
        </p>
        <p>
          A before-and-after shot from a nearby street does more on the flyer than a price. Owners here tend to compare
          two or three trades before choosing, so a second drop a month later helps.
        </p>
      </Section>

      <Section title="Families along the creek">
        <p>
          The Gardiners Creek Trail, local parks and a spread of primary and secondary schools make Glen Iris popular
          with families. That suits tutoring, music and swim schools, childcare and family health practices.
        </p>
        <p>
          Those drops land best as summer ends and again a couple of weeks out from each new term, when parents are
          mapping the next few months.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Glen Iris">
        <Bullets
          items={[
            <>Renovators, electricians, painters and gardeners working on established homes</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes and townhouses</>,
            <>Cafes and shops on High Street and near Burke Road</>,
            <>Tutors, music schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/healthcare">Physios, dentists and GPs</TextLink> serving local families</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Glen Iris and nearby suburbs">
          <p className="m-0">
            Your Glen Iris flyer is the only one in the run, with <strong className="text-ink">no competing offer bundled beside it</strong>. We
            also deliver in <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> on either side, so a campaign
            can cross between Stonnington and Boroondara. You&rsquo;ll find quantity pricing on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, and every suburb we run on the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Glen Iris drop"
        lead="Tell us the shops you're near or the streets you want, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Glen Iris, Malvern, Camberwell"
      />

      <FAQSection items={faqs} title="Glen Iris letterbox drop FAQs" />
    </>
  );
}
