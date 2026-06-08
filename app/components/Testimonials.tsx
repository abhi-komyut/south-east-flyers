"use client";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Manager, Ray White",
    quote:
      "South East Flyers consistently delivers on time and the GPS tracking gives us full confidence that every flyer reaches the right letterboxes. Our open home attendance has noticeably improved.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Owner, Storm Shield Roofing",
    quote:
      "We've tried other distribution companies before but the reporting was never this detailed. Knowing exactly which streets were covered makes a huge difference for planning our next campaign.",
    stars: 5,
  },
  {
    name: "Priya K.",
    role: "Practice Manager, High Dental",
    quote:
      "Professional, reliable, and great communication. They respect no junk mail signs which is important for our brand reputation. We've been using them for over two years now.",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-cta" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by 200+ businesses across Melbourne and Sydney for reliable, trackable flyer distribution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-sm text-black">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
