import Link from "next/link";
const categories = [
	{
		title: "Data Science",
		subcategories: ["Artificial Intelligence (AI)", "Analytics", "Machine Learning (ML)"],
	},
	{
		title: "Cloud Computing",
		subcategories: [
			"DevOps",
			"Docker",
			"OpenShift",
			"Amazon Web Services (AWS)",
			"Google Cloud Platform (GCP)",
			"Microsoft Azure",
		],
	},
	{
		title: "Backend",
		subcategories: ["SafeStack", "ServiceStack", "ASP.NET Web API", "ASP.NET Core", "Giraffe (F#)"],
	},
];

const technologyCategories = [
	{
		title: "Frontend",
		subcategories: ["Angular", "Elm", "Fable", "React", "TypeScript"],
	},
	{
		title: "Mobile Development",
		subcategories: ["Flutter", "Xamarin", "Xamarin.Forms", "React Native"],
	},
];

const page = () => {
	return (
		<div className="bg-white mt-0 lg:mt-12">
			{/* Image */}

			<div
				className="bg-cover h-[17rem] opacity-80  "
				style={{ backgroundImage: "url(contactusbg.svg)" }}
			>
				<div className="md:flex md:pt-[6rem] pt-[2rem] space-x-4 justify-center text-center lg:text-left md:text-center  items-center">
					<h2 className="text-[#02BDD5] text-4xl md:text-center font-bold ">
						Our Expertise
					</h2>
					<div className="w-0.5 bg-gray-700 h-[5rem] hidden md:block sm:hidden"></div>
					<p className=" text-[24px] mt-2 p-2 leading-7 md:w-[550px]  text-white-opacity-80 ">
						We bring innovation and expertise together to deliver exceptional
						solutions for your needs.
					</p>
				</div>
			</div>

			<p className="text-center  text-[24px] mt-16 ">
				Dive into data science, navigate the cloud landscape, build robust
				backend applications,
				<br /> craft seamless UI experiences, or venture into mobile development
				– our team is your <br />
				dedicated partner in success.
			</p>

			<div className="flex justify-center flex-wrap items-center  mt-12 ">
				{categories.map((category, index) => (
					<div
						key={index}
						className="w-[400px] h-[400px] bg-fill bg-no-repeat bg-top"
						style={{ backgroundImage: "url(polly.svg)" }}
					>
						<h2 className="text-center mt-20 font-bold text-[20px]">
							{category.title}
						</h2>
						{category.subcategories.map((subcategory, subIndex) => (
							<h2
								key={subIndex}
								className="text-center  text-[14px] mt-4"
							>
								{subcategory}
							</h2>
						))}
					</div>
				))}
			</div>
			

			<div className="flex justify-center flex-wrap items-center mr-2 ml-2 mt-12 ">
				{technologyCategories.map((category, index) => (
					<div
						key={index}
						className="w-[400px] h-[400px] bg-fill bg-no-repeat bg-top"
						style={{ backgroundImage: "url(polly.svg)" }}
					>
						<h2 className="text-center mt-20 font-bold text-[20px]">
							{category.title}
						</h2>
						{category.subcategories.map((subcategory, subIndex) => (
							<h2
								key={subIndex}
								className="text-center  text-[14px] mt-4"
							>
								{subcategory}
							</h2>
						))}
					</div>
				))}
			</div>



			{/* Image Card */}
			<div className="pb-16">
				<div
					className="p-12 m-2  md:m-36 mt-20 bg-cover object-center rounded-lg  items-center justify-center  flex flex-col "
					style={{ backgroundImage: "url(expertise.svg)" }}
				>
					<h2 className="text-white text-[30px] capitalize font-semibold text-center ">
						{" "}
						Together, let's make waves in the realms of Machine Learning <br />{" "}
						and Cloud Computing.{" "}
					</h2>

					<Link href="/contact"><button className="bg-white border border-dashed hover:bg-transparent hover:text-white border-white py-2 text-[#FEAD56] text-[16px] mt-16 px-8 rounded-md h-10 ">
						Contact Us
					</button></Link>
				</div>
			</div>
		</div>
	);
};

export default page;
