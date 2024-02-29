import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import CoursesList from "@/components/courses-list";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import InfoCard from "./_components/iInfo-card";
import { CheckCircle, Clock } from "lucide-react";

export default async function Dashboard() {
	let { userId } = auth();

	if (!userId) {
		return redirect("/");
	}
	const { completedCourses, coursesInProgress } = await getDashboardCourses(
		userId
	);
	return (
		<div className="p-6 space-y-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
				{/* TODO info card */}
				<InfoCard
					icon={Clock}
					label="In Progress"
					numberOfItems={coursesInProgress.length}
				/>
				<InfoCard
					icon={CheckCircle}
					label="Completed"
					numberOfItems={completedCourses.length}
					variant="success"
				/>
			</div>
			<CoursesList items={[...coursesInProgress, ...completedCourses]} />
			{/* <UserButton afterSignOutUrl="/" /> */}
		</div>
	);
}
