import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

const SITE_URL = "https://www.southeastflyers.com.au";
const PAGE_PATH = "/industries";

export const metadata: Metadata = {
  title: "Industries We Work With",
  description:
    "Flyer and letterbox distribution for local businesses, home services trades, real estate and healthcare across Melbourne's south-east and eastern suburbs. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Industries We Work With | South East Flyers",
    description:
      "Flyer and letterbox distribution for local businesses, home services trades, real estate and healthcare across Melbourne's south-east and eastern suburbs.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

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
    title: "Plumbers",
    body: "Plumbing flyers delivered on their own to the streets around your base and your active jobs.",
    href: "/industries/plumbers",
  },
  {
    title: "Local Businesses",
    body: "Shops, cafes, clinics and studios putting their offer in the letterboxes around them.",
    href: "/industries/local-businesses",
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Industries" }]}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Industries We Work With
            </h1>
            <p className="text-lg text-gray-200">
              Flyer and letterbox distribution built around how different local
              businesses actually reach customers across Melbourne.
            </p>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="block bg-gray-50 border border-gray-200 rounded-xl p-6 transition-colors hover:border-navy"
              >
                <h2 className="font-semibold text-black mb-2">
                  {industry.title}
                  <span className="text-cta" aria-hidden="true">
                    {" "}
                    &rarr;
                  </span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-navy py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to reach local customers?
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
