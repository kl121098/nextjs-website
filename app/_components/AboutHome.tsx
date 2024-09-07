import Link from 'next/link'
import React from 'react'

const AboutHome = () => {
  return (
    <div>
        <div className="md:hidden">
				<h2 className="text-[40px] text-center font-bold mt-5 text-[#02BDD5] ">
					About Us
				</h2>
				<div className="ml-24 h-[3px] w-44 mt-12 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block"></div>
			</div>
			<div className="md:flex justify-center ml-20 mr-20 mt-9">
				<div className="mt-12 hidden md:block sm:hidden">
					<img src="aboutus.jpg" className="object-fill h-[378px] w-[530px]" />
				</div>
				<div className="md:ml-24">
					<div className="hidden md:block sm:hidden">
						<div className="md:flex md:space-x-4 hidden ">
							<h2 className="text-[40px] text-center font-bold mt-5 text-[#02BDD5] ">
								About Us
							</h2>
							<div className=" h-[3px] w-44 mt-12 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5]"></div>
						</div>
					</div>
					<p className="md:flex text-left mt-4 text-[18px] font-light">
						Fuzzy Cloud, founded in 2018, is a leading cloud-based software
						<br /> development and consulting firm.Our core competencies lie in
						a range of
						<br /> services, including UI/UX design, development, and strategic
						consulting. We
						<br /> also harness modern technologies such as Rust, React, Remix,
						and Astro to
						<br /> meticulously engineer high-quality SaaS products. Our
						commitment to
						<br /> innovation is further underscored by the integration of
						Machine learning into
						<br /> our repertoire, allowing us to deliver solutions that not
						only meet but
						<br /> anticipate the evolving needs of our clients.
					</p>
					<Link href="/aboutus">
						<button className="bg-[#02BDD5] hover:bg-white hover:text-[#02BDD5]  border border-dashed border-[#02BDD5] text-white  mt-12 px-8 rounded-md h-12 mb-28 ">
							Discover More
						</button>
					</Link>
				</div>
			</div>
    </div>
  )
}

export default AboutHome