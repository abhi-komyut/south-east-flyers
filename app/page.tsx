import Link from "next/link";
import Image from "next/image";
import LogoSlider from "./components/LogoSlider";
import CountUp from "./components/CountUp";
import QuickQuoteForm from "./components/QuickQuoteForm";
import FAQ from "./components/FAQ";
import Reveal from "./components/Reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.southeastflyers.com.au/#localbusiness",
  name: "South East Flyers & Marketing Solutions",
  description:
    "Exclusive, GPS-tracked flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Never bundled.",
  url: "https://www.southeastflyers.com.au",
  telephone: "+61402824070",
  image: "https://www.southeastflyers.com.au/og-logo.jpg",
  logo: "https://www.southeastflyers.com.au/logo.png",
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
  serviceType: [
    "Flyer Distribution",
    "Letterbox Drops",
    "Leaflet Distribution",
    "Pamphlet Distribution",
    "Letterbox Advertising",
    "Catalogue Distribution",
  ],
  knowsAbout: [
    "GPS tracked flyer distribution",
    "No junk mail compliant delivery",
    "Targeted letterbox distribution",
    "Real estate flyer distribution",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[480px] sm:min-h-[600px] flex items-center bg-navy text-white">
        <Image
          src="/letterbox-hero.png"
          alt="Hand dropping a flyer into a letterbox"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy opacity-70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/85 mb-4">
                Melbourne&rsquo;s South-East
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 font-display">
                Flyer distribution in Melbourne that actually gets read.
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-8">
                Exclusive letterbox drops across Melbourne&rsquo;s south-east and eastern suburbs, with GPS tracking, no junk mail compliance, and zero bundling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  data-quote-cta
                  className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-block border border-white text-white font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                >
                  Our Clients
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/20 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <div>
                <dt className="sr-only">No bundling</dt>
                <dd className="text-2xl sm:text-3xl font-bold font-display">Exclusive</dd>
                <dd className="text-sm text-white/85 mt-1">No bundling, ever</dd>
              </div>
              <div>
                <dt className="sr-only">Runs GPS-tracked</dt>
                <dd className="text-2xl sm:text-3xl font-bold font-display"><CountUp end={100} suffix="%" /></dd>
                <dd className="text-sm text-white/85 mt-1">Of runs GPS-tracked</dd>
              </div>
              <div>
                <dt className="sr-only">Minimum flyers</dt>
                <dd className="text-2xl sm:text-3xl font-bold font-display"><CountUp end={1000} suffix="" /></dd>
                <dd className="text-sm text-white/85 mt-1">Minimum flyers</dd>
              </div>
              <div>
                <dt className="sr-only">Shoppers who read letterbox flyers for specials</dt>
                <dd className="text-2xl sm:text-3xl font-bold font-display"><CountUp end={44} suffix="%" /></dd>
                <dd className="text-sm text-white/85 mt-1">Read flyers for specials</dd>
              </div>
            </dl>
          </div>
        </div>

      </section>

      {/* Who We Work With — logos + industry cards */}
      <LogoSlider />

      {/* Our Distributors */}
      <section className="border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Team on the Ground</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional walkers and e-bike distributors covering Melbourne&rsquo;s south-east and eastern suburbs every day.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0} className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-1.png"
                alt="E-bike flyer distribution"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">E-Bike Distribution</p>
                <p className="text-white/70 text-xs">Fast, eco-friendly suburb coverage</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-2.png"
                alt="Flyer distributor on foot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">On-Foot Walkers</p>
                <p className="text-white/70 text-xs">Thorough, street-by-street delivery</p>
              </div>
            </Reveal>
            <Reveal delay={200} className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-3.png"
                alt="Flyer distribution team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">Team Operations</p>
                <p className="text-white/70 text-xs">Coordinated daily campaigns</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-200 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Letterbox Distribution Services</h2>
          </Reveal>
        </div>

        <ServiceFeature
          eyebrow="Suburb-level targeting"
          title="Targeted Flyer Distribution"
          description="Suburb-level leaflet distribution using demographic data to reach the right households across Melbourne."
          image="/service-targeted.png"
          imageAlt="Melbourne suburb targeting map"
        />
        <ServiceFeature
          eyebrow="Every run, verified"
          title="GPS Tracked Drops"
          description="Every letterbox drop is tracked via the Strava app with full reporting so you know exactly where your flyers and pamphlets were delivered."
          image="/service-gps.avif"
          imageAlt="GPS route tracking map"
          reverse
        />
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Why Choose Us</h2>
          </Reveal>
          <div className="space-y-5 sm:space-y-6">
            <Reveal>
              <WhyFeature
                icon="pin"
                title="GPS-Tracked Every Drop"
                description="Real-time tracking on every delivery run, with a detailed route report so you can see exactly which streets were covered before you pay for the next one."
                featured
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <Reveal delay={80}>
                <WhyFeature
                  icon="shield"
                  title="No Junk Mail Compliant"
                  description="We respect every 'No Junk Mail' sign, which keeps your brand reputable."
                />
              </Reveal>
              <Reveal delay={160}>
                <WhyFeature
                  icon="clock"
                  title="48hr Turnaround Available"
                  description="Fast campaign deployment when you need to move quickly."
                />
              </Reveal>
              <Reveal delay={240}>
                <WhyFeature
                  icon="chart"
                  title="Campaign Reporting"
                  description="Detailed reports on drops completed, areas covered, and delivery proof."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      {/* Where we deliver and who for: internal links to hubs, suburbs and pricing */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
              Local flyer distribution across Melbourne&rsquo;s south-east
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Our flyer distribution in Melbourne covers the bayside, inner-south and eastern suburbs on foot and by
              e-bike, for $200 per 1,000 flyers.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-black mb-3">Suburbs</h3>
              <ul className="space-y-2">
                <li><Link className="text-navy underline" href="/melbourne/flyer-distribution-brighton">Flyer distribution in Brighton</Link></li>
                <li><Link className="text-navy underline" href="/melbourne/flyer-distribution-kew">Flyer distribution in Kew</Link></li>
                <li><Link className="text-navy underline" href="/melbourne/flyer-distribution-glen-waverley">Flyer distribution in Glen Waverley</Link></li>
                <li><Link className="text-navy underline" href="/melbourne/flyer-distribution-melbourne">All Melbourne suburbs we cover</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-3">Industries</h3>
              <ul className="space-y-2">
                <li><Link className="text-navy underline" href="/industries/real-estate">Real estate letterbox drops</Link></li>
                <li><Link className="text-navy underline" href="/industries/home-services">Home services and trades</Link></li>
                <li><Link className="text-navy underline" href="/industries/local-businesses">Local business flyers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-3">Pricing</h3>
              <ul className="space-y-2">
                <li><Link className="text-navy underline" href="/letterbox-drop-cost">Letterbox drop cost</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <QuickQuoteForm />

      {/* FAQ */}
      <FAQ />

      {/* CTA Banner */}
      <section className="bg-navy py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to start your letterbox campaign?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get a free quote for flyer distribution across Melbourne, no obligation.
          </p>
          <Link
            href="/contact"
            data-quote-cta
            className="inline-block bg-cta text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function ServiceFeature({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal className="relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Reveal>
      <Reveal delay={100} className="flex items-center bg-white">
        <div className="max-w-md px-6 py-12 sm:px-12 sm:py-16 lg:px-16 mx-auto lg:mx-0">
          <span className="inline-block text-xs font-semibold text-navy bg-navy/10 rounded px-2.5 py-1 mb-4">
            {eyebrow}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 font-display">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </Reveal>
    </div>
  );
}

function WhyFeature({
  icon,
  title,
  description,
  featured = false,
}: {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}) {
  const icons: Record<string, React.ReactNode> = {
    pin: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };

  if (featured) {
    return (
      <div className="group bg-navy rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(4,107,107,0.35)]">
        <div className="w-16 h-16 rounded-full bg-white/10 text-white shrink-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-cta group-hover:text-white">
          {icons[icon]}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">{title}</h3>
          <p className="text-white/85 leading-relaxed max-w-xl">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-lg p-6 text-center shadow-[0_1px_2px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(27,58,107,0.14)]">
      <div className="w-12 h-12 rounded-full bg-navy/5 text-navy mb-4 mx-auto flex items-center justify-center transition-colors duration-300 group-hover:bg-cta/10 group-hover:text-cta">
        {icons[icon]}
      </div>
      <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
