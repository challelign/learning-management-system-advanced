"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css";

interface EditorProps {
	onChange: (value: string) => void;
	value: string;
}
export const Editor = ({ onChange, value }: EditorProps) => {
	const ReactQuill = useMemo(
		() => dynamic(() => import("react-quill"), { ssr: false }),
		[]
	);
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
		<div className="bg-white">
			<ReactQuill
				theme="snow"
				value={value}
				formats={formats}
				modules={modules}
				onChange={onChange}
			/>
		</div>
	);
};
