"use client";
import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
	return (
		<div className="p-10">
			<h3 className="text-3xl font-bold mb-2">Fetching Courses</h3>
			<h4 className="text-3xl text-gray-400">We wont be long ..</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
				<Skeleton className="w-[250px] h-[300px]" />
				<Skeleton className="w-[250px] h-[300px]" />
				<Skeleton className="w-[250px] h-[300px]" />
				<Skeleton className="w-[250px] h-[300px]" />
			</div>
		</div>
	);
};
export default Loading;
