import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Clients include Ray White, McGrath and Belle Property. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and east.",
  alternates: {
    canonical: "https://www.southeastflyers.com.au/portfolio",
  },
  openGraph: {
    title: "Our Clients | South East Flyers",
    description:
      "Clients include Ray White, McGrath and Belle Property. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and east.",
    url: "https://www.southeastflyers.com.au/portfolio",
    type: "website",
    images: [{ url: "/og-logo.jpg", width: 1200, height: 630, alt: "South East Flyers & Marketing Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | South East Flyers",
    description:
      "Clients include Ray White, McGrath and Belle Property. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and east.",
    images: ["/og-logo.jpg"],
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
