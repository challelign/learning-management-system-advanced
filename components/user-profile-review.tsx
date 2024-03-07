"use client";
import StarRatingValue from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/star-rating-value";
import TimeStampForm from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/time-stamp-form";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Preview } from "./preview";

interface UserProfileReviewProps {
	review: string;
	reviewValue: number;
	createdAt: Date;
}
const UserProfileReview = ({
	review,
	reviewValue,
	createdAt,
}: UserProfileReviewProps) => {
	const { isLoaded, isSignedIn, user } = useUser();

	// if (!isLoaded || !isSignedIn) {
	// 	return null;
	// }
	const firstName = user?.firstName || "Challelign";
	const lastName = user?.lastName || "Tilahun";
	const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
	return (
		<>
			{/* <Image
				width={100}
				height={100}
				src={
					user?.imageUrl
						? user.imageUrl
						: `https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
				}
				className="w-12 h-12 rounded-full"
				alt="user profile"
			/> */}

			<div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center">
				<span className="text-lg font-bold">{initials}</span>
			</div>
			<div>
				<p className="text-[15px] text-[#333] font-bold">
					{user?.firstName ? user?.firstName : "Unknown user"}
				</p>
				<p className="flex items-center gap-x-4 text-xs text-gray-500 mt-0.5">
					<StarRatingValue starSize="text-xl" value={reviewValue!!} />
					<TimeStampForm createdAt={createdAt} />
				</p>
			</div>

			<div className="bg-slate-100 rounded-md">
				<div className="flex justify-between items-center">
					<div>
						<Preview value={review!} />
					</div>
				</div>
			</div>
		</>
	);
};

export default UserProfileReview;
