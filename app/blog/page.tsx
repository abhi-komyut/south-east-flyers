import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on letterbox distribution, flyer marketing, and leaflet delivery across Melbourne and Sydney. Tips, strategies, and industry news from South East Flyers.",
  keywords: [
    "letterbox distribution blog",
    "flyer marketing tips",
    "letterbox advertising Melbourne",
    "flyer distribution Sydney",
    "leaflet distribution Australia",
  ],
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, tips, and news about letterbox distribution and flyer
            marketing across Melbourne and Sydney.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-bold text-sm px-4 text-center">
                      {post.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-lg font-bold text-black mb-2 group-hover:text-navy transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <span className="text-navy font-semibold text-sm group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
