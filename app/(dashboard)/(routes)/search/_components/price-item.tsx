"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import qs from "query-string";
import { useState } from "react";
type PriceRange = "1-50" | "51-200" | "201-1000";

const prices = [
	{
		name: "$1 to $50",
		value: "1-50",
	},
	{
		name: "$51 to $200",
		value: "51-200",
	},
	{
		name: "$201 to $1000",
		value: "201-1000",
	},
];
const PriceFilter = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentCategoryId = searchParams.get("categoryId");
	const currentTitle = searchParams.get("search");
	const currentRating = searchParams.get("rating");
	const currentPrice = searchParams.get("price");
	const currentCategory = searchParams.get("category");
	const currentPage = Number(searchParams?.get("page")) || 1;

	const [selectedPrice, setSelectedPrice] = useState<PriceRange | null>(
		currentPrice || null
	);

	const onClick = (price: PriceRange) => {
		const updatedPrice = price === selectedPrice ? null : price;
		setSelectedPrice(updatedPrice);

		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					// page: currentPage,
					page: 1,
					search: currentTitle,
					categoryId: currentCategoryId,
					price: updatedPrice,
					category: currentCategory,
					rating: currentRating,
				},
			},
			{ skipNull: true, skipEmptyString: true }
		);
		router.push(url, { scroll: false });
	};
	return (
		<>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className=" flex  justify-between     text-slate-500 text-sm font-[500] pl-6  transition-all hover:text-slate-600 hover:bg-slate-300/20  ">
						Price
					</AccordionTrigger>
					<Separator />
					<AccordionContent>
						{prices.map((price) => (
							<div className="flex flex-col p-3 " key={price.value}>
								<button
									key={price.value}
									type="button"
									onClick={() => onClick(price.value!)}
									className={cn(
										" grid grid-cols-2     items-center   text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 hover:bg-slate-300/20",
										selectedPrice === price.value
											? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
											: ""
									)}
								>
									{price.name}
									<Checkbox
										key={price.value}
										className={cn(
											"text-slate-500  ",
											selectedPrice === price.value ? "text-sky-700  " : ""
										)}
										checked={selectedPrice === price.value}
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

export default PriceFilter;
