import Link from "next/link";

const SITE_URL = "https://www.southeastflyers.com.au";

export interface Crumb {
  /** Display label */
  name: string;
  /** Path beginning with "/" (omit on the current/last item) */
  href?: string;
}

/**
 * Renders a visual breadcrumb trail plus BreadcrumbList JSON-LD.
 * Always include "Home" as the first crumb. The last crumb should be the
 * current page and normally has no href.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-x-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white underline-offset-2 hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-white/90" aria-current="page">
                  {item.name}
                </span>
              )}
              {!isLast && <span className="text-gray-500">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
