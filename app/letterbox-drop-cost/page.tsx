import type { Metadata } from "next";
import QuickQuoteForm from "../components/QuickQuoteForm";
import FAQSection from "../components/FAQSection";
import PricingCalculator from "../components/PricingCalculator";
import Reveal from "../components/Reveal";
import {
  SITE_URL,
  PageHero,
  Section,
  Bullets,
  TextLink,
  JsonLd,
} from "../components/landing";

const PAGE_PATH = "/letterbox-drop-cost";

export const metadata: Metadata = {
  title: { absolute: "Letterbox Drop Cost Melbourne 2026 | South East Flyers" },
  description:
    "Letterbox drop cost in Melbourne depends on your flyer quantity and target suburbs. Exclusive, GPS-tracked, never bundled. Free, no-obligation quote with a quick turnaround.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Letterbox Drop Cost Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across Melbourne's south-east. Tell us your quantity and suburbs for a free quote.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const quantities = [1000, 2500, 5000, 10000, 20000];

const faqs = [
  {
    question: "How much does a letterbox drop cost in Melbourne?",
    answer:
      "Cost depends on your flyer quantity and the suburbs you want to cover. Every drop is delivered on its own, never bundled, and GPS-tracked. Tell us your numbers and we'll send a clear quote with a quick turnaround.",
  },
  {
    question: "Why does exclusive delivery cost more than shared distribution?",
    answer:
      "Shared distribution puts several advertisers' flyers into one bundle, so the cost is split between them. Exclusive delivery means a walker carries only your flyer, so it reaches each letterbox on its own instead of inside a pile of catalogues.",
  },
  {
    question: "Is printing included in the price?",
    answer:
      "No. We distribute flyers; we don't print them. You can use any printer and have the flyers sent to us — delivery and the GPS report are covered in your quote.",
  },
  {
    question: "How many flyers do I need?",
    answer:
      "Match the quantity to the letterboxes in your target area. A typical Melbourne suburb has several thousand homes; Brighton, for example, has about 10,500. Tell us the streets or suburbs and we will confirm the count in your quote.",
  },
  {
    question: "How quickly will I get a price?",
    answer:
      "Quotes are sent with a quick turnaround and show the letterbox count, total cost and start date. Urgent campaigns can start within 48 hours of your flyers arriving, once we've confirmed the streets with you.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Letterbox drop (exclusive flyer distribution)",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function LetterboxDropCost() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Letterbox drop cost" }]}
        h1="How much does a letterbox drop cost in Melbourne?"
        lead="A letterbox drop cost depends on your flyer quantity and target suburbs. Every drop is delivered exclusively, never bundled, plus a GPS map of every street covered. Tell us your numbers for a free, no-obligation quote."
        rightSlot={<PricingCalculator />}
      />

      <Section title="What different flyer quantities cover" first>
        <p>The right quantity depends on your target area, not a fixed price list. Here&rsquo;s roughly what each quantity covers:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-base">
            <thead>
              <tr className="font-heading text-[13px] text-muted">
                <th scope="col" className="pb-3.5 pr-4 font-semibold">Flyers delivered</th>
                <th scope="col" className="pb-3.5 pl-4 font-semibold">Good for</th>
              </tr>
            </thead>
            <tbody>
              {quantities.map((q) => (
                <tr key={q} className="border-t border-line">
                  <td className="py-[18px] pr-4 font-display text-xl text-navy [font-variant-numeric:tabular-nums]">{q.toLocaleString("en-AU")}</td>
                  <td className="py-[18px] pl-4 text-[15px] text-body">
                    {q === 1000 && "Test run, or the streets around one listing or shop"}
                    {q === 2500 && "A tight radius around your business"}
                    {q === 5000 && "Half of a typical suburb"}
                    {q === 10000 && "A whole suburb the size of Brighton"}
                    {q === 20000 && "Two or three neighbouring suburbs"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Reveal as="section" className="bg-cream rounded-card p-9 sm:p-16 flex flex-col gap-9">
          <h2 className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            What&rsquo;s included
          </h2>
          <dl className="m-0 flex flex-wrap gap-7 gap-x-14">
            {[
              { title: "Exclusive delivery", body: "A walker or e-bike rider carries only your flyer on the route." },
              { title: "GPS tracking", body: "Every run is recorded in Strava, and you receive the route map and a drop summary." },
              { title: "No Junk Mail respected", body: "Letterboxes with a No Junk Mail or No Advertising sign are skipped." },
              { title: "Targeting advice", body: "We help you choose streets or suburbs that match your customers." },
            ].map((f) => (
              <div key={f.title} className="flex-[1_1_400px] flex gap-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-lg mb-1.5">{f.title}</dt>
                  <dd className="m-0 text-base leading-relaxed text-body">{f.body}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="m-0 pt-6 border-t border-[rgba(16,48,47,0.16)] text-base leading-relaxed text-body max-w-[820px]">
            Printing is not included. We distribute but don&rsquo;t print, so you can use any print shop and have the
            flyers sent to us. A leaflet distribution price quote always separates the two, so you know exactly
            what you are paying us for.
          </p>
        </Reveal>
      </div>

      <Section title="Exclusive delivery versus shared distribution">
        <p>
          Many letterbox services run shared distribution. Your flyer is collated with other advertisers&rsquo;
          material and delivered as one bundle, which lowers the cost per household because several businesses
          share the walk.
        </p>
        <p>
          The trade-off is attention. In a bundle, your flyer competes with catalogues and other offers before the
          household even sees it. With exclusive delivery it arrives on its own, which matters most for businesses
          that need a phone call, such as a plumber, a real estate agent or a local clinic.
        </p>
      </Section>

      <Section title="Working out how many flyers you need">
        <p>
          Start with the letterboxes in your target area. Brighton, for example, has about 10,500 homes (see{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">flyer distribution in Brighton</TextLink> for
          suburb-specific coverage details).
        </p>
        <p>
          Most businesses don&rsquo;t need a whole suburb on day one. A plumber might cover 2,500 homes around their
          base; an agent might drop 1,000 flyers around a new listing. Tell us the area and we will confirm the
          letterbox count in your quote.
        </p>
      </Section>

      <Section title="Ways to get more from your budget">
        <Bullets
          items={[
            <>Test with 1,000 flyers in one area, track the calls, then expand to the streets that respond.</>,
            <>Put one clear offer and your phone number on the front. A busy flyer costs the same to deliver as a clear one.</>,
            <>Time the drop to demand. Heating and roofing flyers work before winter; cooling and pool services before summer.</>,
            <>Repeat in the streets that respond. A second drop builds recognition, and the GPS reports let you compare calls run by run.</>,
          ]}
        />
        <p>
          Industry guides: <TextLink href="/industries/local-businesses">local businesses</TextLink>,{" "}
          <TextLink href="/industries/home-services">home services</TextLink>,{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>,{" "}
          <TextLink href="/industries/builders">builders</TextLink>,{" "}
          <TextLink href="/industries/restaurants">restaurants</TextLink> and{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink>. We cover the same service area
          across our <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east Melbourne</TextLink> suburbs.
        </p>
      </Section>

      <QuickQuoteForm
        heading="Get an exact price for your area"
        lead="Tell us your streets or suburbs and quantity. We'll send the letterbox count and total, with a quick turnaround."
      />

      <FAQSection items={faqs} title="Letterbox drop cost FAQs" />
    </>
  );
}
