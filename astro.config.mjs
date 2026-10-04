import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, readFileSync } from "node:fs";

const NOINDEX_PATHS = ["/buscar", "/404"];

function blogDates() {
  const dir = new URL("./src/content/blog/", import.meta.url);
  const dates = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;
    const source = readFileSync(new URL(file, dir), "utf8");
    const published = source.match(/^publishedAt:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const updated = source.match(/^updatedAt:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    if (published) dates.set(`/blog/${file.replace(/\.md$/, "")}`, updated ?? published);
  }
  return dates;
}

const lastmodByPath = blogDates();

export default defineConfig({
  site: "https://universoftsystems.com",
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => new URL(page).pathname.startsWith(path)),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodByPath.get(path);
        return lastmod ? { ...item, lastmod: new Date(lastmod) } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
