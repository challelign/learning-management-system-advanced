import { db } from "@/lib/db";
import { Attachment, Chapter, CourseRatting } from "@prisma/client";

interface GetChapterProps {
	userId: string;
	courseId: string;
	chapterId: string;
}

export const getChapter = async ({
	userId,
	courseId,
	chapterId,
}: GetChapterProps) => {
	try {
		const purchase = await db.purchase.findUnique({
			where: {
				userId_courseId: {
					userId,
					courseId: courseId,
				},
			},
		});
		const course = await db.course.findUnique({
			where: {
				id: courseId,
				isPublished: true,
			},
			select: {
				price: true,
				totalRating: true,
			},
		});

		const chapter = await db.chapter.findUnique({
			where: {
				id: chapterId,
				isPublished: true,
			},
		});
		if (!chapter || !course) {
			throw new Error("Chapter or Course not found");
		}

		let muxData = null;
		let attachments: Attachment[] = [];
		let nextChapter: Chapter | null = null;
		let courseRatting: CourseRatting[] = [];

		courseRatting = await db.courseRatting.findMany({
			where: {
				courseId: courseId,
			},
		});
		if (purchase) {
			attachments = await db.attachment.findMany({
				where: {
					courseId: courseId,
				},
			});
		}
		if (chapter.isFree || purchase) {
			muxData = await db.muxData.findUnique({
				where: {
					chapterId: chapterId,
				},
			});

			console.log('["COURSE', course);
			console.log('["PURCHASE', purchase);

			console.log('["MUX_DATA', muxData);
			console.log('["CHAPTER', chapter);

			nextChapter = await db.chapter.findFirst({
				where: {
					courseId: courseId,
					isPublished: true,
					position: {
						gt: chapter?.position,
					},
				},
				orderBy: {
					position: "asc",
				},
			});
			console.log('["NEXT_CHAPTER', nextChapter);
		}
		const userProgress = await db.userProgress.findUnique({
			where: {
				userId_chapterId: {
					userId,
					chapterId,
				},
			},
		});

		console.log('["USER_PROGRESS', userProgress);

		return {
			chapter,
			course,
			muxData,
			attachments,
			courseRatting,
			nextChapter,
			userProgress,
			purchase,
		};
	} catch (error) {
		console.log("[GET_CHAPTERS]", error);
		return {
			chapter: null,
			course: null,
			muxData: null,
			attachments: [],
			courseRatting: [],
			nextChapter: null,
			userProgress: null,
			purchase: null,
		};
	}
};
