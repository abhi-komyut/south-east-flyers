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

const PAGE_PATH = "/services/gps-tracked-flyer-distribution";

export const metadata: Metadata = {
  title: "GPS-Tracked Flyer Distribution",
  description:
    "GPS-tracked flyer distribution across Melbourne's south-east and eastern suburbs. Every distribution run is tracked via the Strava app, so you get a report of the routes and streets covered. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "GPS-Tracked Flyer Distribution | South East Flyers",
    description:
      "Every distribution run is GPS-tracked via the Strava app. See the routes and streets your campaign covered, with a report provided once it's complete.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const tracked: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "The distribution route",
    body: "Each distributor records their route in real time using the Strava app as they work through your target area.",
    icon: <><path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" /><path d="M9 3v15M15 6v15" /></>,
  },
  {
    title: "The streets covered",
    body: "The recorded routes show the streets and areas that were walked or ridden during your campaign.",
    icon: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  },
  {
    title: "Campaign progress",
    body: "Because runs are logged as they happen, we can see how a campaign is progressing across the scheduled area.",
    icon: <><path d="M3 17 9 11 13 15 21 7" /><path d="M21 7h-6M21 7v6" /></>,
  },
  {
    title: "A report at the end",
    body: "Once your campaign is complete you receive a report summarising the routes and streets covered, with a map of the distribution.",
    icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  },
];

const faqs = [
  {
    question: "How does your GPS tracking work?",
    answer:
      "When our distributors are out delivering, they record their route in real time using the Strava app. That produces a mapped record of the streets and areas covered during your campaign.",
  },
  {
    question: "What's included in the report I receive?",
    answer:
      "After the campaign you get a report summarising the routes and streets covered, along with a map of the distribution, so you can see where your flyers went.",
  },
  {
    question: "Does GPS tracking prove every letterbox received a flyer?",
    answer:
      "We're upfront about this: GPS records the route the distributor travelled and the streets they covered. It gives you real accountability over where the campaign went, but we don't claim it proves each individual letterbox received a flyer.",
  },
  {
    question: "Why does GPS tracking matter for flyer distribution?",
    answer:
      "Distribution has a reputation problem: not every operator delivers what they're paid for. GPS tracking is how we stay accountable: you're not just trusting the work was done, you can see the routes it took.",
  },
  {
    question: "Can I see how the campaign is progressing?",
    answer:
      "Yes. Because runs are logged as they happen, we can see progress across the scheduled area during the campaign, not just at the end.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GPS-Tracked Flyer Distribution",
  serviceType: "GPS-Tracked Flyer Distribution",
  description:
    "GPS-tracked flyer distribution across Melbourne's south-east and eastern suburbs. Distribution runs are tracked via the Strava app, with a report of the routes and streets covered.",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
};

export default function GpsTrackedFlyerDistribution() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "GPS-tracked flyer distribution" }]}
        h1="GPS-tracked flyer distribution"
        lead="Every distribution run is GPS-tracked using the Strava app, so you can see the routes and streets your campaign covered, not just an invoice at the end."
        tagline="You provide the flyers. We handle the distribution, and show you where it went."
        image={{ src: "/images/redesign/gps-strava.jpg", alt: "Three phone screens showing Strava route maps recorded during a South East Flyers letterbox run" }}
      />

      <Section title="How our GPS tracking works" first>
        <p className="text-lg text-ink">
          When our distributors are out delivering your flyers, they record their route in real time using the
          Strava app. That gives us, and you, a clear record of the streets and areas that were covered during
          your campaign.
        </p>
        <p>
          To be clear about what this shows: GPS tracking records the route the distributor travelled and the
          streets they covered. It gives you real visibility and accountability over where your campaign went. We
          don&rsquo;t claim it proves that every individual letterbox received a flyer, but you get a genuine,
          mapped record of the distribution rather than taking it on trust.
        </p>
      </Section>

      <section aria-labelledby="see-title" className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] py-[clamp(80px,9vw,128px)] flex flex-wrap gap-12 gap-x-[88px] items-stretch">
        <Reveal className="flex-[1_1_400px] rounded-card overflow-hidden min-h-[460px]">
          <Image
            src="/images/redesign/walker-street.jpg"
            alt="A walker checking his flyers beside a brick letterbox on a leafy street"
            width={700}
            height={460}
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="flex-[1.15_1_440px] flex flex-col gap-9 justify-center">
          <h2 id="see-title" className="m-0 font-display font-medium text-[clamp(32px,3.4vw,46px)] leading-[1.1] tracking-[-0.015em]">
            What you can see
          </h2>
          <dl className="m-0 flex flex-col gap-7">
            {tracked.map((t) => (
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
        <Callout title="Why GPS tracking matters">
          <p className="m-0">
            Flyer distribution has a reputation problem: not every operator actually delivers what they&rsquo;re
            paid for. GPS tracking is how we keep ourselves accountable. You aren&rsquo;t just trusting that the
            work was done, you can see the routes it took.
          </p>
          <p className="m-0">
            GPS tracking applies across our <TextLink href="/services/flyer-distribution">flyer distribution</TextLink>{" "}
            and <TextLink href="/services/letterbox-distribution">letterbox distribution</TextLink> campaigns across{" "}
            <TextLink href="/melbourne/flyer-distribution-melbourne">Melbourne</TextLink>&rsquo;s south-east and
            eastern suburbs.
          </p>
        </Callout>
      </div>

      <QuickQuoteForm
        heading="Want proof of where your flyers went?"
        lead="Every campaign is GPS-tracked and reported. Get a free, no-obligation quote for your distribution."
      />

      <FAQSection
        items={faqs}
        title="GPS tracking FAQs"
        subtitle="Common questions about how we track and report on your campaign."
      />
    </>
  );
}
