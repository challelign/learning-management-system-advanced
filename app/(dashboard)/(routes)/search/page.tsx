import { db } from "@/lib/db";
import Categories from "./_components/categories";
import SearchInput from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CoursesList from "@/components/courses-list";

interface SearchPageProps {
	searchParams: {
		title: string;
		categoryId: string;
	};
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
	let { userId } = auth();
	// let userId = "user_2c7WDRhRgaTXgF3G3JIaInZbQD4";

	if (!userId) {
		return redirect("/");
	}
	const categories = await db.category.findMany({
		orderBy: { name: "asc" },
	});
	const courses = await getCourses({
		userId,
		...searchParams,
	});
	return (
		<>
			<div className="px-6 pt-6 md:hidden md:mb-0 block">
				<SearchInput />
			</div>
			<div className="p-6 space-x-4">
				<Categories items={categories} />
				<CoursesList items={courses} />
			</div>
		</>
	);
};

export default SearchPage;
