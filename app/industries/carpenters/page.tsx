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

const PAGE_PATH = "/industries/carpenters";

export const metadata: Metadata = {
  title: { absolute: "Carpentry Flyers Melbourne | South East Flyers" },
  description:
    "Carpentry flyers for decks, pergolas, built-ins and repairs, delivered on their own to homes in Melbourne's south-east. GPS-tracked, $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Carpentry Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for carpenters across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do carpentry flyers bring in work?",
    answer:
      "Yes, for jobs owners plan ahead, such as decks, pergolas and built-in wardrobes. A flyer with a photo of finished work stays in the house until the owner is ready, and the carpenter they remember gets the call.",
  },
  {
    question: "When should a carpenter drop deck and pergola flyers?",
    answer:
      "Late winter and early spring. Owners want outdoor areas ready for summer and start getting quotes in August and September. A drop then lands before the rush, while your diary still has room.",
  },
  {
    question: "Which homes suit carpentry flyers?",
    answer:
      "Houses with backyards for decks and pergolas, and older homes for built-ins, doors and repairs. Suburbs like Bentleigh, Mount Waverley and Sandringham have plenty of both.",
  },
  {
    question: "Should I put prices on a carpentry flyer?",
    answer:
      "A starting price can help for standard jobs such as a small deck or a set of wardrobes, if it's honest. For custom work, show a finished job and offer a free measure and quote instead.",
  },
  {
    question: "Can you deliver around a deck I've just built?",
    answer:
      "Yes. Neighbours notice a new deck or pergola over the fence. A 1,000-flyer drop around the job, at $200, gives them your number while they're still looking at it.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for carpenters",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Carpenters, deck builders and cabinet makers" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Carpenters() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Carpenters" },
        ]}
        h1="Letterbox Marketing for Carpenters"
        lead="Carpentry flyers delivered on their own to the homes that need decks, pergolas, built-ins and repairs. Every route is GPS-tracked."
        image={{ src: "/images/redesign/ind-trades.jpg", alt: "A tradesperson in hi-vis working on a tiled Melbourne roof" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Work owners plan ahead" first>
        <p>
          A new deck, a pergola or a wall of built-in wardrobes is rarely urgent. Owners think about it for weeks,
          collect ideas and wait for the right season. The carpenter whose flyer is on the fridge when they decide is
          the one they call.
        </p>
        <p>
          That suits letterbox drops. A flyer delivered on its own, with one strong photo of your work, stays in the
          house longer than a social post stays in a feed.
        </p>
      </Section>

      <Section title="Decks, pergolas, built-ins and repairs">
        <Bullets
          items={[
            <><strong>Decks and pergolas:</strong> backyard homes, with drops in late winter and early spring.</>,
            <><strong>Built-in wardrobes and cabinetry:</strong> older homes with small original robes, and new owners settling in.</>,
            <><strong>Doors, windows and repairs:</strong> period homes where timber needs regular work.</>,
            <><strong>Fences and gates:</strong> streets where one new fence prompts the neighbours to replace theirs.</>,
          ]}
        />
        <p>
          Decking and pergola flyers and cabinet maker flyers reach different owners, so give each its own drop.
        </p>
      </Section>

      <Section title="Where carpentry work clusters">
        <p>
          Family house suburbs with backyards are the best fit for outdoor work. Across our service area that includes{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink>, where summers are spent
          outdoors.
        </p>
        <p>
          Period homes in <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> need careful joinery, restoration and
          repairs. A flyer there should show detailed work rather than speed or price.
        </p>
      </Section>

      <Section title="Carpentry flyers that get remembered">
        <Bullets
          items={[
            <><strong>One photo of a finished job</strong>, ideally in the same suburb.</>,
            <><strong>The work you do best</strong>, not a list of every job you could take on.</>,
            <><strong>A free measure and quote</strong> as the next step.</>,
            <><strong>Your licence or registration</strong>, if your work needs one.</>,
          ]}
        />
        <p>
          Carpenter marketing works best repeated. A second drop in the same streets a month later builds the
          recognition that turns into a call.
        </p>
      </Section>

      <Section title="A year of carpentry work">
        <p>
          Outdoor work peaks from September to March, when owners want decks and pergolas finished for summer
          entertaining. Indoor work fills the colder months: built-in wardrobes, shelving, doors and the small repairs
          owners notice when they spend more time inside.
        </p>
        <p>
          Plan two kinds of drop a year. In late winter, lead with decks and pergolas. In autumn, switch to built-ins
          and repairs for the same streets. One set of households, two reasons to call you, and a GPS report for
          each run so you can compare the response.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities and cost"
          figures={[{ value: "$200", label: "1,000 homes around a job" }, { value: "$500", label: "2,500 homes, a first area" }]}
        >
          Every drop is $200 per 1,000 flyers, exclusive, from 1,000. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page. Carpentry sits on our{" "}
          <TextLink href="/industries/home-services">home services</TextLink> page with{" "}
          <TextLink href="/industries/builders">builders</TextLink> and{" "}
          <TextLink href="/industries/renovation">renovators</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Put your carpentry in front of the right homes"
        lead="Tell us your suburbs and the work you want more of. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Carpentry letterbox drop FAQs" />
    </>
  );
}
