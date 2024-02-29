"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
	value: string;
}

export const Preview = ({ value }: PreviewProps) => {
	const ReactQuill = useMemo(
		() => dynamic(() => import("react-quill"), { ssr: false }),
		[]
	);

	//Custom Tool Bar
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "color", "image"],
			[{ "code-block": true }],
			["clean"],
		],
	};

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"align",
		"strike",
		"script",
		"blockquote",
		"background",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
		"color",
		"code-block",
	];
	return (
		<ReactQuill
			theme="bubble"
			value={value}
			formats={formats}
			modules={modules}
			readOnly
		/>
	);
};
