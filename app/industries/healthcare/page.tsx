import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import Reveal from "../../components/Reveal";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/healthcare";

export const metadata: Metadata = {
  title: "Flyer Distribution for Healthcare",
  description:
    "Flyer distribution for dentists, GPs, physios and clinics in Melbourne's south-east. Reach nearby patients. Exclusive, GPS-tracked, $200 per 1,000.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Flyer Distribution for Healthcare | South East Flyers",
    description:
      "Local-area awareness for healthcare practices and clinics across Melbourne's south-east and eastern suburbs through targeted, GPS-tracked letterbox distribution.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const useCases: { title: string; body: string }[] = [
  {
    title: "New practice awareness",
    body: "Let the surrounding neighbourhood know a new practice or clinic has opened and where to find it.",
  },
  {
    title: "Opening campaigns",
    body: "Announce a launch or relocation to the local catchment in the lead-up to opening day.",
  },
  {
    title: "Local-area awareness",
    body: "Stay visible to the households closest to your practice, the catchment most of your patients come from.",
  },
  {
    title: "Promoting a specific service",
    body: "Raise awareness of a particular service or clinic offering among nearby residents.",
  },
];

const faqs = [
  {
    question: "Can flyer distribution help a new practice or clinic?",
    answer:
      "Yes. Most patients come from the neighbourhoods around a practice, so a letterbox drop to the local catchment is a practical way to introduce a new clinic or announce an opening to the households nearby.",
  },
  {
    question: "Which suburbs should a healthcare practice target?",
    answer:
      "Usually the immediate catchment around your location, the suburbs most of your patients travel from. Tell us where you are and we'll help you map a sensible local area.",
  },
  {
    question: "Do you deliver to 'No Junk Mail' letterboxes?",
    answer:
      "No. We skip every letterbox marked 'No Junk Mail' or 'No Advertising Material', which keeps your practice's material with households happy to receive it.",
  },
  {
    question: "What's the minimum order?",
    answer:
      "1,000 flyers per campaign, which is enough to cover the streets immediately around most practices. We can scale up from there across a wider catchment.",
  },
  {
    question: "Do you handle the design or wording of the flyer?",
    answer:
      "No, we distribute, we don't print or write your material. You provide the printed flyers, and any professional or advertising standards that apply to healthcare content remain yours to determine.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer Distribution for Healthcare",
  serviceType: "Flyer Distribution",
  description:
    "Flyer and letterbox distribution for healthcare businesses across Melbourne's south-east and eastern suburbs. Local-area awareness for practices, clinics and services, GPS-tracked.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function Healthcare() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare" },
        ]}
        h1="Flyer distribution for healthcare"
        lead="Build awareness for your practice, clinic or service among the local households closest to you, across Melbourne's south-east and eastern suburbs, with GPS-tracked distribution."
        tagline="You provide the flyers. We handle the distribution."
        image={{ src: "/images/redesign/ind-health.jpg", alt: "A dentist in her clinic" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "GPS map", label: "proof of delivery, every run" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
        ]}
      />

      <Section title="Reaching your local catchment" first>
        <p>
          Most patients come from the neighbourhoods around a practice. That makes letterbox distribution a
          practical way to introduce a new clinic, announce an opening or keep a local service front of mind with
          the households nearby.
        </p>
        <p>
          You provide the printed material and choose the suburbs around your practice; we deliver it and report on
          where it went. We help with the distribution; the content of your material and any professional or
          advertising standards that apply to it remain yours to determine.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Reveal as="section" className="bg-cream rounded-card p-9 sm:p-16 flex flex-col gap-9">
          <h2 className="m-0 font-display font-medium text-[clamp(28px,2.8vw,38px)] leading-[1.15]">
            Common healthcare campaigns
          </h2>
          <dl className="m-0 flex flex-wrap gap-7 gap-x-14">
            {useCases.map((uc) => (
              <div key={uc.title} className="flex-[1_1_400px] pt-5 border-t border-[rgba(16,48,47,0.16)] flex flex-col gap-2">
                <dt className="font-heading font-semibold text-lg">{uc.title}</dt>
                <dd className="m-0 text-base leading-relaxed text-body">{uc.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Section title="Where this fits">
        <p>
          Campaigns run through our <TextLink href="/services/letterbox-distribution">letterbox distribution</TextLink>{" "}
          and <TextLink href="/services/targeted-flyer-distribution">targeted distribution</TextLink> services, are{" "}
          <TextLink href="/services/gps-tracked-flyer-distribution">GPS-tracked</TextLink>, and cover the suburbs on
          our <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink> page. For practice-specific
          advice, see our pages for <TextLink href="/industries/dentists">dental clinics</TextLink> and{" "}
          <TextLink href="/industries/vets">vet clinics</TextLink>.
        </p>
      </Section>

      <HowItWorks />

      <QuickQuoteForm
        heading="Grow awareness in your local area"
        lead="Tell us the suburbs around your practice and your flyer quantity for a free, no-obligation quote."
      />

      <FAQSection
        items={faqs}
        title="Healthcare distribution FAQs"
        subtitle="Common questions from practices and clinics."
      />
    </>
  );
}
