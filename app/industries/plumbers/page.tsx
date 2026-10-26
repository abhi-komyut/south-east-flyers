import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  Steps,
  Callout,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/plumbers";

export const metadata: Metadata = {
  title: { absolute: "Plumber Flyers Melbourne | South East Flyers" },
  description:
    "Plumber flyers delivered to the letterboxes around your base. Exclusive, never bundled, GPS-tracked. $200 per 1,000 flyers across Melbourne's south-east.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Plumber Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for plumbers across Melbourne's south-east. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do flyers work for plumbers?",
    answer:
      "Plumbing is local and often urgent, so the number a household already has on hand gets the call. A flyer delivered on its own to the streets around your base puts your number there before the blocked drain or burst pipe happens.",
  },
  {
    question: "How many plumbing flyers should I start with?",
    answer:
      "Start with 1,000 to 2,500 homes closest to your base, which costs $200 to $500. Ask callers where they found you, then extend to the suburbs that respond.",
  },
  {
    question: "When should a plumber do a letterbox drop?",
    answer:
      "Late autumn suits blocked drain and hot water flyers, as falling leaves and the first cold snaps arrive. Regular drops every few months keep your number in the house for the emergency calls that happen year-round.",
  },
  {
    question: "Can you deliver around a job I'm on?",
    answer:
      "Yes. Give us the job address and we can cover the surrounding streets, so neighbours who saw your van have your number too.",
  },
  {
    question: "Will my flyer be delivered with other plumbers' flyers?",
    answer:
      "No. Every drop is exclusive. The walker carries only your flyer on that route, so it never arrives next to a competitor's.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for plumbers",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Plumbing businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Plumbers() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Plumbers" },
        ]}
        h1="Plumber flyers delivered to your local streets"
        lead="Letterbox marketing for plumbers in Melbourne's south-east. Your flyer goes into each letterbox on its own, every route is GPS-tracked, and you can start with 1,000 homes around your base."
        image={{ src: "/images/redesign/ind-trades.jpg", alt: "A tradesperson in hi-vis working on a Melbourne home" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Why plumbing flyers still get calls" first>
        <p>
          Nobody shops around for a plumber when water is coming through the ceiling. They call the number they can
          find fastest: the one on the fridge, in the kitchen drawer, or on the flyer that arrived last week. Plumber
          flyers work because they are already in the house when the emergency starts.
        </p>
        <p>
          That only happens if the flyer gets noticed. A plumbing flyer folded inside a supermarket catalogue is easy to
          miss. Ours are delivered exclusively, so yours is the only thing the walker puts in
          that letterbox.
        </p>
        <p>
          It is a small part of plumbing marketing overall, but it is the part that puts your number in a house
          before the emergency happens, rather than competing for attention after it already has.
        </p>
      </Section>

      <Section title="What to put on a plumbing flyer">
        <p>The plumbing flyers that bring in calls tend to share a few things:</p>
        <Bullets
          items={[
            <><strong>The problem in big type.</strong> &ldquo;Blocked drain?&rdquo; or &ldquo;No hot water?&rdquo; reads faster than your business name.</>,
            <><strong>A phone number readable from across the kitchen</strong>, plus your after-hours availability.</>,
            <><strong>Your licence or registration number</strong>, which tells households you are qualified.</>,
            <><strong>The suburbs you cover</strong>, so people know you are close.</>,
            <><strong>A reason to keep it</strong>, such as a fixed call-out fee, a discount code or a tear-off strip.</>,
          ]}
        />
      </Section>

      <Section title="Where and when to drop">
        <p>
          Start with the streets closest to your base, where you can reach a job fastest and make the most margin.
          Older homes with original pipes and established trees tend to need more drain and pipe work, so they are a
          good place to begin.
        </p>
        <p>
          Timing helps too. Hot water and gas heating calls pick up as Melbourne gets cold, and autumn leaves fill
          gutters and drains. A drop in late autumn catches both. Between seasons, a drop every few months keeps your
          number in the house for the emergencies that happen any time.
        </p>
      </Section>

      <Section title="Drops around the jobs you are already on">
        <p>
          When your van is parked in a street, the neighbours notice. A 1,000-flyer drop in the surrounding streets,
          mentioning that you are working nearby, turns that visibility into the next booking. Give us the job address
          and we will quote for the streets around it.
        </p>
      </Section>

      <Section title="A first three months for a plumbing drop">
        <Steps
          steps={[
            { title: "Month one: 1,000 to 2,500 homes", body: "Cover the streets nearest your base. Note every caller who mentions the flyer." },
            { title: "Month two: a neighbour drop", body: "Pick a job you are on and cover the streets around it with the same flyer." },
            { title: "Month three: repeat what worked", body: "Go back to the streets that called, and add the next suburb along." },
          ]}
        />
        <p>
          By the end of three months you will know your cost per call from letterbox drops, and which areas are worth
          covering every season.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Cost of a plumbing letterbox drop"
          figures={[
            { value: "$500", label: "2,500 homes around your base" },
            { value: "$2,100", label: "a Brighton-sized suburb, approx." },
          ]}
        >
          <p className="m-0">
            Every drop is $200 per 1,000 flyers. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink>{" "}
            page for more quantities.
          </p>
          <p className="m-0">
            Plumbing is one of several trades we deliver for. See{" "}
            <TextLink href="/industries/home-services">home services marketing</TextLink> for{" "}
            <TextLink href="/industries/electricians">electricians</TextLink>,{" "}
            <TextLink href="/industries/roofing">roofers</TextLink>, builders and cleaners, or our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get your plumbing number on local fridges"
        lead="Tell us where you're based and the suburbs you cover. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Plumber letterbox drop FAQs" />
    </>
  );
}
