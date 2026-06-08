import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Flyer Distribution Quote Melbourne & Sydney",
  description:
    "Get a free quote for letterbox distribution and flyer drops in Melbourne & Sydney. GPS-tracked delivery, no junk mail compliant, 48hr turnaround available.",
  alternates: {
    canonical: "https://southeastflyers.com.au/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
