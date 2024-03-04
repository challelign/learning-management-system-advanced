import { db } from "@/lib/db";

export const getProgress = async (
	userId: string,
	courseId: string
): Promise<number> => {
	try {
		// Get all ids of the published chapters
		const publishedChapters = await db.chapter.findMany({
			where: {
				courseId: courseId,
				isPublished: true,
			},
			select: {
				id: true,
			},
		});

		console.log(publishedChapters);

		// get each chapter id
		const publishedChapterIds = publishedChapters.map((chapter) => chapter.id);

		// get progress of the chapter count based on publishedChapterIds
		const validCompletedChapters = await db.userProgress.count({
			where: {
				userId: userId,
				//   load all chapters
				// specifies that the "chapterId" column should be one of the values in the publishedChapterIds array.
				chapterId: {
					in: publishedChapterIds,
				},
				isCompleted: true,
			},
		});
		const progressPercentage =
			(validCompletedChapters / publishedChapterIds.length) * 100;

		return progressPercentage;
	} catch (error) {
		console.log("[GET_PROGRESS]", error);
		return 0;
	}
};
