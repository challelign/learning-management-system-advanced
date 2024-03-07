"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Chapter, Course, CourseRatting } from "@prisma/client";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";
import { Metadata } from "next";
import StarRating from "./star-rating";
import StarRatingValue from "./star-rating-value";
import TimeStampForm from "./time-stamp-form";
export const metadata: Metadata = {
	title: "Chapter Description",
	description: "Chapter Description",
};

interface CourseCommentWithStartFormProps {
	initialData: CourseRatting;
	userId: string;
	reviewId?: string;
	courseId: string;
}
const formSchema = z.object({
	rating: z
		.number()
		.min(1, "Number should be greater than or equal to 1")
		.max(5, "Number should be less than or equal to 5"),

	review: z.string().refine(
		(value) => {
			// Custom validation to ensure review is not empty or only contains <p><br></p>
			const cleanedValue = value.replace(/<p><br><\/p>/g, "").trim();
			return cleanedValue.length >= 9; // Adjusted condition for minimum length , '<p>aa</p>' is counterd
		},
		{
			message: "Review should be at least 2 characters long",
		}
	),
});
const CourseCommentWithStartForm = ({
	initialData,
	userId,
	reviewId,
	courseId,
}: CourseCommentWithStartFormProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [deletingId, setDeletingId] = useState<string | null>(null);

	const isUpdating = !!initialData; // boolean value

	const toggleEdit = () => setIsEditing((current) => !current);

	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			rating: initialData?.rating || 0,
			review: initialData?.review || "",
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (
		values: z.infer<typeof formSchema>,
		isUpdating: boolean
	) => {
		try {
			if (isUpdating) {
				await axios.patch(`/api/courses/${courseId}/review`, values);
				toast.success("Course reviewed updated");
			} else {
				await axios.post(`/api/courses/${courseId}/review`, values);
				toast.success("Course reviewed");
			}
			router.refresh();
			toggleEdit();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		}
	};
	const onDelete = async (id: string) => {
		try {
			setDeletingId(id);
			console.log(id);
			await axios.delete(`/api/courses/${courseId}/review/${id}`);
			toast.success("Course Review deleted ");
			router.refresh();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setDeletingId(null);
		}
	};
	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Course review
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
							<Pencil className="h-4 w-4 mr-2" />
							Edit | Add Your review
						</>
					)}
				</Button>
			</div>
			{!isEditing && (
				<div
					className={cn(
						"text-sm mt-2",
						!initialData?.review && "text-slate-500 italic"
					)}
				>
					{!initialData?.review && "You did`t review the course yet!"}
					{initialData?.review && initialData?.rating && (
						<>
							<div className="flex justify-between items-center  ">
								<div>
									<Preview value={initialData?.review} />
								</div>
								<div className="w-60 text-sky-600 font-bold ">
									<TimeStampForm createdAt={initialData.createdAt} />
								</div>
								<button
									onClick={() => onDelete(initialData.id)}
									className="ml-auto hover:opacity-75 transition"
								>
									<X className="h-4 w-4" />
								</button>
							</div>

							<div className="ml-4">
								<StarRatingValue value={initialData.rating} />
							</div>
						</>
					)}
				</div>
			)}
			{isEditing && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => onSubmit(data, isUpdating))}
						className="space-y-4 mt-4"
					>
						<FormField
							control={form.control}
							name="review"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Editor {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="rating"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<StarRating {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Button disabled={!isValid || isSubmitting} type="submit">
								Save
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	);
};

export default CourseCommentWithStartForm;
