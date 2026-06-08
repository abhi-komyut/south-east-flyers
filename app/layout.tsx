import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    "Professional flyer distribution and letterbox drops across Melbourne & Sydney. GPS-tracked delivery, no junk mail compliant, 20,000+ flyers daily. Get a free quote today.",
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
  metadataBase: new URL("https://southeastflyers.com.au"),
  alternates: {
    canonical: "https://southeastflyers.com.au",
  },
  openGraph: {
    title: "Flyer Distribution Melbourne & Sydney | South East Flyers",
    description:
      "Professional flyer distribution and letterbox drops across Melbourne & Sydney. GPS-tracked, no junk mail compliant. 20,000+ flyers delivered daily.",
    url: "https://southeastflyers.com.au",
    siteName: "South East Flyers & Marketing Solutions",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
