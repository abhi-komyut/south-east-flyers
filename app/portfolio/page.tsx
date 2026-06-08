import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | South East Flyers & Marketing Solutions",
  description: "View our portfolio of letterbox drop campaigns across Melbourne and Sydney.",
};

const portfolioItems = [
  { title: "Real Estate Campaign — South East Melbourne", category: "Letterbox Drop" },
  { title: "Restaurant Opening — Sydney CBD", category: "Distribution" },
  { title: "Gym Membership Drive — Dandenong", category: "Targeted Campaign" },
  { title: "Local Council Newsletter — Bayside", category: "Distribution" },
  { title: "Dental Clinic Promotion — Parramatta", category: "Letterbox Drop" },
  { title: "Home Services Flyer — Eastern Suburbs", category: "Targeted Campaign" },
  { title: "Retail Sale Event — Frankston", category: "Letterbox Drop" },
  { title: "Education Centre — North Sydney", category: "Distribution" },
  { title: "Trades & Services — Casey", category: "Targeted Campaign" },
];

export default function Portfolio() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of campaigns we&apos;ve delivered for businesses across Melbourne and Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-navy uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-black mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
