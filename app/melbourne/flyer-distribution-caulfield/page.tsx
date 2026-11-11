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

const PAGE_PATH = "/melbourne/flyer-distribution-caulfield";

// About 2,400 homes within Caulfield's own suburb boundary (household count
// used only for the full-coverage cost estimate; Caulfield North and
// Caulfield South are separate suburbs we also cover).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Caulfield VIC 3162 | South East Flyers" },
  description:
    "Flyer distribution in Caulfield 3162, around Glen Huntly Road and the racecourse. Cover the whole suburb in one GPS-tracked run. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Caulfield VIC 3162 | South East Flyers",
    description: "GPS-tracked letterbox drops across Caulfield 3162, around Glen Huntly Road and the racecourse. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Caulfield?",
    answer:
      "About 2,400, one of the smaller suburbs we cover. Most businesses cover all of it in a single run.",
  },
  {
    question: "Can a letterbox drop cover all of Caulfield at once?",
    answer:
      "Yes. At about 2,400 homes it is small enough to cover in full without testing a pocket first.",
  },
  {
    question: "Do you also cover Caulfield North and Caulfield South?",
    answer:
      "Yes, both are separate suburbs in our service area. Tell us if your customers span all three and we'll quote them together.",
  },
  {
    question: "Is Caulfield good for flyers aimed at Monash students?",
    answer:
      "Yes, around the Monash campus and the station. Time the drop to the start of semester.",
  },
  {
    question: "Can you target just the streets near Glen Huntly Road?",
    answer:
      "Yes. Send your shop address and we'll quote the surrounding streets. Given how small Caulfield is, full coverage is often close in price.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Caulfield VIC 3162",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Caulfield, VIC 3162",
    address: { "@type": "PostalAddress", addressLocality: "Caulfield", addressRegion: "VIC", postalCode: "3162", addressCountry: "AU" },
  },
};

export default function Caulfield() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Caulfield" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Caulfield"
        lead="Get your flyers into letterboxes around Glen Huntly Road and across 3162 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "2,400", label: "homes in Caulfield 3162, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution in Caulfield, around Glen Huntly Road" first>
        <p>
          Caulfield is a tightly bounded suburb in the City of Glen Eira, known for the racecourse, Monash
          University&rsquo;s Caulfield campus and the station interchange. Glen Huntly Road carries the local shops. A
          targeted letterbox campaign across Caulfield can reach up to 2,400 homes. Flyer distribution in Caulfield runs across the 3162 postcode.
        </p>
      </Section>

      <Section title="Letterbox drops for Caulfield shops and agents">
        <p>
          Caulfield is a strong area for hospitality and retail on Glen Huntly Road, and for businesses near the Monash
          campus aimed at students and staff. It suits agents working a compact, well-connected suburb. Start with the
          streets around your shop, or cover the whole suburb in one run.
        </p>
      </Section>

      <Section title="Time drops to the races and semester">
        <p>
          The racecourse runs major meetings through spring, which lifts demand for nearby hospitality. Monash&rsquo;s
          semesters set a separate pattern. Drop just before race day or just before semester starts.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Caulfield">
        <Bullets
          items={[
            <>Hospitality and retail on Glen Huntly Road</>,
            <>Businesses near the Monash Caulfield campus</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working a compact suburb</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink> near the Alfred and Cabrini precincts</>,
            <>Race-day hospitality each spring</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Caulfield and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover Caulfield North,
            Caulfield South and <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>, so
            campaigns can be spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Caulfield drop"
        lead="Send us your streets and flyer count, and we'll come back with the letterbox number and a quote, quickly."
        suburbHint="e.g. Caulfield, Caulfield North, Bentleigh"
      />

      <FAQSection items={faqs} title="Caulfield letterbox drop FAQs" />
    </>
  );
}
