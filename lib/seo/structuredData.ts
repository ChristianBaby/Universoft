import { SITE_URL } from "@/lib/constants/site";
import { CONTACT } from "@/lib/constants/contact";
import { parseSpanishDate } from "@/lib/utils/date";
import type { BlogPost, ServiceFAQ } from "@/lib/types";

export function organizationJsonLd() {
  const sameAs = Object.values(CONTACT.social).filter(
    (url) => url && url !== "#"
  );

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Universoft Systems",
    url: SITE_URL,
    logo: `${SITE_URL}/images/isotipo-transparent.png`,
    image: `${SITE_URL}/images/isotipo-transparent.png`,
    description:
      "Desarrollo de software a medida, plataformas virtuales, sitios informativos, telecomunicaciones y ciberseguridad para empresas en Perú.",
    email: CONTACT.email,
    telephone: `+51${CONTACT.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cusco",
      addressCountry: "PE",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function faqPageJsonLd(faq: ServiceFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(post: BlogPost, url: string) {
  const datePublished = parseSpanishDate(post.date).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: post.author ?? "Universoft Systems",
    },
    publisher: {
      "@type": "Organization",
      name: "Universoft Systems",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/isotipo-transparent.png`,
      },
    },
    mainEntityOfPage: url,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
