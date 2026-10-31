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

const PAGE_PATH = "/services/catalogue-delivery";

export const metadata: Metadata = {
  title: { absolute: "Catalogue Distribution Melbourne | South East Flyers" },
  description:
    "Catalogue distribution across Melbourne's south-east: your catalogue delivered on its own, never bundled with others. GPS-tracked letterbox delivery.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Catalogue Delivery Across Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked catalogue delivery across Melbourne's south-east and east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do you deliver catalogues on their own?",
    answer:
      "Yes. Your catalogue goes into each letterbox by itself, not inside a bundle of other retailers' catalogues. That is the main difference from shared distribution, where several catalogues arrive together.",
  },
  {
    question: "How much does catalogue delivery cost?",
    answer:
      "Single-sheet flyers are $200 per 1,000. Catalogues vary in size and weight, which changes how many a walker can carry, so send us the page count and size and we'll confirm the rate in your quote within 24 hours.",
  },
  {
    question: "What is the minimum catalogue order?",
    answer:
      "1,000 catalogues. That suits a single store's surrounding streets, and lets independent retailers test catalogue distribution without committing to a city-wide run.",
  },
  {
    question: "Do you print the catalogues?",
    answer:
      "No. We distribute only. You print with your usual printer and supply the catalogues to us. We plan the routes and send you the GPS report after delivery.",
  },
  {
    question: "Do you respect No Junk Mail signs with catalogues?",
    answer:
      "Yes, always. Letterboxes marked No Junk Mail or No Advertising Material are skipped on every run, so your catalogue only reaches households that accept it.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Catalogue distribution in Melbourne",
  serviceType: "Catalogue distribution",
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function CatalogueDelivery() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Flyer Distribution", href: "/services/flyer-distribution" },
          { name: "Catalogue Delivery" },
        ]}
        h1="Catalogue Delivery Across Melbourne"
        lead="Catalogue distribution for retailers who want their catalogue read, not lost in a pile. Each one goes into the letterbox on its own, and every route is GPS-tracked."
        image={{ src: "/images/redesign/delivery-real.jpg", alt: "A South East Flyers walker delivering to a Melbourne letterbox" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other catalogues" },
          { value: "1,000", label: "catalogue minimum" },
          { value: "24 hrs", label: "quote turnaround" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="Your catalogue, not one of six" first>
        <p>
          Most catalogue delivery in Melbourne is shared. Several retailers&rsquo; catalogues are bundled and dropped
          together, so yours lands in a stack with supermarkets, hardware and furniture stores, and has to compete with all
          of them for attention.
        </p>
        <p>
          We deliver each catalogue on its own. When it&rsquo;s the only thing in the letterbox, it gets opened. That
          matters most for independent retailers whose catalogue can&rsquo;t compete on size with the national chains.
        </p>
      </Section>

      <Section title="Who uses catalogue distribution">
        <Bullets
          items={[
            <><strong>Independent grocers and butchers</strong> with weekly or monthly specials.</>,
            <><strong>Furniture, bedding and homewares stores</strong> running a seasonal sale.</>,
            <><strong>Garden centres and hardware stores</strong> ahead of spring.</>,
            <><strong>Pharmacies and bottle shops</strong> with a monthly catalogue of offers.</>,
            <><strong>Real estate agencies</strong> sending a quarterly property magazine to their farm area.</>,
          ]}
        />
      </Section>

      <Section title="Planning a catalogue run">
        <p>
          Start with the streets around each store. For a supermarket or grocer, that is usually the homes within two
          or three kilometres. For destination stores such as furniture or bedding, the catchment is wider, and a few
          suburbs may be worth covering.
        </p>
        <p>
          Retail catalogue letterbox drops work best on a regular cycle. Delivering early in the week puts the
          catalogue in the house before weekend shopping. Each run comes with a GPS report, so you can compare one
          month&rsquo;s sales by area with the next.
        </p>
      </Section>

      <Section title="What we need from you">
        <Bullets
          items={[
            <><strong>Printed catalogues</strong>, ready to deliver. We distribute; we don&rsquo;t print.</>,
            <><strong>A sample</strong>, or the page count, size and paper weight, so we can quote accurately.</>,
            <><strong>Your target area</strong>: store addresses, suburbs or a map.</>,
            <><strong>Your delivery window</strong>, especially if the catalogue has dated specials.</>,
          ]}
        />
      </Section>

      <Section title="Measuring a catalogue run">
        <p>
          Put a coupon or code in each catalogue that only the catalogue carries, and ask staff to note it at the
          register. Compare redemptions by store and by week against the delivery dates and the GPS report.
        </p>
        <p>
          After two or three runs, you&rsquo;ll see which suburbs bring shoppers in and which don&rsquo;t. Cut the
          areas that don&rsquo;t respond and put the saved catalogues into the streets that do. With exclusive
          delivery, a smaller, better-targeted run often does more than a larger shared one.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Catalogue distribution across Melbourne's south-east"
          figures={[{ value: "1,000", label: "minimum per run" }, { value: "24 hrs", label: "to get your quote" }]}
        >
          Catalogues are quoted on size and weight; single-sheet flyers are $200 per 1,000 (see the{" "}
          <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page). We cover the suburbs on our{" "}
          <TextLink href="/melbourne/flyer-distribution-south-east-melbourne">south-east Melbourne</TextLink> page.
          For brochures and folded leaflets, see{" "}
          <TextLink href="/services/pamphlet-delivery">pamphlet and brochure distribution</TextLink>.
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get a catalogue delivery quote"
        lead="Tell us your catalogue size, quantity and target suburbs. We'll quote within 24 hours."
      />

      <FAQSection items={faqs} title="Catalogue delivery FAQs" />
    </>
  );
}
