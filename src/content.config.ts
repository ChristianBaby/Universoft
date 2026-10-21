import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(10).max(120),
    seoTitle: z.string().min(10).max(60).optional(),
    description: z.string().min(80).max(160),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    cover: z.string().min(1),
    coverAlt: z.string(),
    author: z.string().default("Christian Pumaccahua Cusihuaman"),
    readTime: z.string().optional(),
    draft: z.boolean().default(true),
    reviewed: z.boolean().default(false),
  }),
});

export const collections = { blog };
