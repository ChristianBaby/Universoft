import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/constants/blog";
import { SERVICES } from "@/lib/constants/services";
import { SITE_URL } from "@/lib/constants/site";
import { parseSpanishDate } from "@/lib/utils/date";

const BASE_URL = SITE_URL;

// Fecha del último cambio de contenido en las páginas estáticas y de servicio
// (no tienen fecha propia en los datos). Actualizar manualmente cuando su
// copy cambie — no usar `new Date()` aquí, eso mentiría en cada build.
const CONTENT_LAST_UPDATED = new Date("2026-08-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/nosotros`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contacto`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/servicios/${s.id}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: parseSpanishDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
