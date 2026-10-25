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
} from "../../components/landing";

const PAGE_PATH = "/industries/electricians";

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution for Electricians | SEF" },
  description:
    "Electrician flyers delivered to the letterboxes around your base. Exclusive, never bundled, GPS-tracked. $200 per 1,000 flyers across Melbourne's south-east.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Electrician Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for electricians across Melbourne's south-east. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do flyers actually generate work for electricians?",
    answer:
      "Switchboard faults and power outages are urgent, so the number already in the kitchen drawer gets the call. Electrician flyers work by being in the house before the trip switch fails, not by competing for attention online at that moment.",
  },
  {
    question: "How many electrician flyers should I start with?",
    answer:
      "Start with 1,000 to 2,500 homes around your base or a recent job, costing $200 to $500. Ask new callers where they found you, then expand into the streets that respond.",
  },
  {
    question: "When should an electrician run a letterbox drop?",
    answer:
      "Spring suits solar, EV charger and air conditioning flyers before summer bills arrive. Late summer and storm season suit safety switch and switchboard flyers after outages. Regular drops keep your number on hand for faults that happen any time of year.",
  },
  {
    question: "Can you drop flyers around a switchboard or solar job I'm doing?",
    answer:
      "Yes. Give us the job address and we will cover the surrounding streets, so neighbours who saw your van parked outside have your number too.",
  },
  {
    question: "Will my flyer be bundled with another electrician's flyer?",
    answer:
      "No. Every drop is exclusive. The walker carries only your flyer on that route, so it never arrives next to a competitor's in the same letterbox.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for electricians",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Electrical businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Electricians() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Electricians" },
        ]}
        h1="Letterbox Marketing for Electricians"
        lead="Electrician marketing that reaches the streets around your base. Your flyer goes into each letterbox on its own, every route is GPS-tracked, and you can start with 1,000 homes."
        proof={["Exclusive, never bundled", "$200 per 1,000 flyers", "Drops around active jobs"]}
      />

      <ProofStrip />

      <Section title="Why electrician flyers still get calls">
        <p>
          Nobody shops around when the power trips at 9pm or a switchboard starts smoking. They call the number
          they can find fastest: the one on the fridge, saved in their phone from last time, or on the flyer
          that arrived a few weeks ago. Electrician flyers work because they are already in the house before
          the fault happens.
        </p>
        <p>
          That only works if the flyer gets noticed. One folded inside a stack of real estate catalogues is easy
          to miss. Ours are delivered exclusively, so yours is the only thing the walker puts in that letterbox.
        </p>
      </Section>

      <Section title="What to put on an electrician flyer" tone="gray">
        <p>The electrician flyers that bring in calls tend to share a few things:</p>
        <Bullets
          items={[
            <><strong>The job in big type.</strong> &ldquo;Switchboard upgrade?&rdquo; or &ldquo;Power keeps tripping?&rdquo; reads faster than your business name.</>,
            <><strong>A phone number readable from across the kitchen</strong>, plus whether you cover after-hours faults.</>,
            <><strong>Your licence number</strong>, which tells households the work is compliant and insured.</>,
            <><strong>The suburbs you cover</strong>, so people know you can get there quickly.</>,
            <><strong>A reason to keep it</strong>, such as a free safety switch check, a discount code or a tear-off strip.</>,
          ]}
        />
      </Section>

      <Section title="Where and when to drop">
        <p>
          Start with the streets closest to your base, where you can reach a call-out fastest. Older weatherboard
          and brick homes still running fuse-based switchboards are a strong target for safety switch and
          switchboard upgrade flyers.
        </p>
        <p>
          Timing helps too. Spring is when households start thinking about solar, EV chargers and air
          conditioning before summer bills land. Late summer and storm season bring outages and surge damage,
          which drives calls for switchboard and safety switch work. A drop every few months keeps your number
          on hand for the faults that happen any time.
        </p>
      </Section>

      <Section title="Drops around the jobs you are already on" tone="gray">
        <p>
          When your van is parked outside a switchboard or solar job, the neighbours notice. A 1,000-flyer drop
          in the surrounding streets, mentioning the work you just finished nearby, turns that visibility into
          the next booking. Give us the job address and we will quote for the streets around it.
        </p>
      </Section>

      <Section title="A first three months for an electrician drop">
        <Steps
          steps={[
            { title: "Month one: 1,000 to 2,500 homes", body: "Cover the streets nearest your base. Note every caller who mentions the flyer." },
            { title: "Month two: a neighbour drop", body: "Pick a switchboard or solar job and cover the streets around it with the same flyer." },
            { title: "Month three: repeat what worked", body: "Go back to the streets that called, and add the next suburb along." },
          ]}
        />
        <p>
          By the end of three months you will know your cost per call from letterbox drops, and which streets are
          worth covering every season.
        </p>
      </Section>

      <Section title="Cost of an electrician letterbox drop" tone="gray">
        <p>
          Every drop is $200 per 1,000 flyers. Covering 2,500 homes around your base costs $500; a whole suburb
          the size of <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> (about 10,500
          homes) costs about $2,100. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink>{" "}
          page for more quantities.
        </p>
        <p>
          For marketing for electricians beyond letterbox drops, our team can talk through where flyers fit
          alongside your other local marketing. Electricians are one of several trades we deliver for. See{" "}
          <TextLink href="/industries/home-services">home services marketing</TextLink> for{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>,{" "}
          <TextLink href="/industries/roofing">roofers</TextLink>, builders and cleaners, or our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Electrician Letterbox Drop FAQs" />

      <CtaBanner
        title="Get your electrical number on local fridges"
        body="Tell us where you're based and the suburbs you cover. We'll quote within 24 hours."
      />
    </>
  );
}
