"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CountUp from "../components/CountUp";

type Category = "all" | "real-estate" | "healthcare" | "trades";

const clients: { src: string; name: string; category: Category }[] = [
  { src: "/logos/ray-white.jpeg", name: "Ray White", category: "real-estate" },
  { src: "/logos/mcgrath.png", name: "McGrath Real Estate", category: "real-estate" },
  { src: "/logos/marshall-white.png", name: "Marshall White", category: "real-estate" },
  { src: "/logos/belle-property.png", name: "Belle Property", category: "real-estate" },
  { src: "/logos/barry-plant.png", name: "Barry Plant", category: "real-estate" },
  { src: "/logos/buxton.png", name: "Buxton Real Estate", category: "real-estate" },
  { src: "/logos/harcourts-group.png", name: "Harcourts Real Estate Group", category: "real-estate" },
  { src: "/logos/harcourts-international.svg", name: "Harcourts International", category: "real-estate" },
  { src: "/logos/harcourts.svg", name: "Harcourts", category: "real-estate" },
  { src: "/logos/high-dental.webp", name: "High Dental", category: "healthcare" },
  { src: "/logos/storm-shield-roofing.webp", name: "Storm Shield Roofing", category: "trades" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "real-estate", label: "Real Estate" },
  { key: "healthcare", label: "Healthcare" },
  { key: "trades", label: "Trades" },
];

const steps = [
  {
    number: "01",
    title: "Get a Quote",
    description: "Tell us your target suburbs, quantity, and timeline. We'll send a detailed quote within 24 hours.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Distribute",
    description: "Our trained walkers and e-bike riders deliver your flyers street-by-street, tracked live via Strava.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Your Report",
    description: "Receive a detailed GPS report showing every street covered, with route maps and delivery proof.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const commitments = [
  {
    title: "20,000+ Flyers Per Day",
    description:
      "We distribute nearly 20,000 flyers every day across Melbourne and Sydney, ensuring your campaign reaches a wide audience on schedule.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "No Junk Mail Compliance",
    description:
      "We respect every \"No Junk Mail\" sign. Our walkers are trained to check each letterbox, keeping your brand compliant and reputable.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Strict Anti-Bundling Policy",
    description:
      "Your flyer is never bundled with competing ads. We enforce strict limits so your message stands out — not gets buried.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function PortfolioContent() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? clients : clients.filter((c) => c.category === filter);

  return (
    <>
      {/* Hero with stats */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg mb-10">
            We&apos;re proud to work with some of Australia&apos;s most recognised brands,
            delivering nearly 20,000 flyers every day across Melbourne and Sydney.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto">
            <div>
              <p className="text-2xl sm:text-3xl font-bold"><CountUp end={200} suffix="+" /></p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold"><CountUp end={20} suffix="K+" /></p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Flyers Daily</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold"><CountUp end={10} suffix="+" /></p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos with Filter Tabs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              Trusted by 200+ businesses
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === cat.key
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((client, index) => (
              <div
                key={client.name}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 h-28 sm:h-32 md:h-36 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-10 sm:max-h-14"
                />
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium text-center">{client.name}</p>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">No clients in this category yet.</p>
          )}
        </div>
      </section>

      {/* How It Works — 3-step process */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Three simple steps from quote to campaign report.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200" />

            {steps.map((step, index) => (
              <FadeInSection key={step.number} className={`${index > 0 ? "md:delay-200" : ""}`}>
                <div className="relative text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-5 relative z-10">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
                Our Commitment to Quality
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                We set the standard for professional letterbox distribution in Australia.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            {commitments.map((item, index) => (
              <FadeInSection key={index}>
                <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join Our Growing Client List</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch to find out how we can deliver your next campaign with precision and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-cta text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02] text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+61402824070"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-white/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0402 824 070
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
