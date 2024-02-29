"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import axios from "axios";
import { Chapter, Course } from "@prisma/client";
interface ChapterActionsProps {
	disabled: boolean;
	courseId: string;
	chapterId: string;
	isPublished: boolean;
	chapterData?: Course & { chapters: Chapter[] };
}
const ChapterActions = ({
	disabled,
	courseId,
	chapterId,
	isPublished,
	chapterData,
}: ChapterActionsProps) => {
	// console.log(chapterData);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const onDelete = async () => {
		try {
			setIsLoading(true);
			await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
			toast.success("Chapter deleted");

			router.refresh();
			router.push(`/teacher/courses/${courseId}`);
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	const onClick = async () => {
		try {
			setIsLoading(true);
			if (isPublished) {
				await axios.patch(
					`/api/courses/${courseId}/chapters/${chapterId}/unpublish`
				);
				toast.success("Chapter Unpublished");
			} else {
				await axios.patch(
					`/api/courses/${courseId}/chapters/${chapterId}/publish`
				);
				toast.success("Chapter Published");
			}

			router.refresh();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="flex ice gap-x-2">
			<Button
				onClick={onClick}
				disabled={disabled || isLoading}
				value="outline"
				size="sm"
			>
				{isPublished ? "Unpublished" : "Publish"}
			</Button>
			<ConfirmModal onConfirm={onDelete} dataModal={chapterData}>
				<Button size="sm">
					<Trash />
				</Button>
			</ConfirmModal>
		</div>
	);
};

export default ChapterActions;
