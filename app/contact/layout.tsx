import type { Metadata } from "next";
import { buildMeta } from "../components/landing";

export const metadata: Metadata = buildMeta({
  title: "Contact Us | Get a Letterbox Quote | South East Flyers",
  description:
    "Get a free, no-obligation quote for a letterbox drop in Melbourne's south-east and east. Call 0402 824 070. We respond within 1 business day.",
  path: "/contact",
  absoluteTitle: true,
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
