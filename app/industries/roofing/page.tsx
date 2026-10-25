import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  ProofStrip,
  Section,
  Bullets,
  CtaBanner,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/roofing";

export const metadata: Metadata = {
  title: { absolute: "Roofing Flyers Melbourne | South East Flyers" },
  description:
    "Roofing flyers delivered on their own to older homes and storm-hit streets in Melbourne's south-east. GPS-tracked, $200 per 1,000 flyers, from 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Roofing Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for roofing companies across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do roofing flyers bring in work?",
    answer:
      "Roof work starts with a leak, storm damage or an ageing roof the owner has been watching. A flyer already in the house when that moment comes gets the first call, and before-and-after photos on it do the selling.",
  },
  {
    question: "Is it worth dropping flyers after a storm?",
    answer:
      "Yes, in the streets the storm actually hit and within a week or two. Lead with a free inspection and your licence and insurance, not pressure. Households who feel rushed call someone else.",
  },
  {
    question: "Which homes should a roofing drop target?",
    answer:
      "Homes with original tiled or iron roofs that are 40 or more years old. Many established streets in Melbourne's south-east and east fit that description, and we can suggest where to start.",
  },
  {
    question: "Can you deliver around a roof I'm restoring?",
    answer:
      "Yes. Scaffolding and a crew on a roof get noticed, so a 1,000-flyer drop around the job converts that attention into quote requests. Give us the address.",
  },
  {
    question: "How many roofing flyers should I start with?",
    answer:
      "2,500 to 5,000 homes ($500 to $1,000) gives a roofer enough reach to see results, because a roof is a bigger, less frequent job than a blocked drain.",
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
        h1="Roofing Flyers for Melbourne Roofers"
        lead="Roofing flyers delivered on their own to the streets with ageing roofs, the streets a storm just hit, and the streets around your current job. Every route is GPS-tracked."
        proof={["Exclusive, never bundled", "$200 per 1,000 flyers", "Storm and neighbour drops"]}
      />

      <ProofStrip />

      <Section title="A roof is a big decision">
        <p>
          Nobody replaces a roof on impulse. Owners notice a stain, get a quote or two, and often wait for the next
          wet season before committing. The roofing companies that win the job are usually the ones whose name the
          owner has seen more than once.
        </p>
        <p>
          That is why roofing suits repeat letterbox drops. A flyer delivered on its own, not inside a stack of
          catalogues, gets read; the second and third one in the same street build the familiarity that gets the
          call. We already deliver for roofing companies including{" "}
          <TextLink href="/portfolio">Storm Shield Roofing</TextLink>.
        </p>
      </Section>

      <Section title="Which streets need a roofer" tone="gray">
        <p>
          Tiled and iron roofs on homes built from the 1950s to the 1980s are now at the age where restorations,
          re-pointing and replacements come up. Much of Melbourne&rsquo;s south-east and east was built in that era,
          so many streets in our service area are a natural fit.
        </p>
        <Bullets
          items={[
            <>Period and post-war homes in suburbs like <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink></>,
            <>Brick-veneer houses with concrete tiles in suburbs like <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink></>,
            <>Streets with large established trees, where gutters block and valleys rust</>,
          ]}
        />
      </Section>

      <Section title="Drops after a storm, done properly">
        <p>
          After a hail or wind storm, households in the affected streets know they should get the roof checked. A drop
          in those streets within a week or two lands while the damage is front of mind.
        </p>
        <p>
          Keep the flyer calm and credible: a free inspection, your licence and insurance details, and photos of real
          repairs. Owners are wary of door-knockers after storms, and a professional flyer they can check at their own
          pace earns more trust than a hard sell.
        </p>
      </Section>

      <Section title="What sells a roof on paper" tone="gray">
        <Bullets
          items={[
            <><strong>Before-and-after photos</strong> of a restoration you completed, ideally in a nearby suburb.</>,
            <><strong>Licence, insurance and warranty</strong> stated clearly; for a job this size, owners check.</>,
            <><strong>A free inspection or photo report</strong> as the call to action, rather than a price.</>,
            <><strong>Gutters and leaks</strong> as an entry point; small jobs often lead to the restoration later.</>,
          ]}
        />
      </Section>

      <Section title="Quantities and cost">
        <p>
          Because roof jobs are less frequent but larger than most trade work, roofers usually need more reach than a
          plumber to see results. A 2,500-home drop costs $500 and a 5,000-home drop costs $1,000, at $200 per 1,000.
          See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more quantities.
        </p>
        <p>
          Roofing is one of the trades on our <TextLink href="/industries/home-services">home services</TextLink> page,
          alongside <TextLink href="/industries/plumbers">plumbers</TextLink> and{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>. Our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> lists every suburb
          we cover.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Roofing Letterbox Drop FAQs" />

      <CtaBanner
        title="Put your roofing work in front of the right streets"
        body="Tell us your base, recent jobs and the suburbs you cover. We'll quote within 24 hours."
      />
    </>
  );
}
