import { getCollection } from 'astro:content'

export const getCourseMeta = async (courseName?: string) => {
	return (await getCollection('coursesMeta'))
	.filter((course) => course.id === courseName)
}


export const getCourseContent = async (courseName?: string) => {
	return (await getCollection("courses"))
	.filter((course) => course.data.course === courseName)
}