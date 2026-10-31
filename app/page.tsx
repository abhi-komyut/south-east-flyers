import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import {
  PageHero,
  FactsStrip,
  LogoWall,
  StepsBand,
} from "./components/landing";
import QuickQuoteForm from "./components/QuickQuoteForm";
import FAQSection from "./components/FAQSection";
import Reveal from "./components/Reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.southeastflyers.com.au/#localbusiness",
  name: "South East Flyers & Marketing Solutions",
  description:
    "Exclusive, GPS-tracked flyer distribution and letterbox drops across Melbourne's south-east and eastern suburbs. Never bundled.",
  url: "https://www.southeastflyers.com.au",
  telephone: "+61402824070",
  image: "https://www.southeastflyers.com.au/og-logo.jpg",
  logo: "https://www.southeastflyers.com.au/logo.png",
  areaServed: [{ "@type": "City", name: "Melbourne", addressCountry: "AU" }],
  serviceType: [
    "Flyer Distribution",
    "Letterbox Drops",
    "Leaflet Distribution",
    "Pamphlet Distribution",
    "Letterbox Advertising",
    "Catalogue Distribution",
  ],
  knowsAbout: [
    "GPS tracked flyer distribution",
    "No junk mail compliant delivery",
    "Targeted letterbox distribution",
    "Real estate flyer distribution",
  ],
};

const comparisonRows: { feature: string; bundled: string; sef: string }[] = [
  { feature: "In the letterbox", bundled: "Inside a pack of other ads", sef: "Your flyer, on its own" },
  { feature: "Starting quantity", bundled: "Often several thousand", sef: "1,000 flyers" },
  { feature: "Proof of delivery", bundled: "Rarely shown", sef: "GPS route map, every time" },
  { feature: "“No Junk Mail” signs", bundled: "Varies by walker", sef: "Always respected" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        h1="Flyer distribution in Melbourne that actually gets read."
        lead="Every flyer goes in the letterbox on its own, never bundled. Every run is GPS-tracked, so you see the streets we covered."
        image={{ src: "/images/redesign/walker-foot.jpg", alt: "A South East Flyers walker posting a flyer into a letterbox on a sunny Melbourne street" }}
      />

      <FactsStrip
        stats={[
          { value: "40+", label: "suburbs across Melbourne's south-east" },
          { value: "100%", label: "GPS-tracked delivery routes" },
          { value: "Never", label: "bundled with other advertisers" },
          { value: "Quick", label: "turnaround on your quote" },
        ]}
      />

      <LogoWall />

      {/* Exclusive vs bundled comparison */}
      <section aria-labelledby="exclusive-title" className="bg-cream py-[clamp(80px,9vw,128px)] px-[clamp(20px,4vw,48px)]">
        <div className="max-w-[1144px] mx-auto flex flex-wrap gap-14 gap-x-20 items-center">
          <Reveal className="flex-[1_1_380px] flex flex-col gap-[22px]">
            <h2 id="exclusive-title" className="m-0 font-display font-medium text-[clamp(34px,3.6vw,50px)] leading-[1.1] tracking-[-0.015em]">
              One flyer. One letterbox. Nothing stacked on top.
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-body max-w-[470px]">
              Bundled drops put your flyer inside a pack of other advertisers&rsquo; catalogues. Ours go in by themselves, so the household sees your offer first and only.
            </p>
            <Link href="/services/letterbox-distribution" className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] text-navy no-underline min-h-11">
              How our letterbox distribution works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
          <Reveal delay={100} className="flex-[1.2_1_460px] bg-white rounded-card overflow-hidden">
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] text-[15px] leading-snug">
              <div className="px-6 py-5" />
              <div className="px-6 py-5 font-heading text-[13px] font-semibold text-muted">Bundled drops</div>
              <div className="px-6 py-5 font-heading text-[13px] font-bold text-white bg-navy">South East Flyers</div>
              {comparisonRows.map((row) => (
                <Fragment key={row.feature}>
                  <div className="px-6 py-5 border-t border-line font-heading font-semibold">
                    {row.feature}
                  </div>
                  <div className="px-6 py-5 border-t border-line text-muted">
                    {row.bundled}
                  </div>
                  <div className="px-6 py-5 border-t border-line bg-navy/[0.07]">
                    {row.sef}
                  </div>
                </Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GPS proof */}
      <section aria-labelledby="gps-title" className="py-[clamp(80px,9vw,128px)] px-[clamp(20px,4vw,48px)]">
        <div className="max-w-[1144px] mx-auto flex flex-wrap gap-14 gap-x-[88px] items-center">
          <Reveal className="flex-[1.15_1_440px] relative rounded-card overflow-hidden aspect-[1/0.86] bg-[#E9EDEC]">
            <Image
              src="/images/redesign/gps-strava.jpg"
              alt="Three phone screens showing Strava route maps recorded during a South East Flyers letterbox run"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="flex-[1_1_380px] flex flex-col gap-[22px]">
            <h2 id="gps-title" className="m-0 font-display font-medium text-[clamp(34px,3.6vw,50px)] leading-[1.1] tracking-[-0.015em]">
              Proof of delivery, street by street.
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-body max-w-[460px]">
              Every walker records their route on Strava. When the run is finished, you get the map and a summary, so you know exactly where your budget went.
            </p>
            <ul className="list-none m-0 mt-1.5 p-0 flex flex-col gap-3.5">
              {["A route map for every run", "The streets and suburbs covered", "Drops completed against your order"].map((item) => (
                <li key={item} className="flex gap-3.5 items-start text-base leading-snug">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-navy shrink-0 mt-px" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M8 12.5l2.6 2.5L16 9.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services/gps-tracked-flyer-distribution" className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] text-navy no-underline min-h-11">
              See how GPS tracking works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Team gallery */}
      <section aria-labelledby="team-title" className="px-[clamp(20px,4vw,48px)] pb-[clamp(80px,9vw,128px)]">
        <div className="max-w-[1144px] mx-auto flex flex-col gap-11">
          <Reveal className="flex flex-col gap-4 max-w-[640px]">
            <h2 id="team-title" className="m-0 font-display font-medium text-[clamp(34px,3.6vw,50px)] leading-[1.1] tracking-[-0.015em]">
              Real people on Melbourne footpaths.
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-body">
              Walkers and e-bike riders cover the bayside, inner-south and eastern suburbs every day, from Port Melbourne out to Box Hill.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-5">
            <Reveal as="figure" className="group flex-[2_1_460px] flex flex-col gap-3">
              <div className="rounded-card overflow-hidden h-[540px]">
                <Image src="/images/redesign/walker-ebike.jpg" alt="An e-bike distributor stopping at a letterbox on a quiet residential street" width={920} height={540} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
              </div>
              <figcaption className="text-sm text-muted">E-bike riders for fast, wide suburb coverage</figcaption>
            </Reveal>
            <div className="flex-[1_1_280px] flex flex-col gap-5">
              <Reveal as="figure" delay={80} className="group flex flex-col gap-3">
                <div className="rounded-card overflow-hidden h-[238px]">
                  <Image src="/images/redesign/letterbox-hand.jpg" alt="A hand posting a real estate flyer into a steel letterbox" width={460} height={238} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                </div>
                <figcaption className="text-sm text-muted">One flyer per letterbox</figcaption>
              </Reveal>
              <Reveal as="figure" delay={160} className="group flex flex-col gap-3">
                <div className="rounded-card overflow-hidden h-[238px]">
                  <Image src="/images/redesign/walker-street.jpg" alt="A walker checking his flyers beside a brick letterbox on a leafy street" width={460} height={238} className="w-full h-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.035]" />
                </div>
                <figcaption className="text-sm text-muted">Walkers, street by street</figcaption>
              </Reveal>
            </div>
            <Reveal as="figure" delay={240} className="group flex-[1_1_240px] flex flex-col gap-3">
              <div className="rounded-card overflow-hidden h-[540px]">
                <Image src="/images/redesign/delivery-real.jpg" alt="A South East Flyers distributor delivering to a brick letterbox on a Melbourne footpath" width={460} height={540} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
              </div>
              <figcaption className="text-sm text-muted">On the job in Melbourne&rsquo;s south-east</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      <StepsBand
        title="From quote to GPS report in four steps."
        steps={[
          { title: "Tell us your suburbs", body: "Choose suburbs or streets. We'll suggest the areas most likely to respond to your offer." },
          { title: "Hand over your flyers", body: "You print, so you keep control of design and stock. We plan the walks around your quantity." },
          { title: "We deliver on foot and e-bike", body: "Distribution starts within 3 to 5 business days, or within 48 hours when it's urgent." },
          { title: "You get the GPS report", body: "Route maps, streets covered and drops completed, ready for planning your next campaign." },
        ]}
      />

      {/* Industries teaser */}
      <section aria-labelledby="industries-title" className="bg-cream py-[clamp(80px,9vw,128px)] px-[clamp(20px,4vw,48px)]">
        <div className="max-w-[1144px] mx-auto flex flex-col gap-12">
          <Reveal>
            <h2 id="industries-title" className="m-0 font-display font-medium text-[clamp(34px,3.6vw,50px)] leading-[1.1] tracking-[-0.015em] max-w-[640px]">
              Built for businesses that run on local trust.
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-7">
            <Reveal as="div" className="group flex-[1.45_1_400px]">
              <Link href="/industries/real-estate" className="flex flex-col gap-[18px] no-underline text-ink">
                <div className="rounded-card overflow-hidden h-[520px]">
                  <Image src="/images/redesign/ind-realestate.jpg" alt="A real estate agent standing in front of a For Sale sign" width={700} height={520} className="w-full h-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 font-heading font-semibold text-xl">Real estate</h3>
                  <p className="m-0 text-[15px] leading-snug text-body max-w-[440px]">Just listed, just sold and appraisal drops around every listing, timed to your open homes.</p>
                </div>
              </Link>
            </Reveal>
            <div className="flex-[1_1_300px] flex flex-col gap-7">
              <Reveal as="div" delay={80} className="group">
                <Link href="/industries/home-services" className="flex gap-5 items-start flex-wrap no-underline text-ink">
                  <div className="flex-[0_0_168px] h-[210px] rounded-card overflow-hidden">
                    <Image src="/images/redesign/ind-trades.jpg" alt="A roofer in hi-vis working on a tiled Melbourne roof" width={168} height={210} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  </div>
                  <div className="flex-[1_1_160px] flex flex-col gap-2 pt-1.5">
                    <h3 className="m-0 font-heading font-semibold text-lg">Trades and home services</h3>
                    <p className="m-0 text-[15px] leading-snug text-body">Roofers, plumbers and electricians reaching the streets they already work in.</p>
                  </div>
                </Link>
              </Reveal>
              <Reveal as="div" delay={160} className="group">
                <Link href="/industries/healthcare" className="flex gap-5 items-start flex-wrap no-underline text-ink">
                  <div className="flex-[0_0_168px] h-[210px] rounded-card overflow-hidden">
                    <Image src="/images/redesign/ind-health.jpg" alt="A dentist in her clinic" width={168} height={210} className="w-full h-full object-cover object-[50%_25%] transition-transform duration-500 group-hover:scale-[1.035]" />
                  </div>
                  <div className="flex-[1_1_160px] flex flex-col gap-2 pt-1.5">
                    <h3 className="m-0 font-heading font-semibold text-lg">Healthcare</h3>
                    <p className="m-0 text-[15px] leading-snug text-body">Dental and allied health clinics introducing themselves to nearby households.</p>
                  </div>
                </Link>
              </Reveal>
              <Link href="/industries" className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] text-navy no-underline min-h-11">
                All industries we work with
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuickQuoteForm
        heading="Get a quote with a quick turnaround."
        lead="Tell us where and how many. We'll send pricing, a coverage map and a timeline. No obligation."
      />

      <FAQSection
        title="Questions we hear every week."
        subtitle={
          <>
            Something else on your mind? Call <a href="tel:0402824070" className="text-navy [font-variant-numeric:tabular-nums]">0402 824 070</a>.
          </>
        }
        items={[
          {
            question: "Which suburbs do you cover?",
            answer: "Anywhere between Port Melbourne and Box Hill, including St Kilda, Brighton, Caulfield, Bentleigh, Glen Waverley, Kew and Camberwell. See every suburb on our Melbourne page.",
          },
          {
            question: "How does GPS tracking work?",
            answer: "Each distributor records their route in Strava. After the campaign you receive a report with the streets covered and a map of the route.",
          },
          {
            question: "Do you print the flyers too?",
            answer: "No. We specialise in distribution. You supply the printed flyers and we get them into the right letterboxes.",
          },
        ]}
      />
    </>
  );
}
