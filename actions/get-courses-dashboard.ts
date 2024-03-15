import { Category, Course } from "@prisma/client";

import { db } from "@/lib/db";
import { getProgressDashboard } from "./get-progress-dashboard";
const ITEMS_PER_PAGE = 2;

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
	progress: number | null;
};

type GetCourses = {
	// userId: string;
	search?: string;
	categoryId?: string;
	rating?: number;
	category?: string;
	price?: number;
	page: number;
};

export const getCoursesDashboard = async ({
	// userId,
	search,
	categoryId,
	rating,
	category,
	price,
	page,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
	try {
		console.log("[page]", page);
		const offset = (page! - 1) * ITEMS_PER_PAGE;
		// console.log("search", search);
		const [minPrice, maxPrice] = price!?.split("-").map(Number) || [{}, {}];
		// console.log(minPrice, maxPrice);
		const courses = await db.course.findMany({
			skip: offset,
			take: 2,
			where: {
				OR: [
					{
						description: {
							contains: search,
						},
					},
					{
						title: {
							contains: search,
						},
					},
					{
						category: {
							name: {
								contains: search,
								// in: category?.split(","),
							},
						},
					},
				],
				...(category && {
					category: {
						name: {
							// contains: search,
							in: category?.split(","),
						},
					},
				}),
				...(price && {
					price: {
						gte: minPrice || 0, // Greater than or equal to min price
						lte: maxPrice || Infinity, // Less than or equal to max price (or infinity)
					},
				}),
				// this to select only this rating
				/* 	...(rating && {
					totalRating: Number(rating),
				}), */

				...(rating && {
					totalRating: {
						gte: Number(rating),
					},
				}),
				isPublished: true,

				categoryId,
			},
			include: {
				category: true,

				chapters: {
					where: {
						isPublished: true,
					},
					select: {
						id: true,
					},
				},
				purchases: {
					// where: {
					// 	userId,
					// },
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		const totalCount = courses.length;
		console.log("[course]", courses.length);
		console.log("[courses]", courses);
		const coursesWithProgress: CourseWithProgressWithCategory[] =
			await Promise.all(
				courses.map(async (course) => {
					if (course.purchases.length === 0) {
						return {
							...course,
							totalCount,

							progress: null,
						};
					}

					// const progressPercentage = await getProgress(userId, course.id);
					const progressPercentage = await getProgressDashboard(course.id);

					return {
						...course,
						totalCount,
						progress: progressPercentage,
					};
				})
			);

		console.log("[coursesWithProgress]", coursesWithProgress);
		return coursesWithProgress;
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};

export async function getCoursesDashboardTotal({
	search,
	categoryId,
	rating,
	category,
	price,
}: GetCourses) {
	try {
		const [minPrice, maxPrice] = price!?.split("-").map(Number) || [{}, {}];
		// console.log(minPrice, maxPrice);
		const courses = await db.course.findMany({
			where: {
				OR: [
					{
						description: {
							contains: search,
						},
					},
					{
						title: {
							contains: search,
						},
					},
					{
						category: {
							name: {
								contains: search,
							},
						},
					},
				],
				...(category && {
					category: {
						name: {
							in: category?.split(","),
						},
					},
				}),
				...(price && {
					price: {
						gte: minPrice || 0, // Greater than or equal to min price
						lte: maxPrice || Infinity, // Less than or equal to max price (or infinity)
					},
				}),
				...(rating && {
					totalRating: {
						gte: Number(rating),
					},
				}),
				isPublished: true,

				categoryId,
			},
		});

		console.log("courses=>", courses.length);
		const totalPages = Math.ceil(Number(courses.length) / ITEMS_PER_PAGE);
		console.log("totalPages =>", totalPages);

		return totalPages;
	} catch (error) {
		console.log(error);
		console.error("Database Error:", error);
		throw new Error("Failed to fetch total number of courses.");
	}
}
