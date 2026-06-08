import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "../posts";

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

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-3">
            {new Date(post.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-base sm:prose-lg max-w-none
              [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-8 [&_h2]:sm:mt-10 [&_h2]:mb-3 [&_h2]:sm:mb-4
              [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:sm:mb-6
              [&_a]:text-navy [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-navy font-semibold hover:underline"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Letterbox Campaign?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a free quote on flyer distribution
            across Melbourne and Sydney.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
