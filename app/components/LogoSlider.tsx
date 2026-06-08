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
    <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
          Trusted by leading brands across Australia
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
    </section>
  );
}
