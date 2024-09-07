import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mb-12">
      <div className="lg:flex lg:items-center lg:justify-between p-4 bg-[#212B36]">
        <div className="min-w-0 flex-1 ">
          <h2 className="text-2xl font-bold text-start leading-7  text-[#02BDD5] sm:truncate sm:text-3xl sm:tracking-tight lg:ml-24">
            Admin Dashboard
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0 lg:pr-24">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Setting
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-[#02BDD5] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Logout
            </button>
          </span>
        </div>
      </div>

    <div className="lg:pl-28 lg:pr-28 bg-white pt-12">
     <div className="flex justify-between  border border-[#02BDD5] rounded-md p-6 bg-[#F4F7FF]">
      <h2 className="text-4xl text-[#02BDD5]">Blogs</h2>
      <button type="button" className="text-white bg-[#02BDD5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 ">
<svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Add Blog
</button>
     </div>

     <div>
     <div className="lg:grid grid-cols-3 gap-8">
  <div className="mt-12 border border-[#02BDD5] p-2">
    <img src="/bg1.jpg"></img>
    <div className="flex justify-between mt-2">
      <h2 className="text-gray-500">Jan 11,2019</h2>
      <h2 className="text-gray-500">By Admin</h2>
    </div>
    <h2 className="text-start text-2xl mt-2">Functional Programming Adventures in 2019</h2>
    <p className="text-gray-500">I like to start with wishing all the readers A Very Happy New Year… I wish 2019 for you will be too much fun and...</p>
    <div className="flex justify-between mt-4">
      <div className="flex mt-6 gap-x-4">
        <img src="/edit.svg" className="h-6"/>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <button
            type="submit"
            className="rounded-md bg-[#02BDD5] lg:w-56 px-1 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 "
          >
            Continue Reading
          </button>
    </div>
  </div>
  <div className="mt-12 border border-[#02BDD5] p-2">
    <img src="/bg1.jpg"></img>
    <div className="flex justify-between mt-2">
      <h2 className="text-gray-500">Jan 11,2019</h2>
      <h2 className="text-gray-500">By Admin</h2>
    </div>
    <h2 className="text-start text-2xl mt-2">Functional Programming Adventures in 2019</h2>
    <p className="text-gray-500">I like to start with wishing all the readers A Very Happy New Year… I wish 2019 for you will be too much fun and...</p>
    <div className="flex justify-between mt-4">
      <div className="flex mt-6 gap-x-4">
        <img src="/edit.svg" className="h-6"/>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <button
            type="submit"
            className="rounded-md bg-[#02BDD5] lg:w-56 px-1 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 "
          >
            Continue Reading
          </button>
    </div>
  </div>
  <div className="mt-12 border border-[#02BDD5] p-2">
    <img src="/bg1.jpg"></img>
    <div className="flex justify-between mt-2">
      <h2 className="text-gray-500">Jan 11,2019</h2>
      <h2 className="text-gray-500">By Admin</h2>
    </div>
    <h2 className="text-start text-2xl mt-2">Functional Programming Adventures in 2019</h2>
    <p className="text-gray-500">I like to start with wishing all the readers A Very Happy New Year… I wish 2019 for you will be too much fun and...</p>
    <div className="flex justify-between mt-4">
      <div className="flex mt-6 gap-x-4">
        <img src="/edit.svg" className="h-6"/>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <button
            type="submit"
            className="rounded-md bg-[#02BDD5] lg:w-56 px-1 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 "
          >
            Continue Reading
          </button>
    </div>
  </div>
</div>
     </div>

     <div className="mt-12 bg-[#F4F7FF] p-4">
     <h2 className="text-4xl text-[#02BDD5]">Users</h2>
    <div className="lg:flex justify-center gap-x-20 mt-12">
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
    </div>

    <div className="lg:flex justify-center gap-x-20 mt-12 ">
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
      <div className="flex gap-x-48 border border-black rounded-md p-4">
        <h2>Rohit Sukala</h2>
        <img src="/delete.svg" className="h-6"/>
      </div>
    </div>
     </div>
    </div>
    </div>
  );
};

export default page;
