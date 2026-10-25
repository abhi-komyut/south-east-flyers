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
    default: "Flyer Distribution Melbourne | South East Flyers",
    template: "%s | South East Flyers",
  },
  description:
    "Flyer distribution in Melbourne's south-east and east: exclusive, GPS-tracked letterbox drops, never bundled. $200 per 1,000 flyers. Quote in 24 hours.",
  keywords: [
    "flyer distribution melbourne",
    "letterbox drops melbourne",
    "letterbox distribution melbourne",
    "leaflet distribution melbourne",
    "pamphlet distribution",
    "letterbox advertising",
    "letterbox marketing",
    "flyer delivery service",
    "catalogue distribution melbourne",
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
    title: "Flyer Distribution Melbourne | South East Flyers",
    description:
      "Exclusive, GPS-tracked flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Never bundled, from $200 per 1,000.",
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
    "Exclusive, GPS-tracked flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Never bundled.",
  email: "abhiram@southeastflyers.com.au",
  telephone: "+61402824070",
  sameAs: [
    "https://www.facebook.com/southeastflyers",
    "https://www.instagram.com/southeastflyers",
    "https://www.linkedin.com/company/southeastflyers",
  ],
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
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
