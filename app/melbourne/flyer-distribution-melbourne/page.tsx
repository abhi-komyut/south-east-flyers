import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
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

const PAGE_PATH = "/melbourne/flyer-distribution-melbourne";

export const metadata: Metadata = {
  title: "Flyer Distribution Melbourne",
  description:
    "Flyer distribution Melbourne: exclusive, GPS-tracked letterbox drops across our service suburbs, from 1,000 flyers. Free quote today.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution Melbourne | South East Flyers",
    description:
      "GPS-tracked flyer and letterbox distribution across Melbourne's confirmed service areas. No junk mail compliant, suburb-level targeting, full campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

// Suburbs that have their own landing page. Add each new suburb page here so
// it is linked from the coverage list.
const suburbPages: Record<string, string> = {
  Brighton: "/melbourne/flyer-distribution-brighton",
  Kew: "/melbourne/flyer-distribution-kew",
  "Glen Waverley": "/melbourne/flyer-distribution-glen-waverley",
  "St Kilda": "/melbourne/flyer-distribution-st-kilda",
  Hawthorn: "/melbourne/flyer-distribution-hawthorn",
  Camberwell: "/melbourne/flyer-distribution-camberwell",
  Caulfield: "/melbourne/flyer-distribution-caulfield",
  Bentleigh: "/melbourne/flyer-distribution-bentleigh",
  Malvern: "/melbourne/flyer-distribution-malvern",
  "Mount Waverley": "/melbourne/flyer-distribution-mount-waverley",
  Sandringham: "/melbourne/flyer-distribution-sandringham",
  "Box Hill": "/melbourne/flyer-distribution-box-hill",
};

// Confirmed Melbourne service areas — source of truth. Do not add suburbs
// that are not on this list.
const coverageGroups: { region: string; suburbs: string[] }[] = [
  {
    region: "Inner Melbourne / Bayside",
    suburbs: [
      "Port Melbourne",
      "South Melbourne",
      "Albert Park",
      "Middle Park",
      "St Kilda",
      "St Kilda East",
      "Elwood",
      "Ripponlea",
      "Balaclava",
      "Brighton",
      "Brighton East",
      "Hampton",
      "Sandringham",
      "Elsternwick",
    ],
  },
  {
    region: "Inner South / Caulfield / Malvern",
    suburbs: [
      "Caulfield",
      "Caulfield North",
      "Caulfield South",
      "South Yarra",
      "Prahran",
      "Armadale",
      "Malvern",
      "Malvern East",
      "Bentleigh",
    ],
  },
  {
    region: "Bayside / South-East",
    suburbs: ["Mentone", "Cheltenham", "Seaford", "Frankston"],
  },
  {
    region: "Monash / South-East",
    suburbs: [
      "Chadstone",
      "Mount Waverley",
      "Glen Waverley",
      "Clayton",
      "Clayton South",
      "Oakleigh",
      "Oakleigh South",
      "Oakleigh East",
      "Noble Park",
      "Mulgrave",
      "Wheelers Hill",
    ],
  },
  {
    region: "Eastern Melbourne",
    suburbs: [
      "Burwood",
      "Burwood East",
      "Box Hill",
      "Box Hill South",
      "Box Hill North",
      "Blackburn",
      "Blackburn South",
      "Blackburn North",
      "Nunawading",
      "Mitcham",
    ],
  },
  {
    region: "Boroondara / Manningham",
    suburbs: [
      "Kew",
      "Hawthorn",
      "Camberwell",
      "Doncaster",
      "Doncaster East",
      "Balwyn",
      "Balwyn North",
      "Surrey Hills",
      "Mont Albert",
      "Mont Albert North",
    ],
  },
  {
    region: "North-East",
    suburbs: ["Hurstbridge"],
  },
];

const totalSuburbs = coverageGroups.reduce((n, g) => n + g.suburbs.length, 0);

const whyUseIt: { title: string; body: string }[] = [
  {
    title: "Reach local households directly",
    body: "A flyer in the letterbox lands in front of nearby residents without competing with a crowded digital feed.",
  },
  {
    title: "Target specific suburbs",
    body: "Concentrate your campaign on the exact areas your customers live in, rather than paying to reach the whole city.",
  },
  {
    title: "Promote local, time-sensitive offers",
    body: "New store openings, seasonal promotions, open homes and local services all suit a focused letterbox campaign.",
  },
  {
    title: "See where your flyers went",
    body: "GPS tracking and a post-campaign report show the streets covered, not just an invoice.",
  },
];

const services: { title: string; body: string; href: string }[] = [
  {
    title: "Flyer Distribution",
    body: "Residential flyer and leaflet delivery across your chosen Melbourne suburbs, delivered individually, never bundled with other material.",
    href: "/services/flyer-distribution",
  },
  {
    title: "Letterbox Distribution",
    body: "Suburb-by-suburb letterbox drops planned around the areas and household types you want to reach.",
    href: "/services/letterbox-distribution",
  },
  {
    title: "Targeted Distribution",
    body: "Define your distribution area by suburb so your flyers land where your customers actually are.",
    href: "/services/targeted-flyer-distribution",
  },
  {
    title: "GPS-Tracked Delivery",
    body: "Every distribution run is tracked via the Strava app, with a route report provided once your campaign is complete.",
    href: "/services/gps-tracked-flyer-distribution",
  },
];

const industries: { title: string; body: string; href: string }[] = [
  {
    title: "Real Estate",
    body: "Just Listed, Open Home, Auction and Sold campaigns delivered to the streets around your listings.",
    href: "/industries/real-estate",
  },
  {
    title: "Healthcare",
    body: "Local-area awareness for new practices, clinics and services opening or growing across Melbourne.",
    href: "/industries/healthcare",
  },
  {
    title: "Home Services",
    body: "Plumbers, electricians, roofers, builders, renovators and cleaners reaching the households they service.",
    href: "/industries/home-services",
  },
  {
    title: "Local Businesses",
    body: "Shops, cafes, clinics and studios putting their offer in the letterboxes around them.",
    href: "/industries/local-businesses",
  },
];

const faqs = [
  {
    question: "How much does flyer distribution cost in Melbourne?",
    answer:
      "Cost depends on your flyer quantity and the suburbs you want to cover, delivered exclusively and GPS-tracked. See our letterbox drop cost page for a quote.",
  },
  {
    question: "How many flyers do I need for a Melbourne suburb?",
    answer:
      "As a rough guide, one flyer covers one letterbox, so a few thousand flyers covers a decent pocket of a suburb rather than the whole thing. If you tell us the suburb and your goal, we'll help you work out a sensible quantity, so you don't have to guess.",
  },
  {
    question: "Is there a flyer distribution service near me in the south-east?",
    answer:
      "Likely, yes. We service the bayside and inner south (St Kilda, Brighton, South Yarra, Caulfield, Malvern), the Monash and eastern suburbs (Glen Waverley, Box Hill, Blackburn), Boroondara and Manningham (Balwyn, Doncaster) and more. The full confirmed list is in the coverage section above.",
  },
  {
    question: "Do you deliver to letterboxes marked 'No Junk Mail'?",
    answer:
      "No. We skip every letterbox displaying a 'No Junk Mail' or 'No Advertising Material' sign. It keeps your brand in good standing and means your flyers only reach households happy to receive them.",
  },
  {
    question: "How do I know my flyers were actually delivered?",
    answer:
      "Every distribution run is GPS-tracked in real time using the Strava app. After the campaign you receive a report showing the streets covered and a map of the route, so you can see where your flyers went rather than taking it on trust.",
  },
  {
    question: "How long does a Melbourne flyer campaign take?",
    answer:
      "We offer a 48-hour turnaround for urgent campaigns. For standard campaigns we usually begin distribution within 3 to 5 business days of receiving your flyers, then complete the run to the schedule we agree.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution Melbourne",
  serviceType: "Flyer Distribution",
  description:
    "Professional flyer and letterbox distribution across Melbourne. GPS-tracked delivery, no junk mail compliant, suburb-level targeting and full campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function FlyerDistributionMelbourne() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Flyer Distribution Melbourne" }]}
        h1="Flyer Distribution Melbourne"
        lead="Professional flyer and letterbox distribution across our confirmed Melbourne service areas. GPS-tracked delivery, no junk mail compliant, and planned around the suburbs you want to reach. You provide the flyers. We handle the distribution."
        image={{ src: "/images/redesign/walker-ebike.jpg", alt: "A South East Flyers e-bike rider delivering flyers on a Melbourne street" }}
      />

      <FactsStrip
        stats={[
          { value: String(totalSuburbs), label: "suburbs across our service area" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "Never", label: "bundled with other advertisers" },
          { value: "Quick", label: "turnaround on your quote" },
        ]}
      />

      <Section title="Flyer distribution across Melbourne" first>
        <p>
          South East Flyers is a flyer distribution service Melbourne businesses use when they want solo delivery
          rather than a bundle. We&rsquo;re a flyer distribution company Melbourne clients choose for exclusive,
          GPS-tracked delivery. Businesses across the city give us their printed material and we deliver it,
          letterbox by letterbox, across the suburbs they want to target, from the bayside around St Kilda and
          Brighton through to the Monash and eastern suburbs like Glen Waverley, Box Hill and Doncaster.
        </p>
        <p>
          We deliver every flyer individually rather than bundling it with other advertising, skip every letterbox
          marked &lsquo;No Junk Mail&rsquo;, and track each distribution run through the Strava app so you receive a
          clear report once your campaign is complete. That&rsquo;s leaflet distribution Melbourne businesses can
          rely on without guessing where their flyers went. We scale from a small test run up to metro-wide pushes.
        </p>
      </Section>

      <Section title="Why Melbourne businesses use flyer distribution">
        <Bullets
          items={whyUseIt.map((item) => (
            <>
              <strong className="font-heading font-semibold text-ink">{item.title}.</strong> {item.body}
            </>
          ))}
        />
      </Section>

      <Section title="Our Melbourne distribution services">
        <Bullets
          items={services.map((s) => (
            <>
              <TextLink href={s.href}>{s.title}</TextLink>: {s.body}
            </>
          ))}
        />
      </Section>

      <Section title="Melbourne suburbs we cover">
        <p>
          Our confirmed Melbourne service areas, grouped by region. If your suburb isn&rsquo;t listed, get in touch,
          we may still be able to help or point you in the right direction. For the 56 key suburbs grouped by
          council, see{" "}
          <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">
            flyer distribution across south-east Melbourne
          </TextLink>
          .
        </p>
        <div className="flex flex-col gap-8 mt-2">
          {coverageGroups.map((group) => (
            <div key={group.region} className="pt-5 border-t border-[rgba(16,48,47,0.16)]">
              <h3 className="m-0 mb-3 font-heading font-semibold text-lg">{group.region}</h3>
              <ul className="m-0 p-0 list-none grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-1.5 text-[15px]">
                {group.suburbs.map((suburb) => (
                  <li key={suburb}>
                    {suburbPages[suburb] ? (
                      <TextLink href={suburbPages[suburb]}>{suburb}</TextLink>
                    ) : (
                      suburb
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Who uses flyer distribution in Melbourne">
        <Bullets
          items={industries.map((i) => (
            <>
              <TextLink href={i.href}>{i.title}</TextLink>: {i.body}
            </>
          ))}
        />
      </Section>

      <HowItWorks />

      <QuickQuoteForm
        heading="Planning a Melbourne flyer campaign?"
        lead="Tell us the suburbs you want to reach and how many flyers you have. We'll put together a free, no-obligation quote."
      />

      <FAQSection
        items={faqs}
        title="Melbourne Flyer Distribution FAQs"
        subtitle="Common questions about distributing flyers across Melbourne."
      />
    </>
  );
}
