import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/services/flyer-distribution";

export const metadata: Metadata = {
  title: "Flyer Distribution",
  description:
    "Professional flyer distribution across Melbourne's south-east and eastern suburbs. Residential delivery, suburb-level targeting, GPS tracking and campaign reporting. You provide the flyers, we handle the distribution. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution | South East Flyers",
    description:
      "Residential flyer and leaflet distribution across Melbourne's south-east and eastern suburbs. GPS-tracked, no junk mail compliant, delivered individually with full campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const steps: { title: string; body: string }[] = [
  {
    title: "You provide the flyers",
    body: "You supply your printed flyers, leaflets, pamphlets or brochures. We're a distribution specialist — we don't print, we deliver.",
  },
  {
    title: "We plan the campaign",
    body: "We agree on your target suburbs, confirm quantities and map the walking and e-bike routes that cover them.",
  },
  {
    title: "Our team distributes",
    body: "On-foot walkers and e-bike distributors deliver door to door, one flyer per letterbox, skipping every 'No Junk Mail' sign.",
  },
  {
    title: "You get tracking and a report",
    body: "Runs are tracked via the Strava app and you receive a report showing the streets covered and letterboxes delivered to.",
  },
];

const features: { title: string; body: string }[] = [
  {
    title: "Residential delivery",
    body: "Your flyers go directly into household letterboxes across the suburbs you choose — the places your local customers actually live.",
  },
  {
    title: "Delivered individually",
    body: "We never bundle your flyer with other advertising. Each one is delivered on its own so it gets maximum attention.",
  },
  {
    title: "No junk mail compliant",
    body: "We respect every 'No Junk Mail' and 'No Advertising Material' sign, protecting your brand's reputation.",
  },
  {
    title: "GPS tracking & reporting",
    body: "Every distribution run is tracked in real time via Strava, with a route report provided once your campaign is complete.",
  },
];

const faqs = [
  {
    question: "What's the difference between flyer distribution and letterbox distribution?",
    answer:
      "In practice they're the same thing — physically delivering your printed material into residential letterboxes. 'Letterbox distribution' just emphasises the letterbox drop itself. We handle both, and most campaigns use the two terms interchangeably.",
  },
  {
    question: "Do you print the flyers?",
    answer:
      "No — we're a distribution specialist, not a printer. You supply the printed flyers, leaflets or brochures and we get them into the right letterboxes across Melbourne's south-east and eastern suburbs.",
  },
  {
    question: "How much does flyer distribution cost?",
    answer:
      "It depends on your quantity, the suburbs you're targeting and how spread out the delivery is, so we quote each campaign individually. Send us your target area and how many flyers you have and we'll come back with a clear price. The minimum campaign is 1,000 flyers.",
  },
  {
    question: "Are my flyers delivered individually or bundled with other ads?",
    answer:
      "Individually. We have a strict anti-bundling policy, so your flyer is delivered on its own into each letterbox rather than stuffed in with a stack of other advertising — which means it actually gets noticed.",
  },
  {
    question: "How is the delivery tracked?",
    answer:
      "Distributors record their routes in real time via the Strava app. Once the campaign is finished you get a report showing the streets covered and a map of the route.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution",
  serviceType: "Flyer Distribution",
  description:
    "Professional residential flyer and leaflet distribution across Melbourne's south-east and eastern suburbs. GPS-tracked, no junk mail compliant, delivered individually with campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function FlyerDistribution() {
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
              { name: "Flyer Distribution" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Professional Flyer Distribution
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Residential flyer and leaflet distribution across
              Melbourne&rsquo;s south-east and eastern suburbs. We deliver your
              material directly into letterboxes in the suburbs you want to
              reach, with GPS tracking and full campaign reporting.
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
            What is flyer distribution?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flyer distribution is the physical delivery of your printed
            marketing material — flyers, leaflets, pamphlets or brochures —
            straight into residential letterboxes. It puts your offer in front
            of local households in the specific suburbs you choose, without
            competing for attention in a crowded digital feed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            South East Flyers handles the distribution end to end. You supply
            the flyers; we plan the routes, deliver them across your target area,
            track each run and report back on where they went. The minimum
            campaign is 1,000 flyers, scaling up for metro-wide pushes across{" "}
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

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How flyer distribution works
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
              What you get
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

      {/* What you need to provide */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            What you need to provide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You provide the printed flyers and let us know which suburbs you want
            to reach, roughly how many flyers you have and when you&rsquo;d like
            the campaign to run. If you&rsquo;re not sure how far your quantity
            will stretch, we&rsquo;ll help you work out a practical distribution
            area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Related services include{" "}
            <Link
              href="/services/letterbox-distribution"
              className="text-navy underline"
            >
              letterbox distribution
            </Link>{" "}
            and targeted suburb campaigns across{" "}
            <Link
              href="/melbourne/flyer-distribution-melbourne"
              className="text-navy underline"
            >
              Melbourne
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Quote form */}
      <QuickQuoteForm />

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="Flyer Distribution FAQs"
        subtitle="Common questions about our flyer distribution service."
      />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to distribute your flyers?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us your target suburbs and flyer quantity for a free,
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
