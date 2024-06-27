import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { PATHS } from '@/data/paths'
import { COURSES } from '@/data/courses'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

const courses = defineCollection({
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			course: z.enum(COURSES),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			path: z.enum(PATHS),
			draft: z.boolean().default(false)
		})
})

const coursesMeta = defineCollection({
	type: 'data',
	schema: () =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			navbar: z.array(z.object({ subheading: z.string(), link: z.array(z.string()) }))
		})
})

export const collections = { 
	'blog': blog,
	'courses': courses,
	'coursesMeta': coursesMeta
}
