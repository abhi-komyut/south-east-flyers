import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/services/letterbox-distribution";

export const metadata: Metadata = {
  title: "Letterbox Distribution",
  description:
    "Letterbox distribution and letterbox drops across Melbourne and Sydney. Suburb-level targeting, no junk mail compliant, GPS tracking and campaign reporting. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Letterbox Distribution | South East Flyers",
    description:
      "Suburb-by-suburb letterbox drops across Melbourne and Sydney. No junk mail compliant, GPS-tracked, delivered individually with full campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const steps: { title: string; body: string }[] = [
  {
    title: "Select your suburbs",
    body: "Choose the suburbs and areas you want to reach. We'll help you shape the most practical coverage for your quantity and budget.",
  },
  {
    title: "We plan the drop",
    body: "We map the streets and routes across your target area and confirm the schedule for your campaign.",
  },
  {
    title: "We deliver door to door",
    body: "Walkers and e-bike distributors work street by street, placing one flyer in each letterbox and skipping every 'No Junk Mail' sign.",
  },
  {
    title: "You receive reporting",
    body: "Each run is tracked via the Strava app, and you get a report showing the streets covered and letterboxes delivered to.",
  },
];

const features: { title: string; body: string }[] = [
  {
    title: "Suburb-level targeting",
    body: "Concentrate your drop on the exact suburbs and areas where your customers live, rather than paying to blanket a whole city.",
  },
  {
    title: "No junk mail compliant",
    body: "We skip every letterbox marked 'No Junk Mail' or 'No Advertising Material' to keep your brand in good standing.",
  },
  {
    title: "No bundling",
    body: "Your flyer is delivered on its own, never mixed in with a stack of other advertising material.",
  },
  {
    title: "Tracked and reported",
    body: "GPS tracking on every run plus a clear campaign report, so you know where your letterbox drop actually went.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Letterbox Distribution",
  serviceType: "Letterbox Distribution",
  description:
    "Letterbox distribution and letterbox drops across Melbourne and Sydney. Suburb-level targeting, no junk mail compliant, GPS-tracked with campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Melbourne", addressCountry: "AU" },
    { "@type": "City", name: "Sydney", addressCountry: "AU" },
  ],
};

export default function LetterboxDistribution() {
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
              { name: "Letterbox Distribution" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Letterbox Distribution
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Suburb-by-suburb letterbox drops across Melbourne and Sydney. We
              deliver your flyers directly into household letterboxes in the
              areas you want to reach — no junk mail compliant, GPS-tracked and
              fully reported.
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
            How letterbox distribution works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A letterbox drop delivers your printed material straight to
            residential letterboxes across the suburbs you select. It&rsquo;s one
            of the most direct ways to reach local households — your flyer is in
            their hands the moment they check the mail.
          </p>
          <p className="text-gray-700 leading-relaxed">
            South East Flyers plans and delivers the drop for you. You provide
            the flyers and choose the areas; we handle route planning,
            door-to-door delivery, GPS tracking and reporting. Minimum campaign
            is 1,000 flyers, scaling up for larger runs across{" "}
            <Link
              href="/melbourne/flyer-distribution-melbourne"
              className="text-navy underline"
            >
              Melbourne
            </Link>{" "}
            and Sydney.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              The letterbox drop process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why choose our letterbox distribution
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Related services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Letterbox distribution pairs naturally with{" "}
            <Link
              href="/services/flyer-distribution"
              className="text-navy underline"
            >
              flyer distribution
            </Link>{" "}
            and suburb-level campaigns across{" "}
            <Link
              href="/melbourne/flyer-distribution-melbourne"
              className="text-navy underline"
            >
              Melbourne
            </Link>
            . Tell us your target area and we&rsquo;ll recommend the most
            practical approach.
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
            Planning a letterbox drop?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us which suburbs you want to reach and how many flyers you have.
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
