// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const categoryCollection = defineCollection({
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
   'webdev': categoryCollection
};