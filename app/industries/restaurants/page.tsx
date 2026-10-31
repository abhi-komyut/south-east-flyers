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

const PAGE_PATH = "/industries/restaurants";

export const metadata: Metadata = {
  title: { absolute: "Restaurant Flyers Melbourne | South East Flyers" },
  description:
    "Restaurant flyers and takeaway menus delivered on their own to the streets around your venue in Melbourne's south-east. GPS-tracked, exclusive delivery.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Restaurant & Cafe Flyer Distribution Melbourne | South East Flyers",
    description: "Exclusive, GPS-tracked menu and flyer drops for restaurants and cafes across Melbourne's south-east.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Do restaurant flyers still work?",
    answer:
      "For venues that rely on locals, yes. A menu on the fridge is still how many households decide on takeaway. A flyer delivered on its own, rather than in a stack of catalogues, is more likely to end up there.",
  },
  {
    question: "How far from my restaurant should I drop menus?",
    answer:
      "Start with the streets within your delivery radius or a 10-minute walk, usually 1,000 to 2,500 homes. Those are the households who can order tonight. Widen the area once you know which streets order.",
  },
  {
    question: "When is the best time to drop takeaway menus?",
    answer:
      "Deliver early in the week so the menu is in the house before Friday and Saturday orders. For a new opening, drop one to two weeks before the doors open and again in the first month.",
  },
  {
    question: "How do I measure a cafe or restaurant flyer?",
    answer:
      "Put a code or offer on the flyer that only appears there, such as a free drink or a discount code for online orders. Count redemptions against the GPS report, and you can see which streets responded.",
  },
  {
    question: "Can I deliver a full menu rather than a flyer?",
    answer:
      "Yes. Folded DL menus and A4 menus are both fine. We distribute only, so you supply the printed menus, and we deliver each one on its own, exclusively.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flyer and menu distribution for restaurants and cafes",
  serviceType: "Flyer distribution",
  audience: { "@type": "BusinessAudience", name: "Restaurants, cafes and takeaway businesses" },
  url: `${SITE_URL}${PAGE_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Melbourne", addressCountry: "AU" },
};

export default function Restaurants() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Local Businesses", href: "/industries/local-businesses" },
          { name: "Restaurants & Cafes" },
        ]}
        h1="Menu flyer distribution for restaurants and cafes"
        lead="Restaurant flyers and takeaway menus delivered on their own to the streets that can walk in or order tonight. Every run is GPS-tracked."
        image={{ src: "/images/redesign/walker-ebike.jpg", alt: "An e-bike distributor delivering flyers on a residential street" }}
      />

      <FactsStrip
        stats={[
          { value: "Exclusive", label: "never bundled with other ads" },
          { value: "40+", label: "suburbs covered" },
          { value: "1,000", label: "flyers, about one walking catchment" },
          { value: "GPS map", label: "proof of delivery, every run" },
        ]}
      />

      <Section title="The menu on the fridge" first>
        <p>
          Delivery apps take a cut of every order and bury your venue among hundreds of others. A printed menu in the
          kitchen drawer does neither. Customers who order from it often call you directly or use your own website.
        </p>
        <p>
          Restaurant flyer distribution works because your customers live close. Most of a local venue&rsquo;s regulars
          come from within a few kilometres, and a drop reaches every household in that catchment whether or not they
          follow you online.
        </p>
      </Section>

      <Section title="Openings, new menus and quiet nights">
        <Bullets
          items={[
            <><strong>New openings:</strong> drop one to two weeks before you open, then again in the first month, with an opening offer.</>,
            <><strong>New menus or a new chef:</strong> give past customers a reason to return and new ones a reason to try.</>,
            <><strong>Quiet nights:</strong> a Monday-to-Wednesday offer fills the tables that are empty anyway.</>,
            <><strong>Catering and functions:</strong> drop in late October to reach households planning Christmas and end-of-year events.</>,
          ]}
        />
      </Section>

      <Section title="Strips we deliver around">
        <p>
          Food strips with dense housing nearby suit menu drops best. Around Acland and Fitzroy Streets in{" "}
          <TextLink href="/melbourne/flyer-distribution-st-kilda">St Kilda</TextLink>, the apartments mean many
          households within a short walk. The restaurant streets of{" "}
          <TextLink href="/melbourne/flyer-distribution-box-hill">Box Hill</TextLink> draw diners from across the east,
          and venues there often print menus in English and Chinese.
        </p>
        <p>
          Village strips like Centre Road in <TextLink href="/melbourne/flyer-distribution-bentleigh">Bentleigh</TextLink>{" "}
          and Church Street in <TextLink href="/melbourne/flyer-distribution-brighton">Brighton</TextLink> rely on
          families nearby. A cafe flyer with a weekend breakfast offer works well in those streets.
        </p>
      </Section>

      <Section title="Making a menu flyer pay">
        <Bullets
          items={[
            <><strong>A short menu</strong> with your best sellers and prices, not every dish you make.</>,
            <><strong>One offer only on the flyer</strong>, so you can count redemptions.</>,
            <><strong>Opening hours, delivery area and how to order</strong>, clearly on the front.</>,
          ]}
        />
        <p>
          Takeaway menu letterbox drops repeat well. A drop every two to three months keeps your menu the one in the
          drawer rather than a competitor&rsquo;s.
        </p>
      </Section>

      <Section title="Restaurant flyers and direct orders">
        <p>
          Every order through a delivery app costs you commission. A QR code on your menu that opens your own ordering
          page, or a phone number for pickup, moves some of those orders back to you.
        </p>
        <p>
          Give the QR code its own tracking link, and you can count exactly how many orders each drop brought in. Match
          those numbers to the GPS report and you will know which streets order most. Cafe flyers can do the same
          with a free coffee voucher that only the flyer carries.
        </p>
      </Section>

      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-14">
        <Callout
          title="Quantities"
        >
          <p className="m-0">
            Every drop is exclusive, from 1,000 flyers or menus. See the{" "}
            <TextLink href="/letterbox-drop-cost">letterbox drop cost</TextLink> page, or our{" "}
            <TextLink href="/industries/local-businesses">local business flyers</TextLink> page for shops and studios.
          </p>
        </Callout>
      </div>

      <HowItWorks />

      <QuickQuoteForm
        heading="Get your menu into local kitchens"
        lead="Tell us your venue address and delivery area. We'll quote with a quick turnaround."
      />

      <FAQSection items={faqs} title="Restaurant and cafe letterbox drop FAQs" />
    </>
  );
}
