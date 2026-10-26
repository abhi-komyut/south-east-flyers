import Image from "next/image";
import Link from "next/link";
import ClientFilter from "../components/ClientFilter";
import Reveal from "../components/Reveal";

const steps = [
  {
    number: "01",
    title: "Get a quote",
    description: "Tell us your target suburbs, quantity and timeline. We'll send a detailed quote within 24 hours.",
  },
  {
    number: "02",
    title: "We distribute",
    description: "Our trained walkers and e-bike riders deliver your flyers street by street, tracked live via Strava.",
  },
  {
    number: "03",
    title: "Get your report",
    description: "Receive a detailed GPS report showing every street covered, with route maps and delivery proof.",
  },
];

const commitments = [
  {
    title: "High-volume daily distribution",
    description:
      "We distribute flyers every day across Melbourne's south-east and eastern suburbs, so your campaign reaches a wide audience on schedule.",
  },
  {
    title: "No Junk Mail compliance",
    description:
      "We respect every \"No Junk Mail\" sign. Our walkers check each letterbox, keeping your brand compliant and reputable.",
  },
  {
    title: "Strict anti-bundling policy",
    description: "Your flyer is never bundled with competing ads, so your message stands out instead of getting buried.",
  },
];

export default function PortfolioContent() {
  return (
    <>
      <section aria-labelledby="page-title" className="bg-teal-deep text-white px-[clamp(20px,4vw,48px)] py-[clamp(64px,7vw,104px)]">
        <div className="max-w-[1144px] mx-auto flex flex-wrap gap-12 gap-x-[88px] items-end">
          <div className="flex-[1.3_1_460px] flex flex-col gap-[22px]">
            <h1 id="page-title" className="m-0 font-display font-medium text-[clamp(40px,4.6vw,62px)] leading-[1.06] tracking-[-0.02em]">
              Our clients
            </h1>
            <p className="m-0 text-[clamp(17px,1.4vw,19px)] leading-relaxed text-white/85 max-w-[560px]">
              We work with recognised real estate, healthcare and trades brands across Melbourne&rsquo;s south-east
              and eastern suburbs, delivering every flyer exclusively and tracking every run by GPS.
            </p>
          </div>
          <dl className="flex-[1_1_360px] m-0 flex flex-wrap gap-6 gap-x-10">
            <div className="flex flex-col-reverse">
              <dt className="text-sm text-white/80">No bundling, ever</dt>
              <dd className="mb-1.5 font-display text-[34px] leading-[1.1]">Exclusive</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm text-white/80">Runs GPS-tracked</dt>
              <dd className="mb-1.5 font-display text-[34px] leading-[1.1] [font-variant-numeric:tabular-nums]">100%</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm text-white/80">Minimum flyers</dt>
              <dd className="mb-1.5 font-display text-[34px] leading-[1.1] [font-variant-numeric:tabular-nums]">1,000</dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-label="Trusted by Melbourne businesses" className="bg-cream px-[clamp(20px,4vw,48px)] py-[clamp(72px,8vw,112px)]">
        <div className="max-w-[1144px] mx-auto">
          <ClientFilter heading="Trusted by Melbourne businesses" />
        </div>
      </section>

      <section aria-labelledby="how-title" className="px-[clamp(20px,4vw,48px)] py-[clamp(80px,9vw,120px)]">
        <div className="max-w-[1144px] mx-auto flex flex-col gap-12">
          <Reveal className="flex flex-col gap-3.5">
            <h2 id="how-title" className="m-0 font-display font-medium text-[clamp(30px,3.2vw,44px)] leading-[1.1]">
              How it works
            </h2>
            <p className="m-0 text-[17px] text-body">Three simple steps from quote to campaign report.</p>
          </Reveal>
          <ol className="list-none m-0 p-0 flex flex-wrap gap-9 gap-x-10">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 80} className="flex-[1_1_280px] flex flex-col gap-3 pt-[22px] border-t-2 border-navy">
                <span className="font-display text-[22px] text-required">{step.number}</span>
                <h3 className="m-0 font-heading font-semibold text-lg">{step.title}</h3>
                <p className="m-0 text-base leading-relaxed text-body">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="commit-title" className="px-[clamp(20px,4vw,48px)] pb-[clamp(80px,9vw,120px)]">
        <div className="max-w-[1144px] mx-auto flex flex-wrap gap-12 gap-x-[88px] items-center">
          <Reveal className="flex-[1_1_400px] rounded-card overflow-hidden h-[520px]">
            <Image
              src="/images/redesign/walker-ebike.jpg"
              alt="An e-bike distributor at a letterbox on a residential street"
              width={700}
              height={520}
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="flex-[1.1_1_420px] flex flex-col gap-[30px]">
            <h2 id="commit-title" className="m-0 font-display font-medium text-[clamp(30px,3.2vw,44px)] leading-[1.1]">
              Our commitment to quality
            </h2>
            <dl className="m-0 flex flex-col gap-6">
              {commitments.map((c) => (
                <div key={c.title} className="pt-5 border-t border-line">
                  <dt className="font-heading font-semibold text-lg mb-1.5">{c.title}</dt>
                  <dd className="m-0 text-base leading-relaxed text-body">{c.description}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="cta-title" className="bg-navy text-white px-[clamp(20px,4vw,48px)] py-[clamp(72px,8vw,112px)]">
        <Reveal className="max-w-[1144px] mx-auto flex flex-wrap gap-8 gap-x-16 items-center justify-between">
          <div className="flex-[1_1_480px] flex flex-col gap-4">
            <h2 id="cta-title" className="m-0 font-display font-medium text-[clamp(32px,3.6vw,50px)] leading-[1.08]">
              Join our growing client list
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-white/85 max-w-[520px]">
              Get in touch to find out how we can deliver your next campaign with precision and professionalism.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              data-quote-cta
              className="press inline-flex items-center min-h-[54px] px-[30px] rounded-full bg-cta text-ink no-underline font-heading font-bold text-base hover:bg-cta-hover transition-colors"
            >
              Get a free quote
            </Link>
            <a
              href="tel:+61402824070"
              className="press inline-flex items-center min-h-[54px] px-[26px] rounded-full border border-white/60 text-white no-underline font-heading font-semibold text-base [font-variant-numeric:tabular-nums] hover:bg-white/10 transition-colors"
            >
              Call 0402 824 070
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
