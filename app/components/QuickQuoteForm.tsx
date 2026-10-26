"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { trackEvent } from "../lib/gtag";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "61402824070";

export default function QuickQuoteForm({
  heading = "$200 per 1,000 flyers. A quote back within 24 hours.",
  lead = "Tell us where and how many. We'll send pricing, a coverage map and a timeline. No obligation.",
  suburbHint = "e.g. Brighton, Hampton, Sandringham",
}: {
  heading?: string;
  lead?: string;
  suburbHint?: string;
}) {
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
    <section id="quote" aria-labelledby="quote-title" className="bg-navy text-white py-[clamp(80px,9vw,120px)] px-[clamp(20px,4vw,48px)]">
      <div className="max-w-[1144px] mx-auto flex flex-wrap gap-14 gap-x-[88px] items-center">
        <Reveal className="flex-[1_1_400px] flex flex-col gap-6">
          <h2 id="quote-title" className="m-0 font-display font-medium text-[clamp(36px,4vw,56px)] leading-[1.08] tracking-[-0.015em]">
            {heading}
          </h2>
          <p className="m-0 text-[17px] leading-[1.7] text-white/85 max-w-[460px]">{lead}</p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {["Minimum order of just 1,000 flyers", "Free suburb-level targeting advice", "GPS tracking report included"].map((item) => (
              <li key={item} className="flex gap-3 items-center text-base">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cta-on-dark shrink-0" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="m-0 mt-2 text-sm text-white/85">
            Prefer to talk?{" "}
            <a href="tel:0402824070" className="text-white font-heading font-semibold [font-variant-numeric:tabular-nums]">0402 824 070</a>{" "}
            or <a href="https://wa.me/61402824070" target="_blank" rel="noopener noreferrer" className="text-white font-heading font-semibold">WhatsApp us</a>
          </p>
        </Reveal>

        <Reveal delay={100} className="flex-[1_1_420px] bg-white text-ink rounded-card p-7 sm:p-11 shadow-[0_30px_60px_-32px_rgba(2,30,30,0.6)]">
          {state.succeeded ? (
            <div className="text-center py-7 flex flex-col items-center gap-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-navy" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="m-0 font-heading font-semibold text-lg mb-1.5">Quote request received</h3>
                <p className="m-0 text-sm text-muted">We&rsquo;ll get back to you within 24 hours with a detailed quote.</p>
              </div>
              <button
                type="button"
                onClick={sendOnWhatsApp}
                className="press inline-flex items-center gap-2 text-sm font-heading font-semibold text-navy border border-navy rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.27-1.38a9.93 9.93 0 004.77 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.84 14.17c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a16.9 16.9 0 01-1.65-.61c-2.91-1.26-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.25.6.83 2.07.9 2.22.07.15.12.33.02.52-.1.19-.15.3-.3.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.42 1.48.32.15.5.13.7-.08.2-.2.8-.93 1.01-1.26.21-.32.42-.27.7-.16.28.1 1.79.84 2.1 1 .31.15.51.23.59.36.08.13.08.74-.17 1.44z" />
                </svg>
                Also send on WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-5">
                <div className="flex-[1_1_200px] flex flex-col gap-2">
                  <label htmlFor="quote-name" className="font-heading text-sm font-semibold">
                    Name <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-required text-xs" />
                </div>
                <div className="flex-[1_1_200px] flex flex-col gap-2">
                  <label htmlFor="quote-phone" className="font-heading text-sm font-semibold">
                    Phone <span className="text-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-required text-xs" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-suburb" className="font-heading text-sm font-semibold">
                  Target suburb(s)
                </label>
                <input
                  type="text"
                  id="quote-suburb"
                  name="suburb"
                  placeholder={suburbHint}
                  className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-quantity" className="font-heading text-sm font-semibold">
                  Quantity
                </label>
                <select
                  id="quote-quantity"
                  name="quantity"
                  className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                >
                  <option value="">Select quantity</option>
                  <option value="1000-5000">1,000 to 5,000</option>
                  <option value="5000-10000">5,000 to 10,000</option>
                  <option value="10000-20000">10,000 to 20,000</option>
                  <option value="20000+">20,000+</option>
                </select>
              </div>
              <input type="hidden" name="_subject" value="Quick Quote Request from Website" />
              <button
                type="submit"
                disabled={state.submitting}
                className="press min-h-[54px] rounded-full bg-cta text-ink font-heading font-bold text-base hover:bg-cta-hover transition-colors disabled:opacity-50 mt-1"
              >
                {state.submitting ? "Sending..." : "Get a free quote"}
              </button>
              <p className="m-0 text-[13px] leading-snug text-muted text-center">No spam. We&rsquo;ll only contact you about your quote.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
