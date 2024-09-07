import React from "react";

const page = () => {
  return (
    <div>
      <form>
        <div className="space-y-12 p-4 lg:pl-64 lg:pr-64 bg-white">
          <div className=" pt-20">
            <div className="flex ">
                <div className="flex justify-start"><img src="/back.svg" className=""/></div>
                
            </div>
            <h2 className="text-2xl font-semibold leading-7 text-[#02BDD5] text-center">
              Edit Blog
            </h2>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900 mt-16 underline"
              >
                Blog Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                 
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-[#02BDD5] focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="block text-sm font-medium leading-6 text-gray-900 underline">
              Blog Content
            </h2>
            <div className="mt-10  sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 mt-4">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Markdown
                </label>
                <div className="mt-2">
                  <input
                    id="markdown"
                    name="markdown"
                    type="text"
                    placeholder="Enter your Markdown"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center  gap-x-6 p-4">
          <button
            type="button"
            className="rounded-md px-3 py-2 lg:w-56 text-sm bg-[#696B73] text-white font-semibold leading-6 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-[#02BDD5] lg:w-56 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
        </div>

        
      </form>
    </div>
  );
};

export default page;
