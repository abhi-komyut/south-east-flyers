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

const PAGE_PATH = "/industries/electricians";

export const metadata: Metadata = {
  title: { absolute: "Electrician Flyers Melbourne | South East Flyers" },
  description:
    "Electrician flyers for switchboard, safety switch, solar and EV charger work, delivered on their own across Melbourne's south-east. Exclusive delivery, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Electrician Flyers Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for electricians across Melbourne's south-east. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do electrician flyers work?",
    answer:
      "They work best for planned jobs such as switchboard upgrades, safety switches, solar batteries and EV chargers, which owners think about for weeks. A flyer on the fridge is there when they decide.",
  },
  {
    question: "Should I advertise emergency work or upgrades?",
    answer:
      "Lead with one. An upgrade flyer with a clear offer suits a general drop; an emergency number suits a magnet-style flyer kept for later. Trying to say both on one side usually says neither.",
  },
  {
    question: "When is the best time for an electrician letterbox drop?",
    answer:
      "Late winter and spring suit solar, battery, EV charger and air conditioning circuit flyers ahead of summer. Autumn suits safety switch and smoke alarm checks before the heaters go on.",
  },
  {
    question: "What should an electrician flyer include?",
    answer:
      "Your REC number, the one or two jobs you want more of, a price or a free quote offer, the suburbs you cover, and a phone number large enough to read from across a room.",
  },
  {
    question: "How many flyers should an electrician start with?",
    answer:
      "1,000 to 2,500 homes around your base. Track which streets call, then repeat the drop there and move outward into the streets next door once you know it works.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for electricians",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Electrical contractors" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
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
        h1="Electrician flyers that win upgrade work"
        lead="Electrician flyers delivered on their own to the homes most likely to need a switchboard, safety switch, solar or EV charger job. Every route is GPS-tracked, from 1,000 flyers."
        image={{ src: "/images/redesign/ind-trades.jpg", alt: "A tradesperson in hi-vis working on a Melbourne home" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "40+", label: "suburbs covered" },
          { value: "1,000", label: "flyers, your first test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Planned upgrades are where flyers pay off" first>
        <p>
          Electrical work splits into two kinds. Faults and outages are urgent and short; the household rings whoever
          they can reach. Upgrades are different: a new switchboard, safety switches, a solar battery, an EV charger or
          extra circuits for air conditioning. Owners think about those for weeks and often want two quotes.
        </p>
        <p>
          Electrician flyers do their best work on the second kind. A flyer that arrives on its own, with one upgrade
          and a clear offer, sits on the bench while the owner decides, and gets picked up when they are ready.
        </p>
        <p>
          It is a small, inexpensive part of electrician marketing overall, but it is the part that puts your
          name in the house before the decision gets made. For marketing for electricians beyond letterbox
          drops, talk to us about which suburbs and seasons are worth the spend.
        </p>
      </Section>

      <Section title="Homes that need electrical upgrades">
        <Bullets
          items={[
            <><strong>Older homes with original switchboards.</strong> Ceramic fuses and missing safety switches are common in houses built before the 1990s.</>,
            <><strong>Streets of detached houses.</strong> They have roof space for solar and driveways for EV chargers, as in the house-lined streets of <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>.</>,
            <><strong>Homes being renovated or sold.</strong> Rewiring and compliance work come up before sale and during renovations.</>,
            <><strong>Long-term owners.</strong> Owners who have been in suburbs like <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> for decades invest in the house they plan to stay in.</>,
          ]}
        />
      </Section>

      <Section title="What to put on an electrician flyer">
        <p>
          Pick the job you want more of and build the flyer around it. &ldquo;Switchboard upgrade from $X&rdquo; or
          &ldquo;Free EV charger quote&rdquo; gets a better response than a list of every service you offer. Then add:
        </p>
        <Bullets
          items={[
            <>Your REC number, so households can check you are a registered electrical contractor</>,
            <>A photo of a finished switchboard or install, not a stock lightning bolt</>,
            <>The suburbs you cover and a phone number readable from across a room</>,
            <>One line about emergency call-outs, if you offer them</>,
          ]}
        />
      </Section>

      <Section title="Timing electrician drops">
        <p>
          Interest in solar, batteries and air conditioning builds through late winter and spring as owners plan for
          summer, so those flyers belong in letterboxes from August to October. Safety switch, smoke alarm and heating
          circuit checks suit autumn, before the heaters go on.
        </p>
        <p>
          Between seasons, a drop around any job you are on keeps the van&rsquo;s visibility working for you: the
          neighbours saw you there, and now they have your number.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities for an electrician letterbox drop"
        >
          <p className="m-0">
            Every drop is delivered exclusively. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink>{" "}
            page for other quantities, or <TextLink href="/industries/home-services">home services</TextLink> for how{" "}
            <TextLink href="/industries/plumbers">plumbers</TextLink> and{" "}
            <TextLink href="/industries/roofing">roofers</TextLink> use letterbox drops. Our{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> lists every suburb
            we cover.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get your next upgrade job from the letterbox"
        lead="Tell us your base, the jobs you want more of and the suburbs you cover. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Electrician letterbox drop FAQs" />
    </>
  );
}
