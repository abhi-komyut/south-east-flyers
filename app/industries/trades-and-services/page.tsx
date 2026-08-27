import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/industries/trades-and-services";

export const metadata: Metadata = {
  title: "Flyer Distribution for Trades & Services",
  description:
    "Flyer and letterbox distribution for trades and local service businesses across Melbourne and Sydney. Reach nearby households directly. GPS-tracked. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution for Trades & Services | South East Flyers",
    description:
      "Local customer acquisition for plumbers, electricians, landscapers and other trades across Melbourne and Sydney through targeted, GPS-tracked distribution.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const trades: string[] = [
  "Plumbing",
  "Electrical",
  "Landscaping & gardening",
  "Roofing & guttering",
  "Cleaning services",
  "Renovations & building",
  "Pest control",
  "Other local home services",
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution for Trades & Services",
  serviceType: "Flyer Distribution",
  description:
    "Flyer and letterbox distribution for trades and local service businesses across Melbourne and Sydney — reach nearby households directly, GPS-tracked.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Melbourne", addressCountry: "AU" },
    { "@type": "City", name: "Sydney", addressCountry: "AU" },
  ],
};

export default function TradesAndServices() {
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
              { name: "Industries", href: "/industries" },
              { name: "Trades & Services" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Flyer Distribution for Trades &amp; Services
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Local work comes from local households. We deliver your flyers
              directly to the streets you service across Melbourne and Sydney, so
              nearby customers know who to call.
            </p>
            <p className="text-base text-gray-300 mb-8">
              You provide the flyers. We handle the distribution.
            </p>
            <Link
              href="/contact"
              data-quote-cta
              className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Local customers, delivered to
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a trade or local service business, the most valuable customers
            are usually the ones closest to you — the households in the suburbs
            you already work in. A letterbox drop puts your name and number in
            front of them at the moment they might be thinking about a job.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You provide the flyers and tell us the suburbs and streets you cover;
            we deliver across that area and report on where your flyers went. The
            minimum campaign is 1,000 flyers.
          </p>
        </div>
      </section>

      {/* Trades list */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Trades &amp; services we work with
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you run a local home or trade service and it isn&rsquo;t listed,
              get in touch — the approach is the same.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {trades.map((trade) => (
              <div
                key={trade}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center text-sm font-medium text-gray-700"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            How it works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Campaigns run through our{" "}
            <Link
              href="/services/letterbox-distribution"
              className="text-navy underline"
            >
              letterbox distribution
            </Link>{" "}
            and{" "}
            <Link
              href="/services/targeted-flyer-distribution"
              className="text-navy underline"
            >
              targeted distribution
            </Link>{" "}
            services, are{" "}
            <Link
              href="/services/gps-tracked-flyer-distribution"
              className="text-navy underline"
            >
              GPS-tracked
            </Link>
            , and cover the suburbs on our{" "}
            <Link
              href="/melbourne/flyer-distribution-melbourne"
              className="text-navy underline"
            >
              Melbourne
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Quote form */}
      <QuickQuoteForm />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get more local work
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us the suburbs you cover and your flyer quantity for a free,
            no-obligation quote.
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
