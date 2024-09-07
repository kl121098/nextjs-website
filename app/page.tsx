import Link from "next/link";
import Hero from "./_components/Hero";
import OurService from "./_components/OurService";
import OurProducts from "./_components/OurProducts";
import Technology from "./_components/Technology";
import AboutHome from "./_components/AboutHome";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
	// const session = useSession({
	// 	required: true,
	// 	onUnauthenticated() {
	// 	  redirect('/signin');
	// 	},
	//   });
	return (
		<div className="bg-white">
		<div>
		{/* <div className='text-white'>{session?.data?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button> */}
			<Hero/>
			<OurService/>
			<OurProducts/>
			<Technology/>
			<AboutHome/>

			{/* Grab the Opportunity Card */}

			<div className="pb-20">
			<div
				className="pb-16  md:ml-36 md:mr-36 bg-cover object-center rounded-lg   md:flex flex-col items-center"
				style={{ backgroundImage: "url(garbtheopportunity.svg)" }}
			>
				<h2 className="text-[#FEAD56] text-4xl text-center font-bold mt-16 pt-16">
					{" "}
					CONSULT WITH OUR EXPERTS{" "}
				</h2>
				<p className="text-white text-[24px] text-center font-normal mt-9 uppercase">
					If you have a business or product idea, <br />
					we’d love to connect!
				</p>
				<div className="flex justify-center">
					<Link href="/contact">
						<button className="bg-white border border-dashed hover:bg-transparent hover:text-white border-white py-2 text-[#FEAD56] text-[16px]   mt-16 px-8 rounded-md h-10 ">
							Get In Touch
						</button>
					</Link>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
};

export default Page;
Page.requireAuth = true
