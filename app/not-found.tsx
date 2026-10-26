import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-display">
          That page isn&rsquo;t in our service area.
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Try the
          Melbourne coverage page, or get in touch for a quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-cta text-white font-semibold px-6 py-3 rounded transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
          >
            Back to Home
          </Link>
          <Link
            href="/melbourne/flyer-distribution-melbourne"
            className="inline-block border border-navy text-navy font-semibold px-6 py-3 rounded transition-all duration-200 hover:bg-navy hover:text-white"
          >
            See Melbourne Coverage
          </Link>
        </div>
      </div>
    </section>
  );
}
