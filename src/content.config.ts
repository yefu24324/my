import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      alt: z.string().optional(),
      src: z.string(),
    })
    .optional(),
  pageType: z.enum(["website", "article"]).default("website"),
  title: z.string().min(5).max(120).optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    excerpt: z.string().optional(),
    isFeatured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    seo: seoSchema.optional(),
    tags: z.array(z.string()).default([]),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    seo: seoSchema.optional(),
    title: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    description: z.string().optional(),
    isFeatured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    seo: seoSchema.optional(),
    title: z.string(),
  }),
});

const hero = defineCollection({
  loader: glob({ base: "./src/content", pattern: "hero.mdx" }),
  schema: z.object({
    actions: z
      .array(
        z.object({
          href: z.string(),
          text: z.string(),
        }),
      )
      .optional(),
    image: z
      .object({
        alt: z.string().optional(),
        caption: z.string().optional(),
        src: z.string(),
      })
      .optional(),
    site: z.object({
      avatar: z
        .object({
          alt: z.string().optional(),
          src: z.string(),
        })
        .optional(),
      subtitle: z.string().optional(),
      title: z.string(),
    }),
    text: z.string().optional(),
    title: z.string().optional(),
  }),
});

export const collections = {
  blog,
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  hero,
  pages,
  projects,
};
