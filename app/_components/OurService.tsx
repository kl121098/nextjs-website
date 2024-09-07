import Link from 'next/link'
import React from 'react'

const OurService = () => {
  return (
    <div>
      <div className="bg-white">
        {/* our services top text */}
        <div>
          {/* <div className="w-10 h-10  mt-8 bg-gradient-to-r from-#02BDD5 via-#FEAD56 to-#02BDD"></div> */}
          <div className="md:flex justify-center md:space-x-5 text-center mt-9 ml-12 mr-12">
            <div className=" h-[3px] md:w-48 mt-8 mb-6 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden customs:hidden md:block lg:block"></div>
            <h2 className="text-[40px] text-center  font-bold bg-gradient-to-r text-[#02BDD5]">
              Our Services
            </h2>
            <div className=" h-[3px] lg:w-48 mt-8  bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block  "></div>
          </div>
          <h2 className="text-center font-bold text-xl mt-4">
            "Aligning services, achieving goals — it's all about collaboration"
          </h2>
          <p className="md:flex justify-center text-center mt-4 text-[18px] font-light">
            We offer a wide range of services to help businesses improve their
            technology infrastructure,
            <br /> streamline their operations, and enhance their digital
            presence.
          </p>
        </div>
        {/* our services card */}
        <div className="mt-10 flex flex-wrap justify-center  p-2">
          {[
            {
              imgSrc: "Development.svg",
              title: "Development",
              description:
                "We offer top-notch website and application development services for businesses of all sizes.",
            },
            {
              imgSrc: "Design.svg",
              title: "Design",
              description:
                "Our design services provide creative solutions to help businesses stand out in a crowded market.",
            },
            {
              imgSrc: "Consulting.svg",
              title: "Consulting",
              description:
                "Fuzzy-cloud provides consultancy as a service to boost team capacity and technical expertise.",
            },
          ].map((section, index) => (
            <div key={index}>
              <div className="md:w-96 h-auto pt-8 mb-10 shadow-custom mr-2  sm:ml-2 md:mr-5 lg:mr-5 sm:flex-grow rounded-md bg-[#F4F7FF] ">
                <div className="">
                  <img src={section.imgSrc} className="h-24 w-24 ml-6 pt-4" alt={section.title} />
                </div>
                <h3 className="text-[#02BDD5] font-bold text-[24px] pt-8 ml-6">{section.title}</h3>
                <p className="ml-6 font-extralight text-[16px] pt-3">{section.description}</p>
                <Link href="/services">
                  <h4 className="text-[#02BDD5] pb-5 ml-6 pt-3">Read More...</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OurService