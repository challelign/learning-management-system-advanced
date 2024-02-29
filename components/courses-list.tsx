import { Category, Course } from "@prisma/client";
import CourseCard from "@/components/course-card";

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
	progress: number | null;
};
interface CoursesListProps {
	items: CourseWithProgressWithCategory[];
}
const CoursesList = ({ items }: CoursesListProps) => {
	return (
		<div>
			<div className=" gap-4  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-42xl:grid-cols-4  ">
				{items.map((item) => (
					<CourseCard
						key={item.id}
						id={item.id}
						title={item.title}
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
					No Course found
				</div>
			)}
		</div>
	);
};

export default CoursesList;
