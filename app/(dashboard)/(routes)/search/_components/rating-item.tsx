"use client";
import { cn } from "@/lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import StarRatingValue from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/star-rating-value";
import { ArrowUp, ArrowUp01Icon, ArrowUpFromDot } from "lucide-react";

type Rating = 1 | 2 | 3 | 4 | 5;
const ratings: Rating[] = [5, 4, 3, 2, 1];
const RatingFilter = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentCategoryId = searchParams.get("categoryId");
	const currentTitle = searchParams.get("search");
	const currentRating = searchParams.get("rating");
	const currentPrice = searchParams.get("price");
	const currentCategory = searchParams.get("category");
	const currentPage = Number(searchParams?.get("page")) || 1;

	const [selectedRating, setSelectedRating] = useState<Rating | null>(
		currentRating || null
	);
	console.log(selectedRating);
	const onClick = (rating: Rating) => {
		const updatedRating = rating === selectedRating ? null : rating;
		setSelectedRating(updatedRating);

		console.log(updatedRating);
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					search: currentTitle,
					categoryId: currentCategoryId,
					price: currentPrice,
					// page: currentPage,
					page: 1,
					rating: updatedRating,
					category: currentCategory,
				},
			},
			{ skipNull: true, skipEmptyString: true }
		);
		router.push(url, { scroll: false });
	};

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger className=" flex  justify-between     text-slate-500 text-sm font-[500] pl-6  transition-all hover:text-slate-600 hover:bg-slate-300/20  ">
					Rating
				</AccordionTrigger>
				<Separator />
				<AccordionContent>
					{ratings.map((rating) => (
						<div className="flex flex-col gap-y-2" key={rating}>
							<button
								key={rating}
								onClick={() => onClick(rating)}
								className={cn(
									" grid grid-cols-2    items-center p-1 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
									selectedRating === rating
										? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
										: ""
								)}
							>
								<div className="pt-3 text-sm text-sky-950  font-black flex justify-start items-center gap-x-3 content-center">
									<StarRatingValue starSize={"text-sm"} value={rating} />
									<div>
										<ArrowUp className=" text-slate-600 h-4 w-4 " />
									</div>

									<Checkbox
										key={rating}
										className={cn(
											"text-slate-500",
											selectedRating === rating ? "text-sky-700" : ""
										)}
										checked={selectedRating == rating}
									/>
								</div>
							</button>
						</div>
					))}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default RatingFilter;
