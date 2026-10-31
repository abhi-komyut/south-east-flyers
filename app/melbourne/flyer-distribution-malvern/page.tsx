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
      "Malvern 3144 has about 4,800 homes. Most are houses and townhouses with street letterboxes, so a drop reaches nearly every door on the route. Your quote gives the exact count for your streets.",
  },
  {
    question: "How much of Malvern can a letterbox drop cover?",
    answer:
      "All 4,800 homes in one run for most businesses. That is small enough that many skip testing a pocket first and cover the whole suburb straight away.",
  },
  {
    question: "Do you deliver to Malvern's period homes with front gates?",
    answer:
      "Yes. Letterboxes on front fences and gates are reached on every run. Where a property has no letterbox accessible from the street, the walker skips it and the GPS report shows the route covered.",
  },
  {
    question: "Can one campaign cover Malvern and Armadale?",
    answer:
      "Yes. Both are in our service area, along with Glen Iris and Caulfield North, and we can quote them together with a single GPS report.",
  },
  {
    question: "Do you deliver flyers for health practices near Cabrini?",
    answer:
      "Yes. Clinics and allied health practices near Cabrini Malvern often cover the surrounding streets to reach local patients. Send us your address and we will quote for that radius.",
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
        lead="Flyer distribution in Malvern 3144, a compact suburb of period homes between Glenferrie Road and High Street. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
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

      <Section title="Malvern at a glance" first>
        <p>
          Malvern sits in the City of Stonnington, with its shops strung along Glenferrie Road and its southern edge
          on the High Street boutiques it shares with Armadale. Malvern station, the Town Hall and Cabrini Malvern
          anchor the suburb, and trams run along Glenferrie, Wattletree and High Street.
        </p>
        <p>
          For a letterbox drop that means about 4,800 homes, many of them Victorian and Edwardian houses on
          tree-lined streets. It is small enough to cover in a single run.
        </p>
      </Section>

      <Section title="Period homes keep the trades busy">
        <p>
          Malvern&rsquo;s older housing needs ongoing work: slate and terracotta roofs, original wiring and
          plumbing, leadlight, timber floors and gardens that owners keep in shape. Owners of these homes tend to
          hire specialists they trust, and they keep the flyer of a business that clearly knows period homes.
        </p>
        <p>
          That makes Malvern a good fit for <TextLink href="/industries/roofing">roofers</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>, painters and restoration builders. A photo of a
          finished job on a similar house does more than any discount.
        </p>
      </Section>

      <Section title="Glenferrie Road and High Street customers">
        <p>
          Shops, cafes and clinics on Glenferrie Road draw from the streets within walking distance, so a 1,000 to
          2,500 flyer drop around the strip reaches the households most likely to come in this week. High Street
          retailers can do the same for the streets either side of the boutiques.
        </p>
        <p>
          Practices near Cabrini Malvern can cover the surrounding streets to reach local patients, rather than
          relying on hospital referrals alone.
        </p>
      </Section>

      <Section title="Tram routes make small catchments">
        <p>
          Trams along Glenferrie Road, Wattletree Road and High Street shape where Malvern residents shop. Many walk
          to the nearest stop and the shops around it, so each strip has its own tight catchment rather than drawing
          from the whole suburb.
        </p>
        <p>
          Plan the drop around those catchments. A cafe near the Glenferrie and High Street corner and a clinic on
          Wattletree Road reach different households, even though both are in Malvern. Tell us where you are and we
          will map the streets most likely to walk to you, then show you on the GPS report exactly which ones we
          covered.
        </p>
      </Section>

      <Section title="Who letterbox drops in Malvern suit">
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
        <Callout
          title="Letterbox drop quantities in Malvern"
        >
          <p className="m-0">
            Every drop is <strong className="text-ink">delivered exclusively, never bundled</strong>. Our flyer
            distribution across Stonnington also reaches Armadale and Glen Iris. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
            <TextLink href="/melbourne/flyer-distribution-caulfield">Caulfield</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> and the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Malvern letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count, with a quick turnaround."
        suburbHint="e.g. Malvern, Armadale, Glen Iris"
      />

      <FAQSection items={faqs} title="Malvern letterbox drop FAQs" />
    </>
  );
}
