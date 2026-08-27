import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover the Melbourne metropolitan area, the Sydney metropolitan area, and the South East Melbourne suburbs. We can target specific suburbs based on your campaign needs — see our Melbourne page for the full confirmed service area.",
  },
  {
    question: "What is the minimum order for a letterbox drop?",
    answer:
      "Our minimum order is 1,000 flyers per campaign. From there, we can scale up to 50,000+ for a metro-wide push and tailor a distribution plan that fits your budget.",
  },
  {
    question: "How does GPS tracking work?",
    answer:
      "Every distributor tracks their route via the Strava app in real time. After your campaign, you receive a report showing the streets covered and a map of the distribution route.",
  },
  {
    question: "What does 'no junk mail compliant' mean?",
    answer:
      "We skip every letterbox that displays a 'No Junk Mail' or 'No Advertising Material' sign. This protects your brand reputation and ensures your flyers reach receptive households only.",
  },
  {
    question: "How quickly can you start a campaign?",
    answer:
      "We offer a 48-hour turnaround for urgent campaigns. For standard campaigns, we typically begin distribution within 3–5 business days of receiving your flyers.",
  },
  {
    question: "Do you bundle flyers with other material?",
    answer:
      "No. We have a strict anti-bundling policy. Your flyers are delivered individually so they get maximum attention in each letterbox — never mixed in with other advertising.",
  },
  {
    question: "Do you print the flyers as well?",
    answer:
      "No — we're a distribution specialist, not a printer. You provide the printed flyers and we handle getting them into the right letterboxes across Melbourne and Sydney.",
  },
];

export default function FAQ() {
  return (
    <FAQSection
      items={faqs}
      subtitle="Everything you need to know about our letterbox distribution services."
    />
  );
}
