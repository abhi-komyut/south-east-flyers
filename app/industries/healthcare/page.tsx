import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/industries/healthcare";

export const metadata: Metadata = {
  title: "Flyer Distribution for Healthcare",
  description:
    "Flyer and letterbox distribution for healthcare businesses across Melbourne and Sydney. Build local awareness for new practices, clinics and services. GPS-tracked. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution for Healthcare | South East Flyers",
    description:
      "Local-area awareness for healthcare practices and clinics across Melbourne and Sydney through targeted, GPS-tracked letterbox distribution.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const useCases: { title: string; body: string }[] = [
  {
    title: "New practice awareness",
    body: "Let the surrounding neighbourhood know a new practice or clinic has opened and where to find it.",
  },
  {
    title: "Opening campaigns",
    body: "Announce a launch or relocation to the local catchment in the lead-up to opening day.",
  },
  {
    title: "Local-area awareness",
    body: "Stay visible to the households closest to your practice — the catchment most of your patients come from.",
  },
  {
    title: "Promoting a specific service",
    body: "Raise awareness of a particular service or clinic offering among nearby residents.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution for Healthcare",
  serviceType: "Flyer Distribution",
  description:
    "Flyer and letterbox distribution for healthcare businesses across Melbourne and Sydney — local-area awareness for practices, clinics and services, GPS-tracked.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Melbourne", addressCountry: "AU" },
    { "@type": "City", name: "Sydney", addressCountry: "AU" },
  ],
};

export default function Healthcare() {
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
              { name: "Healthcare" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Flyer Distribution for Healthcare
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Build awareness for your practice, clinic or service among the
              local households closest to you — across Melbourne and Sydney, with
              GPS-tracked distribution.
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
            Reaching your local catchment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most patients come from the neighbourhoods around a practice. That
            makes letterbox distribution a practical way to introduce a new
            clinic, announce an opening or keep a local service front of mind
            with the households nearby.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You provide the printed material and choose the suburbs around your
            practice; we deliver it and report on where it went. We help with the
            distribution — the content of your material and any professional or
            advertising standards that apply to it remain yours to determine.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Common healthcare campaigns
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-black mb-2">{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {uc.body}
                </p>
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
            Grow awareness in your local area
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us the suburbs around your practice and your flyer quantity for
            a free, no-obligation quote.
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
