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
  title: "South East Flyers & Marketing Solutions | Melbourne & Sydney Letterbox Drops",
  description:
    "Professional letterbox drop and distribution services across Melbourne and Sydney. Targeted marketing solutions for Australian businesses.",
  metadataBase: new URL("https://southeastflyers.com.au"),
  openGraph: {
    title: "South East Flyers & Marketing Solutions",
    description:
      "Professional letterbox drop and distribution services across Melbourne and Sydney.",
    url: "https://southeastflyers.com.au",
    siteName: "South East Flyers & Marketing Solutions",
    locale: "en_AU",
    type: "website",
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
