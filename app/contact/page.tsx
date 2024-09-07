import Link from "next/link";

const inputFields = [
	{ type: "text", placeholder: "Your Name", className: "border pl-3 w-72 h-9 rounded-md border-[#212B36] bg-transparent" },
	{ type: "email", placeholder: "Enter Email Address", className: "border pl-3 w-72 h-9 rounded-md border-[#212B36] bg-transparent" },
	{ type: "number", placeholder: "Contact Number", className: "border w-72 pl-3 h-9 rounded-md border-[#212B36] bg-transparent" },
	{ type: "text", placeholder: "Your Message Here", className: "border w-72 pl-3 h-9 rounded-md border-[#212B36] bg-transparent" },
  ];

  const InputFields = () => (
	<div>
	  {inputFields.map((field, index) => (
		<div key={index} className="flex items-center w-[270px] my-4">
		  <input type={field.type} placeholder={field.placeholder} className={field.className}></input>
		</div>
	  ))}
	</div>
  );

const page = () => {
	return (
		<div className="bg-white mt-0 customs:mt-15 lg:mt-20">
			{/* Image */}

			<div
				className="bg-cover h-[16rem] opacity-80"
				style={{ backgroundImage: "url(contactusbg.svg)" }}
			>
				<div className="md:flex md:space-x-4 pt-[2rem] justify-center items-center">
					<h2 className="text-[#02BDD5] text-3xl text-center font-bold">
						Contact Us
					</h2>
					<div className="w-0.5 bg-gray-700 h-[5rem] hidden md:block sm:hidden"></div>
					<p className=" text-xl mt-2 p-2 md:w-[500px] leading-7 text-white-opacity-80 text-center customs:text-left lg:text-left">
						Early-stage, recently financed start-ups are where we excel. But
						more importantly, we adore working with world-class teams.
					</p>
				</div>
			</div>

			{/* Reach Us and Get in Touch */}

			<div className="flex justify-center flex-wrap space-y-16 ">
				<div className="justify-center items-center mt-16">
					<div className="flex-col ">
						<h1 className="text-3xl  text-center font-semibold text-black">Reach Us</h1>
						<hr className="flex border md:w-96 h-0.5 mt-3 mx-4 bg-gray-400 border-dashed" />
					</div>
					<div className="space-y-8 mt-7 p-4">
						<div className="flex items-center space-x-5">
							<img src="bluemail.svg" alt="mail icon" className="h-5 w-5" />
							<p className="text-black text-md font-light">
								contact@fuzzycloud.in
							</p>
						</div>
						<div className="flex items-center space-x-5">
							<img src="bluecall.svg" alt="call icon" className="h-5 w-5" />
							<p className="text-black text-md font-light">
								+91 2717 453 330
							</p>
						</div>
						
							<div className="flex">
							<img src="india (1) 1.svg"/>
							<p className="text-black text-md font-light ml-4">
								1001, Satyamev Elite, Ahmedabad
							</p>
							</div>
						
						<div className="flex">
							<img src="united-states 1.svg"/>
							<p className="text-black text-md font-light ml-4">
								17312 Crazy Arm Rd,Round Rock, TX 78664, USA
							</p>
							</div>
					</div>
					<div className="flex ml-5 space-x-4 mt-8">
						<Link href={"https://www.linkedin.com/company/fuzzycloud/"}>
							<img src="link.svg" />
						</Link>
						<Link href={"https://www.instagram.com/fuzzycloud.in"}>
							<img src="insta.svg" />
						</Link>
						<Link href={"https://www.behance.net/fuzzycloud"}>
							<img src="hance.svg" />
						</Link>
						<Link href={"https://dribbble.com/fuzzy_cloud"}>
							<img src="dribble.svg" />
						</Link>
						<Link href={"https://twitter.com/FuzzyCloud_In"}>
							<img src="twitter.svg" />
						</Link>
					</div>
				</div>
				{/* Get In Touch */}
				<form
					className=""
					name="contact"
					method="POST"
					data-netlify="true"
					netlify-honeypot="bot-field"
				>
					<div className="flex-col sm:justify-center sm:items-center sm:flex-col ">
						<h1 className="text-3xl  text-center font-semibold text-black">Contact Us</h1>
						<hr className="flex border md:w-96 h-0.5 mt-3 mx-4 bg-gray-400 border-dashed" />
					</div>
					<div className="flex flex-col items-center space-y-8 mt-7">
					<InputFields />
						<div>
							<button className="bg-[#02BDD5] text-white py-2 px-7 rounded-md">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>

			{/* //Map */}

			<div className="flex justify-center items-center mt-16 pb-12  ">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.965617239939!2d72.47367497376528!3d23.025034616239243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0bb2915c0b%3A0x13f04f86b21ee36f!2sSatyamev%20Elite%2C%20608%20-%20615%2C%20Sardar%20Patel%20Ring%20Rd%2C%20South%20Bopal%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058!5e0!3m2!1sen!2sin!4v1698925354849!5m2!1sen!2sin"

					loading="lazy"
					className="w-[280px]  md:w-[440px] customs:[440px] lg:w-[900px] h-[500px] m-auto"
				></iframe>
			</div>
		</div>
	);
};

export default page;
