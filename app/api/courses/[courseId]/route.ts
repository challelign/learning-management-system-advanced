import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

const { Video } = new Mux(
	process.env.MUX_TOKEN_ID!,
	process.env.MUX_TOKEN_SECRET!
);

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		let { userId } = auth();

		// console.log(values);
		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}
		const course = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
			include: {
				chapters: {
					include: {
						muxData: true,
					},
				},
			},
		});

		if (!course) {
			return new NextResponse("Not found", { status: 404 });
		}
		for (const chapter of course.chapters) {
			if (chapter.muxData?.assetId) {
				await Video.Assets.del(chapter.muxData.assetId);
			}
		}

		const deletedCourse = await db.course.delete({
			where: {
				id: params.courseId,
			},
		});

		return NextResponse.json(deletedCourse);
	} catch (error) {
		console.log("[COURSE_ID_DELETE]", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		let { userId } = auth();
		console.log(userId);
		const { courseId } = params;
		const values = await req.json();
		console.log(courseId);
		console.log("[COURSE_ID]", courseId);

		// console.log(values);
		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}
		const course = await db.course.update({
			where: {
				id: courseId,
				userId,
			},
			data: {
				...values,
			},
		});

		return NextResponse.json(course);
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();
		const { values } = await req.json();
		console.log(values);
		const course = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId,
			},
		});

		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}
		if (!course) {
			return new NextResponse("Course not found ", { status: 404 });
		}

		const courseRatting = await db.courseRatting;
		return NextResponse.json(courseRatting);
	} catch (error) {
		console.log("[COURSE_REVIEW]", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}
