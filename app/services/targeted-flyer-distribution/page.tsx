import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/services/targeted-flyer-distribution";

export const metadata: Metadata = {
  title: "Targeted Flyer Distribution",
  description:
    "Targeted flyer distribution across Melbourne's south-east and eastern suburbs. Define your distribution area by suburb, postcode or defined streets so your flyers reach the right areas. GPS-tracked. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Targeted Flyer Distribution | South East Flyers",
    description:
      "Choose exactly where your flyers go, by suburb, postcode or defined area, across Melbourne's south-east and eastern suburbs. GPS-tracked delivery with campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const targeting: { title: string; body: string }[] = [
  {
    title: "By suburb",
    body: "Choose the specific suburbs you want to reach. This is the most common way to focus a campaign on the areas your customers live in.",
  },
  {
    title: "By postcode",
    body: "Cover one or more postcodes when your service area lines up with them, rather than the whole metro.",
  },
  {
    title: "By defined area",
    body: "Where practical, we can focus on particular streets or a defined pocket around a location — for example the streets surrounding a store or listing.",
  },
  {
    title: "By campaign objective",
    body: "Tell us what you're trying to achieve — a local launch, a service-area push, a real estate farm — and we'll help shape a sensible area for it.",
  },
];

const faqs = [
  {
    question: "What does targeted flyer distribution actually mean?",
    answer:
      "It means you decide where your flyers go rather than spreading them thinly across a whole city. You choose the suburbs, postcodes or defined pockets you want to reach, and we concentrate the campaign there.",
  },
  {
    question: "Can you target specific streets or a radius around a location?",
    answer:
      "Where it's practical, yes — for example the streets immediately surrounding a store, listing or venue. Tell us the location and how far out you want to go and we'll map a sensible area.",
  },
  {
    question: "Do you offer demographic targeting?",
    answer:
      "We're honest about this: our targeting is based on the areas you choose, not household-level demographic data. If you have a type of customer in mind we'll help match the right suburbs to them, but we won't promise precision we can't deliver.",
  },
  {
    question: "What's the minimum for a targeted campaign?",
    answer:
      "1,000 flyers. From there you can scale up across as many suburbs or streets as you'd like to cover.",
  },
  {
    question: "Is a targeted campaign still GPS-tracked?",
    answer:
      "Yes. Every run is tracked via the Strava app and you receive a report of the streets covered, so you can confirm the campaign stayed within your chosen area.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Targeted Flyer Distribution",
  serviceType: "Targeted Flyer Distribution",
  description:
    "Targeted flyer distribution across Melbourne's south-east and eastern suburbs. Define your distribution area by suburb, postcode or defined streets, with GPS tracking and campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function TargetedFlyerDistribution() {
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
              { name: "Targeted Flyer Distribution" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Targeted Flyer Distribution
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Choose exactly where your flyers go. We help you define a practical
              distribution area — by suburb, postcode or a defined pocket — so
              your material reaches the areas that matter to your business.
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
            What is targeted flyer distribution?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Targeted distribution simply means deciding where your flyers are
            delivered rather than spreading them thinly across a whole city. You
            tell us the areas you want to reach, and we concentrate the campaign
            there — so your budget goes toward the households most likely to care
            about your offer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We keep this honest: our targeting is based on the areas you choose —
            suburbs, postcodes and defined residential pockets. If you have a
            particular type of customer in mind, tell us and we&rsquo;ll help
            match the area to it, but we won&rsquo;t promise household-level
            demographic precision we can&rsquo;t deliver.
          </p>
        </div>
      </section>

      {/* Targeting dimensions */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ways to define your distribution area
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {targeting.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.body}
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
            Related services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Targeted campaigns run through our{" "}
            <Link
              href="/services/flyer-distribution"
              className="text-navy underline"
            >
              flyer distribution
            </Link>{" "}
            and{" "}
            <Link
              href="/services/letterbox-distribution"
              className="text-navy underline"
            >
              letterbox distribution
            </Link>{" "}
            services, are tracked with{" "}
            <Link
              href="/services/gps-tracked-flyer-distribution"
              className="text-navy underline"
            >
              GPS tracking
            </Link>
            , and cover the suburbs listed on our{" "}
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

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="Targeted Distribution FAQs"
        subtitle="Common questions about targeting your flyer campaign."
      />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Know the areas you want to reach?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us your target suburbs and flyer quantity and we&rsquo;ll put
            together a free, no-obligation quote.
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
