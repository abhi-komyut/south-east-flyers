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
} from "../../components/landing";

const PAGE_PATH = "/industries/home-services";

export const metadata: Metadata = {
  title: { absolute: "Home Services Marketing Melbourne | South East Flyers" },
  description:
    "Home services marketing for plumbers, electricians, roofers and cleaners in Melbourne. Exclusive, GPS-tracked letterbox drops. $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Letterbox Drops for Home Services Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked flyer distribution for trades and home services across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const seasons: { months: string; demand: string }[] = [
  { months: "March to May", demand: "Heater servicing, gutter cleaning before winter rain, roof inspections, blocked drains from autumn leaves" },
  { months: "June to August", demand: "Hot water system repairs, heating, leak and roof repairs after storms, indoor renovations" },
  { months: "September to November", demand: "Air conditioning servicing, spring cleaning, decks and pergolas, landscaping, solar and electrical upgrades" },
  { months: "December to February", demand: "Air conditioning repairs, pool and outdoor work, end-of-lease and pre-Christmas cleans" },
];

const faqs = [
  {
    question: "How many flyers should a tradie drop?",
    answer:
      "Start with the streets closest to your base or your current jobs. Our minimum of 1,000 flyers ($200) covers a pocket of local streets. Track the calls, then expand into the suburbs that respond.",
  },
  {
    question: "When is the best time to drop home services flyers?",
    answer:
      "Two to four weeks before demand peaks. Heating, roofing and gutter flyers suit autumn; air conditioning, decking and landscaping flyers suit spring. Emergency trades like plumbing benefit from regular drops so the magnet or flyer is already on the fridge.",
  },
  {
    question: "Can you deliver around a job I'm working on?",
    answer:
      "Yes. Neighbour drops around an active job site work well for builders, renovators and roofers. Give us the address and a radius, and we will quote for those streets while the work is still visible.",
  },
  {
    question: "Is my flyer delivered with other tradies' flyers?",
    answer:
      "No. Every drop is exclusive, so your flyer is the only one the walker delivers on that route. It is never bundled with catalogues or competing trades.",
  },
  {
    question: "Do you print trade flyers?",
    answer:
      "No. We distribute; we don't print. Use any print shop and send the flyers to us, or ask your printer to deliver them directly.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for home services",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Trades and home service businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function HomeServices() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services" },
        ]}
        h1="Letterbox Marketing for Home Service Businesses"
        lead="Home services marketing that reaches the households in your service area. We deliver your flyer on its own to the streets you work in, track every run by GPS, and start from 1,000 flyers."
        proof={["Exclusive, never bundled", "$200 per 1,000 flyers", "Neighbour drops around active jobs"]}
      />

      <ProofStrip />

      <Section title="Why trades still use letterbox drops">
        <p>
          When a hot water system fails or a roof starts leaking, most households call the business they already know
          about. A flyer on the fridge, or one that arrived last week, is often that business. Letterbox drops put your
          name in the homes you can actually service, not people forty minutes away who will never book.
        </p>
        <p>
          Exclusive delivery matters more for trades than most businesses. A plumber&rsquo;s flyer tucked inside a
          supermarket catalogue is easy to miss; one that arrives on its own gets looked at.
        </p>
      </Section>

      <Section title="Trades and home services we deliver for" tone="gray">
        <Bullets
          items={[
            <><TextLink href="/industries/plumbers">Plumbers</TextLink>: blocked drains, hot water, gas fitting and emergency call-outs</>,
            <><TextLink href="/industries/electricians">Electricians</TextLink>: safety switches, switchboards, lighting, solar and EV chargers</>,
            <><TextLink href="/industries/roofing">Roofers</TextLink>: inspections, restorations, gutters and storm repairs</>,
            <>Builders: knockdown rebuilds, extensions and neighbour notices around a site</>,
            <>Renovators: kitchens, bathrooms and whole-home renovations</>,
            <>Carpenters: decks, pergolas, built-ins and repairs</>,
            <>Cleaners: regular home cleans, bathroom deep cleans and end-of-lease cleans</>,
            <>Handymen, painters, pest control and landscapers</>,
          ]}
        />
      </Section>

      <Section title="Timing your drops through the year">
        <p>
          Home service demand in Melbourne follows the weather. Dropping two to four weeks before the busy season puts
          your flyer in the house before the problem does.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Drop in</th>
                <th scope="col" className="px-4 py-3 font-semibold">Work households start looking for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {seasons.map((s) => (
                <tr key={s.months}>
                  <td className="px-4 py-3 font-semibold text-black whitespace-nowrap">{s.months}</td>
                  <td className="px-4 py-3 text-sm">{s.demand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Choosing the right streets for your trade" tone="gray">
        <p>
          The best streets depend on the work. Older brick and weatherboard homes need more plumbing, roofing and
          electrical upgrades, which is also where handyman flyers tend to do best. Streets with big gardens suit
          landscapers, decking and pest control flyers. Areas with lots of townhouses and units suit cleaners, and
          suburbs with ageing homes on large blocks are where builders find knockdown rebuilds and painter flyers
          get the most calls.
        </p>
        <p>
          Tell us your trade and the jobs you want more of, and we will suggest which streets in your service area to
          start with.
        </p>
      </Section>

      <Section title="Neighbour drops around your jobs">
        <p>
          Every job you do is an advertisement to the street around it. Neighbours see the ute, the scaffolding or the
          new roof. A 1,000-flyer drop in the surrounding streets, mentioning the job nearby, turns that attention
          into enquiries.
        </p>
        <p>
          Builders and renovators also use neighbour drops to let residents know about work hours and contact details
          before a project starts, which helps keep the street on side. It is a small piece of tradie marketing
          that costs nothing beyond the flyers themselves.
        </p>
      </Section>

      <Section title="What it costs" tone="gray">
        <p>
          Every drop is $200 per 1,000 flyers, with a 1,000-flyer minimum. A 2,500-home drop around your base costs
          $500, which covers most painting business marketing campaigns comfortably. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more quantities,
          or the <TextLink href="/industries/local-businesses">local businesses</TextLink> page for other ways
          businesses use our service.
        </p>
        <p>
          We cover Melbourne&rsquo;s south-east and eastern suburbs, including{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>. See the full{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </p>
      </Section>

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Home Services Letterbox Drop FAQs" />

      <CtaBanner
        title="Get your trade into local letterboxes"
        body="Tell us your trade, your base and the suburbs you service. We'll quote within 24 hours."
      />
    </>
  );
}
