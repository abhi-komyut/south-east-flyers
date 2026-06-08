"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzdqreda");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-gray-600">
              Get in touch for a free, no-obligation quote on your next letterbox campaign.
            </p>
          </div>

          {state.succeeded ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-xl font-semibold text-black mb-2">Message Sent</h2>
              <p className="text-gray-600">
                Thank you for your enquiry. We&apos;ll be in touch within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
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
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
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
                <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-600 text-sm mt-1" />
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
                  placeholder="Tell us about your campaign requirements..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>

              {state.errors && (
                <ValidationError errors={state.errors} className="text-red-600 text-sm" />
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-navy text-white font-semibold py-3 rounded hover:bg-navy-light transition-colors disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
