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

const cardIcons = [
  // Mailbox / letterbox
  <svg key="mail" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // GPS / location pin
  <svg key="gps" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Checklist / choosing
  <svg key="check" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
];

const cardGradients = [
  "from-navy via-navy-light to-navy",
  "from-navy-light via-navy to-navy-light",
  "from-navy to-navy-light",
];

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
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <div className={`aspect-[16/9] relative overflow-hidden bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                    {cardIcons[index % cardIcons.length]}
                    <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
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
