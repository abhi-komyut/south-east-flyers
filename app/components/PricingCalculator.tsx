"use client";

import { useState } from "react";

const QUANTITIES = [1000, 2500, 5000, 10000, 20000];
const GOOD_FOR = [
  "A test run, or the streets around one listing or shop",
  "A tight radius around your business",
  "Half of a typical suburb",
  "A whole suburb the size of Brighton",
  "Two or three neighbouring suburbs",
];

export default function PricingCalculator() {
  const [index, setIndex] = useState(2);

  return (
    <div className="bg-white text-ink rounded-card p-7 sm:p-10 flex flex-col gap-[22px] shadow-[0_30px_60px_-32px_rgba(2,30,30,0.7)]">
      <p id="calc-label" className="m-0 font-heading font-semibold text-[15px]">
        How many flyers?
      </p>
      <div role="group" aria-labelledby="calc-label" className="flex flex-wrap gap-2.5">
        {QUANTITIES.map((n, i) => (
          <button
            key={n}
            type="button"
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            className={`press min-h-11 px-[18px] rounded-full font-heading font-semibold text-sm [font-variant-numeric:tabular-nums] border transition-colors ${
              i === index ? "bg-navy text-white border-navy" : "bg-white text-ink border-field-border hover:border-navy"
            }`}
          >
            {n.toLocaleString("en-AU")}
          </button>
        ))}
      </div>
      <div className="pt-[22px] border-t border-line flex flex-col gap-1.5">
        <p className="m-0 text-sm text-muted">That&rsquo;s roughly</p>
        <p aria-live="polite" className="m-0 font-display font-medium text-[28px] sm:text-[32px] leading-tight text-navy">
          {GOOD_FOR[index]}
        </p>
      </div>
      <p className="m-0 text-[13px] leading-snug text-muted">Exclusive delivery, GPS-tracked. Tell us your quantity for a free, no-obligation quote.</p>
    </div>
  );
}
