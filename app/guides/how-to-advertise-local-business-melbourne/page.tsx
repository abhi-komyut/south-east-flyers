import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  Section,
  Bullets,
  Callout,
  TextLink,
  JsonLd,
} from "../../components/landing";

const PAGE_PATH = "/guides/how-to-advertise-local-business-melbourne";
const TITLE = "How to Advertise a Local Business in Melbourne (2026)";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "How to advertise a local business in Melbourne: Google Business Profile, local Facebook groups, signage, Google Ads and letterbox drops compared honestly.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: TITLE,
    description: "An honest comparison of five local advertising channels for Melbourne businesses.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
  },
};

const faqs = [
  {
    question: "What is the cheapest way to advertise a local business?",
    answer:
      "A Google Business Profile is free and should come first. After that, posting in local Facebook groups costs only your time. Paid options such as letterbox drops and Google Ads cost money but reach people the free channels miss.",
  },
  {
    question: "How do I advertise my business locally with a small budget?",
    answer:
      "Set up your Google Business Profile, ask every customer for a review, then test one paid channel at a time. A 1,000-flyer letterbox drop with us is a contained test you can measure with a unique offer code.",
  },
  {
    question: "Are letterbox drops better than Facebook ads?",
    answer:
      "Neither is better for every business. Facebook ads can target interests and repeat cheaply, but they compete with everything in a feed. A flyer reaches every home in chosen streets, including people who aren't on Facebook. Many businesses use both.",
  },
  {
    question: "How long does local advertising take to work?",
    answer:
      "Google Ads can bring calls within days. A Google Business Profile builds over months as reviews add up. Letterbox drops usually bring some calls in the first week or two, and more after the second and third drop in the same streets.",
  },
  {
    question: "How do I know which local advertising is working?",
    answer:
      "Ask every new customer how they found you, and give each channel its own offer code or phone number. Compare the cost of each channel against the customers it brought, then put more money into the ones that pay.",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description:
    "An honest comparison of Google Business Profile, local Facebook groups, signage, Google Ads and letterbox drops for Melbourne businesses.",
  url: `${SITE_URL}${PAGE_PATH}`,
  image: `${SITE_URL}/images/redesign/walker-foot.jpg`,
  datePublished: "2026-10-26T09:00:00+11:00",
  dateModified: "2026-10-26T09:00:00+11:00",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
};

export default function LocalAdvertisingGuide() {
  return (
    <>
      <JsonLd data={articleLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Local Businesses", href: "/industries/local-businesses" },
          { name: "How to advertise a local business" },
        ]}
        h1="How to Advertise a Local Business in Melbourne"
        lead="How to advertise a local business when most of your customers live within a few kilometres. Five channels compared honestly, including the ones we don't sell."
        image={{ src: "/images/redesign/walker-foot.jpg", alt: "A South East Flyers walker posting a flyer into a letterbox on a sunny Melbourne street" }}
      />

      <Section title="Start with where your customers live" first>
        <p>
          A cafe, a plumber and a dental clinic all have the same advantage: their customers live nearby. Local
          advertising works when it reaches those households often enough to be remembered, at a cost the business can
          measure.
        </p>
        <p>
          No single channel does everything. Below are the five we see Melbourne businesses use most, what each is
          good at, and where each falls short. We run letterbox drops, so read that section with that in mind.
        </p>
      </Section>

      <Section title="1. Google Business Profile">
        <p>
          This is the free listing that appears in Google Maps and the map results when someone searches for a
          business type in your area. For most local businesses it is the single most important thing to set up.
        </p>
        <Bullets
          items={[
            <><strong>Good for:</strong> people already searching for what you sell, today.</>,
            <><strong>Falls short:</strong> it only reaches people who search. It does nothing for households who haven&rsquo;t thought about you yet.</>,
            <><strong>Do this:</strong> fill in every field, add real photos, post weekly and ask every customer for a review.</>,
          ]}
        />
      </Section>

      <Section title="2. Local Facebook groups and community pages">
        <p>
          Most Melbourne suburbs have a community group where residents ask for recommendations. A genuine reply from
          a local owner can bring work for free.
        </p>
        <Bullets
          items={[
            <><strong>Good for:</strong> trust and word of mouth, especially for trades and services.</>,
            <><strong>Falls short:</strong> many groups limit business posts, and results depend on someone asking at the right moment.</>,
            <><strong>Do this:</strong> follow each group&rsquo;s rules, answer questions helpfully, and let happy customers recommend you.</>,
          ]}
        />
      </Section>

      <Section title="3. Signage and your shopfront">
        <p>
          For a shop, cafe or clinic, the building itself is advertising. Clear signage, an A-frame on the footpath and
          a window that shows what you do reach everyone who walks or drives past.
        </p>
        <Bullets
          items={[
            <><strong>Good for:</strong> businesses on a busy strip with passing foot traffic.</>,
            <><strong>Falls short:</strong> it only reaches people who pass, and does little for trades or mobile services.</>,
            <><strong>Do this:</strong> check your council&rsquo;s rules on footpath signs before buying one.</>,
          ]}
        />
      </Section>

      <Section title="4. Google Ads">
        <p>
          Paid search ads put you at the top of the results for chosen search terms, and you pay when someone clicks.
          Ads can be limited to a radius around your business.
        </p>
        <Bullets
          items={[
            <><strong>Good for:</strong> urgent needs such as emergency plumbing or locksmiths, where people search and call at once.</>,
            <><strong>Falls short:</strong> costs per click vary widely by industry, and the calls stop when the budget does.</>,
            <><strong>Do this:</strong> start small, track calls from the ads, and stop keywords that bring clicks but no customers.</>,
          ]}
        />
      </Section>

      <Section title="5. Letterbox drops">
        <p>
          A flyer delivered to every home in chosen streets reaches households whether or not they search, scroll or
          walk past. It is the channel we run, so here is the honest version.
        </p>
        <Bullets
          items={[
            <><strong>Good for:</strong> businesses with a clear local catchment, such as trades, takeaway, clinics, groomers and agents.</>,
            <><strong>Falls short:</strong> a single drop rarely builds a business. Results come from a clear offer, the right streets and repeat drops.</>,
            <><strong>Do this:</strong> start with 1,000 to 2,500 homes, use an offer code only the flyer carries, and repeat in the streets that respond.</>,
          ]}
        />
        <p>
          Our drops are delivered on their own and GPS-tracked, from 1,000 flyers. The{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page covers quantities from 1,000 to
          20,000 flyers.
        </p>
      </Section>

      <Section title="Putting it together">
        <p>
          A sensible order for most businesses: set up the Google Business Profile, collect reviews, join the local
          groups, then test one paid channel at a time. Give each channel a few weeks and a way to measure it before
          judging it.
        </p>
        <p>
          For more on local business advertising ideas by trade, see our pages for{" "}
          <TextLink href="/industries/plumbers">plumbers</TextLink>,{" "}
          <TextLink href="/industries/restaurants">restaurants and cafes</TextLink> and{" "}
          <TextLink href="/industries/real-estate">real estate agents</TextLink>, or the{" "}
          <TextLink href="/industries/local-businesses">local business flyers</TextLink> hub.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Local advertising in Melbourne's south-east"
          figures={[{ value: "1,000", label: "flyers, a first test" }, { value: "56", label: "key suburbs we cover" }]}
        >
          If a letterbox drop fits your business, we cover 56 key suburbs across{" "}
          <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east and eastern Melbourne</TextLink>.
          Every flyer goes in on its own, and you get a GPS map of every street covered.
        </Callout>
      </div>

      <QuickQuoteForm
        heading="Want to test a letterbox drop?"
        lead="Tell us your business and the streets around you. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Local advertising FAQs" />
    </>
  );
}
