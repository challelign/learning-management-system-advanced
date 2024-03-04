import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import CoursesList from "@/components/courses-list";
import { UserButton, auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import InfoCard from "./_components/iInfo-card";

import { CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import DashboardCarousel from "@/components/dashboard-carousel";
import { TabsNavigation } from "@/components/tabs-navigation";
import Categories from "../search/_components/categories";
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { getCoursesDashboard } from "@/actions/get-courses-dashboard";
import { Separator } from "@/components/ui/separator";
import SearchInput from "@/components/search-input";
interface SearchPageProps {
	searchParams: {
		title: string;
		categoryId: string;
	};
}
const Dashboard = async ({ searchParams }: SearchPageProps) => {
	// let { userId } = auth();
	let userId = "659804040fd75fd95096cb02";
	// const user = ();
	// const user = await clerkClient.users.getUser(userId);

	// console.log(user.id);
	// console.log(user.firstName);
	// let userId = "659804040fd75fd95096cb02";
	console.log("searchParams =>", searchParams.categoryId);
	if (!userId) {
		return redirect("/");
	}

	const categories = await db.category.findMany({
		orderBy: { name: "asc" },
	});
	const courseTotal = await db.course.count({
		where: {
			isPublished: true,
		},
	});
	console.log(courseTotal);
	const courses = await getCoursesDashboard({
		...searchParams,
	});
	// const { completedCourses, coursesInProgress } = await getDashboardCourses(
	// 	userId
	// );

	const { completedCourses, coursesInProgress } = await getDashboardCourses(
		userId
	);
	return (
		<>
			<DashboardCarousel />
			{completedCourses.length > 0 ||
				(coursesInProgress.length > 0 && (
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
				))}

			<div className="flex-col py-2 p-3">
				<h2 className="text-2xl pb-2 gap-4  h3-bold text-slate-600 ">
					All the skills you need in one place
				</h2>
				<p className="text-xl p-regular-20 md:p-regular-24 text-slate-600">
					From critical workplace skills to technical topics, our catalog
					supports well-rounded professional development.
				</p>
			</div>

			<div className="flex-col py-2 p-3">
				<p className="text-slate-600 text-xl">
					A broad selection of courses Choose from over {courseTotal} online
					video courses with new additions published every month
				</p>
			</div>
			{/* <div className="flex gap-4 p-2">
				<TabsNavigation />
			</div> */}
			<div className="px-6 space-x-4">
				<div className="p-6 md:mb-0 block">
					<SearchInput />
				</div>
				<div className="space-y-7 p-6">
					<Categories items={categories} />
				</div>
				<Separator />
				<div className="space-y-7 p-6">
					<CoursesList items={courses} />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
