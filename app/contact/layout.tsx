import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Flyer Distribution Quote Melbourne",
  description:
    "Get a free quote for letterbox distribution and flyer drops in Melbourne's south-east and eastern suburbs. GPS-tracked, exclusive delivery, 48hr turnaround available.",
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
