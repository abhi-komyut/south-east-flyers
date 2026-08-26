import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flyer Distribution Melbourne & Sydney | Letterbox Drops | South East Flyers",
    template: "%s | South East Flyers & Marketing Solutions",
  },
  description:
    "Professional flyer distribution and letterbox drops across Melbourne & Sydney. GPS-tracked delivery, no junk mail compliant, large-scale daily distribution. Get a free quote today.",
  keywords: [
    "flyer distribution melbourne",
    "flyer distribution sydney",
    "letterbox drops melbourne",
    "letterbox drops sydney",
    "letterbox distribution melbourne",
    "letterbox distribution sydney",
    "leaflet distribution melbourne",
    "leaflet distribution sydney",
    "pamphlet distribution",
    "letterbox advertising",
    "letterbox marketing",
    "flyer delivery service",
    "catalogue distribution melbourne",
    "brochure distribution sydney",
    "GPS tracked flyer distribution",
    "no junk mail compliant distribution",
    "targeted letterbox distribution",
    "unaddressed mail distribution",
    "real estate flyer distribution",
    "letterbox drop service",
  ],
  metadataBase: new URL("https://www.southeastflyers.com.au"),
  alternates: {
    canonical: "https://www.southeastflyers.com.au",
  },
  openGraph: {
    title: "Flyer Distribution Melbourne & Sydney | South East Flyers",
    description:
      "Professional flyer distribution and letterbox drops across Melbourne & Sydney. GPS-tracked, no junk mail compliant. Large-scale daily distribution across both cities.",
    url: "https://www.southeastflyers.com.au",
    siteName: "South East Flyers & Marketing Solutions",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-logo.jpg",
        width: 1200,
        height: 630,
        alt: "South East Flyers & Marketing Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SITE_URL = "https://www.southeastflyers.com.au";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "South East Flyers & Marketing Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-logo.jpg`,
  description:
    "Flyer distribution and letterbox drops across Melbourne and Sydney. GPS-tracked delivery, no junk mail compliant.",
  email: "abhiram@southeastflyers.com.au",
  telephone: "+61402824070",
  areaServed: [
    { "@type": "City", name: "Melbourne", addressCountry: "AU" },
    { "@type": "City", name: "Sydney", addressCountry: "AU" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61402824070",
    email: "abhiram@southeastflyers.com.au",
    contactType: "sales",
    areaServed: "AU",
    availableLanguage: "English",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "South East Flyers & Marketing Solutions",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-AU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
