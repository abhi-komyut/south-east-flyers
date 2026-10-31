import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "../posts";
import QuickQuoteForm from "../../components/QuickQuoteForm";
import { SITE_URL, PageHero, TextLink, JsonLd } from "../../components/landing";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}${post.image}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={blogPostingLd} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]}
        h1={post.title}
        lead={
          <>
            {formattedDate}. {post.excerpt}
          </>
        }
      />

      <section className="px-[clamp(20px,4vw,48px)] py-[clamp(56px,7vw,96px)]">
        <div
          className="max-w-[700px] mx-auto flex flex-col gap-[18px] text-[17px] leading-[1.75] text-body
            [&_h2]:font-display [&_h2]:font-medium [&_h2]:text-[clamp(24px,2.6vw,32px)] [&_h2]:leading-[1.2] [&_h2]:text-ink [&_h2]:mt-6 [&_h2]:mb-0
            [&_p]:m-0
            [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-deep"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="max-w-[700px] mx-auto mt-10 pt-6 border-t border-line">
          <TextLink href="/blog">← Back to blog</TextLink>
        </div>
      </section>

      <QuickQuoteForm
        heading="Ready to start your letterbox campaign?"
        lead="Tell us your target suburbs and flyer quantity for a free, no-obligation quote."
      />
    </>
  );
}
