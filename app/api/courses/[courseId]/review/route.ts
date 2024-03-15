import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();
		// let userId = "user_2c7WDRhRgaTXgF3G3JIaInZbQD4";
		const { rating, review } = await req.json();
		console.log(rating);
		console.log(review);
		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}

		// create review for the course
		const courseRatting = await db.courseRatting.create({
			data: {
				rating: rating,
				review: review,
				userId,
				courseId: params.courseId,
			},
		});
		// course ratting only
		const courseRattingOnly = await db.courseRatting.findMany({
			where: {
				courseId: params.courseId,
			},
			select: {
				rating: true,
			},
		});

		console.log("[courseRattingOnly]", courseRattingOnly);

		// course ratting count total
		const courseRattingCount = await db.courseRatting.count({
			where: {
				courseId: params.courseId,
			},
		});

		console.log("[COURSE_RATTING_COUNT]", courseRattingCount);

		const ratingsAverage =
			courseRattingOnly?.reduce((acc, item) => item.rating! + acc, 0) /
			courseRattingCount;

		const courseRattingAverage = await db.course.update({
			where: {
				id: params.courseId,
			},
			data: {
				totalRating: ratingsAverage,
			},
		});

		console.log("COURSE_RATTING_AVERAGE_UPDATE", courseRattingAverage);
		return NextResponse.json(courseRatting);
	} catch (error) {
		console.log("[COURSE_REVIEW]", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}
export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		let { userId } = auth();
		// let userId = "user_2c7WDRhRgaTXgF3G3JIaInZbQD4";
		const values = await req.json();

		const getCourseRatting = await db.courseRatting.findUnique({
			where: {
				userId_courseId: {
					userId,
					courseId: params.courseId,
				},
			},
		});
		if (!getCourseRatting) {
			return new NextResponse("[COURSE_REVIEW_NOT_FOUND] ", { status: 404 });
		}
		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}
		const courseRatting = await db.courseRatting.update({
			where: {
				userId_courseId: {
					userId,
					courseId: params.courseId,
				},
			},
			data: {
				...values,
			},
		});

		//

		// course ratting only
		const courseRattingOnly = await db.courseRatting.findMany({
			where: {
				courseId: params.courseId,
			},
			select: {
				rating: true,
			},
		});

		console.log("[courseRattingOnly]", courseRattingOnly);

		// course ratting count total
		const courseRattingCount = await db.courseRatting.count({
			where: {
				courseId: params.courseId,
			},
		});

		console.log("[COURSE_RATTING_COUNT]", courseRattingCount);

		const ratingsAverage =
			courseRattingOnly?.reduce((acc, item) => item.rating! + acc, 0) /
			courseRattingCount;

		const courseRattingAverage = await db.course.update({
			where: {
				id: params.courseId,
			},
			data: {
				totalRating: ratingsAverage,
			},
		});

		console.log("COURSE_RATTING_AVERAGE_UPDATE", courseRattingAverage);
		return NextResponse.json(courseRatting);
	} catch (error) {
		console.log("[COURSE_RATTING]", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}
