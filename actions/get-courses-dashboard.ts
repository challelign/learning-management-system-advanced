import { Category, Course } from "@prisma/client";

import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { getProgressDashboard } from "./get-progress-dashboard";

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
	progress: number | null;
};

type GetCourses = {
	// userId: string;
	search?: string;
	categoryId?: string;
};

export const getCoursesDashboard = async ({
	// userId,
	search,
	categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
	try {
		console.log("search", search);
		const courses = await db.course.findMany({
			/* where: {
				isPublished: true,
			 
				title: {
					contains: title,
				},
				categoryId,
			}, */

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
