"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/ray-white.jpeg", alt: "Ray White" },
  { src: "/logos/mcgrath.png", alt: "McGrath Real Estate" },
  { src: "/logos/marshall-white.png", alt: "Marshall White" },
  { src: "/logos/belle-property.png", alt: "Belle Property" },
  { src: "/logos/barry-plant.png", alt: "Barry Plant" },
  { src: "/logos/buxton.png", alt: "Buxton Real Estate" },
  { src: "/logos/harcourts-group.png", alt: "Harcourts Real Estate Group" },
  { src: "/logos/harcourts-international.svg", alt: "Harcourts International" },
  { src: "/logos/harcourts.svg", alt: "Harcourts" },
  { src: "/logos/high-dental.webp", alt: "High Dental" },
  { src: "/logos/storm-shield-roofing.webp", alt: "Storm Shield Roofing" },
];

export default function LogoSlider() {
  return (
    <section className="pt-16 pb-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Who we work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Trusted by leading brands across Australia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From healthcare to trades to real estate — we help local businesses reach the right letterboxes.
          </p>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="overflow-hidden mb-10">
        <div className="relative">
          <div className="flex animate-scroll w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-40"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
            <Image
              src="/client-dentist.png"
              alt="Healthcare professionals using letterbox marketing"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white font-semibold">Healthcare</p>
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
            <Image
              src="/client-roofer.png"
              alt="Trades and home services using letterbox marketing"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white font-semibold">Trades & Services</p>
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
            <Image
              src="/client-realestate.png"
              alt="Real estate agents using letterbox marketing"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white font-semibold">Real Estate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
