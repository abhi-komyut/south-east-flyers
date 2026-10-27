import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Clients in Melbourne",
  description:
    "Trusted by Ray White, McGrath, Belle Property and more. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and eastern suburbs.",
  alternates: {
    canonical: "https://www.southeastflyers.com.au/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
