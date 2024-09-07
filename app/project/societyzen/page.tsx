import React from "react";

const page = () => {
  return (
    <div className="mt-16">
      <div className="bg-image">
        <div className="lg:flex ">
          <div className="lg:w-1/2 lg:ml-24 mt-12">
            <div className="flex space-x-4">
              <img src="../Behance Logo.svg" className="h-16 w-16" />
              <h2 className="text-[#026E76] text-2xl font-bold mt-4">
                UX/UI Case Study
              </h2>
            </div>
            <img src="../Societyzen Logo.svg" className="mt-28" />
            <p className="text-white text-xl mt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="flex space-x-4 mt-36">
              <h2 className="text-white font-bold text-3xl mt-4">Tool Used</h2>
              <img src="../Figma Logo.svg" className="h-16 w-16" />
              <img src="../Photoshop Logo.svg" className="h-16 w-16" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="../mobile screen.svg" />
          </div>
        </div>
      </div>

      <div className="ml-24 mr-24 mt-20">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <h2 className="text-5xl font-bold mt-6">
          What is <span className="text-[#026E76]">SocietyZen?</span>
        </h2>
        <div className="flex mt-16 mb-16 space-x-10">
          <div className="w-1/3">
            <img src="../project.svg" className="" />
          </div>
          <div className="w-2/3">
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

      <div className="min-h-screen bg-gradient-to-r from-[#FFFFFF] to-[#026E76] pl-28 pt-16 pb-16">
        <div className="flex justify-center space-x-4">
          <h2 className="text-[#026E76] font-bold text-5xl mt-3">Challenges</h2>
          <img src="../Challenges Icon.svg" className="h-20 w-20" />
        </div>
        <div className="flex justify-center mt-12 space-x-56">
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
            <img src="../Challenges Image.svg" />
          </div>
        </div>
        <div className="flex justify-center pt-16 space-x-4">
          <img src="../pl.svg" className="h-20 w-20" />
          <h2 className="text-[#026E76] font-bold text-5xl mt-3">
            Programming Languages
          </h2>
        </div>
        <div className="flex space-x-10 mt-12">
          <div className="w-1/2">
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
          <div className="w-1/2">
            <img src="../program.svg" className="" />
          </div>
        </div>
      </div>

      <div>
      <div className="flex justify-center pt-16 space-x-4">
          <h2 className="text-[#026E76] font-bold text-5xl mt-3">Design Process</h2>
          <img src="../design.svg" className="h-20 w-20" />
        </div>
        <div className="flex justify-center mt-16 mb-16">
        <img src="../design_sec.svg"/>
        </div>
      </div>

      <div className="bg-image1">
        <h2 className="text-[#026E76] pt-16 font-bold text-5xl text-center">Application Screens</h2>
        <div className="flex justify-center ">
            <img src="../dd.svg"/>
        </div>
      </div>
    </div>
  );
};

export default page;
