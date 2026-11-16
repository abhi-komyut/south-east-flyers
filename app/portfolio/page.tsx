import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { buildMeta } from "../components/landing";

export const metadata: Metadata = buildMeta({
  title: "Our Clients",
  description:
    "Clients include Ray White, McGrath and Belle Property. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and east.",
  path: "/portfolio",
});

export default function Portfolio() {
  return <PortfolioContent />;
}
