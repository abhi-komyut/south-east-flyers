import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Clients | Flyer Distribution Melbourne",
  description:
    "Trusted by Ray White, McGrath, Belle Property & more. Exclusive letterbox distribution and flyer drops across Melbourne's south-east and eastern suburbs, GPS-tracked.",
  alternates: {
    canonical: "https://www.southeastflyers.com.au/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
