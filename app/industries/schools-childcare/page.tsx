import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  Callout,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/schools-childcare";

export const metadata: Metadata = {
  title: { absolute: "Childcare Marketing Melbourne | South East Flyers" },
  description:
    "Childcare marketing and school enrolment letterbox drops across Melbourne's south-east. Reach local families before enrolment season. Exclusive, GPS-tracked.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Enrolment Letterbox Drops for Schools & Childcare | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for childcare centres, kindergartens and schools across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do letterbox drops work for childcare centres?",
    answer:
      "Yes. Parents choose childcare close to home, so the surrounding streets are where enrolments come from. A flyer reaches every family there, even those expecting a baby.",
  },
  {
    question: "When should a school or childcare centre drop flyers?",
    answer:
      "Ahead of the main enrolment decisions. For kindergarten and school, that is usually term 1 and early term 2 for the following year. For childcare, drop before your open days and whenever you have places to fill.",
  },
  {
    question: "What should a childcare flyer include?",
    answer:
      "Your location, opening hours, age groups, whether places are available now, and the date of your next open day or tour. Parents compare centres closely, so a real photo of your rooms and outdoor area helps more than stock images.",
  },
  {
    question: "Can you deliver open day pamphlets for a school?",
    answer:
      "Yes. Folded pamphlets with a map and timetable are delivered the same way as flyers. Drop two to three weeks before the open day, with a reminder drop about a week out.",
  },
  {
    question: "How many homes should a new childcare centre cover?",
    answer:
      "Most centres start with 2,500 to 5,000 homes within a short drive. Family house suburbs usually hold more young children per street than apartment areas.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for schools and childcare centres",
  serviceType: "Flyer distribution",
  audience: { "@type": "Audience", name: "Childcare centres, kindergartens and schools" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function SchoolsChildcare() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Local Businesses", href: "/industries/local-businesses" },
          { name: "Schools & Childcare" },
        ]}
        h1="Enrolment Letterbox Drops for Schools & Childcare"
        lead="Get your childcare and enrolment flyers into letterboxes around your centre with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/walker-street.jpg", alt: "A walker checking flyers beside a brick letterbox on a leafy street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "56", label: "suburbs covered" },
          { value: "1,000", label: "flyers, your first test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Families enrol close to home" first>
        <p>
          Childcare, kindergarten and primary school are local decisions. Parents want a centre near home or on the
          route to work, and most compare two or three options within a short drive before they enrol.
        </p>
        <p>
          A letterbox drop puts your centre on that shortlist. It reaches every household in the surrounding streets,
          including parents of babies and toddlers who will be looking in the next year or two.
        </p>
        <p>
          Childcare flyers also work when a centre has gaps mid-year. Families move house, return to work or change
          days, and a drop announcing places available now reaches them while they are looking.
        </p>
      </Section>

      <Section title="Childcare flyers that fill places">
        <Bullets
          items={[
            <><strong>Places available now</strong>, by age group. This is the first thing a parent checks.</>,
            <><strong>Your next open day or tour</strong>, with a date and a way to book.</>,
            <><strong>Real photos</strong> of your rooms, garden and educators, with permission.</>,
            <><strong>Hours, location and parking</strong>, since drop-off and pick-up are daily.</>,
          ]}
        />
        <p>
          Many centres also mention their approach, such as play-based or Reggio-inspired learning, if it sets them
          apart from nearby centres.
        </p>
      </Section>

      <Section title="School enrolment letterbox drops">
        <p>
          Schools and kindergartens work to an enrolment calendar. Families start comparing in term 1 and early term
          2 for the following year, so a drop in February or March lands as they begin.
        </p>
        <p>
          Open days suit folded pamphlets with a map and timetable. See our{" "}
          <TextLink href="/services/pamphlet-delivery">pamphlet and brochure delivery</TextLink> page for formats.
          Drop two to three weeks before the day, with a reminder drop a week out.
        </p>
      </Section>

      <Section title="Childcare marketing where young families live">
        <p>
          Family house suburbs hold the most young children. Across our service area that includes{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>, where school zones keep
          families in the area for years.
        </p>
        <p>
          Childcare marketing works best repeated. Families with a baby may keep your flyer for months before they
          enrol, and a second drop reminds them your centre is still nearby. Each run comes with a GPS report.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Schools and childcare across Melbourne">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. Young families fill the
            school-zone streets of <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>. Get a price on the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or see{" "}
            <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the families near your centre"
        lead="Tell us your address, enrolment dates and how many homes you'd like to reach. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="School and childcare letterbox drop FAQs" />
    </>
  );
}
