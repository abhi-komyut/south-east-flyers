"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "../lib/gtag";

/**
 * Loads Google Analytics 4 and auto-tracks two conversion signals via a
 * single delegated click listener:
 *   - phone_click  → any <a href="tel:..."> anywhere on the site
 *   - quote_click  → any element marked with data-quote-cta
 *
 * Form conversions (form_submit / generate_lead) are fired from the form
 * components themselves via trackEvent().
 *
 * Renders nothing and loads no script until NEXT_PUBLIC_GA_ID is set.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const tel = el.closest('a[href^="tel:"]');
      if (tel) {
        trackEvent("phone_click", {
          link_url: tel.getAttribute("href") ?? undefined,
        });
        return;
      }

      const quote = el.closest("[data-quote-cta]");
      if (quote) {
        trackEvent("quote_click", {
          cta_text: (quote.textContent ?? "").trim().slice(0, 80),
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
