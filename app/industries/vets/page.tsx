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

const PAGE_PATH = "/industries/vets";

export const metadata: Metadata = {
  title: { absolute: "Vet Marketing Melbourne | South East Flyers" },
  description:
    "Vet marketing with letterbox drops: reach pet owners around your clinic in Melbourne's south-east. Exclusive, GPS-tracked delivery, $200 per 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Vet Clinic Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for vet clinics across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do letterbox drops work for vet clinics?",
    answer:
      "Yes, because pet owners choose a vet close to home. Nobody wants a long drive with a sick dog or an anxious cat. A flyer reaches every household in your catchment, including new arrivals who haven't picked a clinic yet.",
  },
  {
    question: "What should a vet flyer focus on?",
    answer:
      "One clear reason to visit: a new clinic, a new vet, extended hours, or a puppy and kitten package. Include your address, parking, opening hours and whether you see emergencies, so owners know what to do at 7pm on a Sunday.",
  },
  {
    question: "When is the best time for vet marketing drops?",
    answer:
      "Spring brings new puppies and kittens, plus fleas and ticks, so September and October work well. Many clinics also run dental promotions in August, which suits a drop in late July.",
  },
  {
    question: "How many homes should a vet clinic cover?",
    answer:
      "Most clinics start with 2,500 to 5,000 homes nearby, at $500 to $1,000. House suburbs with backyards hold more dogs, so a clinic in a family suburb can expect more pet households per street than one surrounded by apartments.",
  },
  {
    question: "Can we deliver a flyer with a voucher for a first consult?",
    answer:
      "Yes. A voucher only the flyer carries is also the easiest way to measure the drop. Count redemptions and match them against the GPS report to see which streets responded.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for vet clinics",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Veterinary clinics" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
  offers: { "@type": "Offer", price: "200", priceCurrency: "AUD", description: "Per 1,000 flyers, exclusive delivery" },
};

export default function Vets() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare", href: "/industries/healthcare" },
          { name: "Vets" },
        ]}
        h1="Letterbox Marketing for Vet Clinics"
        lead="Vet marketing that reaches the pet owners on your doorstep. Your flyer goes into each letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/walker-street.jpg", alt: "A walker checking flyers beside a brick letterbox on a leafy street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "$200", label: "per 1,000 flyers" },
          { value: "1,000", label: "flyer minimum, $200 test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Pet owners choose the closest good vet" first>
        <p>
          When a pet is unwell, owners want a clinic they can reach in minutes. Most stay with the first vet that
          treats them well, often for the life of the animal and the next one after it.
        </p>
        <p>
          That makes the households around your clinic worth more than any others. A letterbox drop reaches all of
          them, including families who moved in recently and haven&rsquo;t chosen a vet yet.
        </p>
      </Section>

      <Section title="Reasons to send a vet flyer">
        <Bullets
          items={[
            <><strong>A new clinic or a new location:</strong> owners need to know you exist before their pet needs you.</>,
            <><strong>Puppy and kitten packages:</strong> vaccinations, desexing and microchipping bundled for new owners.</>,
            <><strong>Longer hours or weekend appointments</strong>, which matter to owners who work full-time.</>,
            <><strong>A new vet</strong> with a special interest, such as cats, rabbits or dental work.</>,
          ]}
        />
        <p>
          Vet clinic marketing works best with one message per drop. A flyer that lists every service reads like a
          brochure; one that says &ldquo;Now open Saturdays&rdquo; gets acted on.
        </p>
      </Section>

      <Section title="Timing through the year">
        <p>
          Spring is the busiest window. New puppies and kittens arrive, and fleas, ticks and grass seeds bring owners
          in. A drop in early September lands as owners start looking.
        </p>
        <p>
          Many clinics run dental promotions in August, so a late-July drop works there. Before Christmas, a reminder
          about boarding checks and holiday hours is useful to owners and keeps your name in the house.
        </p>
      </Section>

      <Section title="Where the pets are">
        <p>
          House suburbs with backyards and parks hold the most dogs. Across our service area that includes{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>. Apartment streets have more
          cats and small dogs, which still need vaccinations and check-ups.
        </p>
        <p>
          Vet flyers pair well with other pet businesses in the same streets. See our{" "}
          <TextLink href="/industries/pet-groomers">dog groomers and dog wash</TextLink> page for how groomers plan
          their drops.
        </p>
      </Section>

      <Section title="Vet marketing you can measure">
        <p>
          New clients fill in a registration form for their pet. Add a line asking how they found you, and note their
          suburb. Within a couple of months you&rsquo;ll know which streets responded to the flyer.
        </p>
        <p>
          A first-consult voucher printed only on the flyer gives you a second count. Matched against the GPS report,
          the two numbers show where to drop next, and whether a second run in the same streets brings more owners
          through the door.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities and cost"
          figures={[{ value: "$500", label: "2,500 homes near the clinic" }, { value: "$1,000", label: "5,000 homes, wider reach" }]}
        >
          Every drop is $200 per 1,000 flyers, exclusive, from 1,000. See the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or our{" "}
          <TextLink href="/industries/healthcare">healthcare</TextLink> page for other clinics.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the pet owners near your clinic"
        lead="Tell us your clinic address and how far you'd like to reach. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Vet clinic letterbox drop FAQs" />
    </>
  );
}
