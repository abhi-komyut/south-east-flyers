import type { Metadata } from "next";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import FAQSection from "../../components/FAQSection";
import {
  SITE_URL,
  PageHero,
  FactsStrip,
  Section,
  Bullets,
  Callout,
  TextLink,
  JsonLd,
  HowItWorks,
} from "../../components/landing";

const PAGE_PATH = "/industries/dentists";

export const metadata: Metadata = {
  title: { absolute: "Dental Flyers Melbourne | South East Flyers" },
  description:
    "Dental flyers for new and growing clinics, delivered on their own to the homes around your practice in Melbourne's south-east. GPS-tracked, $200 per 1,000.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Dental Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for dental clinics across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do dental flyers bring in new patients?",
    answer:
      "They work best for clinics whose patients live nearby, which is most of them. A flyer reaches households that haven't chosen a dentist or have let their check-ups slip, and it stays on the fridge until the next toothache or reminder.",
  },
  {
    question: "What can a dental flyer say under the advertising rules?",
    answer:
      "Dental advertising in Australia must follow AHPRA's guidelines. That means no patient testimonials, no misleading claims, and clear terms on any offer. Your flyer content is your responsibility, so check it against the guidelines before printing.",
  },
  {
    question: "How far from my clinic should I drop dental flyers?",
    answer:
      "Start with the 2,500 to 5,000 homes closest to the practice, usually within two kilometres. Patients choose a dentist they can reach easily before or after work, so nearby streets respond best.",
  },
  {
    question: "When should a new dental clinic start letterbox drops?",
    answer:
      "Two to three weeks before opening, so households know the date and can book ahead. Follow up with a second drop in the first month, when the clinic has its first appointment gaps to fill.",
  },
  {
    question: "Do you deliver for established dental practices?",
    answer:
      "Yes. We already deliver for dental clinics, and established practices use drops to announce a new dentist, longer opening hours or a new service such as clear aligners, at $200 per 1,000 flyers.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for dental clinics",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Dental clinics and dentists" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Dentists() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare", href: "/industries/healthcare" },
          { name: "Dentists" },
        ]}
        h1="Letterbox Marketing for Dental Clinics"
        lead="Dental flyers delivered on their own to the households around your practice, so the families who live closest know where to book. Every route is GPS-tracked."
        image={{ src: "/images/redesign/ind-health.jpg", alt: "A dentist in her clinic" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Patients choose a dentist close to home" first>
        <p>
          Most people pick a dentist within a short drive or walk. Families especially want a clinic near school or
          work, so the households within a couple of kilometres are the ones a practice can realistically win.
        </p>
        <p>
          A letterbox drop reaches every one of those homes, including people who haven&rsquo;t searched for a dentist
          in years. We already deliver for dental clinics, including{" "}
          <TextLink href="/portfolio">High Dental</TextLink>.
        </p>
      </Section>

      <Section title="Dental flyers and the advertising rules">
        <p>
          Dental advertising in Australia is regulated. AHPRA&rsquo;s guidelines for advertising a regulated health
          service rule out patient testimonials, misleading claims and offers without clear terms. That makes a flyer
          a good fit, because it can be plain and factual and still work.
        </p>
        <Bullets
          items={[
            <><strong>State the facts:</strong> clinic address, hours, parking, health fund rebates and how to book.</>,
            <><strong>Introduce the team</strong> with names, qualifications and a real photo of the clinic.</>,
            <><strong>Keep offers clear:</strong> if you mention a price or a free item, state the terms in full.</>,
          ]}
        />
        <p>
          We deliver flyers; the content stays with you. Check your artwork against AHPRA&rsquo;s guidelines before
          you print.
        </p>
      </Section>

      <Section title="New clinics, new dentists, new services">
        <Bullets
          items={[
            <><strong>Opening a clinic:</strong> drop two to three weeks before the first day, then again in the first month.</>,
            <><strong>A new dentist joins:</strong> introduce them to the streets around the practice, especially if they bring a new language or speciality.</>,
            <><strong>New services:</strong> clear aligners, sleep dentistry or longer hours give past and future patients a reason to call.</>,
            <><strong>Check-up season:</strong> late in the year, before many health fund extras limits reset, is when families book.</>,
          ]}
        />
      </Section>

      <Section title="Where dental clinics drop">
        <p>
          Family suburbs suit dental drops best. Across our service area that includes{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink>, where school-age
          children mean regular check-ups.
        </p>
        <p>
          In <TextLink href="/melbourne/flyer-distribution-box-hill">Box Hill</TextLink> and Glen Waverley, a clinic
          with dentists who speak Mandarin or Cantonese can say so on the flyer, and many print one side in Chinese.
        </p>
      </Section>

      <Section title="Knowing which streets booked">
        <p>
          Add &ldquo;How did you hear about us?&rdquo; to your new patient form, with letterbox flyer as an option.
          Most clinics already collect a home address, so after a month you can see which streets produced bookings.
        </p>
        <p>
          Match that against the GPS report from each drop. If the streets east of the clinic booked and the streets
          west didn&rsquo;t, the next drop goes east. A new patient who stays for years of check-ups and cleans pays
          for many drops, so it&rsquo;s worth tracking carefully.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities and cost"
          figures={[{ value: "$500", label: "2,500 homes near the clinic" }, { value: "$1,000", label: "5,000 homes, a wider catchment" }]}
        >
          Every drop is $200 per 1,000 flyers, exclusive, from 1,000. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or our{" "}
          <TextLink href="/industries/healthcare">healthcare</TextLink> page for GPs, physios and other practices.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the families near your clinic"
        lead="Tell us your practice address and how many homes you'd like to reach. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Dental clinic letterbox drop FAQs" />
    </>
  );
}
