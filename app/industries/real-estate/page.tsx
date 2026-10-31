import type { Metadata } from "next";
import Image from "next/image";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import Reveal from "../../components/Reveal";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  LogoWall,
  ALL_CLIENT_LOGOS,
  Section,
  Callout,
  Bullets,
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
      "Most agents cover the few streets immediately around the property. 1,000 flyers ($200) covers those streets with room to extend into your wider farm area.",
  },
  {
    question: "Which agencies do you deliver for?",
    answer:
      "We distribute for agencies including Ray White, McGrath and Belle Property, running Just Listed, Open Home, Auction and Sold campaigns across their local areas.",
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
        image={{ src: "/images/redesign/ind-realestate.jpg", alt: "A real estate agent standing in front of a For Sale sign" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "48 hrs", label: "to start for new listings" },
          { value: "GPS map", label: "to forward to your vendor" },
        ]}
      />

      <LogoWall
        heading="Trusted by agencies including"
        logos={ALL_CLIENT_LOGOS.slice(0, 5)}
      />

      <Section title="Why agents still drop flyers" first>
        <p>
          The people most likely to sell next are the neighbours of the house you just listed. They watch the board go
          up, check the price and wonder what their own place is worth. A real estate letterbox drop in those streets
          answers that question with your name on it.
        </p>
        <p>
          Real estate flyer distribution also shows vendors that the marketing is happening. A GPS map of every street
          covered is easier to put in a vendor report than an impression count.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Reveal as="section" className="bg-cream rounded-card p-9 sm:p-16 flex flex-col gap-9">
          <h2 className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            Campaigns we deliver for agents
          </h2>
          <dl className="m-0 flex flex-wrap gap-7 gap-x-14">
            {useCases.map((uc) => (
              <div key={uc.title} className="flex-[1_1_400px] pt-5 border-t border-[rgba(16,48,47,0.16)] flex flex-col gap-2">
                <dt className="font-heading font-semibold text-lg">{uc.title}</dt>
                <dd className="m-0 text-base leading-relaxed text-body">{uc.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <section aria-labelledby="four-drops" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14 flex flex-col gap-10">
        <div className="flex flex-wrap gap-4 gap-x-[88px] items-baseline">
          <h2 id="four-drops" className="flex-[1_1_300px] m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            One listing, four drops
          </h2>
          <p className="flex-[1.7_1_480px] m-0 text-[17px] leading-[1.75] text-body">
            A typical campaign uses the same streets four times, each with a different message.
          </p>
        </div>
        <ol className="list-none m-0 p-0 flex flex-wrap gap-8 gap-x-7">
          {[
            { phase: "Listing week", title: "Just Listed", body: "Photo, key features and open home times to the surrounding streets.", last: false },
            { phase: "Before the first open", title: "Invitation", body: "A reminder drop two or three days out, timed with our 48-hour start.", last: false },
            { phase: "Auction week", title: "Auction notice", body: "Date, time and a line inviting neighbours to come along.", last: false },
            { phase: "After the result", title: "Just Sold", body: "The result and an appraisal offer, while the street is still talking about it.", last: true },
          ].map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="flex-[1_1_230px] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className={`w-3 h-3 rounded-full shrink-0 ${step.last ? "bg-navy" : "bg-cta"}`} />
                <span aria-hidden="true" className={`flex-1 h-px ${step.last ? "bg-transparent" : "bg-[rgba(16,48,47,0.18)]"}`} />
              </div>
              <p className="m-0 font-heading text-[13px] font-semibold text-navy">{step.phase}</p>
              <h3 className="m-0 font-heading font-semibold text-lg">{step.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="just-sold" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14 border-t border-line flex flex-wrap gap-10 gap-x-[72px] items-center">
        <Reveal className="flex-[1_1_340px] rounded-card overflow-hidden h-[420px]">
          <Image
            src="/images/redesign/letterbox-hand.jpg"
            alt="A For Sale flyer being posted into a letterbox"
            width={460}
            height={420}
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="flex-[1.3_1_440px] flex flex-col gap-5">
          <h2 id="just-sold" className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            Just Sold and appraisal flyers
          </h2>
          <p className="m-0 text-[17px] leading-[1.75] text-body">
            Just sold flyers are often the most useful drop for an agent&rsquo;s pipeline. They prove you can sell in
            that street, and they arrive just as neighbours are recalculating what their home might be worth.
          </p>
          <Bullets
            items={[
              <>Lead with the result and the street, not your headshot.</>,
              <>Offer a free appraisal with a direct mobile number.</>,
              <>Repeat appraisal flyers to your farm area every four to six weeks so your name stays familiar.</>,
            ]}
          />
        </Reveal>
      </section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Cost of a real estate letterbox drop"
          figures={[
            { value: "$500", label: "Just Listed, 2,500 homes" },
            { value: "$2,000", label: "four drops, same 2,500 homes" },
          ]}
        >
          Real estate flyers are priced the same as any other campaign:{" "}
          <strong className="text-ink">$200 per 1,000</strong>, delivered exclusively.
          See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more quantities.
          This is real estate marketing Melbourne agencies have used for decades, just with GPS proof added on top.
          We cover agents&rsquo; patches across Melbourne&rsquo;s south-east and east, including{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-kew">Kew</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>. See the full{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>, or{" "}
          <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink> for other
          industries.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Plan your next listing campaign"
        lead="Tell us the property address, the streets you want covered and your open home date. We'll quote within 5 minutes."
        suburbHint="e.g. 14 Example St, Brighton and surrounding streets"
      />

      <FAQSection items={faqs} title="Real estate letterbox drop FAQs" />
    </>
  );
}
