"use client";

import { UserButton, UserProfile, auth, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogIn, LogOut, MoveRight, User } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
	const pathname = usePathname();
	const isTeacherPage = pathname?.startsWith("/teacher");
	const isCoursePage = pathname?.includes("/courses");

	const isSearchPage = pathname === "/search";
	const { userId } = useAuth();
	return (
		<>
			{isSearchPage && (
				<div className="hidden md:block">
					<SearchInput />
				</div>
			)}
			<div className="flex gap-x-2 ml-auto">
				{isCoursePage ||
					(userId && (
						<Link
							href={`/search`}
							className="flex items-center text-sm hover:opacity-75 transition "
						>
							<Button size="sm" variant="ghost">
								<ArrowLeft className="h-4 w-4 mr-2" /> Back to course
							</Button>
						</Link>
					))}
				{isTeacherPage || (isCoursePage && userId) ? (
					<Link href="/">
						<Button size="sm" variant="ghost">
							<LogOut className="h-4 w-4 mr-2" />
							Exit
						</Button>
					</Link>
				) : isTeacher(userId) ? (
					<Link href="/teacher/courses">
						<Button size="sm" variant="ghost">
							<MoveRight className="text-red-800 " /> Teacher mode
						</Button>
					</Link>
				) : null}
				{/* this help when we logout it will not redirect to clerk site */}

				{!userId && (
					<>
						<Link href="/sign-in">
							<Button size="sm" variant="ghost">
								<LogIn className="h-4 w-4 mr-2" />
								Sign in
							</Button>
						</Link>
						<Link href="/sign-up">
							<Button size="sm" variant="ghost">
								<User className="h-4 w-4 mr-2" />
								Sign up
							</Button>
						</Link>
					</>
				)}
				{/* <UserProfile /> */}
				<UserButton afterSignOutUrl="/" />
			</div>
		</>
	);
};

export default NavbarRoutes;
