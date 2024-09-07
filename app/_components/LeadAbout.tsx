import Link from "next/link";

const teamMembers = [
  {
    name: "Kunjan Dalal",
    image: "avatar.png",
    linkedin: "https://www.linkedin.com/in/kunjee17/",
    twitter: "https://twitter.com/kunjee",
    description:
      "Kunjan has 15+ years of experience in software development, specializing in distributed systems, machine learning, cross-platform mobile development, and cloud programming. He is an expert member in SS, a lecturer, and an OSS contributor. He is known for his innovation, creativity, and commitment to excellence in every project he undertakes.",
  },
  {
    name: "Dweep Kalariya",
    image: "avatar.png",
    linkedin: "https://www.linkedin.com/in/dweep-kalaria-995600b/",
    twitter: "https://x.com/dweepkalaria?t=YP35pwQw6tIfhAt5cItYiQ&s=31",
    description:
      "With 15 years of experience, Dweep is a trusted expert in software development, specializing in large-scale frontend projects involving WPF or Angular. He has a proven track record of delivering high-quality solutions for various industries, and his attention to detail ensures timely and on-budget project delivery. He is valued for his technical expertise, teamwork skills, and commitment to excellence, making him one of the best in the industry.",
  },
];

const TeamMemberCard = ({ name, image, linkedin, twitter, description }: any) => (
  // <div className="mb-12 items-center justify-center mt-14 p-2">
      <div className="flex md:h-[320px] lg:h-[320px] customs:h-[320px] h-auto pb-4 rounded-tr-3xl rounded-bl-3xl border border-[#02BDD5] ml-0 lg:ml-12 mt-12">
        <div className="flex flex-col flex-wrap space-y-2 ml-4 items-center justify-center">
          <img src={image} className="lg:w-[200px] h-[200px]" />
          <Link href={linkedin}><img src="link.svg" /></Link>
          <Link href={twitter}><img src="twitter.svg" /></Link>
        <div className="mt-9 ml-2">
          <div className="justify-between items-center">
            <h2 className="text-[#02BDD5] text-xl font-bold">
              {name}
            </h2>
          <p className="text-sm w-auto customs:w-[320px] lg:w-[320px] mt-4 h-[168px] font-light">
            {description}
          </p>
          </div>
        </div>
        </div>
      </div>
  
  // </div>
);

const TeamSection = () => (
  <div className="flex justify-center flex-wrap">
    {teamMembers.map((member, index) => (
      <TeamMemberCard key={index} {...member} />
    ))}
  </div>
);

const TeamAbout = () => {
  return (
    <div>
      <TeamSection />
    </div>
  )
}

export default TeamAbout


{/* <span className="flex items-center space-x-2">
											<img src="ecard1.svg" />
											<h4 className="text-[#FEAD56] p-2">E-Card</h4>
										</span> */}