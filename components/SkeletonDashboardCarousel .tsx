import { Skeleton } from "@/components/ui/skeleton";
const SkeletonDashboardCarousel = () => {
	return (
		<div className="slide-holder w-full flex h-full">
			<Skeleton className="h-full w-full absolute pl-9 top-0   left-6 bottom-1 flex items-center justify-center xl:pl-9 xl:left-9">
				<div className="hidden sm:block bg-gray-300 p-4 rounded-lg animate-pulse">
					<Skeleton className="h-full w-full bg-gray-400 rounded mb-4" />
				</div>
			</Skeleton>
		</div>
	);
};

export default SkeletonDashboardCarousel;
