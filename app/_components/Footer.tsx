import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div>
			<div
				className="w-auto h-96 hidden lg:block bg-cover object-center "
				style={{ backgroundImage: "url(footer.svg)" }}
			>
				<div className=" flex flex-wrap justify-around pb-12">
					<div className="flex flex-col mt-10 space-y-4 justify-start">
						<img src="logo.svg" className="h-16 pl-[-4] w-24" />
						<p className="text-[#8890A4] w-60 text-sm">
							Fuzzy cloud is a cloud-based software development and consulting
							firm specializing in the use of modern technology to solve Fuzzy
							problems.
						</p>
						<div className="flex space-x-4 items-end">
							<Link href={"https://www.linkedin.com/company/fuzzycloud/"}>
								<img src="linkedin.svg" className="h-6" />
							</Link>
							<Link href={"https://www.instagram.com/fuzzycloud.in"}>
								<img src="instagram.svg" className="h-6" />
							</Link>
							<Link href={"https://www.behance.net/fuzzycloud"}>
								<img src="be.svg" className="h-6" />
							</Link>
							<Link href={"https://dribbble.com/fuzzy_cloud"}>
								<img src="ball.svg" className="h-6" />
							</Link>
							<Link href={"https://twitter.com/FuzzyCloud_In"}>
								<img src="x.svg" className="h-6" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col mt-12 space-y-4 justify-start">
						
						<h1 className=" text-[#02BDD5] text-xl font-bold text-center mr-6 mt-2">Menu</h1>
						<div className=" space-x-7 flex">
							<div className="mt-4">

							<Link href="/services">
								<h1 className=" text-[#8890A4] text-md md:text-sm  my-1">
									Services
								</h1>
							</Link>
							<Link href="/expertise">
								<h1 className=" text-[#8890A4] text-md md:text-sm  my-1">
									Expertise
								</h1>
							</Link>
							<Link href="/aboutus">
								<h1 className=" text-[#8890A4] text-md md:text-sm my-1">About Us</h1>
							</Link>
							<Link href="/careers">
								<h1 className=" text-[#8890A4] text-md md:text-smmd:text-sm my-1">
									Careers
								</h1>
							</Link>
							<Link href="/contact">
                                <h1 className=" text-[#8890A4] text-md md:text-sm">
                                    Contact US
                                </h1>
                            </Link>
							</div>
							<div className="mt-4">

							<Link href="/casestudy">
								<h3 className=" text-[#8890A4] text-md my-1">CaseStudy</h3>
							</Link>
							<Link href="/projectlist">
								<h3 className=" text-[#8890A4] text-md my-1">Projects</h3>
							</Link>
							<Link href="/post">
								<h3 className=" text-[#8890A4] text-md my-1">Blogs</h3>
							</Link>
							<Link href="/opensource">
								<h3 className=" text-[#8890A4] text-md my-1">OpenSource</h3>
							</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col mt-10	 space-y-4 justify-start">
						<h1 className=" text-[#02BDD5] text-xl font-bold mb-5 mt-4">Quick Links</h1>
						<div className="space-y-2">
							<Link href={"/terms.html"}>
								<h1 className=" text-[#8890A4] text-md ">
									Terms and Conditions
								</h1>
							</Link>
							<Link href={"/privacy.html"}>
								<h1 className=" text-[#8890A4] text-md my-1 mt-2">Privacy Policy</h1>
							</Link>
						</div>
					</div>
					<div className="flex flex-col mt-10 space-y-0 justify-start">
						<h1 className=" text-[#02BDD5] text-xl font-bol mt-4 mb-4">
							Let’s Work Together
						</h1>
						<div className="space-x-5 mt-5">
							<input

								type="email"
								placeholder="Enter Email Address"
								className="text-white border w-60 h-9 p-2 rounded-md border-[#02BDD5] bg-transparent"
							></input>
							<Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrvQmtFJgdNtqtwDrctpHWNRVBCKXffKbSJRPRZCVnRlmPrBvnvRbbkTFbcTBKbcQFChQ">
								<button className="h-9 mt-6 mb-6 rounded-md px-4 bg-[#FEAD56] text-white hover:bg-white hover:text-[#FEAD56]">
									Subscribe
								</button>
							</Link>
						</div>
					</div>
				</div>
				{/* copyright section */}

				<div className="flex items-center justify-center pt-2 bg-black">
					<h2 className="text-[#8890A4] mt-6 mb-6 bg-black">
						© Copyright 2023 - Fuzzy Cloud, All rights reserved
					</h2>
				</div>
			</div>
			{/* Footer Section */}
			<div
				className="hidden md:block lg:hidden bg-cover object-center"
				style={{ backgroundImage: "url(footer.svg)" }}
			>
				<div className=" md:flex md:ml-10 md:justify-between lg:ml-20 lg:mr-20 lg:justify-between md:mr-10 ">
					<div className="flex flex-col mt-10 space-y-4 ">
						<img src="logo.svg" className="h-16 pl-[-4] w-24" />
						<p className="text-[#8890A4] lg:w-60 md:w-36 text-sm">
							Fuzzy cloud is a cloud-based software development and consulting
							firm specializing in the use of modern technology to solve Fuzzy
							problems.
						</p>
						<div className="flex space-x-2 items-end">
							<img src="linkedin.svg" />
							<img src="instagram.svg" />
							<img src="x.svg" />
						</div>
					</div>
					<div className="flex flex-col mt-10 space-y-4 ">
						<h1 className=" text-[#02BDD5] text-xl font-bold text-center mr-10">Menu</h1>
						<div className="space-x-4 flex">
							<div>

							<Link href="/services">
								<h1 className=" text-[#8890A4] text-md md:text-sm ">
									Services
								</h1>
							</Link>
							<Link href="/expertise">
								<h1 className=" text-[#8890A4] text-md md:text-sm ">
									Expertise
								</h1>
							</Link>
							<Link href="/aboutus">
								<h1 className=" text-[#8890A4] text-md md:text-sm">About Us</h1>
							</Link>
							<Link href="/careers">
								<h1 className=" text-[#8890A4] text-md md:text-smmd:text-sm">
									Careers
								</h1>
							</Link>
							<Link href="/casestudy">
								<h3 className=" text-[#8890A4] text-md ">CaseStudy</h3>
							</Link>
							<Link href="/contact">
								<h1 className=" text-[#8890A4] text-md md:text-sm">
									Contact US
								</h1>
							</Link>
							</div>
							<div>

							
							<Link href="/post">
								<h3 className=" text-[#8890A4] text-md ">Projects</h3>
							</Link>
							<Link href="/projectlist">
								<h3 className=" text-[#8890A4] text-md ">Blogs</h3>
							</Link>
							<Link href="/opensource">
								<h3 className=" text-[#8890A4] text-md ">OpenSource</h3>
							</Link>
							<Link href="/blogs">
								<h3 className=" text-[#8890A4] text-md ">CaseStudy</h3>
							</Link>
							
							</div>
						</div>
					</div>
					<div className="flex flex-col mt-10 space-y-4 ">
						<h1 className=" text-[#02BDD5] text-xl font-bold">Quick Links</h1>
						<div className="space-y-2">
							<h1 className=" text-[#8890A4] text-md  ">
								Terms and Conditions
							</h1>
							<h1 className=" text-[#8890A4] text-md md:text-sm">
								Privacy Policy
							</h1>
						</div>
					</div>
					<div className="flex flex-col mt-10 space-y-4 ">
						<h1 className=" text-[#02BDD5] text-xl md:text-lg font-bold">
							Let’s Work Together
						</h1>
						<div className="lg:space-x-5 flex flex-row md:flex-col md:flex mt-5">
							<input
								type="email"
								placeholder="Enter Email Address"
								className=" border w-60 md:w-40 h-9 rounded-md border-[#02BDD5] bg-transparent"
							></input>
							<button className="h-9 mt-6 md:mt-4 mb-6 md:w-24 md:py-2 md:px-1 rounded-md px-4 bg-[#FEAD56] text-white hover:bg-white hover:text-[#FEAD56] ">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				{/* copyright section */}
				<div className="flex items-center justify-center pt-2 bg-black">
					<h2 className="text-[#8890A4] mt-6 mb-6 bg-black">
						© Copyright 2023 - Fuzzy Cloud, All rights reserved
					</h2>
				</div>
			</div>
			{/* Footer Responsive */}
			<div className="md:hidden bg-[#040609]">
				{/* <img className="w-auto h-96 lg:bg-none bg-black bg-cover object-center " src="footer.svg" /> */}
				<div className=" flex flex-col ml-6 sm:mr-14 sm:ml-14 justify-center md:flex-row md:bg-none ">
					<div className="flex flex-col mt-14 space-y-4 justify-start items-start">
						<img src="logo.svg" className="h-16 pl-[-4] w-24 mt-8 mr-3" />
						<p className="text-[#8890A4] w-60 text-sm text-start">
							Fuzzy cloud is a cloud-based software development and consulting
							firm specializing in the use of modern technology to solve Fuzzy
							problems.
						</p>
						<div className="flex space-x-4 items-end justify-center">
							<Link href={"https://www.linkedin.com/company/fuzzycloud/"}>
								<img src="linkedin.svg" className="h-6" />
							</Link>
							<Link href={"https://www.instagram.com/fuzzycloud.in"}>
								<img src="instagram.svg" className="h-6" />
							</Link>
							<Link href={"https://www.behance.net/fuzzycloud"}>
								<img src="be.svg" className="h-6" />
							</Link>
							<Link href={"https://dribbble.com/fuzzy_cloud"}>
								<img src="ball.svg" className="h-6" />
							</Link>
							<Link href={"https://twitter.com/FuzzyCloud_In"}>
								<img src="x.svg" className="h-6" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col mt-14 space-y-4 justify-start text-left">
						<h1 className=" text-[#02BDD5] text-xl font-bold">Menu</h1>

						<div className="space-y-2">
							
							<Link href="/services">
								<h3 className=" text-[#8890A4] text-md ">Services</h3>
							</Link>
							<Link href="/expertise">
								<h3 className=" text-[#8890A4] text-md ">Expertise</h3>
							</Link>
							<Link href="/aboutus">
								<h3 className=" text-[#8890A4] text-md">About Us</h3>
							</Link>
							<Link href="/careers">
								<h3 className=" text-[#8890A4] text-md ">Careers</h3>
							</Link>
							<Link href="/casestudy">
								<h3 className=" text-[#8890A4] text-md ">CaseStudy</h3>
							</Link>
							<Link href="/projectlist">
								<h3 className=" text-[#8890A4] text-md ">Projects</h3>
							</Link>
							<Link href="/post">
								<h3 className=" text-[#8890A4] text-md ">Blogs</h3>
							</Link>
							<Link href="/opensource">
								<h3 className=" text-[#8890A4] text-md ">OpenSource</h3>
							</Link>
							<Link href="/contact">
								<h3 className=" text-[#8890A4] text-md ">Contact Us</h3>
							</Link>
						</div>
					</div>
					<div className="flex flex-col mt-14 space-y-4 justify-start text-left">
						<h1 className=" text-[#02BDD5] text-xl font-bold">Quick Links</h1>
						<div className="space-y-2">
							<h1 className=" text-[#8890A4] text-md ">Terms and Conditions</h1>
							<h1 className=" text-[#8890A4] text-md">Privacy Policy</h1>
						</div>
					</div>
					<div className="flex flex-col mt-14 space-y-4 justify-start text-left">
						<h1 className=" text-[#02BDD5] text-xl font-bold">
							Let’s Work Together
						</h1>
						<div className="  flex-col mt-5">
							<input
								type="email"
								placeholder="Enter Email Address"
								className=" border text-xs px-2 w-60 h-9 rounded-md border-[#02BDD5] bg-transparent"
							></input>
							<Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrvQmtFJgdNtqtwDrctpHWNRVBCKXffKbSJRPRZCVnRlmPrBvnvRbbkTFbcTBKbcQFChQ">
								<button className="ml-4 h-9 mt-3 w-20 py-2 px-1 text-sm  rounded-md  bg-[#FEAD56] text-white">
									Subscribe
								</button>
							</Link>
						</div>
					</div>
				</div>
				{/* copyright section */}

				<div className="flex items-center justify-center pt-2 bg-black">
					<h2 className="text-[#8890A4] mt-6 mb-6 pt-2 bg-black">
						© Copyright 2023 - Fuzzy Cloud, All rights reserved
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Footer;
