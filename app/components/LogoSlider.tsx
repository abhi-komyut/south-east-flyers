"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/logos/ray-white.jpeg", alt: "Ray White" },
  { src: "/logos/mcgrath.png", alt: "McGrath Real Estate" },
  { src: "/logos/marshall-white.png", alt: "Marshall White" },
  { src: "/logos/belle-property.png", alt: "Belle Property" },
  { src: "/logos/barry-plant.png", alt: "Barry Plant" },
  { src: "/logos/buxton.png", alt: "Buxton Real Estate" },
  { src: "/logos/harcourts-group.png", alt: "Harcourts Real Estate Group" },
  { src: "/logos/harcourts.svg", alt: "Harcourts" },
  { src: "/logos/high-dental.webp", alt: "High Dental" },
  { src: "/logos/storm-shield-roofing.webp", alt: "Storm Shield Roofing" },
];

export default function LogoSlider() {
  return (
    <section className="bg-white border-t border-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-black font-display"
          >
            Trusted by leading brands across Melbourne
          </h2>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative mb-20">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex animate-scroll w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 flex items-center justify-center h-16 sm:h-20 md:h-24 w-36 sm:w-44 md:w-52"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={208}
                  height={96}
                  className="object-contain max-h-16 sm:max-h-20 md:max-h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-black font-semibold text-lg mb-8">
          Industries we serve
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <IndustryCard
            href="/industries/healthcare"
            src="/client-dentist.png"
            alt="Healthcare professionals using letterbox marketing"
            label="Healthcare"
          />
          <IndustryCard
            href="/industries/home-services"
            src="/client-roofer.png"
            alt="Trades and home services using letterbox marketing"
            label="Trades & Services"
          />
          <IndustryCard
            href="/industries/real-estate"
            src="/client-realestate.png"
            alt="Real estate agents using letterbox marketing"
            label="Real Estate"
          />
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ href, src, alt, label }: { href: string; src: string; alt: string; label: string }) {
  return (
    <Link href={href} className="relative block rounded-xl overflow-hidden aspect-[3/2] group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-semibold text-base sm:text-lg">{label}</p>
      </div>
    </Link>
  );
}
