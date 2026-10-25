import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import { ProofStrip, TextLink } from "../../components/landing";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/industries/real-estate";

export const metadata: Metadata = {
  title: "Real Estate Flyer Distribution",
  description:
    "Real estate flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Just Listed, Open Home, Auction and Sold campaigns, GPS-tracked. Trusted by leading agencies. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Real Estate Flyer Distribution | South East Flyers",
    description:
      "Just Listed, Open Home, Auction and Sold letterbox campaigns delivered to the streets around your listings across Melbourne's south-east and eastern suburbs. GPS-tracked.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const useCases: { title: string; body: string }[] = [
  {
    title: "Just Listed",
    body: "Let the surrounding streets know a new property has hit the market and invite appraisals from would-be sellers nearby.",
  },
  {
    title: "Open Homes",
    body: "Drive local foot traffic to an inspection by delivering to the streets around the property in the days beforehand.",
  },
  {
    title: "Auctions",
    body: "Build awareness in the immediate area ahead of auction day, reaching neighbours and potential buyers.",
  },
  {
    title: "Sold campaigns",
    body: "Follow up a result with a 'Sold' drop that demonstrates your success to the surrounding streets.",
  },
  {
    title: "Appraisals & farming",
    body: "Stay front of mind in the areas you work by distributing regularly to the same suburbs over time.",
  },
  {
    title: "Agency branding",
    body: "Keep your agency visible across your core suburbs with consistent, well-targeted local distribution.",
  },
];

const faqs = [
  {
    question: "How many flyers do I need for a Just Listed drop?",
    answer:
      "A Just Listed drop usually targets the streets immediately around the property, often a few hundred nearby homes. Our minimum campaign is 1,000 flyers, which comfortably covers the surrounding streets and lets you extend into the wider farm area if you want.",
  },
  {
    question: "Do you work with real estate agencies?",
    answer:
      "Yes. We distribute for real estate agencies including Ray White, McGrath and Belle Property, running Just Listed, Open Home, Auction and Sold campaigns across their local areas.",
  },
  {
    question: "Can you deliver to houses and avoid apartment blocks?",
    answer:
      "We target the suburbs and streets you specify. If you'd prefer to focus on houses and skip large apartment blocks, tell us and we'll factor that into the route planning where it's practical.",
  },
  {
    question: "How quickly can you turn around a Just Listed campaign?",
    answer:
      "We offer a 48-hour turnaround for urgent campaigns, which suits the tight timelines around a new listing or an upcoming open home. Standard campaigns usually start within 3 to 5 business days.",
  },
  {
    question: "Are real estate drops GPS-tracked?",
    answer:
      "Yes. Every run is tracked via the Strava app and you receive a report of the streets covered, useful proof for your vendor that the marketing was delivered.",
  },
  {
    question: "Do you print the flyers?",
    answer:
      "No. We distribute, we don't print. You provide your Just Listed cards, brochures or Sold notices and we deliver them to the right streets.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Flyer Distribution",
  serviceType: "Real Estate Flyer Distribution",
  description:
    "Real estate flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Just Listed, Open Home, Auction and Sold campaigns, GPS-tracked with reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function RealEstate() {
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
              { name: "Real Estate" },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Real Estate Flyer Distribution
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Letterbox campaigns built for agents: Just Listed, Open Home,
              Auction and Sold drops delivered to the streets around your
              listings across Melbourne&rsquo;s south-east and eastern
              suburbs, and tracked with GPS.
            </p>
            <p className="text-base text-gray-300 mb-8">
              You provide the flyers. We handle the distribution.
            </p>
            <Link
              href="/contact"
              data-quote-cta
              className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
            >
              Plan Your Next Real Estate Campaign
            </Link>
          </div>
        </div>
      </section>

      <ProofStrip />

      {/* Trust */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Trusted by real estate agencies including{" "}
            <span className="font-semibold text-black">Ray White</span>,{" "}
            <span className="font-semibold text-black">McGrath</span> and{" "}
            <span className="font-semibold text-black">Belle Property</span>.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Letterbox distribution for real estate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Property marketing is inherently local. The people most likely to
            attend an open home, bid at an auction or think about selling their
            own place are the ones living in the surrounding streets. A
            well-targeted letterbox drop puts your listing directly in front of
            them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You supply the printed material, whether that's Just Listed cards,
            brochures, invitations or Sold notices, and we deliver it across
            the suburbs and streets you want to reach, then report on where
            it went. The minimum campaign is 1,000 flyers.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Campaigns we handle for agents
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
            Real estate campaigns run through our{" "}
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

      {/* Cost */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Cost of a real estate letterbox drop
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every drop is <strong>$200 per 1,000 flyers</strong>, delivered exclusively, with a
            1,000-flyer minimum. A Just Listed run of 2,500 homes around a property costs $500; a
            whole suburb the size of{" "}
            <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> (about
            10,500 homes) costs about $2,100. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for more
            quantities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Real estate is one of several industries we deliver for. See our{" "}
            <TextLink href="/industries/local-businesses">local business flyer distribution</TextLink>{" "}
            page, or the full{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne service area</TextLink>.
          </p>
        </div>
      </section>

      {/* Quote form */}
      <QuickQuoteForm />

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="Real Estate Distribution FAQs"
        subtitle="Common questions from agents about letterbox campaigns."
      />

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Plan your next real estate campaign
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us the listing area and quantity, and we&rsquo;ll put together a
            free, no-obligation quote.
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
