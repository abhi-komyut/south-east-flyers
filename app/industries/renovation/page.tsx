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

const PAGE_PATH = "/industries/renovation";

export const metadata: Metadata = {
  title: { absolute: "Renovation Flyers Melbourne | South East Flyers" },
  description:
    "Renovation flyers for kitchen, bathroom and whole-home renovators, delivered on their own to older homes in Melbourne's south-east. Exclusive delivery, from 1,000 flyers.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Renovation Flyers & Letterbox Drops Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked letterbox drops for renovators across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do renovation flyers bring in enquiries?",
    answer:
      "Yes, when they reach owners of homes that are due for work. Most people think about a new kitchen or bathroom for a year or more before they call anyone, so a flyer that arrives more than once keeps your name in that decision.",
  },
  {
    question: "When is the best time for a renovation letterbox drop?",
    answer:
      "Late summer and early autumn suit owners who want work finished before winter or Christmas. Another good window is right after the spring selling season, when new owners start changing the house they just bought.",
  },
  {
    question: "Should I advertise kitchens and bathrooms on the same flyer?",
    answer:
      "Only if you do both well. One room with a strong before-and-after photo usually works better than a list of services. Many renovators alternate flyers, with a kitchen drop one month and a bathroom drop the next.",
  },
  {
    question: "Can you deliver around a renovation I'm finishing?",
    answer:
      "Yes. Neighbours have watched the skip bin and the trades come and go, and many are curious about the result. A 1,000-flyer drop around the job turns that curiosity into quote requests.",
  },
  {
    question: "Which homes should a renovation drop target?",
    answer:
      "Houses built from the 1960s to the 1990s with original kitchens and bathrooms. They make up many streets in suburbs like Bentleigh, Glen Waverley and Mount Waverley. Tell us your suburbs and we will suggest streets.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer distribution for renovators",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Renovation businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function Renovation() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services", href: "/industries/home-services" },
          { name: "Renovation" },
        ]}
        h1="Renovation flyers for Melbourne renovators"
        lead="Renovation flyers delivered on their own to homes with original kitchens and bathrooms, and to the neighbours of the jobs you are finishing. Every route is GPS-tracked."
        image={{ src: "/images/redesign/walker-street.jpg", alt: "A walker checking flyers beside a brick letterbox on a leafy street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "40+", label: "suburbs covered" },
          { value: "1,000", label: "flyers, your first test run" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="A long decision, won by familiarity" first>
        <p>
          Nobody books a new kitchen after seeing one ad. Owners collect ideas, visit showrooms and talk it through
          for months. The renovator who gets the call is often the one whose name has turned up more than once in
          that time.
        </p>
        <p>
          Repeat letterbox drops are built for that. A flyer that arrives on its own gets read, and a second and third
          one in the same streets build the familiarity that turns into an enquiry when the owner is finally ready.
        </p>
      </Section>

      <Section title="Homes that are due for work">
        <p>
          The best streets for renovation work are full of houses from the 1960s to the 1990s, many still with their
          original kitchens, bathrooms and laundries. Across our service area that describes much of{" "}
          <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>,{" "}
          <TextLink href="/melbourne/flyer-distribution-glen-waverley">Glen Waverley</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-mount-waverley">Mount Waverley</TextLink>.
        </p>
        <p>
          Period homes in suburbs like <TextLink href="/melbourne/flyer-distribution-malvern">Malvern</TextLink> and{" "}
          <TextLink href="/melbourne/flyer-distribution-camberwell">Camberwell</TextLink> need a different pitch. Those
          owners want an extension that respects the original house, so show heritage work, not a flat-pack kitchen.
        </p>
      </Section>

      <Section title="When owners start planning">
        <Bullets
          items={[
            <><strong>Late summer to autumn:</strong> owners who want the work done before winter or Christmas start getting quotes.</>,
            <><strong>After a purchase:</strong> new owners often renovate in the first year. Drops in streets with recent sales reach them early.</>,
            <><strong>Before selling:</strong> owners preparing for the spring market look for quick bathroom and kitchen updates in winter.</>,
          ]}
        />
      </Section>

      <Section title="What sells a renovation on paper">
        <Bullets
          items={[
            <><strong>One before-and-after photo</strong> of a real job, ideally in the same suburb.</>,
            <><strong>A typical timeframe</strong>, such as &ldquo;most bathrooms done in three weeks&rdquo;, if it is true for you.</>,
            <><strong>Your registration and warranty</strong>, so owners can check you before calling.</>,
            <><strong>A free design consult</strong> as the call to action, rather than a price.</>,
          ]}
        />
        <p>
          Kitchen renovation flyers and bathroom renovation marketing can share a route but rarely a flyer. Pick one
          room per drop and alternate.
        </p>
      </Section>

      <Section title="Renovation flyers you can measure">
        <p>
          Because renovation decisions take months, a flyer may bring a call long after it was delivered. Put a short
          offer code on each drop, such as a free design consult, and ask every enquiry where they heard about you.
        </p>
        <p>
          Keep a simple list of enquiries by street and month. Matched against the GPS report for each run, it shows
          which suburbs respond to your work. Most renovators find two or three pockets that keep producing jobs, and
          that is where the next drops should go.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities"
        >
          <p className="m-0">
            Renovation jobs are large and less frequent, so most renovators need a few thousand homes to see steady
            enquiries. See the <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink>{" "}
            page for a quote. Renovation sits on our <TextLink href="/industries/home-services">home services</TextLink> page with{" "}
            <TextLink href="/industries/builders">builders</TextLink> and{" "}
            <TextLink href="/industries/plumbers">plumbers</TextLink>.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Reach the homes that need a renovation"
        lead="Tell us your suburbs and recent jobs. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Renovation letterbox drop FAQs" />
    </>
  );
}
