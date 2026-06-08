"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <p className="hidden sm:block text-gray-300">
            Professional letterbox distribution — Melbourne &amp; Sydney
          </p>
          <div className="flex items-center gap-5 ml-auto">
            <a
              href="mailto:abhiram@southeastflyers.com.au"
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              abhiram@southeastflyers.com.au
            </a>
            <a
              href="tel:+61402824070"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-gray-300 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0402 824 070
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="South East Flyers and Marketing Solutions"
                width={540}
                height={144}
                className="h-10 sm:h-14 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/portfolio">Our Clients</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <div className="ml-3 flex items-center gap-2">
                <a
                  href="tel:+61402824070"
                  className="flex items-center gap-1.5 text-navy font-semibold text-sm px-4 py-2 rounded border border-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <Link
                  href="/contact"
                  className="bg-cta text-white font-semibold text-sm px-5 py-2 rounded hover:bg-cta-hover transition-all duration-200 hover:scale-[1.02]"
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>

            <button
              className="lg:hidden text-gray-700 p-3 -mr-3 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
              <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/portfolio" onClick={() => setMobileOpen(false)}>Our Clients</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="bg-cta text-white font-semibold rounded px-4 py-3 text-center text-base transition-all duration-200 hover:bg-cta-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+61402824070"
                  className="flex items-center justify-center gap-2 text-navy font-semibold border border-navy rounded px-4 py-3 text-base transition-all duration-200 hover:bg-navy hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 0402 824 070
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 font-medium text-sm px-3 py-2 rounded hover:text-navy hover:bg-gray-50 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-gray-700 font-medium text-base px-3 py-3 rounded hover:bg-gray-50 hover:text-navy transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
