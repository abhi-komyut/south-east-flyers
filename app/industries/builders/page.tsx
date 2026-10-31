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

const PAGE_PATH = "/industries/builders";

export const metadata: Metadata = {
  title: { absolute: "Construction & Builder Flyers Melbourne | South East Flyers" },
  description:
    "Construction flyers delivered on their own to the streets around your sites and the suburbs you build in. GPS-tracked, exclusive delivery, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Construction & Builder Flyers Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for builders across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do construction flyers work for builders?",
    answer:
      "They work best around a live site. Neighbours watch the build for months, and many are weighing up their own extension or rebuild. A flyer with the finished design and your registration details gives them a builder to call.",
  },
  {
    question: "When should a builder drop flyers around a site?",
    answer:
      "Three times: before work starts, to introduce yourself and the build hours; at lock-up, when the house takes shape; and at handover, with photos of the finished home. Each drop covers around 1,000 flyers around the site.",
  },
  {
    question: "Which suburbs suit knockdown-rebuild flyers?",
    answer:
      "Suburbs with older houses on wide blocks, where owners compare renovating with rebuilding. Mount Waverley, Glen Waverley, Bentleigh and the house streets of Box Hill all fit, and we can suggest streets near your current jobs.",
  },
  {
    question: "Should a builder's flyer show prices?",
    answer:
      "Usually not. Build costs vary too much for a flyer price to be useful. Show a finished project nearby, your registration, the kind of work you take on and an offer of a site visit or feasibility chat.",
  },
  {
    question: "How many flyers should a builder start with?",
    answer:
      "1,000 flyers around one live site is a sensible first test. Builders who want enquiries across a whole suburb usually step up to 5,000 homes, spread over a few months.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for builders",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Builders and construction businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function Builders() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Builders" },
        ]}
        h1="Construction flyers for Melbourne builders"
        lead="Construction flyers delivered on their own to the neighbours of your sites and the streets where owners are deciding whether to rebuild. Every route is GPS-tracked."
        image={{ src: "/images/redesign/ind-trades.jpg", alt: "A tradesperson in hi-vis working on a tiled Melbourne roof" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "40+", label: "suburbs covered" },
          { value: "1,000", label: "flyers covers one site's neighbours" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Every site is an advertisement" first>
        <p>
          A build sits in the same street for six months or more. The neighbours see the slab go down, the frame go up
          and the finished house appear. Some of them are planning their own extension or knockdown, and they are
          already judging your work.
        </p>
        <p>
          A builder&rsquo;s flyer in their letterbox turns that attention into an enquiry. It gives them your name,
          your registration number and a way to start the conversation, without walking onto a site to ask.
        </p>
      </Section>

      <Section title="Three drops around each build">
        <Bullets
          items={[
            <><strong>Before work starts.</strong> Introduce the project, the build hours and a contact for concerns. Neighbours who feel informed complain less.</>,
            <><strong>At lock-up.</strong> The house now looks like a home. Add a render or a photo and invite owners to talk about their own plans.</>,
            <><strong>At handover.</strong> Show the finished home with the owner&rsquo;s permission. This is the drop that brings the most enquiries.</>,
          ]}
        />
        <p>
          At around 1,000 homes per drop, three drops cover the whole build cycle at each site. The GPS report from
          each run shows exactly which streets received it.
        </p>
      </Section>

      <Section title="Suburbs where owners rebuild">
        <p>
          Knockdown-rebuild work clusters where post-war houses sit on generous blocks. Across our service area that
          includes <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>, where new two-storey homes
          now sit between the originals.
        </p>
        <p>
          In established suburbs like <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>, the
          work leans towards high-end custom homes and heritage extensions. A flyer there should show finish and
          detail rather than speed.
        </p>
      </Section>

      <Section title="What a builder's flyer should say">
        <Bullets
          items={[
            <><strong>A finished project nearby</strong>, ideally in the same suburb. Owners trust work they can drive past.</>,
            <><strong>Your registration and insurance</strong>, stated plainly. On a job this size, owners check.</>,
            <><strong>The work you take on:</strong> custom homes, knockdown rebuilds, extensions or dual occupancy.</>,
            <><strong>A low-pressure next step</strong>, such as a site visit or feasibility chat, rather than a price.</>,
          ]}
        />
        <p>
          Construction flyers that try to cover every service at once tend to read like a brochure. One project, one
          clear offer and one phone number is enough.
        </p>
      </Section>

      <Section title="Tracking what construction flyers bring in">
        <p>
          Builders get fewer enquiries than most trades, but each one is worth far more, so it pays to know where they
          came from. Ask every caller which site or flyer they saw, and note their street.
        </p>
        <p>
          After a few builds, the pattern is usually clear. Some sites bring three or four serious enquiries from the
          surrounding streets; others bring none. The GPS report from each drop shows the exact streets covered, so
          you can match enquiries to routes and decide which sites deserve all three drops next time.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities"
          figures={[{ value: "1,000", label: "homes around a site" }, { value: "5,000", label: "homes, a whole area" }]}
        >
          Every drop is exclusive, from 1,000 flyers. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for a quote. Building is
          one of the trades on our <TextLink href="/industries/home-services">home services</TextLink> page, alongside{" "}
          <TextLink href="/industries/renovation">renovators</TextLink> and{" "}
          <TextLink href="/industries/electricians">electricians</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Put your builds in front of the neighbours"
        lead="Tell us your site addresses and the suburbs you build in. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Builder letterbox drop FAQs" />
    </>
  );
}
