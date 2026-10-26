import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import Reveal from "../../components/Reveal";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/local-businesses";

export const metadata: Metadata = {
  title: { absolute: "Local Business Flyers Melbourne | South East Flyers" },
  description:
    "Local business flyers delivered on their own to the streets around you, GPS-tracked. $200 per 1,000 flyers, from 1,000, across Melbourne's south-east.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Local Business Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for local businesses across Melbourne's south-east. From 1,000 flyers.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const businesses: { name: string; href?: string; note: string }[] = [
  { name: "Real estate agents", href: "/industries/real-estate", note: "Just listed, just sold and appraisal drops around each property" },
  { name: "Home services and trades", href: "/industries/home-services", note: "Plumbers, electricians, roofers, builders, renovators and cleaners" },
  { name: "Plumbers", href: "/industries/plumbers", note: "Emergency and hot water work where the phone number matters most" },
  { name: "Health practices", href: "/industries/healthcare", note: "Dentists, GPs, physios and vets announcing new patients or a new location" },
  { name: "Restaurants and cafes", href: "/industries/restaurants", note: "Takeaway menus and opening offers for the streets you deliver to" },
  { name: "Dog groomers and dog washes", href: "/industries/pet-groomers", note: "Mobile grooming routes and new-customer offers" },
  { name: "Shops and studios", note: "Gyms, hairdressers, bottle shops and retailers drawing from a few kilometres away" },
];

const faqs = [
  {
    question: "Do letterbox drops still work for small businesses?",
    answer:
      "They work best for businesses whose customers live within a few kilometres, such as trades, clinics and takeaway shops. A flyer reaches every home in your chosen streets, including people who never see your social posts. Track calls from each drop to measure it.",
  },
  {
    question: "How small can a local campaign be?",
    answer:
      "Our minimum is 1,000 flyers, which costs $200. That covers the streets closest to most shops or a single neighbourhood, so you can test the idea before spending more on a wider run.",
  },
  {
    question: "Can you deliver only near my shop?",
    answer:
      "Yes. Give us your address and a radius, or list the streets you want. We confirm the number of letterboxes and quote for exactly that area.",
  },
  {
    question: "Will my flyer be mixed in with other businesses' advertising?",
    answer:
      "No. Every South East Flyers drop is exclusive: your flyer is the only one the walker delivers on that run, so it arrives on its own rather than buried in a stack of catalogues.",
  },
  {
    question: "Which suburbs do you cover?",
    answer:
      "We deliver across Melbourne's south-east and eastern suburbs, from Port Melbourne and St Kilda through Brighton, Caulfield and Glen Waverley to Box Hill and Vermont South. See the full list on our Melbourne service area page.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for local businesses",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Local and small businesses in Melbourne" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function LocalBusinesses() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Local Businesses" },
        ]}
        h1="Letterbox marketing for local Melbourne businesses"
        lead="Local business flyers delivered to the streets your customers live in. Each flyer goes into the letterbox on its own, every route is GPS-tracked, and you can start with 1,000 flyers."
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "report with every drop" },
        ]}
      />

      <Section title="Why letterbox drops suit local businesses" first>
        <p>
          Most local businesses draw customers from a few kilometres around them. A letterbox drop puts your offer in
          front of every household in that area, whether or not they follow you online or search for you that week.
        </p>
        <p>
          It is also easy to control. You choose the streets, the quantity and the timing, and the GPS report shows
          where each flyer went. If one area brings in calls and another doesn&rsquo;t, the next drop goes where the
          calls came from.
        </p>
        <p>
          Small business flyers work the same way whether you run one shop or five: pick the streets, set the
          quantity, and let the GPS report tell you where to go next.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Reveal as="section" className="bg-cream rounded-card p-9 sm:p-16 flex flex-col gap-9">
          <h2 className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            Local businesses we deliver for
          </h2>
          <dl className="m-0 flex flex-wrap gap-7 gap-x-10">
            {businesses.map((b) => (
              <div key={b.name} className="flex-[1_1_300px] pt-5 border-t border-[rgba(16,48,47,0.16)] flex flex-col gap-2">
                <dt className="font-heading font-semibold text-lg">
                  {b.href ? <TextLink href={b.href}>{b.name}</TextLink> : b.name}
                </dt>
                <dd className="m-0 text-[15px] leading-relaxed text-body">{b.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Section title="What a local flyer needs to do">
        <p>Local business flyers have one job: make the right household pick up the phone. The ones that work usually have:</p>
        <Bullets
          items={[
            <>One clear offer on the front, such as a first-visit discount, a free quote or a new menu.</>,
            <>Your phone number large enough to read from arm&rsquo;s length.</>,
            <>A reason to act now: a date, a season or a limited number of spots.</>,
            <>Something that proves you are local, like your suburb, a map or a familiar landmark.</>,
            <>A way to track it: a unique code, a QR link or a mention of &ldquo;the flyer&rdquo; when people call.</>,
          ]}
        />
      </Section>

      <Section title="Measuring what a drop brings in">
        <p>
          Much of what local businesses spend on marketing is hard to measure. A letterbox drop isn&rsquo;t: give the
          flyer its own offer code, QR link or phone extension, and ask every new customer how they heard about
          you for the next few weeks.
        </p>
        <p>
          Compare those numbers with the GPS report. If most enquiries came from three streets out of ten, the next
          drop concentrates there. After two or three drops you know which streets are worth the spend and which
          aren&rsquo;t, which is more than most online ads will tell a local business.
        </p>
        <p>
          That kind of street-by-street feedback is rare in small business marketing, and it lets you spend the next
          drop only where it has already worked.
        </p>
      </Section>

      <Section title="Local flyer distribution, street by street">
        <p>
          This is local business marketing Melbourne shops and clinics have used for decades, just with GPS
          proof added on top. We cover Melbourne&rsquo;s south-east and eastern suburbs on foot and by e-bike.
          Tell us your address and how far your customers travel, and we will suggest the streets to start
          with. See{" "}
          <TextLink href="/melbourne/flyer-distribution-brighton">flyer distribution in Brighton</TextLink> for an example
          of what a suburb drop includes, or our{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink> for the full list. Comparing channels? Read <TextLink href="/guides/how-to-advertise-local-business-melbourne">how to advertise a local business in Melbourne</TextLink>.
        </p>
        <p>
          Every drop costs $200 per 1,000 flyers. The{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page shows totals from 1,000 to 20,000
          flyers.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm
        heading="Put your business in local letterboxes"
        lead="Tell us your address, the area you want to reach and how many flyers you have. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Local business letterbox drop FAQs" />
    </>
  );
}
