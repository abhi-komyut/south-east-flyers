"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "real-estate" | "healthcare" | "trades";

const CLIENTS: { name: string; src: string; height: number; category: Category }[] = [
  { name: "Marshall White", src: "/images/redesign/logo-marshallwhite.png", height: 20, category: "real-estate" },
  { name: "McGrath Real Estate", src: "/images/redesign/logo-mcgrath.png", height: 30, category: "real-estate" },
  { name: "Belle Property", src: "/images/redesign/logo-belle.png", height: 64, category: "real-estate" },
  { name: "Barry Plant", src: "/images/redesign/logo-barryplant.png", height: 20, category: "real-estate" },
  { name: "Buxton Real Estate", src: "/images/redesign/logo-buxton.png", height: 32, category: "real-estate" },
  { name: "High Dental", src: "/images/redesign/logo-highdental.png", height: 60, category: "healthcare" },
  { name: "Storm Shield Roofing", src: "/images/redesign/logo-stormshield.png", height: 60, category: "trades" },
];

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "real-estate", label: "Real estate" },
  { key: "healthcare", label: "Healthcare" },
  { key: "trades", label: "Trades" },
];

export default function ClientFilter({ heading }: { heading: string }) {
  const [filter, setFilter] = useState<Category>("all");
  const shown = filter === "all" ? CLIENTS : CLIENTS.filter((c) => c.category === filter);

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <h2 className="m-0 font-display font-medium text-[clamp(30px,3vw,40px)] leading-[1.1]">{heading}</h2>
        <div role="group" aria-label="Filter by industry" className="flex flex-wrap gap-2.5">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setFilter(t.key)}
              aria-pressed={filter === t.key}
              className={`press min-h-11 px-[18px] rounded-full font-heading font-semibold text-sm border transition-colors ${
                filter === t.key ? "bg-navy text-white border-navy" : "bg-white text-ink border-field-border hover:border-navy"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="list-none m-0 p-0 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {shown.map((c) => (
          <li key={c.name} className="bg-white rounded-card h-[168px] flex flex-col items-center justify-center gap-[18px] p-6">
            <Image src={c.src} alt={c.name} width={160} height={c.height} style={{ height: c.height, width: "auto", maxWidth: "80%", opacity: 0.88 }} />
            <span className="font-heading text-[13px] font-medium text-muted">{c.name}</span>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="text-center text-muted py-12">No clients in this category yet.</p>}
    </div>
  );
}
