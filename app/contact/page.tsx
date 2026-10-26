"use client";

import { useState } from "react";
import { trackEvent } from "../lib/gtag";

const WHATSAPP_NUMBER = "61402824070";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const lines = [
      "Hi South East Flyers, I'd like to enquire about a letterbox campaign.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      company && `Company: ${company}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    trackEvent("form_submit", { form_name: "contact" });
    trackEvent("generate_lead", { form_name: "contact" });

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote on your next letterbox campaign.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-black mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you need a one-off campaign or ongoing distribution, we&apos;re here to help plan your next letterbox drop.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Phone</p>
                    <a href="tel:+61402824070" className="text-sm text-gray-600 hover:text-navy transition-colors">
                      0402 824 070
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.27-1.38a9.93 9.93 0 004.77 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.84 14.17c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a16.9 16.9 0 01-1.65-.61c-2.91-1.26-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.25.6.83 2.07.9 2.22.07.15.12.33.02.52-.1.19-.15.3-.3.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.42 1.48.32.15.5.13.7-.08.2-.2.8-.93 1.01-1.26.21-.32.42-.27.7-.16.28.1 1.79.84 2.1 1 .31.15.51.23.59.36.08.13.08.74-.17 1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-navy transition-colors"
                    >
                      Message us directly
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Service Areas</p>
                    <p className="text-sm text-gray-600">Melbourne&rsquo;s South-East &amp; Eastern Suburbs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Response Time</p>
                    <p className="text-sm text-gray-600">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Prefer to call? We&apos;re available Monday to Friday, 8am – 6pm AEST.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 className="text-xl font-semibold text-black mb-2">WhatsApp Opened</h2>
                    <p className="text-gray-600">
                      We&apos;ve opened WhatsApp with your enquiry filled in. Just hit send and we&apos;ll reply within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm text-navy underline underline-offset-2 hover:text-navy-light"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded px-4 py-3">
                      Fill this in and we&apos;ll open WhatsApp with your enquiry ready to send, no email needed.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-y"
                        placeholder="Tell us about your campaign: target suburbs, quantity, timing..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-cta text-white font-semibold py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02] disabled:opacity-50"
                    >
                      {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
