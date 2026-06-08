import Link from "next/link";
import Image from "next/image";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#1B3A6B] text-white">
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
                Melbourne &amp; Sydney
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Letterbox marketing that actually gets read.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We deliver nearly 20,000 flyers every day for Australia&apos;s leading brands — with GPS tracking, no junk mail compliance, and zero bundling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-navy font-semibold px-6 py-3 rounded text-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
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
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold">20K+</p>
                  <p className="text-sm text-gray-300 mt-1">Flyers dropped daily</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold">200+</p>
                  <p className="text-sm text-gray-300 mt-1">Happy clients</p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-gray-300 mt-1">GPS tracked</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm text-gray-300 mt-1">Years experience</p>
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
              Professional walkers and e-bike distributors covering Melbourne and Sydney suburbs every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-1.png"
                alt="E-bike flyer distribution"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-2.png"
                alt="Flyer distributor on foot"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
              <Image
                src="/walker-3.png"
                alt="Flyer distribution team"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              number="01"
              title="Targeted Distribution"
              description="Suburb-level targeting using demographic data to reach the right households for your business."
              image="/service-targeted.png"
              imageAlt="Melbourne suburb targeting map"
            />
            <ServiceCard
              number="02"
              title="GPS Tracked Drops"
              description="Every delivery is GPS tracked with full reporting so you know exactly where your flyers went."
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <WhyCard
              icon="pin"
              title="GPS-Tracked Every Drop"
              description="Real-time tracking on every delivery run with detailed route reporting."
            />
            <WhyCard
              icon="shield"
              title="No Junk Mail Compliant"
              description="We respect every 'No Junk Mail' sign — keeping your brand reputable."
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

      {/* CTA Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Ready to reach more customers?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get in touch for a no-obligation quote on your next letterbox campaign.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ number, title, description, image, imageAlt }: { number: string; title: string; description: string; image?: string; imageAlt?: string }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {image && (
        <div className="relative aspect-[16/9]">
          <Image src={image} alt={imageAlt || title} fill className="object-cover" />
        </div>
      )}
      <div className="p-8">
        <p className="text-sm text-gray-400 font-mono mb-3">{number}</p>
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  const icons: Record<string, React.ReactNode> = {
    pin: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
      <div className="text-navy mb-3 flex justify-center">{icons[icon]}</div>
      <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
