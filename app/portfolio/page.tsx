import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Clients | Flyer Distribution Melbourne & Sydney",
  description:
    "Trusted by Ray White, McGrath, Belle Property & more. Professional letterbox distribution and flyer drops across Melbourne & Sydney. 20,000+ flyers delivered daily with GPS tracking.",
  alternates: {
    canonical: "https://southeastflyers.com.au/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
