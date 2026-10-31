"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { trackEvent } from "../lib/gtag";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "61402824070";

export default function QuickQuoteForm({
  heading = "Get a quote with a quick turnaround.",
  lead = "Tell us where and how many. We'll send pricing, a coverage map and a timeline. No obligation.",
  suburbHint = "e.g. Brighton, Hampton, Sandringham",
}: {
  heading?: string;
  lead?: string;
  suburbHint?: string;
}) {
  const [state, handleSubmit] = useForm("xzdqreda");

  useEffect(() => {
    if (state.succeeded) {
      trackEvent("form_submit", { form_name: "quick_quote" });
      trackEvent("generate_lead", { form_name: "quick_quote" });
    }
  }, [state.succeeded]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const flyers = (form.elements.namedItem("flyers") as HTMLInputElement).value;
    const suburb = (form.elements.namedItem("suburb") as HTMLInputElement).value;

    const lines = [
      "Hi South East Flyers, I'd like a free quote.",
      `Name: ${name}`,
      `Contact: ${contact}`,
      company && `Company: ${company}`,
      flyers && `Number of flyers: ${flyers}`,
      suburb && `Suburb: ${suburb}`,
    ].filter(Boolean);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    // Open WhatsApp immediately, inside the direct click handler, so the
    // browser doesn't treat it as a blocked popup (that only works while
    // still synchronous with the user gesture — do this before any await).
    window.open(waUrl, "_blank", "noopener,noreferrer");
    trackEvent("whatsapp_followup", { form_name: "quick_quote" });

    fetch("/api/lead-sheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, contact, company, flyers, suburb }),
    }).catch(() => {});

    handleSubmit(e);
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
            {["Coverage across 40+ suburbs", "High-conversion letterbox marketing", "Helps you acquire new customers"].map((item) => (
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
                <p className="m-0 text-sm text-muted">
                  We&rsquo;ve opened WhatsApp for you and we&rsquo;ll get back to you with a quick turnaround on a detailed quote.
                </p>
              </div>
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
                  <label htmlFor="quote-contact" className="font-heading text-sm font-semibold">
                    Contact <span className="text-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="quote-contact"
                    name="contact"
                    required
                    autoComplete="tel"
                    placeholder="Phone number"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                  <ValidationError prefix="Contact" field="contact" errors={state.errors} className="text-required text-xs" />
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="flex-[1_1_200px] flex flex-col gap-2">
                  <label htmlFor="quote-company" className="font-heading text-sm font-semibold">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="quote-company"
                    name="company"
                    autoComplete="organization"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                </div>
                <div className="flex-[1_1_200px] flex flex-col gap-2">
                  <label htmlFor="quote-flyers" className="font-heading text-sm font-semibold">
                    Number of flyers
                  </label>
                  <input
                    type="number"
                    id="quote-flyers"
                    name="flyers"
                    min={1000}
                    step={100}
                    placeholder="e.g. 1000"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-suburb" className="font-heading text-sm font-semibold">
                  Suburb
                </label>
                <input
                  type="text"
                  id="quote-suburb"
                  name="suburb"
                  placeholder={suburbHint}
                  className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                />
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
