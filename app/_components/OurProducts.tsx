import React from 'react'

const OurProducts = () => {
  return (
    <div>
      <div className="">
        <div>
          {/* <div className="w-10 h-10  mt-4 bg-gradient-to-r from-#02BDD5 via-#FEAD56 to-#02BDD"></div> */}
          <div className="md:flex justify-center mt-9 text-center md:space-x-5 ml-12 mr-12">
            <div className=" h-[3px] lg:w-48 mt-8 mb-6 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block"></div>
            <h2 className="text-[40px] font-bold bg-gradient-to-r text-[#02BDD5]">
              Our Products
            </h2>
            <div className=" h-[3px] lg:w-48 mt-8 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block"></div>
          </div>
          <p className="lg:flex justify-center text-center mt-7 text-xl font-bold">
            Experience the future of Digitalization with our Products
          </p>
        </div>

        {/* Products Cards */}

        <div className="flex flex-wrap justify-center mt-10">
          {[
            { imgSrc: "ecard.svg", alt: "E Card", title: "E Card" },
            { imgSrc: "resume.svg", alt: "Resume Builder", title: "Resume Builder" },
          ].map((item, index) => (
            <div key={index} className="group mr-2 sm:mr-3 md:mr-8 lg:mr-8 h-auto w-64 mb-10 border border-dashed border-[#FEAD56] shadow-custom rounded-md hover:bg-[#FEAD56] flex justify-center align-middle">
              <div className="pt-12 pb-12">
                <div className='flex justify-center'>
                  <img src={item.imgSrc} alt={item.alt} className="group-hover:brightness-50 h-24 w-24"></img>
                </div>
                <h3 className="text-[#02BDD5] group-hover:text-white text-xl font-bold text-center mt-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OurProducts