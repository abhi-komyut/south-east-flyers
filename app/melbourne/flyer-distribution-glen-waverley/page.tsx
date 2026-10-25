import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  ProofStrip,
  Section,
  Bullets,
  Steps,
  CtaBanner,
  TextLink,
  JsonLd,
  coverageCost,
  formatAud,
} from "../../components/landing";

const PAGE_PATH = "/melbourne/flyer-distribution-glen-waverley";
const ABS_URL = "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21013";

// ABS 2021 Census QuickStats, Glen Waverley (Vic.) SAL21013: 16,537 private dwellings
const DWELLINGS_ROUNDED = 16500;
const FULL_COST = coverageCost(DWELLINGS_ROUNDED);

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution Glen Waverley 3150 | South East Flyers" },
  description:
    "Flyer distribution in Glen Waverley 3150: exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers, from 1,000. Free quote in 24 hours.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Glen Waverley 3150 | South East Flyers",
    description:
      "Exclusive, GPS-tracked letterbox drops across Glen Waverley 3150. Your flyer on its own, never bundled. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes does Glen Waverley have?",
    answer: `Glen Waverley 3150 has about ${DWELLINGS_ROUNDED.toLocaleString("en-AU")} private dwellings (ABS 2021 Census), most of them separate houses with open street letterboxes. Your quote shows the exact count for the streets you pick.`,
  },
  {
    question: "What's the cost of a letterbox drop in Glen Waverley?",
    answer: `Flyer distribution in Glen Waverley costs $200 per 1,000 flyers, delivered exclusively, from a 1,000-flyer minimum. A full-suburb run costs about ${formatAud(FULL_COST)}.`,
  },
  {
    question: "Our minimum is smaller than other distributors. Why does that matter?",
    answer:
      "Most Glen Waverley distributors ask for 10,000-home minimums and bundle your flyer with others. Ours is 1,000 flyers, delivered on its own, so smaller local businesses can test an area before committing to the whole suburb.",
  },
  {
    question: "Can I choose streets near the Glen Waverley shops or Pinewood?",
    answer:
      "Yes. Tell us the pocket you want, whether that's around The Glen, the Kingsway strip or a residential run further out, and we'll confirm the letterbox count before you book. Pamphlet delivery in Glen Waverley works the same way, whole suburb or a chosen pocket.",
  },
  {
    question: "How is my Glen Waverley campaign tracked?",
    answer:
      "Every walker records their route live in Strava. When the run is done, you get the GPS map and a summary of the streets covered rather than taking our word for it.",
  },
  {
    question: "Do you turn around Glen Waverley campaigns quickly?",
    answer:
      "We can start an urgent drop within 48 hours of your flyers arriving. Standard campaigns typically start within 3 to 5 business days, with a quote back to you within 24 hours.",
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
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "AUD",
    description: "Per 1,000 flyers, exclusive delivery, never bundled",
  },
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
        lead="GPS-tracked flyer distribution across Glen Waverley 3150. Your flyer goes into each letterbox on its own, never bundled with other advertising, from a 1,000-flyer minimum."
        proof={["Minimum 1,000 flyers", "$200 per 1,000", "GPS route report with every drop"]}
        ctaLabel="Get a Free Glen Waverley Quote"
      />

      <ProofStrip />

      <Section title="Reaching Glen Waverley households">
        <p>
          Glen Waverley has about {DWELLINGS_ROUNDED.toLocaleString("en-AU")} homes and a median household
          income of $1,918 a week (
          <a href={ABS_URL} className="underline" rel="noopener" target="_blank">
            ABS 2021 Census
          </a>
          ). Our flyer distribution in Glen Waverley covers the suburb on foot and by e-bike, from the
          Kingsway and The Glen shopping strips out through the surrounding residential streets.
        </p>
        <p>
          You pick the streets, we walk them, and you get a GPS map of the route once the drop is done.
        </p>
      </Section>

      <Section title="Why Glen Waverley businesses choose South East Flyers" tone="gray">
        <Bullets
          items={[
            <><strong>A 1,000-flyer minimum.</strong> Most large-scale distributors in Glen Waverley ask for 10,000 homes and up. We start at a tenth of that.</>,
            <><strong>Exclusive delivery.</strong> Your flyer goes into the letterbox by itself, not bundled with other advertising.</>,
            <><strong>GPS proof on every run.</strong> Each walker records the route in Strava, and you receive the map and a drop summary.</>,
            <><strong>No Junk Mail respected.</strong> We skip those letterboxes, so your brand never arrives where it is not wanted.</>,
            <><strong>Fast starts.</strong> Urgent campaigns can begin within 48 hours of your flyers arriving.</>,
          ]}
        />
      </Section>

      <Section title="Letterbox drops across Glen Waverley 3150">
        <p>
          Glen Waverley is mostly separate houses: 79% of homes, against 11% townhouses and semis and 10%
          flats or apartments (ABS 2021). That high share of houses with open street letterboxes means
          letterbox distribution in Glen Waverley reaches a very high proportion of the suburb on a standard
          walking route. Apartment blocks with locked mail rooms are skipped, and the GPS report shows exactly
          where.
        </p>
        <p>
          You can cover the whole suburb or pick the streets closest to your shop, clinic or office. Your
          quote shows the letterbox count for exactly the area you choose.
        </p>
      </Section>

      <Section title="Who we deliver for in Glen Waverley" tone="gray">
        <p>
          About 69% of Glen Waverley homes are owner-occupied and 66% of families have children (ABS 2021),
          with a large share of households speaking Mandarin or Cantonese at home. That makes clear,
          simple-English flyers, often paired with bilingual signage, a practical choice for:
        </p>
        <Bullets
          items={[
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink>: just listed, just sold and appraisal flyers for a suburb with strong family demand</>,
            <><TextLink href="/industries/home-services">Home services</TextLink>: <TextLink href="/industries/plumbers">plumbers</TextLink>, electricians, roofers, builders and renovators</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink>: dentists, GPs and physios near The Glen and Kingsway</>,
            <>Tutoring centres and school-holiday programs, a strong fit for Glen Waverley's many families with school-age children</>,
            <>Restaurants and cafes using leaflet distribution in Glen Waverley for menus and local specials</>,
          ]}
        />
        <p>
          Not on the list? Our <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>{" "}
          page covers how other Glen Waverley businesses use letterbox drops.
        </p>
      </Section>

      <Section title="How a Glen Waverley letterbox drop works">
        <Steps
          steps={[
            { title: "Tell us your target", body: "Name the streets or area, the quantity and your start date." },
            { title: "Get a quote within 24 hours", body: "It includes the letterbox count and a timeline." },
            { title: "Send us your printed flyers", body: "We distribute; we don't print. Any print shop's flyers work." },
            { title: "We deliver", body: "Walkers and e-bike riders cover the route, recorded by GPS." },
            { title: "Get your report", body: "You receive the route map, drop count and dates covered." },
          ]}
        />
      </Section>

      <Section title="Letterbox drop cost in Glen Waverley" tone="gray">
        <p>
          A letterbox drop in Glen Waverley costs <strong>$200 per 1,000 flyers</strong>, delivered
          exclusively. At our 1,000-flyer minimum, a first test run costs $200. Covering every Glen Waverley
          letterbox (about {DWELLINGS_ROUNDED.toLocaleString("en-AU")}) costs about {formatAud(FULL_COST)}.
        </p>
        <p>
          See how pricing works on our <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page.
          Glen Waverley sits in the City of Monash, so our flyer distribution in Monash also reaches
          neighbouring Mount Waverley, Clayton and Mulgrave, and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Glen Waverley Letterbox Drop FAQs" />

      <CtaBanner
        title="Ready to reach Glen Waverley letterboxes?"
        body="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
      />
    </>
  );
}
