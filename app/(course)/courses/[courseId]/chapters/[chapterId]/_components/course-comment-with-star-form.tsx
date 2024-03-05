"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
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
export const metadata: Metadata = {
	title: "Chapter Description",
	description: "Chapter Description",
};

interface CourseCommentWithStartFormProps {
	initialData: Course & { courseRatting: CourseRatting[] };
	userId: string;
	courseId: string;
	// chapterId: string;
}
const formSchema = z.object({
	rating: z
		.number()
		.min(1, "Number should be greater than or equal to 1")
		.max(5, "Number should be less than or equal to 5"),

	// review: z.string().trim().min(2, {
	// 	message: "Review can not be empty!",
	// }),

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
	courseId,
}: // chapterId,
CourseCommentWithStartFormProps) => {
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((current) => !current);

	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			rating: initialData?.rating || 0,
			review: initialData?.review || "",
			rating: 0,
			review: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// console.log(values.review.length);
		// console.log(values.review);
		try {
			await axios.patch(`/api/courses/${courseId}/`, values);
			toast.success("Course reviewed");
			toggleEdit();
			router.refresh();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		}
	};
	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Course Review
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
							<Pencil className="h-4 w-4 mr-2" />
							Edit Review
						</>
					)}
				</Button>
			</div>
			{/* {!isEditing && (
				<div
					className={cn(
						"text-sm mt-2",
						!initialData.description && "text-slate-500 italic"
					)}
				>
					{!initialData.description && "No description"}
					{initialData.description && (
						<Preview value={initialData.description} />
					)}
				</div>
			)} */}
			{isEditing && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
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
										<StarRating
											// onChange={(value) => form.setValue("rating", value)}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* <StarRating onChange={(value) => form.setValue("ratting", value)} /> */}

						<div className="flex items-center gap-x-2">
							<Button disabled={!isValid || isSubmitting} type="submit">
								Save
							</Button>
						</div>
					</form>
				</Form>

				/* 	<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 mt-4"
					>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Editor {...field} />
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
				</Form> */
			)}
		</div>
	);
};

export default CourseCommentWithStartForm;
