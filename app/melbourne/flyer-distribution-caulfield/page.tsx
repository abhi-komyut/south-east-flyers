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
    "Flyer distribution in Caulfield 3162, near the racecourse, Monash and Glen Huntly Road. Exclusive, GPS-tracked, never bundled. $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Flyer Distribution Caulfield VIC 3162 | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Caulfield 3162. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How many letterboxes are there in Caulfield?",
    answer:
      "Caulfield itself is one of the smaller suburbs we cover, with about 2,400 homes. A full-suburb drop is affordable, and most businesses can realistically cover all of it in one run.",
  },
  {
    question: "What does a letterbox drop across all of Caulfield cost?",
    answer:
      "About $500 at $200 per 1,000 flyers, since the suburb has roughly 2,400 homes. That is low enough that many businesses skip testing and go straight to full coverage.",
  },
  {
    question: "Do you also cover Caulfield North and Caulfield South?",
    answer:
      "Yes, both are separate suburbs in our service area. If your customers span all three, tell us and we will quote them together with one GPS report.",
  },
  {
    question: "Is Caulfield good for flyers aimed at Monash students?",
    answer:
      "Yes, around the Monash Caulfield campus and the station, where rental turnover is higher than in the surrounding family streets. A drop timed to the start of semester tends to perform best for that audience.",
  },
  {
    question: "Can you target just the streets near Glen Huntly Road?",
    answer:
      "Yes. Give us your shop address and we will quote for the surrounding streets rather than the whole suburb, though given how small Caulfield is, full coverage is often not much more.",
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
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
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
        lead="Flyer distribution in Caulfield 3162, one of the smallest and easiest suburbs on our list to cover in full. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "2,400", label: "homes in Caulfield 3162, approx." },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "$500", label: "to cover the whole suburb, approx." },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Caulfield at a glance" first>
        <p>
          Caulfield itself is a tightly bounded suburb in the City of Glen Eira, best known for Caulfield
          Racecourse, Monash University&rsquo;s Caulfield campus and Caulfield station, a major interchange
          where the Frankston line meets the Dandenong corridor. Glen Huntly Road carries the local shops.
        </p>
        <p>
          For a letterbox drop that means about 2,400 homes, a mix of houses, townhouses and apartments. It is
          one of the smaller suburbs we cover, so a full-suburb run is within reach for most budgets.
        </p>
      </Section>

      <Section title="A small suburb, but a big catchment passes through">
        <p>
          Caulfield station brings a lot of people through who do not live in the suburb itself, heading to
          Monash, the Alfred and Cabrini health precincts, or the races. Letterbox drops reach the households
          who live there, while a visible shopfront on Glen Huntly Road picks up that passing traffic too.
        </p>
        <p>
          That combination suits businesses that want both: a flyer in the homes nearby, plus signage for the
          commuters, students and hospital staff passing through daily.
        </p>
      </Section>

      <Section title="Houses, townhouses and some apartments">
        <p>
          Caulfield&rsquo;s housing is a fairly even mix of separate houses, townhouses and apartments, with
          heritage-style homes on some streets and newer infill near Glen Huntly Road and the station. Coverage
          is good across most of the suburb, with the usual exception of locked apartment mail rooms.
        </p>
        <p>
          Because the suburb is small, many businesses skip testing a pocket and go straight to a full-suburb
          drop rather than splitting the run into stages.
        </p>
      </Section>

      <Section title="Racecourse and university timing">
        <p>
          Caulfield Racecourse hosts major race meetings through spring, which lifts demand for nearby
          hospitality and parking-adjacent businesses in the weeks around each event. Monash&rsquo;s academic
          calendar drives a second, separate pattern of demand around semester starts.
        </p>
        <p>
          Businesses that serve either audience can time a drop to land just before race day or just before
          semester begins, rather than running on a flat year-round schedule.
        </p>
      </Section>

      <Section title="Who letterbox drops in Caulfield suit">
        <Bullets
          items={[
            <>Hospitality and retail on Glen Huntly Road</>,
            <>Businesses near Monash&rsquo;s Caulfield campus aimed at students and staff</>,
            <><TextLink href="/industries/real-estate">Real estate agents</TextLink> working a compact, well-connected suburb</>,
            <><TextLink href="/industries/healthcare">Health practices</TextLink> near the Alfred and Cabrini precincts</>,
            <>Race-day hospitality and parking-adjacent businesses each spring</>,
          ]}
        />
        <p>
          Other businesses: see <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Letterbox drop cost in Caulfield"
          figures={[
            { value: "$200", label: "first test, 1,000 flyers" },
            { value: "$500", label: "whole suburb, approx." },
          ]}
        >
          Every drop is <strong className="text-ink">$200 per 1,000 flyers</strong>, delivered exclusively. Our flyer
          distribution across Glen Eira also reaches Caulfield North, Caulfield South and Bentleigh. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or compare with{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and the rest of our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Ready to reach Caulfield letterboxes?"
        lead="Tell us your streets and quantity, and we'll send a quote with the letterbox count within 24 hours."
        suburbHint="e.g. Caulfield, Caulfield North, Bentleigh"
      />

      <FAQSection items={faqs} title="Caulfield letterbox drop FAQs" />
    </>
  );
}
