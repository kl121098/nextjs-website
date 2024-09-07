import Link from "next/link";

const features = [
  {
    icon: "training.svg",
    title: "Training & Development",
    content:
      "We understand that the latest technology is essential for success in the ever-evolving tech industry and provide our employees with opportunities to stay up to date with the latest trends and tools. We are committed to providing training and development opportunities.",
  },
  {
    icon: "policy.svg",
    title: "Open Door policy",
    content:
      "Our open door policy encourages employees to share their ideas, discuss potential solutions, and work together to solve complex problems. We strive to create an environment that values creativity, respect, and communication.",
  },
];
const features1 = [
  {
    icon: "date.svg",
    title: "5 Day Work Week",
    content:
      "At Fuzzy Cloud, we understand the importance of work-life balance and offer a five-day work week to help our employees maintain a healthy balance between work and home.",
  },
  {
    icon: "remote.svg",
    title: "Remote work Opportunities",
    content:
      "Our remote work policy also allows employees to work from home or any other location, enabling them to be more productive and comfortable.",
  },
];

const page = () => {
  return (
    <div className="bg-white mt-0 customs:mt-15 lg:mt-20">
      {/* Image */}

      <div
        className="bg-cover h-[15rem] opacity-80"
        style={{ backgroundImage: "url(contactusbg.svg)" }}
      >
        <div className="md:flex md:space-x-8 pt-[3rem] justify-center items-center">
          <h2 className="text-[#02BDD5] text-4xl text-center font-bold">
            Careers
          </h2>
          <div className="w-0.5 bg-gray-700 h-[5rem] hidden md:block sm:hidden"></div>
          <p className=" text-xl mt-2 p-2 leading-7 md:w-[500px]  text-white-opacity-80 text-center sm:text-center md:text-left">
            At Fuzzy Cloud, we believe in creating an environment that fosters
            creativity and encourages innovation.
          </p>
        </div>
      </div>

      {/* Benifits of working At Fuzzy Cloud */}

      <div className=" p-2">
        <div className="md:flex justify-center mt-11 space-x-5 ml-10 mr-10">
          <div className=" h-[3px] md:w-44 mt-8 mb-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
          <h2 className="text-4xl font-bold mt-3 text-center bg-gradient-to-r text-[#02BDD5]">
            Benefits of working At Fuzzy Cloud
          </h2>
          <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden customs:block lg:block"></div>
        </div>
        <div>
          <div className="md:flex justify-center mt-11 md:space-x-12 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="md:w-[570px]  lg:h-[300px] h-auto shadow-custom rounded-lg bg-[#F4F7FF] mt-4"
              >
                <div className="flex space-x-4 ml-7 pt-4 items-center">
                  <div className="h-16 w-16 bg-[#FEAD56] items-center justify-center rounded-md flex">
                    <img
                      src={feature.icon}
                      className="h-[40px] w-[40px]"
                      alt={feature.title}
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                </div>
                <hr className="h-0.5 ml-7 mr-3 mt-4 opacity-60 bg-[#02BDD5]"></hr>
                <p className="ml-7 mr-7 text-lg pb-3 mt-4">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex justify-center mt-8 md:space-x-12   space-y-4">
          {features1.map((feature, index) => (
            <div
              key={index}
              className="md:w-[570px] lg:h-[300px] h-auto shadow-custom rounded-lg bg-[#F4F7FF] mt-4"
            >
              <div className="flex space-x-4 ml-7 pt-4 items-center">
                <div className="h-16 w-16 bg-[#FEAD56] items-center justify-center rounded-md flex">
                  <img
                    src={feature.icon}
                    className="h-[40px] w-[40px]"
                    alt={feature.title}
                  />
                </div>
                <h2 className="text-xl font-semibold">{feature.title}</h2>
              </div>
              <hr className="h-0.5 ml-7 mr-3 mt-4 opacity-60 bg-[#02BDD5]"></hr>
              <p className="ml-7 mr-7 text-lg pb-3 mt-4">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Card */}
      <div className="pb-20">
        <div
          className="m-2 p-12 md:m-36 mt-20 bg-cover object-center rounded-lg  items-center justify-center  md:flex flex-col "
          style={{ backgroundImage: "url(garbtheopportunity.svg)" }}
        >
          <h2 className="text-white text-3xl capitalize font-semibold text-center ">
            {" "}
            Are you passionate about software development, latest <br />{" "}
            functional programming and cloud programming?{" "}
          </h2>
          <h2 className="text-white text-3xl capitalize font-semibold text-center leading-9 space-x-4 mt-11 ">
            {" "}
            If so, we’d love to talk to you!
          </h2>

          <div className="md:flex  md:space-x-8">
            <div className="flex justify-center">
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrvQmtFJgdNtqtwDrctpHWNRVBCKXffKbSJRPRZCVnRlmPrBvnvRbbkTFbcTBKbcQFChQ">
                <button className="bg-white  py-2 text-[#FEAD56] font-semibold mt-16 px-8 rounded-md h-10 ">
                  Sales Manager
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrvQmtFJgdNtqtwDrctpHWNRVBCKXffKbSJRPRZCVnRlmPrBvnvRbbkTFbcTBKbcQFChQ">
                <button className="bg-white  py-2 text-[#FEAD56] font-semibold mt-16 px-8 rounded-md h-10 ">
                  Business Analyst
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
