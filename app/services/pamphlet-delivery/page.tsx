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
    "Pamphlet distribution and brochure delivery across Melbourne's south-east. Each one delivered on its own, GPS-tracked, from 1,000 pamphlets.",
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
      "A flyer is usually a single sheet; a pamphlet or brochure is folded, with more room for detail. We deliver all three the same way, each on its own.",
  },
  {
    question: "How much does pamphlet delivery cost?",
    answer:
      "Standard pamphlets and folded brochures start from 1,000, and heavier booklets are quoted on size and weight. Tell us your pamphlet size and quantity and we'll send a price with a quick turnaround. See the letterbox drop cost page for the flyer starting price.",
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
        lead="Get your pamphlets and brochures into letterboxes across Melbourne's south-east with GPS-tracked distribution, each delivered on its own."
        image={{ src: "/images/redesign/letterbox-hand.jpg", alt: "A hand posting a flyer into a steel letterbox" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "56", label: "suburbs covered" },
          { value: "1,000", label: "pamphlets, your first run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="When a flyer isn't enough" first>
        <p>
          Some messages need more than one page. An open day needs a map and a timetable; a new childcare centre needs
          its hours, rooms and fees; a services business needs to explain what it does. A folded pamphlet gives that
          room, and pamphlet distribution puts the whole story in the letterbox.
        </p>
        <p>
          Pamphlet delivery works the same way as our{" "}
          <TextLink href="/services/flyer-distribution">flyer distribution</TextLink> drops. You choose the streets, we
          deliver each pamphlet on its own, and the GPS report shows exactly where it went.
        </p>
      </Section>

      <Section title="Who uses brochure distribution">
        <Bullets
          items={[
            <><strong>Schools and kindergartens</strong> promoting open days and enrolments (see <TextLink href="/industries/schools-childcare">school and childcare enrolment drops</TextLink>).</>,
            <><strong>Childcare and aged care centres</strong> introducing a new site to the surrounding streets.</>,
            <><strong>Community groups and sports clubs</strong> announcing registrations and events.</>,
            <><strong>New housing developments</strong> telling neighbours what is being built.</>,
            <><strong>Service businesses</strong> and other{" "}<TextLink href="/industries/local-businesses">local businesses</TextLink>, such as financial planners or builders, with a range to explain.</>,
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
        <Callout title="Pamphlets across Melbourne's south-east">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run, from 1,000 pamphlets. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, our{" "}
            <TextLink href="/services/catalogue-delivery">catalogue delivery</TextLink> page for retail catalogues, or the{" "}
            <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">suburbs we cover</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a pamphlet delivery quote"
        lead="Tell us your pamphlet size, quantity and target streets. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Pamphlet and brochure delivery FAQs" />
    </>
  );
}
