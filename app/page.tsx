import Link from "next/link";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Letterbox Marketing That Delivers Results
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Melbourne and Sydney&apos;s trusted letterbox drop agency. We help businesses reach
              their target audience with precision distribution across Australian suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-navy font-semibold px-6 py-3 rounded text-center hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-white text-white font-semibold px-6 py-3 rounded text-center hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <LogoSlider />

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end letterbox marketing solutions tailored for the Australian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Letterbox Drops"
              description="Reliable door-to-door flyer and brochure delivery across Melbourne and Sydney metropolitan areas. We ensure your materials reach every letterbox."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title="Distribution Services"
              description="From small runs to large-scale campaigns, we handle printing coordination, sorting, and timely distribution with full GPS tracking and reporting."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
            />
            <ServiceCard
              title="Targeted Campaigns"
              description="Demographic and geographic targeting to maximise your ROI. We use Australia Post data and local insights to reach the right households."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrustItem label="Melbourne & Sydney Coverage" />
            <TrustItem label="GPS-Tracked Delivery" />
            <TrustItem label="No Junk Mail Compliance" />
            <TrustItem label="Flexible Campaign Sizes" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reach More Customers?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get in touch for a no-obligation quote on your next letterbox campaign.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-navy-light transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
      <div className="text-navy mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
      <div className="text-navy mb-2">
        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}
