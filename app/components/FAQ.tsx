"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover the entire Melbourne metropolitan area, Sydney metropolitan area, and South East Melbourne suburbs. We can target specific suburbs based on your campaign needs and demographic data.",
  },
  {
    question: "What is the minimum order for a letterbox drop?",
    answer:
      "Our minimum order is 1,000 flyers per campaign. From there, we can scale up to 50,000+ for a metro-wide push and tailor a distribution plan that fits your budget.",
  },
  {
    question: "How does GPS tracking work?",
    answer:
      "Every distributor tracks their route via the Strava app in real time. After your campaign, you receive a detailed report showing the streets covered, number of letterboxes delivered to, and a map of the distribution route.",
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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our letterbox distribution services.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-black text-sm pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
