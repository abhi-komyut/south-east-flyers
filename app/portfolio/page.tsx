import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Clients | Flyer Distribution Melbourne & Sydney",
  description:
    "Trusted by Ray White, McGrath, Belle Property & more. Professional letterbox distribution and flyer drops across Melbourne & Sydney. 20,000+ flyers delivered daily with GPS tracking.",
  alternates: {
    canonical: "https://southeastflyers.com.au/portfolio",
  },
};

const clients = [
  { src: "/logos/ray-white.jpeg", name: "Ray White" },
  { src: "/logos/mcgrath.png", name: "McGrath Real Estate" },
  { src: "/logos/marshall-white.png", name: "Marshall White" },
  { src: "/logos/belle-property.png", name: "Belle Property" },
  { src: "/logos/barry-plant.png", name: "Barry Plant" },
  { src: "/logos/buxton.png", name: "Buxton Real Estate" },
  { src: "/logos/harcourts-group.png", name: "Harcourts Real Estate Group" },
  { src: "/logos/harcourts-international.svg", name: "Harcourts International" },
  { src: "/logos/harcourts.svg", name: "Harcourts" },
  { src: "/logos/high-dental.webp", name: "High Dental" },
  { src: "/logos/storm-shield-roofing.webp", name: "Storm Shield Roofing" },
];

const commitments = [
  {
    title: "20,000+ Flyers Per Day",
    description:
      "We distribute nearly 20,000 flyers every day across Melbourne and Sydney, ensuring your campaign reaches a wide audience on schedule.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "No Junk Mail Compliance",
    description:
      "We respect every \"No Junk Mail\" sign. Our walkers are trained to check each letterbox, keeping your brand compliant and reputable.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Strict Anti-Bundling Policy",
    description:
      "Your flyer is never bundled with competing ads. We enforce strict limits on the number of materials delivered together, so your message stands out — not gets buried.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We&apos;re proud to work with some of Australia&apos;s most recognised brands,
            delivering nearly 20,000 flyers every day across Melbourne and Sydney.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center h-28 hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We set the standard for professional letterbox distribution in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-navy mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Client List</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get in touch to find out how we can deliver your next campaign with precision and professionalism.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
