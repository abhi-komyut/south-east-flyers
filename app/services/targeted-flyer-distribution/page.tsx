import type { Metadata } from "next";
import Image from "next/image";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import Reveal from "../../components/Reveal";
import {
  SITE_URL,
  PageHero,
  Section,
  Callout,
  TextLink,
  JsonLd,
} from "../../components/landing";

const PAGE_PATH = "/services/targeted-flyer-distribution";

export const metadata: Metadata = {
  title: "Targeted Flyer Distribution",
  description:
    "Targeted flyer distribution across Melbourne's south-east and eastern suburbs. Define your distribution area by suburb, postcode or defined streets so your flyers reach the right areas. GPS-tracked. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Targeted Flyer Distribution | South East Flyers",
    description:
      "Choose exactly where your flyers go, by suburb, postcode or defined area, across Melbourne's south-east and eastern suburbs. GPS-tracked delivery with campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const targeting: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "By suburb",
    body: "Choose the specific suburbs you want to reach. This is the most common way to focus a campaign on the areas your customers live in.",
    icon: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  },
  {
    title: "By postcode",
    body: "Cover one or more postcodes when your service area lines up with them, rather than the whole metro.",
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  },
  {
    title: "By defined area",
    body: "Where practical, we can focus on particular streets or a defined pocket around a location, for example the streets surrounding a store or listing.",
    icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  },
  {
    title: "By campaign objective",
    body: "Tell us what you're trying to achieve: a local launch, a service-area push, a real estate farm, and we'll help shape a sensible area for it.",
    icon: <><path d="M5 3v18" /><path d="M5 4h11l-2 4 2 4H5" /></>,
  },
];

const faqs = [
  {
    question: "What does targeted flyer distribution actually mean?",
    answer:
      "It means you decide where your flyers go rather than spreading them thinly across a whole city. You choose the suburbs, postcodes or defined pockets you want to reach, and we concentrate the campaign there.",
  },
  {
    question: "Can you target specific streets or a radius around a location?",
    answer:
      "Where it's practical, yes, for example the streets immediately surrounding a store, listing or venue. Tell us the location and how far out you want to go and we'll map a sensible area.",
  },
  {
    question: "Do you offer demographic targeting?",
    answer:
      "We're honest about this: our targeting is based on the areas you choose, not household-level demographic data. If you have a type of customer in mind we'll help match the right suburbs to them, but we won't promise precision we can't deliver.",
  },
  {
    question: "Is a targeted campaign still GPS-tracked?",
    answer:
      "Yes. Every run is tracked via the Strava app and you receive a report of the streets covered, so you can confirm the campaign stayed within your chosen area.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Targeted Flyer Distribution",
  serviceType: "Targeted Flyer Distribution",
  description:
    "Targeted flyer distribution across Melbourne's south-east and eastern suburbs. Define your distribution area by suburb, postcode or defined streets, with GPS tracking and campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function TargetedFlyerDistribution() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Targeted flyer distribution" }]}
        h1="Targeted flyer distribution"
        lead="Choose exactly where your flyers go. We help you define a practical distribution area, by suburb, postcode or a defined pocket, so your material reaches the areas that matter to your business."
        tagline="You provide the flyers. We handle the distribution."
        image={{ src: "/images/redesign/walker-ebike.jpg", alt: "An e-bike distributor delivering flyers on a residential street" }}
      />

      <Section title="What is targeted flyer distribution?" first>
        <p className="text-lg text-ink">
          Targeted distribution simply means deciding where your flyers are delivered rather than spreading them
          thinly across a whole city. You tell us the areas you want to reach, and we concentrate the campaign
          there, so your budget goes toward the households most likely to care about your offer.
        </p>
        <p>
          We keep this honest: our targeting is based on the areas you choose, suburbs, postcodes and defined
          residential pockets. If you have a particular type of customer in mind, tell us and we&rsquo;ll help
          match the area to it, but we won&rsquo;t promise household-level demographic precision we can&rsquo;t
          deliver.
        </p>
      </Section>

      <section aria-labelledby="ways-title" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] py-[clamp(80px,9vw,128px)] flex flex-wrap gap-12 gap-x-[88px] items-stretch">
        <Reveal className="flex-[1_1_400px] rounded-card overflow-hidden min-h-[460px]">
          <Image
            src="/images/redesign/suburb-map.jpg"
            alt="Map of Melbourne's suburbs showing the areas South East Flyers covers"
            width={700}
            height={460}
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="flex-[1.15_1_440px] flex flex-col gap-9 justify-center">
          <h2 id="ways-title" className="m-0 font-display font-medium text-[clamp(32px,3.4vw,46px)] leading-[1.1] tracking-[-0.015em]">
            Ways to define your distribution area
          </h2>
          <dl className="m-0 flex flex-col gap-7">
            {targeting.map((t) => (
              <div key={t.title} className="flex gap-[18px]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {t.icon}
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-lg mb-1.5">{t.title}</dt>
                  <dd className="m-0 text-base leading-relaxed text-body">{t.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pb-[clamp(80px,9vw,128px)]">
        <Callout title="Related services">
          <p className="m-0">
            Targeted campaigns run through our <TextLink href="/services/flyer-distribution">flyer distribution</TextLink>{" "}
            and <TextLink href="/services/letterbox-distribution">letterbox distribution</TextLink> services, are
            tracked with <TextLink href="/services/gps-tracked-flyer-distribution">GPS tracking</TextLink>, and cover
            the suburbs listed on our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>{" "}
            page.
          </p>
        </Callout>
      </div>

      <QuickQuoteForm
        heading="Know the areas you want to reach?"
        lead="Tell us your target suburbs and flyer quantity and we'll put together a free, no-obligation quote."
      />

      <FAQSection
        items={faqs}
        title="Targeted distribution FAQs"
        subtitle="Common questions about targeting your flyer campaign."
      />
    </>
  );
}
