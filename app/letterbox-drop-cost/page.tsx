import type { Metadata } from "next";
import QuickQuoteForm from "../components/QuickQuoteForm";
import FAQSection from "../components/FAQSection";
import {
  SITE_URL,
  PRICE_PER_THOUSAND,
  PageHero,
  ProofStrip,
  Section,
  Bullets,
  CtaBanner,
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
        crumbs={[{ name: "Home", href: "/" }, { name: "Letterbox Drop Cost" }]}
        h1="How Much Does a Letterbox Drop Cost in Melbourne?"
        lead="A letterbox drop with South East Flyers costs $200 per 1,000 flyers. That price covers exclusive delivery, so your flyer goes into each letterbox on its own, plus a GPS map of every street covered."
        proof={["$200 per 1,000 flyers", "Minimum 1,000 flyers", "Quote within 24 hours"]}
        ctaLabel="Get an Exact Quote"
      />

      <ProofStrip />

      <Section title="Letterbox drop prices by quantity">
        <p>The rate is the same for every quantity, so the total is easy to work out before you call.</p>
        <p>
          That works out to a letterbox drop price per 1,000 of exactly $200, whether you think of it as
          flyer distribution cost, leaflet drop cost or leaflet distribution price. The rate doesn&rsquo;t
          change depending on which term you search.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Flyers delivered</th>
                <th scope="col" className="px-4 py-3 font-semibold">Total cost</th>
                <th scope="col" className="px-4 py-3 font-semibold">Good for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quantities.map((q) => (
                <tr key={q}>
                  <td className="px-4 py-3">{q.toLocaleString("en-AU")}</td>
                  <td className="px-4 py-3 font-semibold text-black">{formatAud((q / 1000) * PRICE_PER_THOUSAND)}</td>
                  <td className="px-4 py-3 text-sm">
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

      <Section title="What the price includes" tone="gray">
        <Bullets
          items={[
            <><strong>Exclusive delivery.</strong> A walker or e-bike rider carries only your flyer on the route.</>,
            <><strong>GPS tracking.</strong> Every run is recorded in Strava, and you receive the route map and a drop summary.</>,
            <><strong>No Junk Mail respected.</strong> Letterboxes with a No Junk Mail or No Advertising sign are skipped.</>,
            <><strong>Targeting advice.</strong> We help you choose streets or suburbs that match your customers.</>,
          ]}
        />
        <p>
          Printing is not included. We distribute but don&rsquo;t print, so you can use any print shop and have the
          flyers sent to us.
        </p>
      </Section>

      <Section title="Exclusive delivery versus shared distribution">
        <p>
          Many letterbox services run shared distribution. Your flyer is collated with other advertisers&rsquo;
          material and delivered as one bundle, which lowers the price per 1,000 because several businesses share the
          walk.
        </p>
        <p>
          The trade-off is attention. In a bundle, your flyer competes with catalogues and other offers before the
          household even sees it. With exclusive delivery it arrives on its own, which matters most for businesses
          that need a phone call, such as a plumber, a real estate agent or a local clinic.
        </p>
      </Section>

      <Section title="Working out how many flyers you need" tone="gray">
        <p>
          Start with the letterboxes in your target area. Brighton, for example, has about 10,500 homes, so covering
          the whole suburb costs about $2,100 (see{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">flyer distribution in Brighton</TextLink>).
        </p>
        <p>
          Most businesses don&rsquo;t need a whole suburb on day one. A plumber might cover 2,500 homes around their
          base; an agent might drop 1,000 flyers around a new listing. Tell us the area and we will confirm the
          count in your quote.
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

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Letterbox Drop Cost FAQs" />

      <CtaBanner
        title="Get an exact price for your area"
        body="Tell us your streets or suburbs and quantity. We'll send the letterbox count and total within 24 hours."
      />
    </>
  );
}
