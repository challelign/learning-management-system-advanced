import { Category, Course } from "@prisma/client";

import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
	progress: number | null;
};

type GetCourses = {
	userId: string;
	search?: string;
	categoryId?: string;
};

export const getCourses = async ({
	userId,
	search,
	categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
	try {
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
					where: {
						userId,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		const coursesWithProgress: CourseWithProgressWithCategory[] =
			await Promise.all(
				courses.map(async (course) => {
					if (course.purchases.length === 0) {
						return {
							...course,
							progress: null,
						};
					}

					const progressPercentage = await getProgress(userId, course.id);

					return {
						...course,
						progress: progressPercentage,
					};
				})
			);

		return coursesWithProgress;
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};
