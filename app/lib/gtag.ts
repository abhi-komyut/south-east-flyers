// Google Analytics 4 helper.
//
// Tracking is DORMANT until a Measurement ID is provided via the
// NEXT_PUBLIC_GA_ID environment variable (set it in Vercel → Project →
// Settings → Environment Variables, e.g. G-XXXXXXXXXX). With no ID set,
// no script loads and every trackEvent() call is a no-op — zero effect
// on the live site.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagParams = Record<string, unknown>;

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", name, params);
}
