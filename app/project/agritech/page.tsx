import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-[#C59402] to-[#E9DDBC] p-4 mt-16">
        <div className="lg:flex ">
          <div className="lg:w-1/2 lg:ml-24 mt-12">
            <div className="flex space-x-4">
              <img src="../be.svg" className="h-16 w-16" />
              <h2 className="text-2xl font-bold mt-4">
                UX/UI Case Study
              </h2>
            </div>
            <img src="../logoagri.svg" className="mt-28" />
            <p className="text-white text-xl mt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy 
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex space-x-4 mt-36">
              <h2 className="text-white font-bold text-3xl mt-4">Tool Used</h2>
              <img src="../Figma Logo.svg" className="h-16 w-16" />
              <img src="../Photoshop Logo.svg" className="h-16 w-16" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="../heroagree.svg" />
          </div>
        </div>
      </div>

      <div className="lg:ml-24 lg:mr-24 mt-20 p-4">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <h2 className="text-5xl font-bold mt-6">
          What is <span className="text-[#C59402]">Agri Tech?</span>
        </h2>
        <div className="lg:flex mt-16 mb-16 lg:space-x-10">
          <div className="lg:w-1/3">
            <img src="../projectagri.svg" className="" />
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-[#FFFFFF] to-[#C59402] lg:pl-28 pt-16 pb-16 p-6">
        <div className="flex justify-center space-x-4">
          <h2 className="text-[#C59402] font-bold text-5xl mt-3">Challenges</h2>
          <img src="../challengeagri.svg" className="h-20 w-20" />
        </div>
        <div className="lg:flex justify-center mt-12 lg:space-x-56">
          <div>
            <ul className="list-disc mt-24 text-2xl">
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
            </ul>
          </div>
          <div>
            <img src="../chagri.svg" />
          </div>
        </div>
        <div className="flex justify-center pt-16 space-x-4 ">
          <img src="../plagri.svg" className="h-20 w-20" />
          <h2 className="text-[#C59402] font-bold text-5xl mt-3">
            Programming Languages
          </h2>
        </div>
        <div className="lg:flex lg:space-x-10 mt-12 ">
          <div className="lg:w-1/2">
            <p className="text-xl text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="../program.svg" className="" />
          </div>
        </div>
      </div>

      <div className="p-4">
      <div className="flex justify-center pt-16 lg:space-x-4">
          <h2 className="text-[#C59402] font-bold text-5xl mt-3">Design Process</h2>
          <img src="../designagri.svg" className="h-20 w-20" />
        </div>
        <div className="lg:flex justify-center mt-16 mb-16">
        <img src="../design_sec.svg"/>
        </div>
      </div>

      <div className="bg-image2">
        <h2 className="text-[#C59402] pt-16 font-bold text-5xl text-center">Application Screens</h2>
        <div className="flex justify-center ">
            <img src="../appagri.svg"/>
        </div>
      </div>
    </div>
  );
};

export default page;
