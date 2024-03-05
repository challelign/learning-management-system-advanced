"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const DashboardCarousel = () => {
	return (
		<>
			<div className="relative">
				<Carousel
					showThumbs={true}
					showStatus={false}
					infiniteLoop
					useKeyboardArrows
					transitionTime={5000}
					autoPlay // Add this line to enable automatic sliding
					// interval={3000} // Set the interval (in milliseconds) between each slide
				>
					<div className="slide-holder">
						<Image
							className="w-full h-auto"
							src="/image/dashboard-udemy.jpg"
							alt="dashboard-udemy"
							width={1000}
							height={900}
						/>
						<div className="absolute pl-9 top-0 w-96 left-6  bottom-1 flex items-center justify-center xl:pl-9 xl:left-9">
							<div className="hidden sm:block  bg-black bg-opacity-50 p-4 text-white text-center">
								<h1 className="text-4xl font-bold">Learning that gets you</h1>
								<p className="mt-4 text-lg w-auto  sm:text-sm  ">
									Skills for your present (and your future). Get started with
									us.
								</p>
							</div>
						</div>
						<div className="py-2">
							<div className="block sm:hidden bg-black bg-opacity-50    text-white text-center justify-center">
								<h1 className="text-4xl font-bold text-center justify-center">
									Learning that gets you
								</h1>
								<p className="mt-4 text-lg w-auto  text-center justify-center">
									Skills for your present (and your future). Get started with
									us.
								</p>
							</div>
						</div>
					</div>

					<div className="slide-holder ">
						<Image
							className="w-full h-auto"
							src="/image/dashboard-udemy2.jpg"
							alt="dashboard-udemy"
							width={1000}
							height={900}
						/>
						<div className="absolute pl-9 top-0 w-96 left-6  bottom-1 flex items-center justify-center xl:pl-9 xl:left-9">
							<div className="hidden sm:block  bg-black bg-opacity-50 p-4 text-white text-center">
								<h1 className="text-4xl font-bold">Keep moving up</h1>
								<p className="mt-4 text-lg w-auto  sm:text-sm  ">
									Learn the skills you need to take the next step — and every
									step after. Courses from $12.99. Sale ends today.
								</p>
							</div>
						</div>
						<div className="py-2">
							<div className="block sm:hidden bg-black bg-opacity-50    text-white text-center justify-center">
								<h1 className="text-4xl font-bold text-center justify-center">
									Keep moving up
								</h1>
								<p className="mt-4 text-lg w-auto  text-center justify-center">
									Learn the skills you need to take the next step — and every
									step after. Courses from $12.99. Sale ends today.
								</p>
							</div>
						</div>
					</div>

					<div className="slide-holder ">
						<Image
							className="w-full h-auto"
							src="/image/dashboard-udemy1.jpg"
							alt="dashboard-udemy"
							width={1000}
							height={900}
						/>
						<div className="absolute pl-9 top-0 w-96 left-6  bottom-1 flex items-center justify-center xl:pl-9 xl:left-9">
							<div className="hidden sm:block  bg-black bg-opacity-50 p-4 text-white text-center">
								<h1 className="text-4xl font-bold">Learn without limits</h1>
								<p className="mt-4 text-lg w-auto  sm:text-sm  ">
									Start, switch, or advance your career with more than 6,900
									courses, Professional Certificates, and degrees from
									world-class universities and companies.
								</p>
							</div>
						</div>
						<div className="py-2">
							<div className="block sm:hidden bg-black bg-opacity-50    text-white text-center justify-center">
								<h1 className="text-4xl font-bold text-center justify-center">
									Learn without limits
								</h1>
								<p className="mt-4 text-lg w-auto  text-center justify-center">
									Start, switch, or advance your career with more than 6,900
									courses, Professional Certificates, and degrees from
									world-class universities and companies.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default DashboardCarousel;
