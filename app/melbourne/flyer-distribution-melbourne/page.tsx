import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/melbourne/flyer-distribution-melbourne";

export const metadata: Metadata = {
  title: "Flyer Distribution Melbourne",
  description:
    "Flyer distribution Melbourne: exclusive, GPS-tracked letterbox drops across our service suburbs. $200 per 1,000 flyers, from 1,000. Free quote today.",
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

const steps: { title: string; body: string }[] = [
  {
    title: "You provide the flyers",
    body: "You supply your printed flyers, brochures or promotional material. We're a distribution specialist — we don't print, we get your material into the right letterboxes.",
  },
  {
    title: "Choose your target area",
    body: "Tell us which Melbourne suburbs you want to reach. We'll help you shape the most practical distribution area for your goals and budget.",
  },
  {
    title: "We plan your campaign",
    body: "We map the walking and e-bike routes, confirm your flyer quantity and lock in a schedule that fits your timing.",
  },
  {
    title: "Our team distributes",
    body: "Our on-foot walkers and e-bike distributors deliver street by street, skipping every letterbox marked 'No Junk Mail' or 'No Advertising Material'.",
  },
  {
    title: "Every run is GPS tracked",
    body: "Distributors track their routes in real time via the Strava app, so distribution activity is recorded as it happens.",
  },
  {
    title: "You receive a report",
    body: "After the campaign we send a report showing the streets covered, the number of letterboxes delivered to and a map of the distribution route.",
  },
];

const services: { title: string; body: string; href?: string }[] = [
  {
    title: "Flyer Distribution",
    body: "Residential flyer and leaflet delivery across your chosen Melbourne suburbs, delivered individually — never bundled with other material.",
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
      "Flyer distribution costs $200 per 1,000 flyers, delivered exclusively and GPS-tracked. The minimum campaign is 1,000 flyers ($200), and a 5,000-flyer drop costs $1,000. See our letterbox drop cost page for more quantities.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Flyer Distribution Melbourne" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Flyer Distribution Melbourne
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Professional flyer and letterbox distribution across our confirmed
              Melbourne service areas. GPS-tracked delivery, no junk mail
              compliant, and planned around the suburbs you want to reach.
            </p>
            <p className="text-base text-gray-300 mb-8">
              You provide the flyers. We handle the distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                data-quote-cta
                className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
              >
                Get a Free Quote
              </Link>
              <a
                href="#coverage"
                className="inline-block border border-white/40 text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-white/10"
              >
                See Where We Distribute
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Flyer distribution across Melbourne
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            South East Flyers is a flyer distribution service Melbourne
            businesses use when they want solo delivery rather than a bundle.
            We&rsquo;re a flyer distribution company Melbourne clients choose
            precisely because we&rsquo;re not one of the big operators running
            10,000-home minimums. Businesses across the city give us their
            printed material and we deliver it, letterbox by letterbox,
            across the suburbs they want to target, from the bayside around
            St Kilda and Brighton through to the Monash and eastern suburbs
            like Glen Waverley, Box Hill and Doncaster.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whatever you call it, leaflet distribution Melbourne businesses
            already search for, letterbox distribution or one of the many
            flyer distribution companies in the city, the service is the
            same: exclusive delivery, GPS-tracked, never bundled.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We deliver every flyer individually rather than bundling it with
            other advertising, skip every letterbox marked &lsquo;No Junk
            Mail&rsquo;, and track each distribution run through the Strava app so
            you receive a clear report once your campaign is complete. The
            minimum campaign is 1,000 flyers, and we scale up from there for
            metro-wide pushes.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How flyer distribution works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A straightforward, tracked process from your flyers to a completed
              campaign report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Melbourne businesses use flyer distribution */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Why Melbourne businesses use flyer distribution
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-cta font-bold shrink-0">—</span>
              <span>
                <strong>Reach local households directly.</strong> A flyer in the
                letterbox lands in front of nearby residents without competing
                with a crowded digital feed.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cta font-bold shrink-0">—</span>
              <span>
                <strong>Target specific suburbs.</strong> Concentrate your
                campaign on the exact areas your customers live in, rather than
                paying to reach the whole city.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cta font-bold shrink-0">—</span>
              <span>
                <strong>Promote local, time-sensitive offers.</strong> New store
                openings, seasonal promotions, open homes and local services all
                suit a focused letterbox campaign.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cta font-bold shrink-0">—</span>
              <span>
                <strong>See where your flyers went.</strong> GPS tracking and a
                post-campaign report show the streets covered — not just an
                invoice.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Melbourne distribution services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service) => {
              const cardClass =
                "bg-white border border-gray-200 rounded-xl p-6 block";
              const inner = (
                <>
                  <h3 className="font-semibold text-black mb-2">
                    {service.title}
                    {service.href && (
                      <span className="text-cta" aria-hidden="true">
                        {" "}
                        &rarr;
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.body}
                  </p>
                </>
              );
              return service.href ? (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`${cardClass} transition-colors hover:border-navy`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={service.title} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Melbourne coverage */}
      <section
        id="coverage"
        className="py-16 sm:py-20 bg-white border-t border-gray-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Melbourne suburbs we cover
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our confirmed Melbourne service areas, grouped by region. If your
              suburb isn&rsquo;t listed, get in touch — we may still be able to
              help or point you in the right direction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageGroups.map((group) => (
              <div
                key={group.region}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-navy mb-3">{group.region}</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-700">
                  {group.suburbs.map((suburb) => (
                    <li key={suburb}>
                      {suburbPages[suburb] ? (
                        <Link href={suburbPages[suburb]} className="text-navy underline underline-offset-2">
                          {suburb}
                        </Link>
                      ) : (
                        suburb
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Who uses flyer distribution in Melbourne
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="block bg-white border border-gray-200 rounded-xl p-6 transition-colors hover:border-navy"
              >
                <h3 className="font-semibold text-black mb-2">
                  {industry.title}
                  <span className="text-cta" aria-hidden="true">
                    {" "}
                    &rarr;
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <QuickQuoteForm />

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="Melbourne Flyer Distribution FAQs"
        subtitle="Common questions about distributing flyers across Melbourne."
      />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Planning a Melbourne flyer campaign?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us the suburbs you want to reach and how many flyers you have.
            We&rsquo;ll put together a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            data-quote-cta
            className="inline-block bg-cta text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
