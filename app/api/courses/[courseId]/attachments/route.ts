import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		let { userId } = auth();
		// console.log(userId);

		const { url } = await req.json();
		const courseId = params.courseId;
		console.log(url);
		console.log(courseId);
		// console.log(url.split("/").pop());
		// const urlName = url.split("/");
		// console.log(urlName);
		if (!userId) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}
		// check the course owner
		const courseOwner = await db.course.findUnique({
			where: {
				id: courseId,
				userId: userId,
			},
		});
		if (!courseOwner) {
			return new NextResponse("Unauthorized ", { status: 401 });
		}

		const attachment = await db.attachment.createMany({
			data: {
				url,
				// the url : "https://www.example.com/page.html"
				name: url.split("/").pop(), // return name: page.html
				courseId: courseId,
			},
		});
		return NextResponse.json(attachment);
	} catch (error) {
		console.log("[  ATTACHMENTS] ", error);
		return new NextResponse("Internal Error ", { status: 500 });
	}
}
