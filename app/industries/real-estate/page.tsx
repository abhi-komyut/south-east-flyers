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
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/real-estate";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Letterbox Drops Melbourne | South East Flyers" },
  description:
    "Real estate letterbox drops for Just Listed, Open Home, Auction and Sold campaigns. Exclusive, GPS-tracked proof for vendors. $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Real Estate Letterbox Drops Melbourne | South East Flyers",
    description:
      "Just Listed, Open Home, Auction and Sold letterbox campaigns around your listings, GPS-tracked, across Melbourne's south-east and eastern suburbs.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const useCases: { title: string; body: string }[] = [
  { title: "Just Listed", body: "Tell the surrounding streets a property is on the market, and invite neighbours thinking of selling to call." },
  { title: "Open Homes", body: "Deliver to the streets around the property in the days before the inspection to lift local attendance." },
  { title: "Auctions", body: "Build awareness in the immediate area before auction day, reaching neighbours and local buyers." },
  { title: "Just Sold", body: "Show the street the result you achieved; it is the strongest appraisal prompt an agent has." },
  { title: "Appraisals and farming", body: "Deliver to the same streets every few weeks so yours is the name owners know when they decide to sell." },
  { title: "Agency branding", body: "Keep your agency visible across your core suburbs between campaigns." },
];

const faqs = [
  {
    question: "How many flyers does a Just Listed drop need?",
    answer:
      "Most agents cover the few streets immediately around the property. Our minimum is 1,000 flyers ($200), which covers those streets with room to extend into your wider farm area.",
  },
  {
    question: "Which agencies do you deliver for?",
    answer:
      "We distribute for agencies including Ray White, McGrath and Belle Property, running Just Listed, Open Home, Auction and Sold campaigns across their local areas, usually on behalf of individual agents rather than head office.",
  },
  {
    question: "Can I show my vendor proof the flyers were delivered?",
    answer:
      "Yes. Every run is GPS-tracked in Strava, and you get a map of the streets covered and the dates. You can forward it straight to the vendor.",
  },
  {
    question: "How quickly can a Just Listed campaign start?",
    answer:
      "Urgent campaigns can start within 48 hours of your flyers arriving, which suits the tight timeline before a first open home. Standard campaigns start within 3 to 5 business days.",
  },
  {
    question: "Can you focus on houses and skip apartment blocks?",
    answer:
      "Yes. Tell us, and we will plan the route around houses and townhouses where that is practical, which usually suits a farming campaign better than full suburb coverage. The GPS report shows exactly what was covered.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real estate letterbox drops",
  serviceType: "Real estate flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Real estate agents and agencies" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function RealEstate() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Real Estate" },
        ]}
        h1="Real Estate Letterbox Drops for Melbourne Agents"
        lead="Real estate letterbox drops for every stage of a campaign: Just Listed, Open Home, Auction and Just Sold. Your flyer goes into each letterbox on its own, and the GPS report is proof you can show your vendor."
        proof={["Exclusive, never bundled", "$200 per 1,000 flyers", "48-hour starts for new listings"]}
        ctaLabel="Plan Your Next Campaign"
      />

      <ProofStrip />

      <section className="py-10 bg-white border-b border-gray-200">
        <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          Trusted by agencies including <span className="font-semibold text-black">Ray White</span>,{" "}
          <span className="font-semibold text-black">McGrath</span> and{" "}
          <span className="font-semibold text-black">Belle Property</span>.
        </p>
      </section>

      <Section title="Why agents still drop flyers">
        <p>
          The people most likely to sell next are the neighbours of the house you just listed. They watch the board go
          up, check the price and wonder what their own place is worth. A real estate letterbox drop in those streets
          answers that question with your name on it.
        </p>
        <p>
          Real estate flyer distribution also shows vendors that the marketing is happening. A GPS map of every street
          covered is easier to put in a vendor report than an impression count.
        </p>
        <p>
          Real estate flyers remain one of the few parts of real estate marketing Melbourne vendors can
          physically see arrive in letterboxes, which is exactly why agents still budget for them.
        </p>
      </Section>

      <Section title="Campaigns we deliver for agents" tone="gray" wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-2">{uc.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="One listing, four drops">
        <p>A typical campaign uses the same streets four times, each with a different message:</p>
        <Steps
          steps={[
            { title: "Listing week: Just Listed", body: "Photo, key features and open home times to the surrounding streets." },
            { title: "Before the first open: invitation", body: "A reminder drop two or three days out, timed with our 48-hour start." },
            { title: "Auction week: auction notice", body: "Date, time and a line inviting neighbours to come along." },
            { title: "After the result: Just Sold", body: "The result and an appraisal offer, while the street is still talking about it." },
          ]}
        />
      </Section>

      <Section title="Just Sold and appraisal flyers" tone="gray">
        <p>
          Just sold flyers are often the most useful drop for an agent&rsquo;s pipeline. They prove you can sell in that
          street, and they arrive just as neighbours are recalculating what their home might be worth.
        </p>
        <Bullets
          items={[
            <>Lead with the result and the street, not your headshot.</>,
            <>Offer a free appraisal with a direct mobile number.</>,
            <>Repeat appraisal flyers to your farm area every four to six weeks so your name stays familiar.</>,
          ]}
        />
      </Section>

      <Section title="Cost of a real estate letterbox drop">
        <p>
          Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively, with a 1,000-flyer minimum. A
          Just Listed run of 2,500 homes around a property costs $500, and a four-drop campaign to the same 2,500 homes
          costs $2,000. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more
          quantities.
        </p>
        <p>
          We cover agents&rsquo; patches across Melbourne&rsquo;s south-east and east, including{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>. See the full{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>, or{" "}
          <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink> for other industries.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm />

      <FAQSection items={faqs} title="Real Estate Letterbox Drop FAQs" />

      <CtaBanner
        title="Plan your next listing campaign"
        body="Tell us the property address, the streets you want covered and your open home date. We'll quote within 24 hours."
      />
    </>
  );
}
