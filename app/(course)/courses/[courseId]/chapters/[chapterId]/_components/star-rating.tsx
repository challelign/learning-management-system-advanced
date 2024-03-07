"use client";
import React, { useState, FC } from "react";

interface StarRatingProps {
	onChange?: (value: number) => void;
	value?: number;
	starSize?: string;
}

const StarRating = ({
	onChange,
	value,
	starSize = "text-4xl",
}: StarRatingProps) => {
	const [rating, setRating] = useState<number>(value || 0);

	const handleStarClick = (
		event: React.MouseEvent<HTMLButtonElement>,
		value: number
	) => {
		event.preventDefault(); // Prevent default form submission
		setRating(value);
		onChange(value);
	};
	const emptyStarIcon = "☆";
	const starIcon = "★";

	return (
		<div className="flex items-center gap-x-2">
			{[1, 2, 3, 4, 5].map((star) => (
				<button
					key={star}
					onClick={(event) => handleStarClick(event, star)}
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

export default StarRating;
