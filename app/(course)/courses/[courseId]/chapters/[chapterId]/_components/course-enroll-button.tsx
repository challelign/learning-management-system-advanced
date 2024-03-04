"use client";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { auth, useAuth } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
	price: number;
	courseId: string;
}
const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
	const [isLoading, setIsLoading] = useState(false);
	// const { userId } = auth();
	const { isLoaded, userId, sessionId, getToken } = useAuth();

	if (!userId) {
		toast.error("Please Login first");
		return redirect("/sign-up");
	}
	const onClick = async () => {
		try {
			setIsLoading(false);
			const response = await axios.post(`/api/courses/${courseId}/checkout`);
			window.location.assign(response.data.url);
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Button
			onClick={onClick}
			disabled={isLoading}
			className="w-full md:w-auto"
			size="sm"
		>
			Enroll for {formatPrice(price)}
		</Button>
	);
};

export default CourseEnrollButton;
