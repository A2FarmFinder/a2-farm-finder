import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const farms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/farms' }),
  schema: z.object({
    name: z.string(),
    town: z.string(),
    products: z.array(z.string()),
    csa: z.boolean().default(false),
    website: z.string().url().optional(),
    address: z.string().optional(),
    season: z.string().optional(),
    summary: z.string(),
  }),
});

const markets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/markets' }),
  schema: z.object({
    name: z.string(),
    town: z.string(),
    address: z.string(),
    schedule: z.string(),
    season: z.string(),
    website: z.string().url().optional(),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { farms, markets, blog };
