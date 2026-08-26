import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Clients | Flyer Distribution Melbourne & Sydney",
  description:
    "Trusted by Ray White, McGrath, Belle Property & more. Professional letterbox distribution and flyer drops across Melbourne & Sydney. High-volume daily distribution with GPS tracking.",
  alternates: {
    canonical: "https://www.southeastflyers.com.au/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
