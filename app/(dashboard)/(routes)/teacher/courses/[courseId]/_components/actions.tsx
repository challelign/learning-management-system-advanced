"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import axios from "axios";
import { Chapter, Course } from "@prisma/client";
import { useConfettiStore } from "@/hooks/use-confetti-store";
interface ActionsProps {
	disabled: boolean;
	courseId: string;
	isPublished: boolean;
	chapterData: Course & { chapters: Chapter[] };
}
const Actions = ({
	disabled,
	courseId,
	isPublished,
	chapterData,
}: ActionsProps) => {
	// console.log(chapterData);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const confetti = useConfettiStore();
	const onDelete = async () => {
		try {
			setIsLoading(true);
			await axios.delete(`/api/courses/${courseId}`);
			toast.success("Course deleted");

			router.refresh();
			router.push(`/teacher/courses`);
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
				await axios.patch(`/api/courses/${courseId}/unpublish`);
				toast.success("Course Unpublished");
			} else {
				await axios.patch(`/api/courses/${courseId}/publish`);
				toast.success("Course Published");
				confetti.onOpen();
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

export default Actions;
