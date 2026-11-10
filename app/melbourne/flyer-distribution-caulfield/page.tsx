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
    "Flyer distribution in Caulfield 3162, near the racecourse, Monash and Glen Huntly Road. Exclusive, GPS-tracked, never bundled, from 1,000 flyers.",
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
      "About 2,400, one of the smaller suburbs we cover. A full-suburb drop is affordable, and most businesses can cover all of it in a single run.",
  },
  {
    question: "Can a letterbox drop cover all of Caulfield at once?",
    answer:
      "Yes. At roughly 2,400 homes it is small enough that many businesses skip testing a pocket and go straight to full coverage.",
  },
  {
    question: "Do you also cover Caulfield North and Caulfield South?",
    answer:
      "Yes, both are separate suburbs in our service area. If your customers span all three, tell us and we'll quote them together with one GPS report.",
  },
  {
    question: "Is Caulfield good for flyers aimed at Monash students?",
    answer:
      "Yes, around the Monash Caulfield campus and the station, where rental turnover runs higher than the family streets. A drop timed to the start of semester tends to perform best for that audience.",
  },
  {
    question: "Can you target just the streets near Glen Huntly Road?",
    answer:
      "Yes. Send your shop address and we'll quote the surrounding streets, though given how small Caulfield is, full coverage is often not much more.",
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

      <Section title="Flyer distribution around Glen Huntly Road" first>
        <p>
          Caulfield is a tightly bounded suburb in the City of Glen Eira, best known for Caulfield Racecourse, Monash
          University&rsquo;s Caulfield campus and Caulfield station, a major interchange where the Frankston line meets
          the Dandenong corridor. Glen Huntly Road carries the local shops. A full Caulfield campaign reaches up to
          2,400 homes, within reach for most budgets.
        </p>
      </Section>

      <Section title="A small suburb with a big catchment passing through">
        <p>
          Caulfield station brings a lot of people through who do not live in the suburb: commuters heading to Monash,
          the Alfred and Cabrini health precincts, or the races. A letterbox drop reaches the households who live here,
          while a shopfront on Glen Huntly Road picks up that passing traffic.
        </p>
        <p>
          That combination suits a business that wants both at once: a flyer in the homes nearby, and a sign for the
          commuters, students and hospital staff passing through daily.
        </p>
      </Section>

      <Section title="Houses, townhouses and some apartments">
        <p>
          Caulfield&rsquo;s housing is a fairly even mix of separate houses, townhouses and apartments, with
          heritage-style homes on some streets and newer infill near Glen Huntly Road and the station. Coverage runs
          well across most of the suburb, with the usual exception of locked apartment mailrooms.
        </p>
        <p>
          Because the suburb is small, many businesses skip the staged approach and go straight to a full-suburb drop
          in one run.
        </p>
      </Section>

      <Section title="Racecourse and university timing">
        <p>
          Caulfield Racecourse hosts major meetings through spring, which lifts demand for nearby hospitality in the
          weeks around each event. Monash&rsquo;s academic calendar drives a second, separate pattern of demand around
          semester starts.
        </p>
        <p>
          A business serving either audience can time a drop to land just before race day or just before semester
          begins, rather than running on a flat year-round schedule.
        </p>
      </Section>

      <Section title="Who uses letterbox drops in Caulfield">
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
        <Callout title="Caulfield and nearby suburbs">
          <p className="m-0">
            A Caulfield drop is delivered on its own, with <strong className="text-ink">no other business sharing the run</strong>. We also
            cover Caulfield North, Caulfield South and{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> across Glen Eira, with{" "}
            <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> close by. What each quantity costs
            is on the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, and the rest of our
            suburbs on the <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a quote for your Caulfield drop"
        lead="Tell us the streets near Glen Huntly Road or all of Caulfield, and we'll send back the letterbox count and a price."
        suburbHint="e.g. Caulfield, Caulfield North, Bentleigh"
      />

      <FAQSection items={faqs} title="Caulfield letterbox drop FAQs" />
    </>
  );
}
