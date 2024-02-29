import { db } from "@/lib/db";
import { Course, Purchase } from "@prisma/client";

type PurchaseWithCourse = Purchase & {
	course: Course;
};

const groupByCourse = (purchase: PurchaseWithCourse[]) => {
	const grouped: { [courseTitle: string]: number } = {};

	purchase.forEach((purchase) => {
		const courseTitle = purchase.course.title;
		if (!grouped[courseTitle]) {
			grouped[courseTitle] = 0;
		}
		grouped[courseTitle] += purchase.course.price!;
	});
	return grouped;
};

export const getAnalytics = async (userId: string) => {
	try {
		const purchase = await db.purchase.findMany({
			where: {
				course: {
					userId: userId,
				},
			},
			include: {
				course: true,
			},
		});
		const groupedEarnings = groupByCourse(purchase);
		const data = Object.entries(groupedEarnings).map(
			([courseTitle, total]) => ({
				name: courseTitle,
				total: total,
			})
		);

		const totalRevenue = data.reduce((acc, curr) => acc + curr.total, 0);
		const totalSale = purchase.length;
		return {
			data,
			totalRevenue,
			totalSale,
		};
	} catch (error) {
		console.log("[GET_ANALYTICS]", error);
		return {
			data: [],
			totalRevenue: 0,
			totalSale: 0,
		};
	}
};
