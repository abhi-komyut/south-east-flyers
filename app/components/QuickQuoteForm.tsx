"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../lib/gtag";

const WHATSAPP_NUMBER = "61402824070";

export default function QuickQuoteForm() {
  const [state, handleSubmit] = useForm("xzdqreda");
  const waUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      trackEvent("form_submit", { form_name: "quick_quote" });
      trackEvent("generate_lead", { form_name: "quick_quote" });
    }
  }, [state.succeeded]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    waUrlRef.current = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    handleSubmit(e);
  }

  function sendOnWhatsApp() {
    if (!waUrlRef.current) return;
    trackEvent("whatsapp_followup", { form_name: "quick_quote" });
    window.open(waUrlRef.current, "_blank", "noopener,noreferrer");
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
              Tell us about your campaign and we&apos;ll send you a detailed quote with pricing, coverage maps and a timeline. No obligation.
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
            {state.succeeded ? (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-semibold text-black mb-2">Quote Request Received</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We&apos;ll get back to you within 24 hours with a detailed quote.
                </p>
                <button
                  onClick={sendOnWhatsApp}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy border border-navy rounded px-4 py-2 hover:bg-navy hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.27-1.38a9.93 9.93 0 004.77 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.84 14.17c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a16.9 16.9 0 01-1.65-.61c-2.91-1.26-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.25.6.83 2.07.9 2.22.07.15.12.33.02.52-.1.19-.15.3-.3.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.42 1.48.32.15.5.13.7-.08.2-.2.8-.93 1.01-1.26.21-.32.42-.27.7-.16.28.1 1.79.84 2.1 1 .31.15.51.23.59.36.08.13.08.74-.17 1.44z" />
                  </svg>
                  Also send on WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
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
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-xs mt-1" />
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
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-xs mt-1" />
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
                <input type="hidden" name="_subject" value="Quick Quote Request from Website" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-cta text-white font-semibold py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02] disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Get My Free Quote"}
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
