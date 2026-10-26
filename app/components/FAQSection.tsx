import Reveal from "./Reveal";

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Reusable FAQ block that also emits FAQPage JSON-LD for the questions it
 * renders. Keep the answers genuinely useful — the schema mirrors exactly
 * what's on the page, so don't add questions here that aren't shown.
 * Two-column layout: title left, all answers visible on the right (no
 * accordion — nothing here is long enough to need progressive disclosure).
 */
export default function FAQSection({
  items,
  title = "Frequently asked questions",
  subtitle,
}: {
  items: FAQItem[];
  title?: string;
  subtitle?: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="py-[clamp(80px,9vw,128px)] px-[clamp(20px,4vw,48px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[1144px] mx-auto flex flex-wrap gap-12 gap-x-[88px]">
        <Reveal className="flex-[1_1_300px] flex flex-col gap-[18px]">
          <h2 className="m-0 font-display font-medium text-[clamp(32px,3.4vw,44px)] leading-[1.1] tracking-[-0.015em]">
            {title}
          </h2>
          {subtitle && <p className="m-0 text-base leading-relaxed text-body">{subtitle}</p>}
        </Reveal>
        <dl className="flex-[1.6_1_480px] m-0 flex flex-col gap-[30px]">
          {items.map((faq, index) => (
            <Reveal as="div" key={index} delay={Math.min(index, 4) * 60} className="flex flex-col gap-2.5 pt-[26px] border-t border-line">
              <dt className="font-heading font-semibold text-lg">{faq.question}</dt>
              <dd className="m-0 text-base leading-[1.7] text-body">{faq.answer}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
