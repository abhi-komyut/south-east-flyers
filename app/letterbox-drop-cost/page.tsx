import type { Metadata } from "next";
import QuickQuoteForm from "../components/QuickQuoteForm";
import FAQSection from "../components/FAQSection";
import PricingCalculator from "../components/PricingCalculator";
import Reveal from "../components/Reveal";
import {
  SITE_URL,
  PRICE_PER_THOUSAND,
  PageHero,
  Section,
  Bullets,
  TextLink,
  JsonLd,
  formatAud,
} from "../components/landing";

const PAGE_PATH = "/letterbox-drop-cost";

export const metadata: Metadata = {
  title: { absolute: "Letterbox Drop Cost Melbourne 2026 | South East Flyers" },
  description:
    "Letterbox drop cost Melbourne: $200 per 1,000 flyers, exclusive, GPS-tracked, never bundled. Prices for 1,000 to 20,000 flyers. Free quote in 24 hours.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Letterbox Drop Cost Melbourne | South East Flyers",
    description: "$200 per 1,000 flyers, exclusive delivery, GPS-tracked. Prices from 1,000 to 20,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const quantities = [1000, 2500, 5000, 10000, 20000];

const faqs = [
  {
    question: "How much does a letterbox drop cost in Melbourne?",
    answer:
      "With South East Flyers, a letterbox drop costs $200 per 1,000 flyers. Your flyer is delivered on its own, never bundled, and every run is GPS-tracked. A 5,000-flyer campaign costs $1,000.",
  },
  {
    question: "What is the minimum order?",
    answer:
      "The minimum is 1,000 flyers, which costs $200. It is enough to cover a few streets around your business or listing and test the response before committing to a larger, full-suburb drop.",
  },
  {
    question: "Why does exclusive delivery cost more than shared distribution?",
    answer:
      "Shared distribution puts several advertisers' flyers into one bundle, so the cost is split between them. Exclusive delivery means a walker carries only your flyer, so it reaches each letterbox on its own instead of inside a pile of catalogues.",
  },
  {
    question: "Is printing included in the price?",
    answer:
      "No. We distribute flyers; we don't print them. You can use any printer and have the flyers sent to us, and the $200 per 1,000 covers delivery and the GPS report.",
  },
  {
    question: "How many flyers do I need?",
    answer:
      "Match the quantity to the letterboxes in your target area. A typical Melbourne suburb has several thousand homes; Brighton, for example, has about 10,500. Tell us the streets or suburbs and we will confirm the count in your quote.",
  },
  {
    question: "How quickly will I get a price?",
    answer:
      "Quotes are sent within 24 hours and show the letterbox count, total cost and start date. Urgent campaigns can start within 48 hours of your flyers arriving, once we've confirmed the streets with you.",
  },
];

const offerLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Letterbox drop (exclusive flyer distribution)",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: {
    "@type": "Offer",
    price: String(PRICE_PER_THOUSAND),
    priceCurrency: "AUD",
    eligibleQuantity: { "@type": "QuantitativeValue", minValue: 1000, unitText: "flyers" },
    description: "Per 1,000 flyers, exclusive delivery, never bundled, GPS-tracked",
  },
};

export default function LetterboxDropCost() {
  return (
    <>
      <JsonLd data={offerLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Letterbox drop cost" }]}
        h1="How much does a letterbox drop cost in Melbourne?"
        lead="A letterbox drop with South East Flyers costs $200 per 1,000 flyers. That covers exclusive delivery, so your flyer goes into each letterbox on its own, plus a GPS map of every street covered."
        rightSlot={<PricingCalculator />}
      />

      <Section title="Letterbox drop prices by quantity" first>
        <p>The rate is the same for every quantity, so the total is easy to work out before you call. The letterbox drop price per 1,000 is exactly $200.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-base">
            <thead>
              <tr className="font-heading text-[13px] text-muted">
                <th scope="col" className="pb-3.5 pr-4 font-semibold">Flyers delivered</th>
                <th scope="col" className="pb-3.5 px-4 font-semibold">Total cost</th>
                <th scope="col" className="pb-3.5 pl-4 font-semibold">Good for</th>
              </tr>
            </thead>
            <tbody>
              {quantities.map((q) => (
                <tr key={q} className="border-t border-line">
                  <td className="py-[18px] pr-4 [font-variant-numeric:tabular-nums]">{q.toLocaleString("en-AU")}</td>
                  <td className="py-[18px] px-4 font-display text-xl text-navy [font-variant-numeric:tabular-nums]">{formatAud((q / 1000) * PRICE_PER_THOUSAND)}</td>
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
            What the price includes
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
          material and delivered as one bundle, which lowers the flyer distribution cost per 1,000 because
          several businesses share the walk.
        </p>
        <p>
          The trade-off is attention. In a bundle, your flyer competes with catalogues and other offers before the
          household even sees it. With exclusive delivery it arrives on its own, which matters most for businesses
          that need a phone call, such as a plumber, a real estate agent or a local clinic.
        </p>
      </Section>

      <Section title="Working out how many flyers you need">
        <p>
          Start with the letterboxes in your target area. Brighton, for example, has about 10,500 homes, so covering
          the whole suburb costs about $2,100 (see{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">flyer distribution in Brighton</TextLink>).
        </p>
        <p>
          Most businesses don&rsquo;t need a whole suburb on day one. A plumber might cover 2,500 homes around their
          base; an agent might drop 1,000 flyers around a new listing. Tell us the area and we will confirm the
          leaflet drop cost and letterbox count in your quote.
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
          <TextLink href="/industries/plumbers">plumbers</TextLink> and{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm
        heading="Get an exact price for your area"
        lead="Tell us your streets or suburbs and quantity. We'll send the letterbox count and total within 24 hours."
      />

      <FAQSection items={faqs} title="Letterbox drop cost FAQs" />
    </>
  );
}
