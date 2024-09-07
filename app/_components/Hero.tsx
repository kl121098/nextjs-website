import Link from 'next/link'
import React from 'react'
import Imagechanger from './Imagechanger'

const Hero = () => {
	return (
		<div>
			<div className=''>
				<div
					className="bg-cover bg-center h-150 mt-0 lg:mt-12"
					style={{ backgroundImage: "url(background.svg)" }}
				>
					<div className="lg:hidden">
						<h2 className="text-center text-white text-4xl pt-12">
							<span className="font-bold text-white">CODE</span>
							<span className='text-white'>
								IS THE AIR </span>

							<br /> WE BREATHE IN THE DIGITAL AGE{" "}
						</h2>
						<div className="flex justify-center">
							<Link href="/contact">
								<button className="bg-[#02BDD5] py-2 mt-10 px-8 text-white  rounded-md h-10 ">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
					<div className="pt-16 pl-60 text-white">
						<div className="hidden md:block sm:hidden customs:hidden lg:block">
							<div className="md:flex items-center ">
								<Imagechanger />
								<div className="ml-[-50px]">
									<h1 className="text-7xl font-bold mt-20">CODE</h1>
									<h5 className="text-5xl font-bold mt-2">IS THE AIR</h5>
									<h3 className="text-4xl font-bold lg:w-800 mt-2 mb-3">
										WE BREATHE IN THE DIGITAL AGE
									</h3>
									<p className="mt-6 ml-20 text-[16px] text-white leading-6">
										Fuzzy Cloud is a cloud-based software development and
										consulting firm
										<br /> specializing in the use of modern technology to solve
										Fuzzy problems.
									</p>
								</div>
							</div>
						</div>

						{/* Social Icons */}

						<div className="ml-[-13rem] mt-[-98px] pb-14">
							{/* <div className="transform rotate-90 ml-[-20] text-customBlue pb-20">Follow Us</div> */}
							{/* <div className=" w-0.5 h-20 translate-x-4 mb-4 bg-customBlue"></div> */}
							{/* <div className="fixed space-y-2 hidden md:block sm:hidden ">
								<img src="follo.svg" className="ml-1" />
								<Link href={"https://www.linkedin.com/company/fuzzycloud/"}>
									<img src="link.svg" className="mt-2" />
								</Link>
								<Link href={"https://www.instagram.com/fuzzycloud.in"}>
									<img src="insta.svg" className="mt-2" />
								</Link>
								<Link href={"https://www.behance.net/fuzzycloud"}>
									<img src="hance.svg " className="mt-2" />
								</Link>
								<Link href={"https://dribbble.com/fuzzy_cloud"}>
									<img src="dribble.svg " className="mt-2" />
								</Link>
								<Link href={"https://twitter.com/FuzzyCloud_In"}>
									<img src="twitter.svg" className="mt-2" />
								</Link>
							</div> */}
						</div>
						<div className=" mt-[-rem] pl-32 hidden md:block sm:hidden customs:hidden lg:block">
							<Link href={"/contact"}>
								<button className="bg-[#02BDD5] hover:bg-white hover:text-[#02BDD5] py-2 ml-20 mt-32 px-8 mb-28 rounded-md h-10 ">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero