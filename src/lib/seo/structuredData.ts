import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_LINKEDIN } from "@/lib/constants/site";
import { CONTACT } from "@/lib/constants/contact";
import type { ServiceFAQ } from "@/lib/types";

const LOGO_URL = `${SITE_URL}/images/isotipo-transparent.png`;

export function organizationJsonLd() {
  const sameAs = Object.values(CONTACT.social).filter((url) => url && url !== "#");

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Desarrollo de software a medida, plataformas virtuales, sitios informativos, telecomunicaciones y ciberseguridad para empresas en Perú.",
    email: CONTACT.email,
    telephone: `+51${CONTACT.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "U.V. Mariscal Agustín Gamarra Etapa 1",
      addressLocality: "Cusco",
      addressRegion: "Cusco",
      postalCode: "08003",
      addressCountry: "PE",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
    ],
    areaServed: "PE",
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es-PE",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/buscar?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd(faq: ServiceFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(service: { title: string; description: string; href: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}${service.href}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "PE",
  };
}

interface ArticleInput {
  url: string;
  title: string;
  description: string;
  image: string;
  publishedAt: Date;
  updatedAt: Date;
  author: string;
}

export function articleJsonLd(post: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author:
      post.author === AUTHOR_NAME
        ? { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_LINKEDIN, sameAs: [AUTHOR_LINKEDIN] }
        : { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: post.url,
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
