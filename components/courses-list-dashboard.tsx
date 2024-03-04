import { Category, Course } from "@prisma/client";
import CourseCard from "@/components/course-card";
import CourseCardDashboard from "./course-card-dashboard";

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
	progress: number | null;
};
interface CoursesListProps {
	items: CourseWithProgressWithCategory[];
}
const CoursesListDashboard = ({ items }: CoursesListProps) => {
	return (
		<div>
			<div className=" gap-4  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-42xl:grid-cols-4  ">
				{items.map((item) => (
					<CourseCardDashboard
						key={item.id}
						id={item.id}
						title={item.title}
						description={item.description!}
						userId={item.userId}
						imageUrl={item.imageUrl!}
						chaptersLength={item.chapters.length}
						price={item.price!}
						progress={item.progress}
						category={item?.category?.name!}
					/>
				))}
			</div>
			{items.length === 0 && (
				<div className="text-center text-sm to-muted-foreground mt-10">
					No Course Completed
				</div>
			)}
		</div>
	);
};

export default CoursesListDashboard;
