const page = () => {
  return (
    <div className="bg-white">
      {/* Image */}
      <div
        className="bg-cover pb-16 opacity-80 mt-0 lg:mt-16"
        style={{ backgroundImage: "url(contactusbg.svg)" }}
      >
        <div className="md:flex md:space-x-8 pt-[3rem] justify-center items-center">
          <h2 className="text-[#02BDD5] text-4xl text-center font-bold">
            Our Services
          </h2>
          <div className="w-0.5 bg-gray-700 h-[5rem] hidden md:block sm:hidden"></div>
          <p className=" text-xl leading-7 md:w-[600px] mt-2 p-2  text-center lg:text-left">
            We offer a wide range of services to help businesses improve their
            technology infrastructure, streamline their operations and enhance
            their digital presence.
          </p>
        </div>
      </div>

      {/* Our Specialities */}
      {/* <div className="md:flex justify-center mt-11 md:space-x-12 ">
                    <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5]"></div>
                    <h2 className="text-4xl font-bold mt-3 text-center bg-gradient-to-r text-[#02BDD5]">Our Specialities</h2>
                    <div className=" h-[3px] md:w-44 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5]"></div>
                </div> */}
      <div className="flex flex-col items-center flex-wrap pb-20 p-4">
        <div className=" flex flex-wrap">
          {/* <div className="md:h-48 md:w-56 bg-[#FEAD56] rounded-br-full rounded-tr-full hidden md:block sm:hidden"> */}
          <div>
            <img src="dev.svg" className=" mt-10 h-36 md:w-36 hidden md:block sm:hidden" />
          </div>
          <div className="m-0 customs:ml-10 lg:ml-10  text-center lg:text-left customs:text-left ">
            <h2 className="text-4xl font-bold bg-gradient-to-r text-[#02BDD5] ">
              Development
            </h2>
            <p className="md:w-[20rem] customs:w-[30rem] lg:w-[50rem] w-full text-[18px] leading-7 mt-3 ">
              We offer top-notch website and application development services
              for businesses of all sizes. Our team of expert developers uses
              the latest technologies and methodologies to deliver custom
              solutions that are tailored to your specific needs. We also
              provide ongoing support and maintenance services to ensure that
              your website or application stays up-to-date and functions
              seamlessly. Contact us today to discuss your development needs and
              let us help you bring your ideas to life.
            </p>
          </div>
          <hr className="h-1 mt-10 bg-[#02BDD5] w-full hidden customs:block lg:block"></hr>
        </div>
        <div>

          <div className="mt-14 md:flex text-center lg:text-right customs:text-right ">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r md:flex justify-end text-[#02BDD5] ">
                Design
              </h2>
              <p className="md:w-[20rem] customs:w-[30rem] lg:w-[50rem] w-full text-[18px] customs:text-right lg:text-right leading-7 mt-3">
                Our design services provide creative solutions to help businesses
                stand out in a crowded market. Our team of experienced designers
                offers a wide range of services, including branding, graphic
                design, App design, web design, and UX/UI design. Our designs are
                optimized for a range of devices and platforms, ensuring a
                seamless user experience across all channels. Whether you’re
                starting from scratch or looking to refresh your existing brand,
                our design services can help take your business to the next level.
              </p>
            </div>
            <div className="">
              <img src="des.svg" className="ml-14 mt-10 h-36 md:w-36 hidden md:block sm:hidden" />
            </div>
          </div>
          <hr className="h-1 mt-10 bg-[#02BDD5] w-full hidden customs:block lg:block"></hr>
        </div>
        <div>

          <div className="mt-14 md:flex">
            <div className="">
              <img src="con.svg" className="ml-14 mt-10 h-36 md:w-36 hidden md:block sm:hidden" />
            </div>
            <div className="customs:ml-10 lg:ml-10 text-center lg:text-left customs:text-left">
              <h2 className="text-4xl font-bold bg-gradient-to-r text-[#02BDD5]">
                Consulting
              </h2>
              <p className="md:w-[20rem] customs:w-[30rem] lg:w-[50rem] w-full text-[18px]  leading-7 mt-3">
                Fuzzy Cloud provides consultancy-as-a-service to boost team
                capacity and technical expertise. Specializing in high-risk areas
                of business, our mission is to deliver innovative and practical
                solutions to pressing business issues. Our consulting team is
                experienced in a wide range of industries, from technology to
                finance to marketing. Our experienced consulting team tailors’
                solutions to individual client needs, delivering cost-effective
                and efficient value. We provide industry insights, trends, and
                training to keep clients ahead of the curve.
              </p>
            </div>
          </div>
        <hr className="md:w-full h-1 mt-10  bg-[#02BDD5] hidden customs:block lg:block"></hr>
        </div>
      </div>
    </div>
  );
};

export default page;
