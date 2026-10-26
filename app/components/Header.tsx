"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const serviceLinks = [
  { href: "/services/flyer-distribution", label: "Flyer Distribution" },
  { href: "/services/letterbox-distribution", label: "Letterbox Distribution" },
  { href: "/services/targeted-flyer-distribution", label: "Targeted Flyer Distribution" },
  { href: "/services/gps-tracked-flyer-distribution", label: "GPS-Tracked Distribution" },
];

const industryLinks = [
  { href: "/industries/real-estate", label: "Real Estate" },
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/home-services", label: "Home Services" },
  { href: "/industries/plumbers", label: "Plumbers" },
  { href: "/industries/local-businesses", label: "Local Businesses" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <p className="hidden sm:block text-white/80">
            Exclusive letterbox distribution across Melbourne&rsquo;s south-east
          </p>
          <div className="flex items-center gap-5 ml-auto">
            <a
              href="https://wa.me/61402824070"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.27-1.38a9.93 9.93 0 004.77 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.84 14.17c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a16.9 16.9 0 01-1.65-.61c-2.91-1.26-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.25.6.83 2.07.9 2.22.07.15.12.33.02.52-.1.19-.15.3-.3.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.42 1.48.32.15.5.13.7-.08.2-.2.8-.93 1.01-1.26.21-.32.42-.27.7-.16.28.1 1.79.84 2.1 1 .31.15.51.23.59.36.08.13.08.74-.17 1.44z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+61402824070"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-white/80 transition-colors"
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

            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink href="/">Home</NavLink>
              <NavDropdown label="Services" items={serviceLinks} />
              <NavLink href="/melbourne/flyer-distribution-melbourne">Melbourne</NavLink>
              <NavDropdown label="Industries" labelHref="/industries" items={industryLinks} />
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
                  data-quote-cta
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
          <div className="lg:hidden border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
              <MobileNavLink href="/" onClick={closeMobile}>Home</MobileNavLink>

              <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Services</p>
              {serviceLinks.map((l) => (
                <MobileNavLink key={l.href} href={l.href} onClick={closeMobile} indent>
                  {l.label}
                </MobileNavLink>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Locations</p>
              <MobileNavLink href="/melbourne/flyer-distribution-melbourne" onClick={closeMobile} indent>
                Flyer Distribution Melbourne
              </MobileNavLink>

              <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Industries</p>
              <MobileNavLink href="/industries" onClick={closeMobile} indent>All Industries</MobileNavLink>
              {industryLinks.map((l) => (
                <MobileNavLink key={l.href} href={l.href} onClick={closeMobile} indent>
                  {l.label}
                </MobileNavLink>
              ))}

              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-1">
                <MobileNavLink href="/portfolio" onClick={closeMobile}>Our Clients</MobileNavLink>
                <MobileNavLink href="/blog" onClick={closeMobile}>Blog</MobileNavLink>
                <MobileNavLink href="/contact" onClick={closeMobile}>Contact</MobileNavLink>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  href="/contact"
                  data-quote-cta
                  className="bg-cta text-white font-semibold rounded px-4 py-3 text-center text-base transition-all duration-200 hover:bg-cta-hover"
                  onClick={closeMobile}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+61402824070"
                  className="flex items-center justify-center gap-2 text-navy font-semibold border border-navy rounded px-4 py-3 text-base transition-all duration-200 hover:bg-navy hover:text-white"
                  onClick={closeMobile}
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

function NavDropdown({
  label,
  labelHref,
  items,
}: {
  label: string;
  labelHref?: string;
  items: { href: string; label: string }[];
}) {
  const triggerClass =
    "flex items-center gap-1 text-gray-600 font-medium text-sm px-3 py-2 rounded hover:text-navy hover:bg-gray-50 transition-all duration-200";
  const chevron = (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="relative group">
      {labelHref ? (
        <Link href={labelHref} className={triggerClass}>
          {label}
          {chevron}
        </Link>
      ) : (
        <button type="button" className={triggerClass} aria-haspopup="true">
          {label}
          {chevron}
        </button>
      )}
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[240px]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  indent,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-gray-700 font-medium text-base py-3 rounded hover:bg-gray-50 hover:text-navy transition-colors ${
        indent ? "pl-6 pr-3 text-sm" : "px-3"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
