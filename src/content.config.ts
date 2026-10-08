import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(10).max(120),
    description: z.string().min(80).max(200),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    cover: z.url(),
    coverAlt: z.string(),
    author: z.string().default("Universoft Systems"),
    readTime: z.string().optional(),
    draft: z.boolean().default(true),
    reviewed: z.boolean().default(false),
  }),
});

export const collections = { blog };
