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
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/services/flyer-distribution";

export const metadata: Metadata = {
  title: "Flyer Distribution",
  description:
    "Professional flyer distribution across Melbourne's south-east and eastern suburbs. Residential delivery, suburb-level targeting, GPS tracking and campaign reporting. You provide the flyers, we handle the distribution. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution | South East Flyers",
    description:
      "Residential flyer and leaflet distribution across Melbourne's south-east and eastern suburbs. GPS-tracked, no junk mail compliant, delivered individually with full campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const features: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Residential delivery",
    body: "Your flyers go directly into household letterboxes across the suburbs you choose, the places your local customers actually live.",
    icon: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  },
  {
    title: "Delivered individually",
    body: "We never bundle your flyer with other advertising. Each one is delivered on its own so it gets maximum attention.",
    icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  },
  {
    title: "No Junk Mail compliant",
    body: "We respect every “No Junk Mail” and “No Advertising Material” sign, protecting your brand's reputation.",
    icon: <><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  },
  {
    title: "GPS tracking and reporting",
    body: "Every distribution run is tracked in real time via Strava, with a route report provided once your campaign is complete.",
    icon: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  },
];

const faqs = [
  {
    question: "What's the difference between flyer distribution and letterbox distribution?",
    answer:
      "In practice they're the same thing: physically delivering your printed material into residential letterboxes. “Letterbox distribution” just emphasises the letterbox drop itself. We handle both, and most campaigns use the two terms interchangeably.",
  },
  {
    question: "Do you print the flyers?",
    answer:
      "No. We're a distribution specialist, not a printer. You supply the printed flyers, leaflets or brochures and we get them into the right letterboxes across Melbourne's south-east and eastern suburbs.",
  },
  {
    question: "How much does flyer distribution cost?",
    answer:
      "It depends on your quantity, the suburbs you're targeting and how spread out the delivery is, so we quote each campaign individually. Send us your target area and how many flyers you have and we'll come back with a clear price. The minimum campaign is 1,000 flyers.",
  },
  {
    question: "Are my flyers delivered individually or bundled with other ads?",
    answer:
      "Individually. We have a strict anti-bundling policy, so your flyer is delivered on its own into each letterbox rather than stuffed in with a stack of other advertising, which means it actually gets noticed.",
  },
  {
    question: "How is the delivery tracked?",
    answer:
      "Distributors record their routes in real time via the Strava app. Once the campaign is finished you get a report showing the streets covered and a map of the route.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution",
  serviceType: "Flyer Distribution",
  description:
    "Professional residential flyer and leaflet distribution across Melbourne's south-east and eastern suburbs. GPS-tracked, no junk mail compliant, delivered individually with campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function FlyerDistribution() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Flyer distribution" }]}
        h1="Professional flyer distribution"
        lead="Residential flyer and leaflet distribution across Melbourne's south-east and eastern suburbs, with GPS tracking and full campaign reporting."
        tagline="You provide the flyers. We handle the distribution."
        image={{ src: "/images/redesign/letterbox-hand.jpg", alt: "A hand posting a flyer into a steel letterbox" }}
      />

      <Section title="What is flyer distribution?" first>
        <p className="text-lg text-ink">
          Flyer distribution is the physical delivery of your printed marketing material, whether flyers, leaflets,
          pamphlets or brochures, straight into residential letterboxes.
        </p>
        <p>
          It puts your offer in front of local households in the specific suburbs you choose, without competing for
          attention in a crowded digital feed.
        </p>
        <p>
          South East Flyers handles the distribution end to end. You supply the flyers; we plan the routes, deliver
          them across your target area, track each run and report back on where they went. The minimum campaign is
          1,000 flyers, scaling up for metro-wide pushes across{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>&rsquo;s south-east and eastern
          suburbs.
        </p>
      </Section>

      <HowItWorks
        title="How flyer distribution works"
        steps={[
          { title: "You provide the flyers", body: "You supply your printed flyers, leaflets, pamphlets or brochures. We're a distribution specialist: we don't print, we deliver." },
          { title: "We plan the campaign", body: "We agree on your target suburbs, confirm quantities and map the walking and e-bike routes that cover them." },
          { title: "Our team distributes", body: "On-foot walkers and e-bike distributors deliver door to door, one flyer per letterbox, skipping every “No Junk Mail” sign." },
          { title: "You get tracking and a report", body: "Runs are tracked via the Strava app and you receive a report showing the streets covered and letterboxes delivered to." },
        ]}
      />

      <section aria-labelledby="get-title" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] py-[clamp(80px,9vw,128px)] flex flex-wrap gap-12 gap-x-[88px] items-stretch">
        <Reveal className="flex-[1_1_400px] rounded-card overflow-hidden min-h-[460px]">
          <Image
            src="/images/redesign/walker-ebike.jpg"
            alt="An e-bike distributor stopping at a letterbox on a residential street"
            width={700}
            height={460}
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="flex-[1.15_1_440px] flex flex-col gap-9 justify-center">
          <h2 id="get-title" className="m-0 font-display font-medium text-[clamp(32px,3.4vw,46px)] leading-[1.1] tracking-[-0.015em]">
            What you get
          </h2>
          <dl className="m-0 flex flex-col gap-7">
            {features.map((f) => (
              <div key={f.title} className="flex gap-[18px]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
                <div>
                  <dt className="font-heading font-semibold text-lg mb-1.5">{f.title}</dt>
                  <dd className="m-0 text-base leading-relaxed text-body">{f.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pb-[clamp(80px,9vw,128px)]">
        <Callout title="What you need to provide">
          <p className="m-0">
            You provide the printed flyers and let us know which suburbs you want to reach, roughly how many flyers
            you have and when you&rsquo;d like the campaign to run. If you&rsquo;re not sure how far your quantity
            will stretch, we&rsquo;ll help you work out a practical distribution area.
          </p>
          <p className="m-0">
            Related services include <TextLink href="/services/letterbox-distribution">letterbox distribution</TextLink>{" "}
            and targeted suburb campaigns across <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>.
          </p>
        </Callout>
      </div>

      <QuickQuoteForm
        heading="Ready to distribute your flyers?"
        lead="Tell us your target suburbs and flyer quantity for a free, no-obligation quote."
      />

      <FAQSection
        items={faqs}
        title="Flyer distribution FAQs"
        subtitle="Common questions about our flyer distribution service."
      />
    </>
  );
}
