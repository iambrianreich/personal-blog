import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
    category: z.enum([
      'ai-agentic-coding',
      'security',
      'business',
      'engineering-management',
      'book-reviews',
      'agile-devops',
      'frontend',
      'uncategorized',
    ]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
