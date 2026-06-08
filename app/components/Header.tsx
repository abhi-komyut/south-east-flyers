"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-9 gap-4">
          <a
            href="mailto:abhiram@southeastflyers.com.au"
            className="hidden sm:flex items-center gap-1.5 hover:text-gray-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            abhiram@southeastflyers.com.au
          </a>
          <a
            href="tel:+61402824070"
            className="flex items-center gap-1.5 hover:text-gray-300 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0402 824 070
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="South East Flyers and Marketing Solutions"
              width={540}
              height={144}
              className="h-30 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            <Link href="/" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Home
            </Link>
            <Link href="/portfolio" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Our Clients
            </Link>
            <Link href="/blog" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Blog
            </Link>
            <Link href="/contact" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Contact
            </Link>
            <Link
              href="/contact"
              className="font-bold bg-cta text-white rounded px-5 py-2 hover:bg-cta-hover transition-all duration-200 hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/portfolio" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Our Clients
            </Link>
            <Link href="/blog" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="font-bold text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link href="/contact" className="font-bold bg-cta text-white rounded px-4 py-2 text-center transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Link>
            <a href="tel:+61402824070" className="font-bold text-navy border border-navy rounded px-4 py-2 text-center transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Call 0402 824 070
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
