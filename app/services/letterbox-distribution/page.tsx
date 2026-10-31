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

const PAGE_PATH = "/services/letterbox-distribution";

export const metadata: Metadata = {
  title: "Letterbox Distribution",
  description:
    "Letterbox distribution across Melbourne's south-east and eastern suburbs. Exclusive, never bundled, GPS-tracked. $200 per 1,000 flyers. Quote in 24 hours.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Letterbox Distribution | South East Flyers",
    description:
      "Suburb-by-suburb letterbox drops across Melbourne's south-east and eastern suburbs. No junk mail compliant, GPS-tracked, delivered individually with full campaign reporting.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const features: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Suburb-level targeting",
    body: "Concentrate your drop on the exact suburbs and areas where your customers live, rather than paying to blanket a whole city.",
    icon: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  },
  {
    title: "No Junk Mail compliant",
    body: "We skip every letterbox marked “No Junk Mail” or “No Advertising Material” to keep your brand in good standing.",
    icon: <><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  },
  {
    title: "No bundling",
    body: "Your flyer is delivered on its own, never mixed in with a stack of other advertising material.",
    icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  },
  {
    title: "Tracked and reported",
    body: "GPS tracking on every run plus a clear campaign report, so you know where your letterbox drop actually went.",
    icon: <><path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" /><path d="M9 3v15M15 6v15" /></>,
  },
];

const faqs = [
  {
    question: "How much does a letterbox drop cost?",
    answer:
      "Letterbox distribution is priced per campaign based on your quantity, the suburbs you're targeting and how spread out the delivery is. Tell us your target area and how many flyers you have and we'll send a clear quote.",
  },
  {
    question: "Do letterbox drops actually work?",
    answer:
      "For local marketing, yes: a flyer in the letterbox reaches nearby households directly and doesn't get lost in a crowded online feed. It works best when the offer is genuinely local and relevant and the distribution is targeted to the right suburbs, which is exactly what we help with.",
  },
  {
    question: "How many households will 1,000 flyers reach?",
    answer:
      "Roughly one flyer per letterbox, so around 1,000 households, enough to cover a focused pocket of a suburb. If you want to blanket a whole suburb or several, we'll help you work out the right quantity.",
  },
  {
    question: "Do you skip 'No Junk Mail' letterboxes?",
    answer:
      "Yes, always. We don't deliver to any letterbox marked “No Junk Mail” or “No Advertising Material”. It keeps your brand reputable and your flyers with households happy to receive them.",
  },
  {
    question: "When is the best time to do a letterbox drop?",
    answer:
      "It depends on your offer: seasonal promotions, a new opening or a local event all have natural timing. Tell us what you're promoting and we'll help you plan a schedule that lines up with it.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Letterbox Distribution",
  serviceType: "Letterbox Distribution",
  description:
    "Letterbox distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Suburb-level targeting, no junk mail compliant, GPS-tracked with campaign reporting.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function LetterboxDistribution() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Letterbox distribution" }]}
        h1="Letterbox distribution"
        lead="Suburb-by-suburb letterbox drops across Melbourne's south-east and eastern suburbs, no junk mail compliant, GPS-tracked and fully reported."
        tagline="You provide the flyers. We handle the distribution."
        image={{ src: "/images/redesign/walker-street.jpg", alt: "A walker checking flyers beside a brick letterbox on a leafy street" }}
      />

      <Section title="How letterbox distribution works" first>
        <p className="text-lg text-ink">
          A letterbox drop delivers your printed material straight to residential letterboxes across the suburbs
          you select. It&rsquo;s one of the most direct ways to reach local households: your flyer is in their hands
          the moment they check the mail.
        </p>
        <p>
          South East Flyers plans and delivers the drop for you. You provide the flyers and choose the areas; we
          handle route planning, door-to-door delivery, GPS tracking and reporting. Minimum campaign is 1,000
          flyers, scaling up for larger runs across{" "}
          <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>&rsquo;s south-east and
          eastern suburbs.
        </p>
      </Section>

      <HowItWorks
        title="The letterbox drop process"
        steps={[
          { title: "Select your suburbs", body: "Choose the suburbs and areas you want to reach. We'll help you shape the most practical coverage for your quantity and budget." },
          { title: "We plan the drop", body: "We map the streets and routes across your target area and confirm the schedule for your campaign." },
          { title: "We deliver door to door", body: "Walkers and e-bike distributors work street by street, placing one flyer in each letterbox and skipping every “No Junk Mail” sign." },
          { title: "You receive reporting", body: "Each run is tracked via the Strava app, and you get a report showing the streets covered and letterboxes delivered to." },
        ]}
      />

      <section aria-labelledby="why-title" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] py-[clamp(80px,9vw,128px)] flex flex-wrap gap-12 gap-x-[88px] items-stretch">
        <Reveal className="flex-[1_1_400px] rounded-card overflow-hidden min-h-[460px]">
          <Image
            src="/images/redesign/delivery-real.jpg"
            alt="A South East Flyers distributor delivering to a brick letterbox on a Melbourne footpath"
            width={700}
            height={460}
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="flex-[1.15_1_440px] flex flex-col gap-9 justify-center">
          <h2 id="why-title" className="m-0 font-display font-medium text-[clamp(32px,3.4vw,46px)] leading-[1.1] tracking-[-0.015em]">
            Why choose our letterbox distribution
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
        <Callout title="Related services">
          <p className="m-0">
            Letterbox distribution pairs naturally with{" "}
            <TextLink href="/services/flyer-distribution">flyer distribution</TextLink> and suburb-level campaigns
            across <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>. Tell us your
            target area and we&rsquo;ll recommend the most practical approach.
          </p>
        </Callout>
      </div>

      <QuickQuoteForm
        heading="Planning a letterbox drop?"
        lead="Tell us which suburbs you want to reach and how many flyers you have. We'll put together a free, no-obligation quote."
      />

      <FAQSection
        items={faqs}
        title="Letterbox distribution FAQs"
        subtitle="Common questions about letterbox drops across Melbourne's south-east and eastern suburbs."
      />
    </>
  );
}
