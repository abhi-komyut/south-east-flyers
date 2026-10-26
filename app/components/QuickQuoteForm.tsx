"use client";

import { useState } from "react";
import { trackEvent } from "../lib/gtag";

const WHATSAPP_NUMBER = "61402824070";

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const suburb = (form.elements.namedItem("suburb") as HTMLInputElement).value;
    const quantity = (form.elements.namedItem("quantity") as HTMLSelectElement).value;

    const lines = [
      "Hi South East Flyers, I'd like a free quote.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      suburb && `Target suburb(s): ${suburb}`,
      quantity && `Quantity: ${quantity}`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    trackEvent("form_submit", { form_name: "quick_quote" });
    trackEvent("generate_lead", { form_name: "quick_quote" });

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get a Free Quote in 24 Hours
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us about your campaign and we&apos;ll send you a detailed quote with pricing, coverage maps and a timeline, over WhatsApp. No obligation.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Minimum order of just 1,000 flyers
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free suburb-level targeting advice
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Detailed GPS tracking report included
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-semibold text-black mb-2">WhatsApp Opened</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;ve opened WhatsApp with your quote request filled in. Just hit send and we&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-sm text-navy underline underline-offset-2 hover:text-navy-light"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="quote-phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-suburb" className="block text-sm font-medium text-gray-700 mb-1">
                      Target Suburb(s)
                    </label>
                    <input
                      type="text"
                      id="quote-suburb"
                      name="suburb"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm"
                      placeholder="e.g. Richmond, South Yarra"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <select
                      id="quote-quantity"
                      name="quantity"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select quantity</option>
                      <option value="1000-5000">1,000 – 5,000</option>
                      <option value="5000-10000">5,000 – 10,000</option>
                      <option value="10000-20000">10,000 – 20,000</option>
                      <option value="20000+">20,000+</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-cta text-white font-semibold py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02] disabled:opacity-50"
                >
                  {sending ? "Opening WhatsApp..." : "Get My Free Quote via WhatsApp"}
                </button>
                <p className="text-xs text-gray-400 text-center">No spam. We&apos;ll only contact you about your quote.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
