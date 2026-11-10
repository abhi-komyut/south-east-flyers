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

const PAGE_PATH = "/industries/medical-clinics";

export const metadata: Metadata = {
  title: { absolute: "Medical Clinic Flyers Melbourne | South East Flyers" },
  description:
    "Medical clinic flyers for GPs and medical centres, delivered on their own to the homes around your clinic in Melbourne's south-east. Exclusive, GPS-tracked.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "GP & Medical Clinic Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for GP clinics and medical centres across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do letterbox drops work for GP clinics?",
    answer:
      "They suit clinics that want new patients from the surrounding streets, such as a new practice, a clinic adding a GP, or one with appointments to fill. Most patients choose a GP close to home, so the nearby households matter most.",
  },
  {
    question: "What can a medical clinic flyer say?",
    answer:
      "Advertising a medical service in Australia must follow AHPRA's guidelines: no patient testimonials, no misleading claims, and clear terms on anything offered. Stick to facts such as doctors, services, hours, billing and how to book.",
  },
  {
    question: "Should a GP flyer mention bulk billing?",
    answer:
      "Yes, if it's accurate. Billing is one of the first things families check, so state exactly who is bulk billed.",
  },
  {
    question: "When should a new medical centre drop flyers?",
    answer:
      "Two to three weeks before opening, with the date, doctors and booking details. A second drop in the first month reaches households who kept the first flyer but haven't booked yet.",
  },
  {
    question: "How many homes should a clinic cover?",
    answer:
      "Most clinics start with 2,500 to 5,000 homes within a couple of kilometres. In apartment-heavy areas the same distance covers more households, so a smaller radius is often enough.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for GP and medical clinics",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "GP clinics and medical centres" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function MedicalClinics() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare", href: "/industries/healthcare" },
          { name: "GP & Medical Clinics" },
        ]}
        h1="Letterbox Marketing for GP & Medical Clinics"
        lead="Get your medical clinic flyers into letterboxes around your practice with GPS-tracked flyer distribution."
        image={{ src: "/images/redesign/walker-foot.jpg", alt: "A South East Flyers walker posting a flyer into a letterbox on a sunny Melbourne street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "56", label: "suburbs covered" },
          { value: "1,000", label: "flyers, your first test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Patients want a GP close to home" first>
        <p>
          Families choose a GP they can reach quickly with a sick child, and older patients want one they can walk or
          drive to easily. That makes the streets within a couple of kilometres the clinic&rsquo;s real market.
        </p>
        <p>
          GP clinic marketing online mostly reaches people already searching. A flyer reaches the ones who aren&rsquo;t
          yet, and sits in the drawer until their own GP retires or closes its books.
        </p>
      </Section>

      <Section title="What to put on medical clinic flyers">
        <Bullets
          items={[
            <><strong>Your doctors</strong>, with names, and any languages or special interests such as women&rsquo;s health or skin checks.</>,
            <><strong>Billing, stated exactly</strong>: who is bulk billed and what a standard consult costs for everyone else.</>,
            <><strong>Hours and booking</strong>, including evenings, weekends and online booking if you offer them.</>,
            <><strong>Services on site</strong>, such as pathology, nurse clinics, vaccinations or allied health.</>,
          ]}
        />
        <p>
          Medical advertising is regulated. AHPRA&rsquo;s guidelines rule out patient testimonials and misleading
          claims, so keep the flyer factual. We deliver it; the content stays with your practice.
        </p>
      </Section>

      <Section title="New clinics, new GPs and quiet books">
        <Bullets
          items={[
            <><strong>Opening a medical centre:</strong> new clinic opening flyers two to three weeks before the doors open, then again in the first month.</>,
            <><strong>A new GP joins:</strong> tell the neighbourhood the clinic has new appointments, especially if the GP speaks another language.</>,
            <><strong>Flu season:</strong> a drop in March or April about vaccination clinics brings patients in before winter.</>,
          ]}
        />
      </Section>

      <Section title="Medical centre letterbox drops by area">
        <p>
          Family suburbs such as <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> suit clinics that
          focus on children&rsquo;s health and family care. Around{" "}
          <TextLink href="/melbourne/flyer-distribution-box-hill">Box Hill</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink>, clinics with GPs who
          speak Mandarin or Cantonese often print one side in Chinese.
        </p>
        <p>
          Put a &ldquo;How did you hear about us?&rdquo; question on your new patient form. Matched with the GPS
          report, it shows which streets booked, so the next drop goes where it worked.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout title="Medical clinics across Melbourne">
          <p className="m-0">
            Every drop is exclusive, with no other advertisers&rsquo; flyers in the run. Family suburbs like{" "}
            <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
            <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink> and{" "}
            <TextLink href="/melbourne/flyer-distribution-box-hill">Box Hill</TextLink> suit clinics taking new patients.
            Get a price on the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or see{" "}
            <TextLink href="/industries/dentists">dental clinics</TextLink> and{" "}
            <TextLink href="/industries/healthcare">healthcare</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the families near your clinic"
        lead="Tell us your clinic address and how many homes you'd like to reach. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="GP and medical clinic letterbox drop FAQs" />
    </>
  );
}
