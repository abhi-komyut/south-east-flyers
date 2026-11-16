import type { Metadata } from "next";
import Link from "next/link";
import QuickQuoteForm from "../components/QuickQuoteForm";
import { posts } from "./posts";
import { buildMeta, PageHero, Section, TextLink } from "../components/landing";

export const metadata: Metadata = {
  ...buildMeta({
    title: "Letterbox and Flyer Tips",
    description:
      "Tips on letterbox drops and flyer distribution in Melbourne's south-east and east, from South East Flyers.",
    path: "/blog",
  }),
  keywords: [
    "letterbox distribution blog",
    "flyer marketing tips",
    "letterbox advertising Melbourne",
    "flyer distribution Melbourne",
    "leaflet distribution Australia",
  ],
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
        h1="Letterbox and flyer tips"
        lead="Insights, tips and news about letterbox distribution and flyer marketing across Melbourne's south-east and eastern suburbs."
      />

      <Section title="Latest articles" first>
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <article key={post.slug} className={`flex flex-col gap-2 pb-7 ${i > 0 ? "pt-7 border-t border-line" : ""}`}>
              <p className="m-0 text-sm text-muted [font-variant-numeric:tabular-nums]">
                {new Date(post.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="m-0 font-display font-medium text-2xl leading-snug">
                <Link href={`/blog/${post.slug}`} className="text-ink no-underline hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="m-0">{post.excerpt}</p>
              <TextLink href={`/blog/${post.slug}`}>Read more</TextLink>
            </article>
          ))}
        </div>
      </Section>

      <QuickQuoteForm
        heading="Ready to plan a flyer campaign?"
        lead="Tell us your target suburbs and flyer quantity for a free, no-obligation quote."
      />
    </>
  );
}
