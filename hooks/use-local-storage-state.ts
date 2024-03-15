/* "use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
	initialState: T,
	key: string
): [T, Dispatch<SetStateAction<T>>] {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
}
 */
"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
	initialState: T,
	key: string
): [T, Dispatch<SetStateAction<T>>] {
	const [value, setValue] = useState<T>(() => {
		if (typeof window !== "undefined") {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : initialState;
		}
		return initialState;
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}, [value, key]);

	return [value, setValue];
}
