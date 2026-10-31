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

const PAGE_PATH = "/industries/pet-groomers";

export const metadata: Metadata = {
  title: { absolute: "Dog Grooming Marketing Melbourne | South East Flyers" },
  description:
    "Dog grooming marketing with letterbox drops for salons, mobile groomers and dog washes in Melbourne's south-east. Exclusive, GPS-tracked, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Letterbox Drops for Dog Groomers & Dog Washes | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for dog groomers and dog washes across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do letterbox drops work for dog groomers?",
    answer:
      "They suit grooming because most clients live within a short drive and come back every six to eight weeks. A flyer reaches dog owners in those streets who haven't found a groomer they like yet, and each one who books can return for years.",
  },
  {
    question: "Can a mobile dog groomer target specific streets?",
    answer:
      "Yes. Mobile groomers do best filling the days they already spend in a suburb. Give us the suburbs on your weekly run and we'll cover the streets around your existing clients, with a GPS map of each route.",
  },
  {
    question: "When should a dog wash or groomer drop flyers?",
    answer:
      "Spring is the strongest window, when dogs shed their winter coats and owners spend more time outdoors. Early December also works, as owners book a groom before Christmas visitors and summer holidays.",
  },
  {
    question: "What should a dog grooming flyer include?",
    answer:
      "A photo of a dog you groomed, your prices for small, medium and large dogs, a first-visit offer and how to book. Owners also want to know how you handle anxious dogs, so say it if you specialise.",
  },
  {
    question: "How many flyers should a groomer start with?",
    answer:
      "1,000 to 2,500 homes around your salon or across your mobile route. Leafy house suburbs with backyards, such as Mount Waverley or Bentleigh, usually hold more dog owners than apartment streets.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for dog groomers and dog washes",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Dog groomers, mobile groomers and dog wash businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function PetGroomers() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Local Businesses", href: "/industries/local-businesses" },
          { name: "Dog Groomers" },
        ]}
        h1="Letterbox marketing for dog groomers and dog washes"
        lead="Dog grooming marketing that reaches the households with dogs on your doorstep or along your mobile route. Your flyer goes in on its own, and every run is GPS-tracked."
        image={{ src: "/images/redesign/walker-foot.jpg", alt: "A South East Flyers walker posting a flyer into a letterbox on a sunny Melbourne street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "40+", label: "suburbs covered" },
          { value: "1,000", label: "flyers, your first test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="A local, repeat business" first>
        <p>
          Dog owners rarely drive far for a groom. Most choose a salon, dog wash or mobile groomer close to home, then
          return every six to eight weeks. That makes grooming one of the most local businesses there is.
        </p>
        <p>
          A letterbox drop reaches every household in your chosen streets, including owners who have never searched
          for a groomer because they wash the dog in the backyard. A good flyer gives them a reason to try you once.
        </p>
      </Section>

      <Section title="Salons, dog washes and mobile groomers">
        <Bullets
          items={[
            <><strong>Salons</strong> do best covering the streets within a short drive, with an opening or first-groom offer.</>,
            <><strong>Self-serve dog washes</strong> suit a drop around the site with a free or discounted first wash. Dog wash flyers work best with the opening hours on the front.</>,
            <><strong>Mobile groomers</strong> should fill the days they already spend in a suburb. A new client next door to an existing one saves travel.</>,
          ]}
        />
      </Section>

      <Section title="Where the dogs are">
        <p>
          House suburbs with backyards and parks hold the most dog owners. Across our service area that includes{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-sandringham">Sandringham</TextLink>, where the foreshore and
          parks are busy with dog walkers every morning.
        </p>
        <p>
          Apartment streets have fewer large dogs but plenty of small breeds that need regular clipping. A salon near{" "}
          <TextLink href="/melbourne/flyer-distribution-st-kilda">St Kilda</TextLink> can do well with a flyer aimed at
          small-dog owners.
        </p>
      </Section>

      <Section title="What a grooming flyer should show">
        <Bullets
          items={[
            <><strong>A real photo</strong> of a dog you groomed, before and after if you have it.</>,
            <><strong>Prices by size</strong>, so owners know roughly what they will pay.</>,
            <><strong>How you handle nervous dogs</strong>, if you specialise in it.</>,
            <><strong>A first-visit offer</strong> and one way to book.</>,
          ]}
        />
        <p>
          Pet business marketing often leans on cute stock photos. Owners respond better to a dog that looks like theirs
          and a groomer they can picture.
        </p>
      </Section>

      <Section title="Dog grooming marketing that brings clients back">
        <p>
          The first groom is the hard part. Once a dog owner has tried you, the rebooking card you hand over at pickup
          does most of the work. A flyer&rsquo;s job is to get that first visit.
        </p>
        <p>
          Put a first-visit code on each drop and note the suburb of every new client. Within a few months you will
          know which streets fill your book. A mobile groomer can then plan routes around those streets, and a salon
          can repeat the drop there each spring before the shedding season.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities"
        >
          <p className="m-0">
            Every drop is exclusive, from 1,000 flyers. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page for a quote, or our{" "}
            <TextLink href="/industries/local-businesses">local business</TextLink> page for other businesses that work
            the same way.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the dog owners near you"
        lead="Tell us where your salon is or which suburbs your van covers. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Dog groomer letterbox drop FAQs" />
    </>
  );
}
