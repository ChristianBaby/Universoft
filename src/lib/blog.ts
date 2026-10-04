import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

/** Solo se publican artículos revisados y que no sean borrador. */
export async function getPublishedPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft && data.reviewed);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}
