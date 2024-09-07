"use client";
import Link from "next/link";
import React, { useState } from "react";
// import fs from "fs";

const Blag = (prop: {
	postMetadata: string | any[];
	postContent: (
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| Iterable<React.ReactNode>
		| React.ReactPortal
		| React.PromiseLikeOfReactNode
		| null
		| undefined
	)[];
}) => {
	let slider: any[] = [];
	let setSliders = () => {
		for (let i = 0; i < prop.postMetadata.length; i += 3) {
			slider.push(prop.postMetadata.slice(i, i + 3));
		}
		console.log(slider);
	};

	setSliders();
	let [next, setNext] = useState(2);

	return (
		<div>
			<div className="hidden lg:block sm:hidden">
				<div className="carousel w-full">
					{slider &&
						slider.map((slug, index) => (
							<div
								key={index}
								id={"slide" + (index + 1)}
								className="carousel-item relative w-full"
							>
								<div className="lg:grid grid-cols-3 gap-4">
									{slug &&
										slug.map((card: any, indexIndex: number) => (
											<div key={indexIndex} className="border border-black ">
												{/* <img src="bg1.jpg" className="lg:w-full h-64" /> */}
												<div className="ml-6">
													{/* <h2 className="text-xl text-gray-400 mt-2">
                            Jan 11, 2019
                          </h2>
                          <h2 className="text-xl text-gray-400">By Admin</h2> */}
													{/* <h2 className="text-2xl font-bold mt-4">{card}</h2> */}
													<p className="text-xl text-black mt-2">
														{
															prop.postContent[
																(index + 1) * (indexIndex + 1) - 1
															]
														}
													</p>
													<div className="lg:flex justify-end">
														<Link
															href={`/posts/${card}`}
															className="bg-[#29BDD5] p-2 mt-24 mr-4 mb-2 rounded-md  "
														>
															Continue Reading
														</Link>
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						))}
				</div>
				<div className=" flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
					<a
						href={"#slide" + next}
						onClick={() => setNext(next == 1 ? slider.length : +next - 1)}
						className="btn btn-circle"
					>
						❮
					</a>
					<a
						href={"#slide" + next}
						onClick={() => setNext(next == slider.length ? 1 : +next + 1)}
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>

			<div className="md:hidden">
				<div className="w-64 carousel rounded-box">
					<div className="carousel-item w-full">
						<div className="border border-black ">
							<img src="bg1.jpg" className="lg:w-full h-64" />
							<div className="ml-6">
								<h2 className="text-xl text-gray-400 mt-2">Jan 11, 2019</h2>
								<h2 className="text-xl text-gray-400">By Admin</h2>
								<h2 className="text-2xl font-bold mt-4">
									Functional Programming Adventures in 2019
								</h2>
								<p className="text-xl text-gray-400 mt-2">
									I like to start with wishing all the readers A Very Happy New
									Year… I wish 2019 for you will be too much fun and...
								</p>
								<div className="lg:flex justify-end">
									<button className="bg-[#29BDD5] p-2 mt-24 mr-4 mb-2 rounded-md  ">
										Continue Reading
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item w-full">
						<div className="border border-black">
							<img src="bg2.jpg" className="w-full h-64 " />
							<div className="ml-6">
								<h2 className="text-xl text-gray-400 mt-2">Oct 31, 2018</h2>
								<h2 className="text-xl text-gray-400">By Admin</h2>
								<h2 className="text-2xl font-bold mt-4">
									Native Script - Angular Once Again
								</h2>
								<p className="text-xl text-gray-400 mt-2">
									Angular 1 was good, very good specifically in its time zone.
									But after that they lost control on versioning and I lost...
								</p>
								<div className="flex justify-end">
									<button className="bg-[#29BDD5] p-2 mt-24 mr-4 mb-2 rounded-md  ">
										Continue Reading
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item w-full">
						<div className="border border-black ">
							<img src="bg3.jpg" className="w-full h-64 " />
							<div className="ml-6">
								<h2 className="text-xl text-gray-400 mt-2">Oct 1, 2020</h2>
								<h2 className="text-xl text-gray-400">By Admin</h2>
								<h2 className="text-2xl font-bold mt-4">
									Why a Social Media Calendar and Automationare Important for
									Increasing Social Media Reach ?
								</h2>
								<p className="text-xl text-gray-400 mt-2">
									In our daily existence, both individually and professionally,
									social media hasbecome...
								</p>
								<div className="lg:flex justify-end">
									<button className="bg-[#29BDD5] p-2 mt-16 mr-4 mb-2 rounded-md  ">
										Continue Reading
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blag;
