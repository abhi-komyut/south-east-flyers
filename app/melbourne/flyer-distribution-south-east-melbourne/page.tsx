import type { Metadata } from "next";
import Link from "next/link";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Callout,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/melbourne/flyer-distribution-south-east-melbourne";

export const metadata: Metadata = {
  title: { absolute: "Flyer Distribution South East Melbourne | South East Flyers" },
  description:
    "Flyer distribution across south east and eastern Melbourne, council by council. Exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Letterbox Drops Across South East & Eastern Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops across eight councils in Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

// Suburb pages that exist today. Add each new suburb page here when it publishes.
const suburbPages: Record<string, string> = {
  Brighton: "/melbourne/flyer-distribution-brighton",
  Sandringham: "/melbourne/flyer-distribution-sandringham",
  Caulfield: "/melbourne/flyer-distribution-caulfield",
  Bentleigh: "/melbourne/flyer-distribution-bentleigh",
  "St Kilda": "/melbourne/flyer-distribution-st-kilda",
  Malvern: "/melbourne/flyer-distribution-malvern",
  Kew: "/melbourne/flyer-distribution-kew",
  Hawthorn: "/melbourne/flyer-distribution-hawthorn",
  Camberwell: "/melbourne/flyer-distribution-camberwell",
  "Glen Waverley": "/melbourne/flyer-distribution-glen-waverley",
  "Mount Waverley": "/melbourne/flyer-distribution-mount-waverley",
  "Box Hill": "/melbourne/flyer-distribution-box-hill",
};

const councils: { name: string; note: string; suburbs: string[] }[] = [
  {
    name: "Bayside",
    note: "Beachside suburbs of family houses and village strips, with strong demand from agents, trades and outdoor businesses.",
    suburbs: ["Brighton", "Brighton East", "Hampton", "Sandringham", "Black Rock", "Beaumaris"],
  },
  {
    name: "Glen Eira",
    note: "Family suburbs along the Frankston and Sandringham lines, with busy shopping strips on Centre Road and Glen Huntly Road.",
    suburbs: ["Caulfield", "Caulfield North", "Caulfield South", "Bentleigh", "Bentleigh East", "McKinnon", "Ormond", "Carnegie", "Murrumbeena", "Elsternwick", "Gardenvale"],
  },
  {
    name: "Port Phillip",
    note: "The densest part of our area, with many apartments, renters and food strips. Coverage depends on which buildings we can reach.",
    suburbs: ["St Kilda", "St Kilda East", "St Kilda West", "Balaclava", "Ripponlea", "Port Melbourne", "Albert Park", "Middle Park"],
  },
  {
    name: "Stonnington",
    note: "Period homes and high-street retail, where trades who know older houses and boutique businesses do well.",
    suburbs: ["Malvern", "Armadale", "Glen Iris"],
  },
  {
    name: "Boroondara",
    note: "Leafy, established suburbs with strong school zones and some of the most active property markets in Melbourne.",
    suburbs: ["Kew", "Hawthorn", "Hawthorn East", "Camberwell"],
  },
  {
    name: "Monash",
    note: "Large family suburbs on wide blocks, many now being renovated or rebuilt, with bilingual flyers common.",
    suburbs: ["Glen Waverley", "Mount Waverley", "Wheelers Hill", "Oakleigh", "Oakleigh East", "Oakleigh South", "Chadstone", "Clayton"],
  },
  {
    name: "Kingston",
    note: "Bayside and middle-ring suburbs between Mentone and Dingley Village, mostly houses with front-gate letterboxes.",
    suburbs: ["Mentone", "Cheltenham", "Parkdale", "Clayton South", "Dingley Village"],
  },
  {
    name: "Whitehorse",
    note: "Box Hill's towers and food precinct, surrounded by family suburbs of houses towards Blackburn and Vermont.",
    suburbs: ["Box Hill", "Box Hill North", "Box Hill South", "Blackburn", "Blackburn North", "Blackburn South", "Burwood", "Burwood East", "Nunawading", "Vermont", "Vermont South"],
  },
];

const faqs = [
  {
    question: "Which councils do you cover in south-east Melbourne?",
    answer:
      "Eight: Bayside, Glen Eira, Port Phillip, Stonnington, Boroondara, Monash, Kingston and Whitehorse. Within them we cover the 56 key suburbs listed on this page, and we can quote any mix of them in one campaign.",
  },
  {
    question: "Can one campaign cover suburbs in different councils?",
    answer:
      "Yes. Council boundaries don't matter to a letterbox drop. A plumber in Bentleigh can cover Glen Eira and Kingston streets together, with one quote and one GPS report showing every route.",
  },
  {
    question: "What does a letterbox drop cost across several suburbs?",
    answer:
      "The same $200 per 1,000 flyers, wherever the homes are. A 5,000-flyer drop split across two or three neighbouring suburbs costs $1,000.",
  },
  {
    question: "Do you deliver to the eastern suburbs as well as the south-east?",
    answer:
      "Yes. Our eastern coverage runs through Boroondara, Monash and Whitehorse, from Kew and Hawthorn to Glen Waverley, Box Hill and Vermont South.",
  },
  {
    question: "Which suburbs suit apartments, and which suit houses?",
    answer:
      "Port Phillip and central Box Hill have the most apartments, so coverage depends on building access. Monash, Kingston and most of Bayside and Whitehorse are mainly houses, where nearly every home on a route has a letterbox at the gate.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution in south-east and eastern Melbourne",
  serviceType: "Flyer distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: councils.map((c) => ({ "@type": "AdministrativeArea", name: `City of ${c.name}, VIC` })),
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery, never bundled" },
};

export default function SouthEastMelbourne() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Melbourne", href: "/melbourne/flyer-distribution-melbourne" },
          { name: "South East Melbourne" },
        ]}
        h1="Letterbox Drops Across South East & Eastern Melbourne"
        lead="Flyer distribution in south east Melbourne and the eastern suburbs, across 56 key suburbs in eight councils. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/suburb-map.jpg", alt: "Map of Melbourne's suburbs showing the areas South East Flyers covers" }}
      />

      <FactsStrip
        stats={[
          { value: "56", label: "key suburbs we cover" },
          { value: "8", label: "councils, one quote" },
          { value: "$200", label: "per 1,000 flyers, exclusive" },
          { value: "Never", label: "bundled with other advertisers" },
        ]}
      />

      <Section title="Flyer distribution in south east Melbourne, by council" first>
        <p>
          We work in Melbourne&rsquo;s south-east and east, from Port Melbourne and St Kilda along the bay to
          Beaumaris, inland through Caulfield and Glen Waverley, and north-east to Kew, Box Hill and Vermont. That is
          the area our walkers and e-bike riders cover every week.
        </p>
        <p>
          You can cover one suburb, a few streets around your shop, or a mix of suburbs across council lines. The
          price is the same everywhere: $200 per 1,000 flyers, delivered on their own, with a GPS report for every run.
        </p>
      </Section>

      <Section title="Suburbs we cover, by council">
        <p>
          Suburbs with their own page are linked. Every suburb listed is part of our service area, so ask for a quote
          for any of them.
        </p>
        <div className="flex flex-col gap-8 mt-2">
          {councils.map((c) => (
            <div key={c.name} className="pt-5 border-t border-[rgba(16,48,47,0.16)]">
              <h3 className="m-0 mb-2 font-heading font-semibold text-lg">City of {c.name}</h3>
              <p className="m-0 mb-3 text-[15px] text-body">{c.note}</p>
              <ul className="m-0 p-0 list-none flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                {c.suburbs.map((s) => (
                  <li key={s}>
                    {suburbPages[s] ? (
                      <Link href={suburbPages[s]} className="text-navy underline underline-offset-2">
                        {s}
                      </Link>
                    ) : (
                      s
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Choosing where to start">
        <p>
          Most businesses get the best results close to home. A shop or clinic usually starts with the 1,000 to 2,500
          homes nearest its door. A trade starts around its base or a current job, then widens to the suburbs that
          call back.
        </p>
        <p>
          Agents work the streets around each listing. Builders and renovators look for older houses on wide blocks,
          which are common in Monash and parts of Glen Eira. See the{" "}
          <TextLink href="/industries/home-services">home services</TextLink> and{" "}
          <TextLink href="/industries/real-estate">real estate</TextLink> pages for how each trade picks its streets.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Letterbox drop cost across the south-east"
          figures={[
            { value: "$200", label: "1,000 flyers, any suburb" },
            { value: "$1,000", label: "5,000 flyers across several suburbs" },
          ]}
        >
          Exclusive, never bundled, across all eight councils. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page
          for more quantities, the <TextLink href="/industries/local-businesses">local business</TextLink> guide, or our
          wider <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Planning a drop in the south-east?"
        lead="Tell us the suburbs or streets and your quantity. We'll quote within 5 minutes."
        suburbHint="e.g. Bentleigh, Brighton, Glen Waverley"
      />

      <FAQSection items={faqs} title="South east Melbourne letterbox drop FAQs" />
    </>
  );
}
