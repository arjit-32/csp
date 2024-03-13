// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const webdev = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    course: z.string(),
    publishDate: z.date().optional()
  }),
});

const systemdesign = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    course: z.string(),
    publishDate: z.date().optional()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
   'webdev': webdev,
    'systemdesign': systemdesign
};