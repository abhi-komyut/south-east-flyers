import Link from "next/link";
import Image from "next/image";
import LogoSlider from "./components/LogoSlider";
import CountUp from "./components/CountUp";
import Testimonials from "./components/Testimonials";
import QuickQuoteForm from "./components/QuickQuoteForm";
import FAQ from "./components/FAQ";

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
      <section className="relative min-h-[480px] sm:min-h-[600px] flex items-center bg-[#1B3A6B] text-white">
        <Image
          src="/letterbox-hero.png"
          alt="Hand dropping a flyer into a letterbox"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1B3A6B] opacity-70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Melbourne&rsquo;s South-East
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 font-display">
                Flyer distribution in Melbourne that actually gets read.
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-8">
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
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold"><CountUp end={50} suffix="K+" /></p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">Flyers per campaign</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold"><CountUp end={200} suffix="+" /></p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">Happy clients</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold"><CountUp end={100} suffix="%" /></p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">GPS tracked</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold"><CountUp end={10} suffix="+" /></p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">Years experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Who We Work With — logos + industry cards */}
      <LogoSlider />

      {/* Our Distributors */}
      <section className="border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Team on the Ground</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional walkers and e-bike distributors covering Melbourne&rsquo;s south-east and eastern suburbs every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
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
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
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
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
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
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Letterbox Distribution Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <ServiceCard
              title="Targeted Flyer Distribution"
              description="Suburb-level leaflet distribution using demographic data to reach the right households across Melbourne."
              image="/service-targeted.png"
              imageAlt="Melbourne suburb targeting map"
            />
            <ServiceCard
              title="GPS Tracked Drops"
              description="Every letterbox drop is tracked via the Strava app with full reporting so you know exactly where your flyers and pamphlets were delivered."
              image="/service-gps.avif"
              imageAlt="GPS route tracking map"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <WhyCard
              icon="pin"
              title="GPS-Tracked Every Drop"
              description="Real-time tracking on every delivery run with detailed route reporting."
            />
            <WhyCard
              icon="shield"
              title="No Junk Mail Compliant"
              description="We respect every 'No Junk Mail' sign, which keeps your brand reputable."
            />
            <WhyCard
              icon="clock"
              title="48hr Turnaround Available"
              description="Fast campaign deployment when you need to move quickly."
            />
            <WhyCard
              icon="chart"
              title="Campaign Reporting"
              description="Detailed reports on drops completed, areas covered, and delivery proof."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quick Quote Form */}
      {/* Where we deliver and who for: internal links to hubs, suburbs and pricing */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Local flyer distribution across Melbourne&rsquo;s south-east
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Our flyer distribution in Melbourne covers the bayside, inner-south and eastern suburbs on foot and by
            e-bike, for $200 per 1,000 flyers.
          </p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to start your letterbox campaign?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get a free quote for flyer distribution across Melbourne, no obligation.
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

function ServiceCard({ title, description, image, imageAlt }: { title: string; description: string; image?: string; imageAlt?: string }) {
  return (
    <div className="group rounded-lg overflow-hidden bg-white shadow-[0_1px_2px_rgba(10,10,10,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(27,58,107,0.14)]">
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 sm:p-8">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, description }: { icon: string; title: string; description: string }) {
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
