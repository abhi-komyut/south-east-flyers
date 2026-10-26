"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/services/flyer-distribution", label: "Services" },
  { href: "/melbourne/flyer-distribution-melbourne", label: "Suburbs" },
  { href: "/industries", label: "Industries" },
  { href: "/letterbox-drop-cost", label: "Pricing" },
  { href: "/portfolio", label: "Our clients" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-white border-b border-line font-sans text-ink">
      <div className="max-w-[1240px] mx-auto flex items-center gap-7 min-h-[76px] px-[clamp(20px,4vw,48px)] py-3.5">
        <Link href="/" aria-label="South East Flyers home" className="flex items-center shrink-0">
          <Image
            src="/images/redesign/sef-logo.png"
            alt="South East Flyers and Marketing Solutions"
            width={168}
            height={42}
            className="h-[42px] w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="lg:flex hidden items-center gap-6 font-heading text-sm font-semibold ml-3">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink no-underline hover:text-navy transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="tel:0402824070"
            className="hidden lg:flex items-center gap-2 text-ink no-underline font-heading font-semibold text-sm [font-variant-numeric:tabular-nums] hover:text-navy transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            0402 824 070
          </a>
          <Link
            href="/contact"
            data-quote-cta
            className="press inline-flex items-center min-h-11 px-[22px] rounded-full bg-cta text-ink no-underline font-heading font-bold text-sm whitespace-nowrap hover:bg-cta-hover transition-colors"
          >
            Get a free quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Menu"}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-field-border bg-white text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-panel lg:hidden border-t border-line ${open ? "is-open" : ""}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav id="mobile-nav" aria-label="Main" className="flex flex-col font-heading text-[17px] font-semibold px-[clamp(20px,4vw,48px)] pt-2 pb-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink no-underline py-3 min-h-11">
                {l.label}
              </Link>
            ))}
            <a href="tel:0402824070" onClick={() => setOpen(false)} className="text-navy no-underline py-3 min-h-11 [font-variant-numeric:tabular-nums]">
              Call 0402 824 070
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
