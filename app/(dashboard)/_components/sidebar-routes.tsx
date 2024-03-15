"use client";
import { BarChart, Compass, Layout, List, Plus } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CollapsibleItem } from "@/components/collapsible-items";
import CategoryFilter from "../(routes)/search/_components/category-filter";
import PriceFilter from "../(routes)/search/_components/price-item";
import RatingFilter from "../(routes)/search/_components/rating-item";
const guestRoutes = [
	{
		icon: Layout,
		label: "Dashboard",
		href: "/",
	},
	{
		icon: Compass,
		label: "Browse",
		href: "/search",
	},
];

const teacherRoutes = [
	{
		icon: List,
		label: "Courses",
		href: "/teacher/courses",
	},
	{
		icon: BarChart,
		label: "Analytics",
		href: "/teacher/analytics",
	},
	{
		icon: Plus,
		label: "Create course",
		href: "/teacher/create",
	},
];

const SidebarRoutes = () => {
	const pathname = usePathname();

	const isTeacherPage = pathname?.includes("/teacher");
	const isCoursePage = pathname?.includes("/courses");
	const isSearchPage = pathname?.includes("/search");
	const hasTrueBrowse = isTeacherPage || isCoursePage || isSearchPage;

	console.log(isTeacherPage, isCoursePage, isSearchPage);
	const routes = isTeacherPage ? teacherRoutes : guestRoutes;
	return (
		<>
			<div className="flex flex-col w-full p-2">
				{routes.map((route) => (
					<SidebarItem
						key={route.href}
						icon={route.icon}
						label={route.label}
						href={route.href}
					/>
				))}
			</div>

			{!hasTrueBrowse && (
				<div className="flex flex-col w-full px-0.5 ">
					<p className="font-bold justify-center items-center text-center">
						Filter by
					</p>
					<CategoryFilter />
					<PriceFilter />
					<RatingFilter />
				</div>
			)}
		</>
	);
};

export default SidebarRoutes;
