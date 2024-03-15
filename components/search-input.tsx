"use client";
// import { useDebouncedCallback } from "use-debounce";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./providers/use-debounce";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import qs from "query-string";
const SearchInput = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const currentTitle = searchParams.get("search") || null;
	const currentRating = searchParams.get("rating");
	const currentPrice = searchParams.get("price");
	const currentCategory = searchParams.get("category");
	const currentPage = Number(searchParams.get("page")) || 1;

	// set default initial value to currentTitle
	const [value, setValue] = useState(currentTitle);
	const debouncedValue = useDebounce(value);
	// console.log(debouncedValue);

	const currentCategoryId = searchParams.get("categoryId");

	const updateUrl = useCallback(
		(value: any) => {
			const newPage = value ? 1 : currentPage;
			const url = qs.stringifyUrl(
				{
					url: pathname,
					query: {
						categoryId: currentCategoryId,
						search: value,
						page: newPage,
						price: currentPrice,
						rating: currentRating,
						category: currentCategory,
					},
				},
				{ skipEmptyString: true, skipNull: true }
			);
			router.push(url, { scroll: false });
		},
		[
			currentCategoryId,
			currentPrice,
			currentRating,
			currentCategory,
			pathname,
			currentPage,
			router,
		]
	);
	useEffect(() => {
		updateUrl(debouncedValue);
	}, [debouncedValue, updateUrl]);

	/* 	useEffect(() => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					categoryId: currentCategoryId,
					search: debouncedValue,
					//
					page: currentPage,
					price: currentPrice,
					rating: currentRating,
					category: currentCategory,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);
		router.push(url, { scroll: false });
	}, [
		debouncedValue,
		currentCategoryId,
		router,
		pathname,
		currentCategory,
		currentPrice,
		currentRating,
		currentPage,
	]); */
	return (
		<div className="relative">
			<Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
			<Input
				onChange={(e) => setValue(e.target.value)}
				value={value!}
				className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
				placeholder="Search for a course"
			/>
		</div>
	);
};

export default SearchInput;
