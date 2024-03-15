"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
type Category =
	| "Accounting"
	| "Computer Science"
	| "Engineering"
	| "Filming"
	| "Fitness"
	| "Music"
	| "Photography";

const categories: Category[] = [
	"Accounting",
	"Computer Science",
	"Engineering",
	"Filming",
	"Fitness",
	"Music",
	"Photography",
];

const CategoryFilter = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentCategoryId = searchParams.get("categoryId");
	const currentTitle = searchParams.get("search");
	const currentRating = searchParams.get("rating");
	const currentPrice = searchParams.get("price");
	const currentCategory = searchParams.get("category");
	const currentPage = Number(searchParams.get("page")) || 1;
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const updateUrlFromCategories = useCallback(
		(categories: string[]) => {
			const url = qs.stringifyUrl(
				{
					url: pathname,
					query: {
						search: currentTitle,
						categoryId: currentCategoryId,
						price: currentPrice,
						rating: currentRating,
						page: 1,
						category: categories.length ? categories.join(",") : null,
					},
				},
				{ skipNull: true, skipEmptyString: true }
			);
			router.push(url, { scroll: false });
		},
		[
			currentTitle,
			currentCategoryId,
			currentPrice,
			currentRating,
			pathname,
			router,
		]
	);

	const onClick = (category: string) => {
		let updatedCategories: string[];
		if (selectedCategories.includes(category)) {
			updatedCategories = selectedCategories.filter((c) => c !== category);
		} else {
			updatedCategories = [...selectedCategories, category];
		}
		setSelectedCategories(updatedCategories);
	};

	useEffect(() => {
		const categoriesFromUrl = currentCategory ? currentCategory.split(",") : [];
		setSelectedCategories(categoriesFromUrl);
	}, [currentCategory]);

	useEffect(() => {
		updateUrlFromCategories(selectedCategories);
	}, [selectedCategories, updateUrlFromCategories]);

	return (
		<>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className=" flex  justify-between     text-slate-500 text-sm font-[500] pl-6  transition-all hover:text-slate-600 hover:bg-slate-300/20  ">
						Category
					</AccordionTrigger>
					<Separator />

					<AccordionContent>
						{categories.map((category) => (
							<div className="flex flex-col gap-y-2" key={category}>
								<button
									key={category}
									type="button"
									onClick={() => onClick(category)}
									className={cn(
										" grid grid-cols-2    items-center p-1 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
										selectedCategories.includes(category)
											? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
											: ""
									)}
								>
									{category}

									<Checkbox
										id={category}
										className={cn(
											"text-slate-500",
											selectedCategories.includes(category)
												? "text-sky-700"
												: ""
										)}
										checked={selectedCategories.includes(category)}
									/>
								</button>
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default CategoryFilter;
