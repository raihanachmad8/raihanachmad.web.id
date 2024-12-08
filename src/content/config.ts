// 1. Import utilities from `astro:content`
import {defineCollection, z} from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        summary: z.string(),
        url: z.string(),
        cover: image(),
        tags: z.array(z.string()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {  projects };