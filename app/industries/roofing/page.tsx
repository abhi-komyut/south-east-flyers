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

const PAGE_PATH = "/industries/roofing";

export const metadata: Metadata = {
  title: { absolute: "Roofing Flyers & Letterbox Drops Melbourne | SEF" },
  description:
    "Roofing flyers delivered to the streets around your jobs. Exclusive, never bundled, GPS-tracked. $200 per 1,000 flyers across Melbourne's south-east.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Roofing Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for roofing companies across Melbourne's south-east. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do roofing flyers actually bring in work?",
    answer:
      "Most roofing jobs start with a leak, storm damage or a visibly ageing roof, so the number already on hand gets the call. Roofing flyers work by being in the house before the next storm, not by competing for attention in a search result at the moment of damage.",
  },
  {
    question: "How many roofing flyers should I start with?",
    answer:
      "Start with 1,000 to 2,500 homes around your base or a recent job, costing $200 to $500. Ask new callers where they found you, then expand into the streets that respond.",
  },
  {
    question: "Is a roofing letterbox drop worth running after a storm?",
    answer:
      "Yes, within reason. A drop in the streets a storm actually hit reaches households that know they have damage to check. We'll help you time it so flyers land while the damage is still front of mind.",
  },
  {
    question: "Can you drop flyers around a roof restoration job I'm doing?",
    answer:
      "Yes. Give us the job address and we will cover the surrounding streets, so neighbours who saw the scaffolding or the new roof have your number too.",
  },
  {
    question: "Will my flyer be bundled with another roofer's flyer?",
    answer:
      "No. Every drop is exclusive. The walker carries only your flyer on that route, so it never arrives next to a competing roofer's.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for roofing companies",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Roofing businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Roofing() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Roofing" },
        ]}
        h1="Letterbox Drops for Roofing Companies"
        lead="Roofing flyers delivered to the streets around your jobs and your base. Your flyer goes into each letterbox on its own, every route is GPS-tracked, and you can start with 1,000 homes."
        proof={["Exclusive, never bundled", "$200 per 1,000 flyers", "Drops around active jobs"]}
      />

      <ProofStrip />

      <Section title="Why roofing flyers still get calls">
        <p>
          A roof problem usually starts with a leak, a missing tile after wind, or a ceiling stain that keeps
          spreading. Most households call the business whose flyer is already stuck to the fridge rather than
          search from scratch. Roofing flyers work because they are in the house before the damage is.
        </p>
        <p>
          That only works if the flyer gets noticed. One mixed into a stack of real estate catalogues is easy
          to miss. Ours are delivered exclusively, so yours is the only thing the walker puts in that letterbox.
          We already deliver for roofing companies including{" "}
          <TextLink href="/portfolio">Storm Shield Roofing</TextLink>.
        </p>
      </Section>

      <Section title="What to put on a roofing flyer" tone="gray">
        <p>The roofing flyers that bring in calls tend to share a few things:</p>
        <Bullets
          items={[
            <><strong>The problem in big type.</strong> &ldquo;Roof leaking?&rdquo; or &ldquo;Storm damage?&rdquo; reads faster than your business name.</>,
            <><strong>A phone number readable from across the kitchen</strong>, plus whether you offer emergency tarping.</>,
            <><strong>Your licence number and insurance</strong>, which matters more for roofing than most trades.</>,
            <><strong>Before-and-after photos</strong> of a restoration, so households can picture the result.</>,
            <><strong>A reason to call now</strong>, such as a free roof inspection or a storm-season check.</>,
          ]}
        />
      </Section>

      <Section title="Where and when to drop">
        <p>
          Start with the streets closest to your base or a recent job, where you can get a quote out quickly.
          Older suburbs with original tile or iron roofs nearing the end of their life are a strong target for
          roof restoration flyers and general repair work.
        </p>
        <p>
          Timing matters more for roofing than most trades. Spring and early summer storms create sudden,
          visible damage, so a drop in the streets actually affected can land while the damage is still fresh.
          Autumn suits gutter and general roof condition flyers ahead of winter rain. A drop every few months
          keeps your number on hand for the leaks that show up any time.
        </p>
      </Section>

      <Section title="Drops around the jobs you are already on" tone="gray">
        <p>
          Scaffolding and a crew on a roof are hard to miss from the street. A 1,000-flyer drop in the
          surrounding streets, mentioning the restoration or repair you just finished nearby, turns that
          visibility into the next quote request. Give us the job address and we will quote for the streets
          around it.
        </p>
      </Section>

      <Section title="A first three months for a roofing drop">
        <Steps
          steps={[
            { title: "Month one: 1,000 to 2,500 homes", body: "Cover the streets nearest your base. Note every caller who mentions the flyer." },
            { title: "Month two: a neighbour drop", body: "Pick a restoration or repair job and cover the streets around it with the same flyer." },
            { title: "Month three: repeat what worked", body: "Go back to the streets that called, and add the next suburb along." },
          ]}
        />
        <p>
          By the end of three months you will know your cost per quote request from letterbox drops, and which
          streets are worth covering every storm season.
        </p>
      </Section>

      <Section title="Cost of a roofing letterbox drop" tone="gray">
        <p>
          Every drop is $200 per 1,000 flyers. Covering 2,500 homes around your base costs $500; a whole suburb
          the size of <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> (about 10,500
          homes) costs about $2,100. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink>{" "}
          page for more quantities.
        </p>
        <p>
          Letterbox drops are one part of roofing marketing; most companies pair them with referrals and online
          reviews. Roofing is one of several trades we deliver for. See{" "}
          <TextLink href="/industries/home-services">home services marketing</TextLink> for{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>,{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>, builders and cleaners, or our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Roofing Letterbox Drop FAQs" />

      <CtaBanner
        title="Get your roofing business into local letterboxes"
        body="Tell us where you're based and the suburbs you cover. We'll quote within 24 hours."
      />
    </>
  );
}
