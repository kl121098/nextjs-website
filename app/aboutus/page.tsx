import Link from "next/link";
import ProjectAbout from "../_components/ProjectAbout";
import LeadAbout from "../_components/LeadAbout";

const jobPositions = [
  { title: "Rust Developer" },
  { title: "Data Scientist" },
  { title: "UI/UX Designer" },
  { title: "React Developer" },
];

const page = () => {
  return (
    <div className="bg-white mt-0 customs:mt-15 lg:mt-20">
      {/* Image */}

      <div
        className="bg-cover pb-16 opacity-80  "
        style={{ backgroundImage: "url(contactusbg.svg)" }}
      >
        <div className="md:flex md:space-x-8 pt-[3rem] justify-center items-center">
          <h2 className="text-[#02BDD5] text-4xl text-center font-bold">
            About Us
          </h2>
          <div className="w-0.5 bg-gray-700 h-[5rem] hidden md:block sm:hidden"></div>
          <p className=" text-xl mt-2 p-2 md:w-[600px] leading-7 text-white-opacity-80 ">
            Fuzzy cloud is a cloud-based software development and consulting
            firm specializing in the use of modern technology to solve Fuzzy
            problems.{" "}
          </p>
        </div>
      </div>

      {/* Our Leadership Team */}

      <div className="">
        <div>
          <div className="md:flex justify-center mt-11 space-x-1">
            <div className=" h-[3px] md:w-44 mt-8 mb-4 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
            <h2 className="text-4xl font-bold pt-4 text-center bg-gradient-to-r text-[#02BDD5] ">
              Our Leadership Team
            </h2>
            <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
          </div>
          <LeadAbout />
        </div>
      </div>

      {/* Our Team */}
      <div className="">
        <div className="md:flex justify-center mt-11 space-x-1 ">
          <div className=" h-[3px] md:w-44 mt-8 mb-4 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5]  hidden customs:block lg:block"></div>
          <h2 className="text-4xl font-bold pt-4 text-center bg-gradient-to-r text-[#02BDD5] ">
            Our Team
          </h2>
          <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
        </div>
        <div>
          <div className="md:flex flex-wrap md:space-x-2 mt-9 ml-10 mr-10 justify-center">
            {jobPositions.map((position, index) => (
              <div
                key={index}
                className="flex flex-wrap flex-col justify-around items-center "
              >
                <img src="avatar.png" className="w-[240px] h-[240px]" />
                <h2 className="text-[#212B36] text-xl mt-4 font-bold">
                  {position.title}
                </h2>
                {/* <span className="flex items-center mt-2 space-x-2">
            <img src="ecard1.svg" alt={`E-Card for ${position.title}`} />
            <h4 className="text-[#FEAD56]">E-Card</h4>
          </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Recent Projects */}

      <div className="md:flex justify-center mt-11 space-x-1  ">
        <div className=" h-[3px] md:w-44 mt-8 mb-4 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5]  hidden customs:block lg:block"></div>
        <h2 className="text-4xl font-bold pt-4 text-center bg-gradient-to-r text-[#02BDD5] ">
          Our Projects
        </h2>
        <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
      </div>
      <div className=" mt-8 pb-20">
        <ProjectAbout />
      </div>
    </div>
  );
};

export default page;
