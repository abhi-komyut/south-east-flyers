import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/services/gps-tracked-flyer-distribution";

export const metadata: Metadata = {
  title: "GPS-Tracked Flyer Distribution",
  description:
    "GPS-tracked flyer distribution across Melbourne's south-east and eastern suburbs. Every distribution run is tracked via the Strava app, so you get a report of the routes and streets covered. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "GPS-Tracked Flyer Distribution | South East Flyers",
    description:
      "Every distribution run is GPS-tracked via the Strava app. See the routes and streets your campaign covered, with a report provided once it's complete.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const tracked: { title: string; body: string }[] = [
  {
    title: "The distribution route",
    body: "Each distributor records their route in real time using the Strava app as they work through your target area.",
  },
  {
    title: "The streets covered",
    body: "The recorded routes show the streets and areas that were walked or ridden during your campaign.",
  },
  {
    title: "Campaign progress",
    body: "Because runs are logged as they happen, we can see how a campaign is progressing across the scheduled area.",
  },
  {
    title: "A report at the end",
    body: "Once your campaign is complete you receive a report summarising the routes and streets covered, with a map of the distribution.",
  },
];

const faqs = [
  {
    question: "How does your GPS tracking work?",
    answer:
      "When our distributors are out delivering, they record their route in real time using the Strava app. That produces a mapped record of the streets and areas covered during your campaign.",
  },
  {
    question: "What's included in the report I receive?",
    answer:
      "After the campaign you get a report summarising the routes and streets covered, along with a map of the distribution — so you can see where your flyers went.",
  },
  {
    question: "Does GPS tracking prove every letterbox received a flyer?",
    answer:
      "We're upfront about this: GPS records the route the distributor travelled and the streets they covered. It gives you real accountability over where the campaign went, but we don't claim it proves each individual letterbox received a flyer.",
  },
  {
    question: "Why does GPS tracking matter for flyer distribution?",
    answer:
      "Distribution has a reputation problem — not every operator delivers what they're paid for. GPS tracking is how we stay accountable: you're not just trusting the work was done, you can see the routes it took.",
  },
  {
    question: "Can I see how the campaign is progressing?",
    answer:
      "Yes. Because runs are logged as they happen, we can see progress across the scheduled area during the campaign, not just at the end.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GPS-Tracked Flyer Distribution",
  serviceType: "GPS-Tracked Flyer Distribution",
  description:
    "GPS-tracked flyer distribution across Melbourne's south-east and eastern suburbs. Distribution runs are tracked via the Strava app, with a report of the routes and streets covered.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function GpsTrackedFlyerDistribution() {
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
              { name: "GPS-Tracked Flyer Distribution" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              GPS-Tracked Flyer Distribution
            </h1>
            <p className="text-lg text-white/85 mb-4">
              Every distribution run is GPS-tracked using the Strava app, so you
              can see the routes and streets your campaign covered — not just an
              invoice at the end.
            </p>
            <p className="text-base text-white/80 mb-8">
              You provide the flyers. We handle the distribution — and show you
              where it went.
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
            How our GPS tracking works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When our distributors are out delivering your flyers, they record
            their route in real time using the Strava app. That gives us — and
            you — a clear record of the streets and areas that were covered
            during your campaign.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To be clear about what this shows: GPS tracking records the route the
            distributor travelled and the streets they covered. It gives you real
            visibility and accountability over where your campaign went. We
            don&rsquo;t claim it proves that every individual letterbox received a
            flyer — but you get a genuine, mapped record of the distribution
            rather than taking it on trust.
          </p>
        </div>
      </section>

      {/* What's tracked */}
      <section className="py-16 sm:py-20 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What you can see
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {tracked.map((item) => (
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

      {/* Why it matters */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Why GPS tracking matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flyer distribution has a reputation problem: not every operator
            actually delivers what they&rsquo;re paid for. GPS tracking is how we
            keep ourselves accountable. You aren&rsquo;t just trusting that the
            work was done — you can see the routes it took.
          </p>
          <p className="text-gray-700 leading-relaxed">
            GPS tracking applies across our{" "}
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
            campaigns across{" "}
            <Link
              href="/melbourne/flyer-distribution-melbourne"
              className="text-navy underline"
            >
              Melbourne
            </Link>
            &rsquo;s south-east and eastern suburbs.
          </p>
        </div>
      </section>

      {/* Quote form */}
      <QuickQuoteForm />

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="GPS Tracking FAQs"
        subtitle="Common questions about how we track and report on your campaign."
      />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-display"
            >
            Want proof of where your flyers went?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Every campaign is GPS-tracked and reported. Get a free,
            no-obligation quote for your distribution.
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
