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

const PAGE_PATH = "/services/pamphlet-delivery";

export const metadata: Metadata = {
  title: { absolute: "Pamphlet Distribution Melbourne | South East Flyers" },
  description:
    "Pamphlet distribution and brochure delivery across Melbourne's south-east. Each one delivered on its own, GPS-tracked. $200 per 1,000, from 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Pamphlet & Brochure Distribution Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked pamphlet and brochure delivery across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the difference between a pamphlet, a brochure and a flyer?",
    answer:
      "A flyer is usually a single sheet. A pamphlet or brochure is folded, often a DL or A4 tri-fold, with more room for detail. We deliver all three the same way: each one on its own, into every accepting letterbox on the route.",
  },
  {
    question: "How much does pamphlet delivery cost?",
    answer:
      "$200 per 1,000 for standard pamphlets and folded brochures, from a 1,000 minimum. Heavier booklets are quoted on size and weight. A 5,000-pamphlet drop costs $1,000.",
  },
  {
    question: "Which size of pamphlet works best in a letterbox?",
    answer:
      "DL (99 by 210 mm) and folded A4 both fit standard letterboxes without bending. Larger formats are fine too, but a DL fits on the fridge, which is where many pamphlets end up and stay.",
  },
  {
    question: "Who uses brochure distribution?",
    answer:
      "Schools announcing open days, aged care and childcare centres, community groups, new housing developments and service businesses with more to explain than a flyer allows. Any brochure with a local audience suits it.",
  },
  {
    question: "Do you design or print pamphlets?",
    answer:
      "No. We distribute only, so you supply the printed pamphlets. We plan the routes, deliver each one on its own and send you the GPS map of every street covered.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pamphlet and brochure distribution in Melbourne",
  serviceType: "Pamphlet distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 pamphlets, exclusive delivery" },
};

export default function PamphletDelivery() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Flyer Distribution", href: "/services/flyer-distribution" },
          { name: "Pamphlet Delivery" },
        ]}
        h1="Pamphlet and Brochure Distribution in Melbourne"
        lead="Pamphlet distribution for messages that need more room than a flyer. Each pamphlet or brochure goes into the letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/letterbox-hand.jpg", alt: "A hand posting a flyer into a steel letterbox" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 pamphlets" },
          { value: "1,000", label: "minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="When a flyer isn't enough" first>
        <p>
          Some messages need more than one page. An open day needs a map and a timetable; a new childcare centre needs
          its hours, rooms and fees; a services business needs to explain what it does. A folded pamphlet gives that
          room.
        </p>
        <p>
          Pamphlet delivery works the same way as our flyer drops. You choose the streets, we deliver each pamphlet on
          its own, and the GPS report shows exactly where it went.
        </p>
      </Section>

      <Section title="Who uses brochure distribution">
        <Bullets
          items={[
            <><strong>Schools and kindergartens</strong> promoting open days and enrolments.</>,
            <><strong>Childcare and aged care centres</strong> introducing a new site to the surrounding streets.</>,
            <><strong>Community groups and sports clubs</strong> announcing registrations and events.</>,
            <><strong>New housing developments</strong> telling neighbours what is being built.</>,
            <><strong>Service businesses</strong>, such as financial planners or builders, with a range to explain.</>,
          ]}
        />
      </Section>

      <Section title="Formats that suit a letterbox">
        <p>
          DL pamphlets (99 by 210 mm) and A4 sheets folded to DL are the most common. They fit every standard
          letterbox without bending and sit neatly on a fridge or noticeboard, which is where a useful pamphlet stays
          for weeks.
        </p>
        <p>
          A5 booklets and A4 brochures are fine too. Thicker booklets take more effort to carry, so we confirm the rate
          for those in your quote. Brochure distribution across Melbourne&rsquo;s south-east starts at 1,000 copies.
        </p>
      </Section>

      <Section title="Timing a pamphlet drop">
        <Bullets
          items={[
            <><strong>Open days:</strong> two to three weeks before the date, with a reminder drop a week out.</>,
            <><strong>Enrolments:</strong> term 1 and term 3 are when families plan for the following year.</>,
            <><strong>Events and registrations:</strong> four weeks ahead, so families can plan around them.</>,
          ]}
        />
      </Section>

      <Section title="Pamphlet distribution for schools and centres">
        <p>
          Schools, kindergartens and childcare centres draw families from a fairly fixed area. Most families choose a
          school or centre within a short drive, so the streets around the site are where an open day pamphlet does
          its work.
        </p>
        <p>
          Give us your address and the area your families come from, and we&rsquo;ll plan the routes around it. Many
          centres repeat the same streets each enrolment season, so the GPS reports let you compare one year&rsquo;s
          open day numbers with the next.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Pamphlet delivery cost"
          figures={[{ value: "$200", label: "1,000 pamphlets" }, { value: "$1,000", label: "5,000 pamphlets" }]}
        >
          Standard pamphlets and folded brochures are $200 per 1,000, exclusive, from 1,000. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, our{" "}
          <TextLink href="/services/catalogue-delivery">catalogue delivery</TextLink> page for retail catalogues, or the{" "}
          <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">suburbs we cover</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a pamphlet delivery quote"
        lead="Tell us your pamphlet size, quantity and target streets. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Pamphlet and brochure delivery FAQs" />
    </>
  );
}
