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
      "Glen Iris 3146 has about 11,300 homes. Just over half are separate houses, with the rest split between townhouses and apartments, so coverage varies from street to street. Your quote gives the exact count for your area.",
  },
  {
    question: "Glen Iris is in two councils. Does that matter for a drop?",
    answer:
      "Not for delivery. The western part sits in Stonnington and the eastern part in Boroondara, but we plan routes by streets, not council lines. It can matter for your message, since residents identify with different shopping centres.",
  },
  {
    question: "How much of Glen Iris can one drop cover?",
    answer:
      "Most businesses start with 1,000 to 2,500 homes near their shop or base. Glen Iris is long and narrow, so covering it all usually works best in two or three runs, each with its own GPS report.",
  },
  {
    question: "Can one campaign cover Glen Iris, Malvern and Camberwell?",
    answer:
      "Yes. All three are in our service area, along with Armadale and Hawthorn East, and we can quote them together with a single GPS report.",
  },
  {
    question: "Do you deliver to apartment blocks in Glen Iris?",
    answer:
      "Yes, where the letterboxes can be reached from the street or a common entry. Locked mailrooms can't be reached, so your quote counts only the letterboxes our walkers can get to.",
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

      <Section title="Glen Iris at a glance" first>
        <p>
          Glen Iris runs along Gardiners Creek between Malvern and Camberwell. Its western streets belong to the City
          of Stonnington and its eastern streets to Boroondara, and Gardiner and Glen Iris stations on the Glen Waverley
          line serve the middle of the suburb.
        </p>
        <p>
          For a letterbox drop that means about 11,300 homes. Just over half are houses, and the rest are townhouses
          and apartments, many of them close to the stations and main roads.
        </p>
      </Section>

      <Section title="Two councils, several shopping centres">
        <p>
          Glen Iris has no single centre. Residents in the west shop on High Street and towards Malvern; those in the
          east head to Burke Road and Camberwell Junction. Each strip draws from its own pocket of streets.
        </p>
        <p>
          Plan the drop around the shops your customers actually use. A cafe on High Street and a physio near Burke
          Road reach different households, even though both are in Glen Iris. Tell us where you are and we&rsquo;ll
          map the streets most likely to come to you.
        </p>
      </Section>

      <Section title="Established homes, constant upkeep">
        <p>
          Much of Glen Iris is interwar and post-war housing on established gardens. Owners renovate, extend and
          maintain rather than move, which keeps{" "}
          <TextLink href="/industries/renovation">renovators</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>, painters and gardeners busy.
        </p>
        <p>
          A photo of a finished job in a nearby street does more on a flyer than any offer. Owners here tend to
          compare two or three trades before choosing, so a second drop a month later helps.
        </p>
      </Section>

      <Section title="Families along the creek">
        <p>
          The Gardiners Creek Trail, local parks and a spread of primary and secondary schools make Glen Iris popular
          with families. That suits tutoring, music and swim schools, childcare and family health practices.
        </p>
        <p>
          Time those drops for late January and the fortnight before each term, when parents are planning the next
          few months.
        </p>
      </Section>

      <Section title="Who letterbox drops in Glen Iris suit">
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
        <Callout title="Letterbox drop quantities in Glen Iris">
          <p className="m-0">
            Every drop is <strong className="text-ink">delivered exclusively, never bundled</strong>, starting from
            1,000 flyers. Our flyer distribution also covers{" "}
            <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> on either side. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or our{" "}
            <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east Melbourne</TextLink> suburb list.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Glen Iris letterboxes?"
        lead="Tell us your streets or the shops you're near, and we'll send a quote with the letterbox count, with a quick turnaround."
        suburbHint="e.g. Glen Iris, Malvern, Camberwell"
      />

      <FAQSection items={faqs} title="Glen Iris letterbox drop FAQs" />
    </>
  );
}
