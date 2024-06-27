import { getCollection } from 'astro:content'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}


export const getCourseMeta = async (courseName?: string) => {
	return (await getCollection('coursesMeta'))
	.filter((course) => course.id === courseName)
}


export const getCourseContent = async (courseName?: string) => {
	return (await getCollection("courses"))
	.filter((course) => course.data.course === courseName)
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
