import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { File, X } from "lucide-react";

import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";

import { VideoPlayer } from "./_components/video-player";
import CourseProgressButton from "./_components/course-progress-button";
import CourseEnrollButton from "./_components/course-enroll-button";
import CourseCommentWithStartForm from "./_components/course-comment-with-star-form";
import { db } from "@/lib/db";
import UserProfileReview from "@/components/user-profile-review";

const ChapterIdPage = async ({
	params,
}: {
	params: { courseId: string; chapterId: string };
}) => {
	const { userId } = auth();
	// let userId = "user_2c7WDRhRgaTXgF3G3JIaInZbQD4";

	if (!userId) {
		return redirect("/");
	}
	const reviewCourse = await db.courseRatting.findUnique({
		where: {
			userId_courseId: {
				userId,
				courseId: params.courseId,
			},
		},
		include: {
			course: true,
			// attachments: {
			// 	orderBy: {
			// 		createdAt: "asc",
			// 	},
			// },
		},
	});
	console.log("[reviewCourse]", reviewCourse);
	// if (!reviewCourse) {
	// 	return redirect("/");
	// }
	const {
		chapter,
		course,
		muxData,
		courseRatting,
		attachments,
		nextChapter,
		userProgress,
		purchase,
	} = await getChapter({
		userId,
		chapterId: params.chapterId,
		courseId: params.courseId,
	});

	if (!chapter || !course) {
		return redirect("/");
	}
	console.log("[courseRatting]", courseRatting);

	const isLocked = !chapter.isFree && !purchase;
	const completeOnEnd = !!purchase && !userProgress?.isCompleted;

	return (
		<div>
			{userProgress?.isCompleted && (
				<Banner variant="success" label="You already completed this chapter." />
			)}
			{isLocked && (
				<Banner
					variant="warning"
					label="You need to purchase this course to watch this chapter."
				/>
			)}
			<div className="flex flex-col max-w-4xl mx-auto pb-20">
				<div className="p-4">
					<VideoPlayer
						chapterId={params.chapterId}
						title={chapter.title}
						courseId={params.courseId}
						nextChapterId={nextChapter?.id}
						playbackId={muxData?.playbackId!}
						isLocked={isLocked}
						completeOnEnd={completeOnEnd}
					/>
				</div>
				<div>
					<div className="p-4 flex flex-col md:flex-row items-center justify-between">
						<h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
						{purchase ? (
							<CourseProgressButton
								chapterId={params.chapterId}
								courseId={params.courseId}
								nextChapterId={nextChapter?.id}
								isCompleted={!!userProgress?.isCompleted}
							/>
						) : (
							<CourseEnrollButton
								courseId={params.courseId}
								price={course.price!}
							/>
						)}
					</div>
					<Separator />
					<div>
						<Preview value={chapter.description!} />
					</div>
					{!!attachments.length && (
						<>
							<Separator />
							<div className="p-4">
								{attachments.map((attachment) => (
									<a
										href={attachment.url}
										target="_blank"
										key={attachment.id}
										className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
									>
										<File />
										<p className="line-clamp-1">{attachment.name}</p>
									</a>
								))}
							</div>
						</>
					)}
				</div>

				<div className="p-4 text-2xl text-sky-950  font-black">
					⭐ {course.totalRating} course rating
					{/* 2K ratings */}
				</div>
				<div>
					<Separator />
					{purchase && (
						<div className="p-4">
							<CourseCommentWithStartForm
								initialData={reviewCourse!}
								userId={userId}
								courseId={params.courseId}
								reviewId={reviewCourse?.id!}
							/>
						</div>
					)}

					{!!courseRatting.length && (
						<>
							<div className="grid grid-cols-2 gap-4">
								{courseRatting.map((rating) => {
									if (rating.userId !== userId) {
										return (
											<>
												<div className="flex flex-wrap items-center justify-center gap-5 cursor-pointer">
													<UserProfileReview
														review={rating.review!}
														reviewValue={rating.rating!}
														createdAt={rating.createdAt}
													/>
												</div>
											</>
										);
									}
								})}
							</div>
						</>
					)}
				</div>
				<div className="p-4">
					{courseRatting.length == 0 && (
						<div className="font-medium flex items-center justify-between">
							No review yet
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChapterIdPage;
