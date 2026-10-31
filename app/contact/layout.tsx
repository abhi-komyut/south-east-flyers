import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Flyer Distribution Quote",
  description:
    "Get a free flyer distribution quote within 24 hours. Exclusive, GPS-tracked letterbox drops across Melbourne's south-east and east. Call 0402 824 070.",
  alternates: {
    canonical: "https://www.southeastflyers.com.au/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
