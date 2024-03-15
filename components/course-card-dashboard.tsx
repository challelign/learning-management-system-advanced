import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { CourseProgress } from "./course-progress";
import { auth, clerkClient, currentUser, useAuth } from "@clerk/nextjs";
import CourseEnrollButton from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button";
import { getChapter } from "@/actions/get-chapter";
import { db } from "@/lib/db";
import StarRatingValue from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/star-rating-value";

interface CourseCardProps {
	id: string;
	title: string;
	totalReview: number;
	description: string;
	imageUrl: string;
	userId: string;
	chaptersLength: number;
	price: number;
	progress: number | null;
	category: string;
}
const CourseCardDashboard = async ({
	id,
	title,
	totalReview,
	description,
	imageUrl,
	chaptersLength,
	price,
	userId,
	progress,
	category,
}: CourseCardProps) => {
	// uncomment Created by
	const user = await clerkClient.users.getUser(userId);
	let userIdAuth = "user_2c7WDRhRgaTXgF3G3JIaInZbQD4";

	// const { userId: userIdAuth } = auth();
	return (
		<Link href={`/courses/${id}`}>
			<div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full relative">
				<div className="relative w-full aspect-video rounded-md overflow-hidden">
					<Image fill src={imageUrl} alt={title} className="object-cover" />
				</div>
				<div className="flex flex-col pt-2">
					<div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
						{title}
					</div>
					{/* <p className="text-sm mb-4"> Created by {user.firstName}</p> */}
					<p className="text-xs to-muted-foreground">{category}</p>
					<div className="pt-3 text-sm text-sky-950  font-black flex justify-start items-center gap-x-3 content-center">
						{totalReview}
						<StarRatingValue starSize={"text-2xl"} value={totalReview} />
					</div>
					<div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
						<div className="flex items-center gap-x-1 to-slate-500">
							<IconBadge size="sm" icon={BookOpen} />
							<span>
								{chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
							</span>
						</div>
					</div>

					<p className="text-md md:text-sm font-medium text-slate-700">
						{formatPrice(price)}
					</p>
				</div>
				<div className=" opacity-0 group-hover:opacity-100 bg-white rounded-lg absolute inset-0 flex-col items-center justify-center transition">
					<div className=" px-4">
						<p className="text-lg font-medium mb-2 pt-3 justify-center text-center">
							{title}
						</p>
						<p className="text-sm mb-4">{category}</p>
						<p className="text-sm text-gray-500 line-clamp-3">{description}</p>
						<div className="flex items-center gap-2 py-3">
							<div className="p-4 flex flex-col md:flex-row items-center justify-between">
								{userIdAuth ? (
									<Link href={`/courses/${id}`}>
										<button className="px-3  py-1 text-sm rounded-md bg-blue-400 text-white hover:bg-blue-500">
											Go to course
										</button>
									</Link>
								) : (
									<Link href="/sign-up">
										<button className="px-3  py-1 text-sm rounded-md bg-blue-400 text-white hover:bg-blue-500">
											Please sign up to purchase
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CourseCardDashboard;
