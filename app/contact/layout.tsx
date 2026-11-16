import type { Metadata } from "next";
import { SITE_URL } from "../components/landing";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | Get a Letterbox Quote | South East Flyers" },
  description:
    "Get a free, no-obligation quote for a letterbox drop in Melbourne's south-east and east. Call 0402 824 070. We respond within 1 business day.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us | Get a Letterbox Quote | South East Flyers",
    description:
      "Get a free, no-obligation quote for a letterbox drop in Melbourne's south-east and east. Call 0402 824 070. We respond within 1 business day.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: "/og-logo.jpg", width: 1200, height: 630, alt: "South East Flyers & Marketing Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get a Letterbox Quote | South East Flyers",
    description:
      "Get a free, no-obligation quote for a letterbox drop in Melbourne's south-east and east. Call 0402 824 070. We respond within 1 business day.",
    images: ["/og-logo.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
