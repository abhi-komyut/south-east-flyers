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

const PAGE_PATH = "/melbourne/flyer-distribution-kew";

// About 10,600 homes (household count used only for the full-coverage cost estimate).

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Kew VIC 3101 | South East Flyers" },
  description:
    "Flyer distribution in Kew 3101 for families, schools and Kew Junction shops. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Kew VIC 3101 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Kew 3101. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Kew?",
    answer:
      "About 10,600, but Kew has more apartments than most suburbs we cover, so the reachable count is lower and the GPS map shows it street by street.",
  },
  {
    question: "Which schools make Kew good for family flyers?",
    answer:
      "Xavier College, Trinity Grammar and Methodist Ladies' College all sit in Kew, so tutoring and kids' activity flyers do well at the start of each term.",
  },
  {
    question: "Can I target just the streets near Kew Junction?",
    answer:
      "Yes. Tell us your shop and how far your customers travel, and we'll quote a radius around it.",
  },
  {
    question: "Should Kew flyers be in English and Chinese?",
    answer:
      "Consider it if your customers include Kew's Chinese-speaking families. We deliver whatever you print.",
  },
  {
    question: "Do you also deliver in Hawthorn and Camberwell?",
    answer:
      "Yes. Both border Kew in the City of Boroondara, so a single run can cover Kew and either, with one GPS map.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in Kew VIC 3101",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Place",
    name: "Kew, VIC 3101",
    address: { "@type": "PostalAddress", addressLocality: "Kew", addressRegion: "VIC", postalCode: "3101", addressCountry: "AU" },
  },
};

export default function Kew() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "Kew" },
        ]}
        h1="Flyer Distribution & Letterbox Drops in Kew"
        lead="Get your flyers into letterboxes around Kew Junction and across 3101 with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "10,600", label: "homes in Kew 3101, approx." },
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyers, your first test run" },
        ]}
      />

      <Section title="Flyer distribution around Kew Junction" first>
        <p>
          Kew Junction, where High Street meets Cotham Road, is the suburb&rsquo;s shopping and dining hub, and the
          streets run north and west down to the Yarra. Cover the whole suburb and a campaign reaches up to 10,600 Kew
          homes.
        </p>
      </Section>

      <Section title="Kew's schools bring families">
        <p>
          Xavier College, Trinity Grammar and Methodist Ladies&rsquo; College all sit inside Kew, which keeps the
          suburb full of school-age families. That is steady work for tutors, music teachers, swim schools and holiday
          programs.
        </p>
        <p>
          Timing matters for these businesses. Parents choose activities in late January and in the fortnight before
          each term, so book a drop into those windows.
        </p>
      </Section>

      <Section title="Planning a drop around Kew's apartments">
        <p>
          Kew has more apartments than most suburbs we cover. Our walkers reach every house letterbox, while blocks
          with locked lobbies are left out and listed on the GPS map, so you see your real coverage before the next
          run.
        </p>
        <p>
          If you sell to homeowners, we weight the route toward the house streets. If you want renters and young
          professionals, we include the apartment blocks we can enter.
        </p>
      </Section>

      <Section title="Kew Junction shops and cafes">
        <p>
          Most of Kew&rsquo;s retail and dining sits around the Junction and along High Street, and those customers
          mostly walk or make a short drive. A 1,000 to 2,500 flyer drop in the surrounding streets reaches the people
          most likely to come in this week.
        </p>
        <p>
          Cotham Road carries the same shoppers west toward the Kew Library and the recreation centre, so a run that
          follows it picks up homes a street or two back from the Junction that a High Street-only drop would miss.
        </p>
        <p>
          A new cafe can repeat the drop with a fresh offer each time, an opening deal, then a weekday lunch, then a
          family dinner, and match each GPS map against who walks in.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Kew">
        <Bullets
          items={[
            <>Tutors, music schools and kids&rsquo; activity programs</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working period homes and townhouses</>,
            <>Plumbers, roofers and other <TextLink href="/industries/home-services">home services</TextLink> on older homes</>,
            <><TextLink href="/industries/healthcare">Dentists, GPs and physios</TextLink> near the Junction</>,
            <>Cafes and restaurants on High Street</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Kew and nearby suburbs"
        >
          <p className="m-0">
            Every Kew run is yours alone, with <strong className="text-ink">no other advertiser&rsquo;s flyers alongside</strong>. We also
            deliver in <TextLink href="/melbourne/flyer-distribution-hawthorn">Hawthorn</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> next door, so a Boroondara
            campaign can span a few suburbs at once. The{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page breaks pricing down by quantity, and
            the <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> lists every
            suburb we cover.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Kew drop"
        lead="Tell us your streets or a radius from your shop, and we'll send back the reachable letterbox count and a price."
        suburbHint="e.g. Kew, Kew East, Hawthorn"
      />

      <FAQSection items={faqs} title="Kew letterbox drop FAQs" />
    </>
  );
}
