"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="South East Flyers and Marketing Solutions"
              width={540}
              height={144}
              className="h-30 w-auto invert"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Home
            </Link>
            <Link href="/portfolio" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Our Clients
            </Link>
            <Link href="/contact" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 hover:scale-[1.02]">
              Contact
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
            <Link href="/" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/portfolio" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Our Clients
            </Link>
            <Link href="/contact" className="font-bold italic text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
