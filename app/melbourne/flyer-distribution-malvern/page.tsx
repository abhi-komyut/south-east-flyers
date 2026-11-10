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

const PAGE_PATH = "/melbourne/flyer-distribution-malvern";

// About 4,800 homes in Malvern 3144 (household count used only for the
// full-coverage cost estimate; Malvern East is a separate suburb).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Malvern VIC 3144 | South East Flyers" },
  description:
    "Flyer distribution in Malvern 3144, from Glenferrie Road to High Street. Exclusive, GPS-tracked letterbox drops, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Malvern VIC 3144 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Malvern 3144. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Malvern?",
    answer:
      "About 4,800. Most are houses and townhouses with a street letterbox, so a walker reaches almost every one on the route. Your quote gives the exact count for your streets.",
  },
  {
    question: "Can a letterbox drop cover all of Malvern at once?",
    answer:
      "Yes. At about 4,800 homes it is small enough that most businesses cover the whole suburb in one run rather than testing a single pocket first.",
  },
  {
    question: "Do you deliver to Malvern's period homes with front gates?",
    answer:
      "Yes. Letterboxes on front fences and gates are reached on every run. Where a home has no letterbox reachable from the street, the walker skips it and the GPS report shows the route covered.",
  },
  {
    question: "Do you deliver flyers for health practices near Cabrini?",
    answer:
      "Yes. Clinics and allied health practices near Cabrini Malvern often cover the surrounding streets to reach local patients. Send your address and we'll quote that radius.",
  },
  {
    question: "Do you also deliver in Armadale and Glen Iris?",
    answer:
      "Yes. Both sit beside Malvern, with Caulfield North close by, so one campaign can take in a few suburbs under a single GPS report.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Malvern VIC 3144",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Malvern, VIC 3144",
    address: { "@type": "PostalAddress", addressLocality: "Malvern", addressRegion: "VIC", postalCode: "3144", addressCountry: "AU" },
  },
};

export default function Malvern() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Malvern" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Malvern"
        lead="Get your flyers into letterboxes between Glenferrie Road and High Street, and across 3144, with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "4,800", label: "homes in Malvern 3144, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Glenferrie Road" first>
        <p>
          Malvern sits in the City of Stonnington, its shops strung along Glenferrie Road and its southern edge on the
          High Street boutiques it shares with Armadale. Malvern station, the Town Hall and Cabrini Malvern anchor the
          suburb, and trams run along Glenferrie, Wattletree and High Street. A full Malvern campaign reaches up to
          4,800 homes, small enough to cover in a single run.
        </p>
      </Section>

      <Section title="Period homes keep the trades busy">
        <p>
          Malvern&rsquo;s older housing needs constant work: slate and terracotta roofs, original wiring and plumbing,
          leadlight, timber floors and gardens kept in shape. Owners here hire specialists they trust, and they hold on
          to the flyer of a business that clearly knows period homes.
        </p>
        <p>
          That suits <TextLink href="/industries/roofing">roofers</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>, painters and restoration builders. A photo of a
          restored roof or repainted facade on a similar house does more than any discount.
        </p>
      </Section>

      <Section title="Glenferrie Road and High Street shoppers">
        <p>
          Shops, cafes and clinics on Glenferrie Road draw from the streets within walking distance, so a drop of
          1,000 to 2,500 flyers around the strip reaches the households most likely to call in this week. High Street
          retailers can do the same for the blocks either side of the boutiques.
        </p>
        <p>
          Practices near Cabrini Malvern can cover the surrounding streets to reach local patients, rather than leaning
          on hospital referrals alone.
        </p>
      </Section>

      <Section title="Tram stops make tight catchments">
        <p>
          Trams along Glenferrie Road, Wattletree Road and High Street shape where Malvern residents shop. Most walk to
          the nearest stop and the shops around it, so each strip has its own small catchment rather than drawing from
          the whole suburb.
        </p>
        <p>
          Plan the drop around those catchments. A cafe at the Glenferrie and High Street corner and a clinic on
          Wattletree Road reach different households, though both are in Malvern. Tell us where you are and our walkers
          cover the streets most likely to walk to you, with the GPS report showing exactly which ones.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Malvern">
        <Bullets
          items={[
            <>Trades and restoration specialists working on period homes</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> farming Malvern&rsquo;s heritage streets</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink> near Cabrini and Glenferrie Road</>,
            <>Cafes, restaurants and boutiques on Glenferrie Road and High Street</>,
            <>Tutors and kids&rsquo; programs serving local families</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Malvern and nearby suburbs">
          <p className="m-0">
            A Malvern drop runs on its own; we <strong className="text-ink">never fold your flyer into a pack of others</strong>. We also
            cover Armadale and <TextLink href="/melbourne/flyer-distribution-glen-iris">Glen Iris</TextLink> across
            Stonnington, with <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> close by. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page breaks pricing down by quantity,
            and the <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> maps the
            rest.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Malvern drop"
        lead="Name the streets around Glenferrie Road or High Street, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Malvern, Armadale, Glen Iris"
      />

      <FAQSection items={faqs} title="Malvern letterbox drop FAQs" />
    </>
  );
}
