"use client";
import React, { useState, FC, useEffect } from "react";

interface StarRatingProps {
	value: number | 0;
	starSize?: string;
}

const StarRatingValue = ({ value, starSize = "text-4xl" }: StarRatingProps) => {
	const [rating, setRating] = useState<number>(value);
	const emptyStarIcon = "☆";
	const starIcon = "★";

	useEffect(() => {
		setRating(value);
	}, [value]);

	return (
		<div className="flex items-center gap-x-2">
			{[1, 2, 3, 4, 5].map((star) => (
				<button
					key={star}
					value={rating}
					className={`text-yellow-500  ${
						star <= rating ? "fill" : ""
					} ${starSize}`}
				>
					{star <= rating ? starIcon : emptyStarIcon}
				</button>
			))}
		</div>
	);
};

export default StarRatingValue;
