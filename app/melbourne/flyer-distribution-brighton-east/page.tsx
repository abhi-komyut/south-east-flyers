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

const PAGE_PATH = "/melbourne/flyer-distribution-brighton-east";

// About 6,400 homes in Brighton East 3187 (household count used only to
// describe how much of the suburb a drop covers).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Brighton East 3187 | South East Flyers" },
  description:
    "Flyer distribution in Brighton East 3187: about 6,400 homes, mostly family houses. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Brighton East 3187 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Brighton East 3187. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Brighton East?",
    answer:
      "About 6,400. Around seven in ten are separate houses and most of the rest townhouses, so nearly every home on a route has a letterbox at the street.",
  },
  {
    question: "Is a Brighton East drop different from central Brighton?",
    answer:
      "Yes. Brighton East has fewer apartments and more family houses on quiet streets, away from the beach and Church Street, so family services and home trades often do better here.",
  },
  {
    question: "Can I cover the whole of Brighton East in one run?",
    answer:
      "Many do. At about 6,400 homes it fits a single campaign, with a GPS map of every street covered. Others start around Hawthorn Road and widen from there.",
  },
  {
    question: "When do agents drop flyers in Brighton East?",
    answer:
      "Before the spring and autumn selling seasons, and around each new listing. Many homes here are held for years, so appraisal flyers to long-term owners make a common first campaign.",
  },
  {
    question: "Do you also deliver in Brighton and Bentleigh?",
    answer:
      "Yes. Both border Brighton East, with Hampton and Caulfield South close by, so one run can cover a few suburbs with a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Brighton East VIC 3187",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Brighton East, VIC 3187",
    address: { "@type": "PostalAddress", addressLocality: "Brighton East", addressRegion: "VIC", postalCode: "3187", addressCountry: "AU" },
  },
};

export default function BrightonEast() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Brighton East" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Brighton East"
        lead="Get your flyers into letterboxes along Hawthorn Road and across 3187 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "6,400", label: "homes in Brighton East 3187, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Hawthorn Road" first>
        <p>
          Brighton East sits in the City of Bayside, east of the Nepean Highway, between Brighton and Bentleigh.
          Hawthorn Road carries its main shops, and Dendy Park and the public golf course give it more open space than
          its better-known neighbour. A full Brighton East campaign reaches up to 6,400 homes.
        </p>
      </Section>

      <Section title="Houses, not apartments, so coverage runs high">
        <p>
          Unlike central Brighton, Brighton East has very few apartment blocks. Almost every home has a letterbox at
          the street, so a walker reaches nearly every household on the route and your flyer is not stopped at a locked
          mailroom.
        </p>
        <p>
          Those houses need upkeep. Gardens, pools, roofs and second-storey additions keep{" "}
          <TextLink href="/industries/home-services">home services</TextLink> busy, and owners here hold on to the
          flyer of a trade who works locally.
        </p>
      </Section>

      <Section title="Families who stay for the schools">
        <p>
          Many Brighton East families have been in the same house for years, and school-age children keep them there.
          That makes it a strong suburb for tutoring, music and swim schools, family health practices and after-school
          programs.
        </p>
        <p>
          Long tenure also means quiet streets for agents. An appraisal flyer reaches owners who may not have had their
          home valued in a decade. Our <TextLink href="/industries/real-estate">real estate letterbox drops</TextLink>{" "}
          page covers how to time a campaign.
        </p>
      </Section>

      <Section title="Hawthorn Road and the local shops">
        <p>
          Hawthorn Road is Brighton East&rsquo;s main shopping street, with cafes, takeaway and everyday services for
          the streets around it. A shop can start with 1,000 to 2,500 flyers along the strip, reaching the households
          most likely to walk or drive in.
        </p>
        <p>
          Businesses near the eastern edge can extend the same run into Bentleigh, since residents cross the boundary
          to shop without thinking about it.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Brighton East">
        <Bullets
          items={[
            <>Landscapers, pool services, <TextLink href="/industries/roofing">roofers</TextLink> and other home trades</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working family homes and long-held properties</>,
            <>Cafes, takeaway and services on Hawthorn Road</>,
            <>Tutors, swim schools and kids&rsquo; programs</>,
            <><TextLink href="/industries/dentists">Dental</TextLink> and family health practices</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Brighton East and nearby suburbs">
          <p className="m-0">
            On a Brighton East run your flyer travels on its own, with <strong className="text-ink">no one else&rsquo;s offer tucked in</strong>. We also
            deliver in <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-hampton">Hampton</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> next door, so a bayside or Glen
            Eira campaign can run across a few suburbs. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page lays out quantities, and the{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> covers the other
            suburbs we reach.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Brighton East drop"
        lead="Give us the streets around Hawthorn Road or the whole suburb, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Brighton East, Brighton, Bentleigh"
      />

      <FAQSection items={faqs} title="Brighton East letterbox drop FAQs" />
    </>
  );
}
