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

const PAGE_PATH = "/melbourne/flyer-distribution-st-kilda";

// About 14,100 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution St Kilda VIC 3182 | South East Flyers" },
  description:
    "Flyer distribution in St Kilda 3182, around Fitzroy and Acland Streets. GPS-tracked letterbox drops you can check block by block. Get a free quote.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution St Kilda VIC 3182 | South East Flyers",
    description: "GPS-tracked letterbox drops across St Kilda 3182, around Fitzroy and Acland Streets. Get a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in St Kilda?",
    answer:
      "About 14,100, almost all apartments. Your quote gives the reachable count for your streets. A letterbox drop in St Kilda starts from 1,000 flyers.",
  },
  {
    question: "Does a letterbox drop work in an apartment suburb?",
    answer:
      "Yes. We deliver to every mailroom we can reach from the street, and the GPS report shows which blocks were covered.",
  },
  {
    question: "Can you target just Fitzroy Street or Acland Street?",
    answer:
      "Yes. Name your strip and we'll quote the surrounding streets only.",
  },
  {
    question: "Should I repeat a St Kilda drop?",
    answer:
      "Repeat it to reach new renters. A seasonal drop lands with households that moved in since the last one.",
  },
  {
    question: "Do you also deliver in Elwood and Balaclava?",
    answer:
      "Yes. Both border St Kilda in the City of Port Phillip, so one run can cover a few suburbs.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in St Kilda VIC 3182",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "St Kilda, VIC 3182",
    address: { "@type": "PostalAddress", addressLocality: "St Kilda", addressRegion: "VIC", postalCode: "3182", addressCountry: "AU" },
  },
};

export default function StKilda() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "St Kilda" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in St Kilda"
        lead="Get your flyers into letterboxes around Acland and Fitzroy Streets, and across 3182, with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "14,100", label: "homes in St Kilda 3182, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution in St Kilda, around Fitzroy and Acland Streets" first>
        <p>
          St Kilda is Melbourne&rsquo;s beachside entertainment suburb. Luna Park, the Palais Theatre and St Kilda Pier
          sit near Fitzroy Street&rsquo;s bars and Acland Street&rsquo;s cafes, with the Route 96 tram running both
          strips. A targeted letterbox campaign across St Kilda can reach up to 14,100 homes. Flyer distribution in St Kilda runs across the 3182 postcode. Our walkers skip locked
          mailrooms, and your GPS report shows every block covered.
        </p>
      </Section>

      <Section title="Letterbox drops for St Kilda venues and agents">
        <p>
          St Kilda is a strong area for bars, restaurants and cafes on the two strips. It suits rental agents too, with
          tenants turning over in the apartment blocks. Start with the streets behind your strip, then widen the run.
        </p>
      </Section>

      <Section title="Repeat drops for a changing street">
        <p>
          Renters move through St Kilda, so the same streets hold new households each season. A drop every few months
          reaches people who have just arrived, which works for venues and rental agents alike.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in St Kilda">
        <Bullets
          items={[
            <>Bars, restaurants and cafes on Fitzroy Street and Acland Street</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working rentals and apartment sales</>,
            <>Boutiques, galleries and beauty studios</>,
            <><TextLink href="/industries/healthcare">Health and wellness practices</TextLink> near the beach</>,
            <>Events and venues promoting gigs, markets or festival dates</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="St Kilda and nearby suburbs">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. We also cover St Kilda East,
            Elwood and Balaclava, so campaigns can be spread across different suburbs. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page or the rest of our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> to see how we can
            help you.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your St Kilda drop"
        lead="Send us your strip and flyer count, and we'll come back with the reachable letterbox number and a quote, quickly."
        suburbHint="e.g. St Kilda, St Kilda East, Elwood"
      />

      <FAQSection items={faqs} title="St Kilda letterbox drop FAQs" />
    </>
  );
}
