"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { trackEvent } from "../lib/gtag";
import Breadcrumbs from "../components/Breadcrumbs";

const WHATSAPP_NUMBER = "61402824070";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzdqreda");
  const waUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      trackEvent("form_submit", { form_name: "contact" });
      trackEvent("generate_lead", { form_name: "contact" });
    }
  }, [state.succeeded]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    waUrlRef.current = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    handleSubmit(e);
  }

  function sendOnWhatsApp() {
    if (!waUrlRef.current) return;
    trackEvent("whatsapp_followup", { form_name: "contact" });
    window.open(waUrlRef.current, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="bg-teal-deep text-white px-[clamp(20px,4vw,48px)] pt-[clamp(64px,7vw,96px)] pb-[clamp(140px,13vw,180px)]">
        <div className="hero-stagger max-w-[1144px] mx-auto flex flex-col gap-5">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <h1 className="m-0 font-display font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.06] tracking-[-0.02em]">
            Contact us
          </h1>
          <p className="m-0 text-[clamp(17px,1.4vw,19px)] leading-relaxed text-white/85 max-w-[560px]">
            Get in touch for a free, no-obligation quote on your next letterbox campaign.
          </p>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,48px)] pb-[clamp(80px,9vw,120px)]">
        <div className="max-w-[1144px] mx-auto -mt-[110px] flex flex-wrap gap-10 gap-x-16 items-start">
          <div className="flex-[1_1_320px] flex flex-col gap-7 pt-[140px]">
            <p className="m-0 text-[17px] leading-[1.7] text-body">
              Whether you need a one-off campaign or ongoing distribution, we&rsquo;re here to help plan your next
              letterbox drop.
            </p>
            <dl className="m-0 flex flex-col gap-[22px]">
              <div className="flex gap-4 items-start">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-sm text-muted">Phone</dt>
                  <dd className="mt-1 mb-0">
                    <a href="tel:+61402824070" className="font-display text-[26px] text-ink no-underline [font-variant-numeric:tabular-nums]">
                      0402 824 070
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-sm text-muted">WhatsApp</dt>
                  <dd className="mt-1 mb-0 text-base">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-navy">
                      Message us directly
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-sm text-muted">Service areas</dt>
                  <dd className="mt-1 mb-0 text-base text-ink">Melbourne&rsquo;s south-east and eastern suburbs</dd>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5V12l3 3" />
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-sm text-muted">Response time</dt>
                  <dd className="mt-1 mb-0 text-base text-ink">Within 1 business day. Calls Monday to Friday, 8am to 6pm AEST.</dd>
                </div>
              </div>
            </dl>
            <div className="rounded-card overflow-hidden h-[300px]">
              <Image
                src="/images/redesign/delivery-real.jpg"
                alt="A South East Flyers distributor delivering to a letterbox in Melbourne"
                width={460}
                height={300}
                className="w-full h-full object-cover object-[50%_40%]"
              />
            </div>
          </div>

          <div className="flex-[1.5_1_480px] bg-white rounded-card p-7 sm:p-12 shadow-[0_30px_60px_-34px_rgba(4,60,60,0.5)] relative z-[2]">
            {state.succeeded ? (
              <div className="py-8 flex flex-col items-start gap-4">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-navy" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M7.5 12.5l3 3 6-6.5" />
                </svg>
                <h2 className="m-0 font-display font-medium text-[32px]">Message sent</h2>
                <p className="m-0 text-[17px] leading-[1.7] text-body">
                  Thank you for your enquiry. We&rsquo;ll be in touch within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={sendOnWhatsApp}
                  className="press inline-flex items-center gap-2.5 min-h-12 px-[22px] rounded-full border border-navy text-navy font-heading font-semibold text-[15px] hover:bg-navy hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.27-1.38a9.93 9.93 0 004.77 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.84 14.17c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a16.9 16.9 0 01-1.65-.61c-2.91-1.26-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.25.6.83 2.07.9 2.22.07.15.12.33.02.52-.1.19-.15.3-.3.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.42 1.48.32.15.5.13.7-.08.2-.2.8-.93 1.01-1.26.21-.32.42-.27.7-.16.28.1 1.79.84 2.1 1 .31.15.51.23.59.36.08.13.08.74-.17 1.44z" />
                  </svg>
                  Also send on WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-[22px]">
                <h2 className="m-0 font-display font-medium text-[30px]">Tell us about your campaign</h2>
                <div className="flex flex-wrap gap-5">
                  <div className="flex-[1_1_220px] flex flex-col gap-2">
                    <label htmlFor="name" className="font-heading text-sm font-semibold">
                      Name <span className="text-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-required text-xs" />
                  </div>
                  <div className="flex-[1_1_220px] flex flex-col gap-2">
                    <label htmlFor="phone" className="font-heading text-sm font-semibold">
                      Phone number <span className="text-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="04XX XXX XXX"
                      className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-required text-xs" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-heading text-sm font-semibold">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your company name"
                    className="min-h-[50px] border border-field-border rounded-input px-3.5 text-base text-ink bg-white focus:outline-none focus:border-navy"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} className="text-required text-xs" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-heading text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Target suburbs, quantity, timing"
                    className="border border-field-border rounded-input p-3.5 text-base leading-relaxed text-ink bg-white resize-y focus:outline-none focus:border-navy"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-required text-xs" />
                </div>

                {state.errors && <ValidationError errors={state.errors} className="text-required text-sm" />}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="press min-h-[54px] rounded-full bg-cta text-ink font-heading font-bold text-base hover:bg-cta-hover transition-colors disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
                <p className="m-0 text-[13px] text-muted text-center">No spam. We&rsquo;ll only contact you about your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
