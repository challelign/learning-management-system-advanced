import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
	publicRoutes: [
		"/",
		"/api/webhook",
		"/api/courses/:id/checkout",
		"/api/courses",
		"/api/courses/:id",
		"/api/courses/:id/attachments/:id",
		"/api/courses/:id/review/",
		"/api/courses/:id/review/:id",
		"/api/courses/:id/chapters/reorder",
		"/api/courses/:id/chapters/:id",
		"/api/courses/:id/chapters/:id/publish",
		"/api/courses/:id/chapters/:id/unpublish",
		"/api/courses/:id/chapters/:id/progress",
		"/api/courses/:id/publish",
		"/api/courses/:id/unpublish",

		"/api/uploadthing/",
	],
	ignoredRoutes: [
		"/((?!api|trpc))(_next|.+..+)(.*)",
		"/",
		"/teacher/create",
		"/teacher/course:id",
		"/api/courses/:id/:id",
		"/api/courses/:id/attachments/:id",
		"/api/courses/:id/chapters/reorder",
		"/api/courses/:id/chapters/:id/publish",
		"/api/courses/:id/chapters/:id/unpublish",
		"/api/courses/:id/chapters/:id/progress",
		"/api/courses/:id/publish",
		"/api/courses/:id/unpublish",
		"/api/courses:id",
		"/api/uploadthing",
		"/api/webhook",
		"/api/courses/:id/checkout",
	],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

/*

import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
	publicRoutes: ["/api/webhook", "/", "/api/courses"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


 */
