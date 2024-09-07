"use client";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Aboveheader from "./Aboveheader";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

      <div className="bg-black h-86 hidden md:block customs:hidden lg:block sm:hidden fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <Aboveheader />
        <div className="">
          <div className="flex flex-row ml-20 sm:ml-10 sm:mr-10  mr-20 justify-between  items-center">
            <div className="flex">
              <Link href="/">
                <img
                  src="logo.svg"
                  alt="logo"
                  className="h-47 mt-1 sm:h-14 sm:w-24 sm:mt-3 sm:mb-3 w-73 "
                />
              </Link>
            </div>
            <div className="md:flex sm:hidden">
              <ul className="flex items-center justify-end align-middle space-x-7 w-40p ">
                <Link href="/services">
                  <h2 className=" text-lg  text-white ">Services</h2>
                </Link>

                <Link href={"/expertise"}>
                  <h2 className="text-lg bg-transparent text-white">
                    Expertise
                  </h2>
                </Link>

                <li>
                  <Link href="/aboutus">
                    <h2 className="text-lg bg-transparent text-white">
                      About Us{" "}
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <h2 className="text-lg text-white">Careers</h2>
                  </Link>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <h2 tabIndex={0} role="link" className="m-1 text-xl text-white">Insights</h2>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black text-white rounded-box w-52">
                      <li>
                        <Link href={"/casestudy"}>
                          <h2 className="text-md bg-transparent text-white">
                            Casestudy
                          </h2>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/projectlist"}>
                          <h2 className="text-md bg-transparent text-white">
                            Project
                          </h2>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/post"}>
                          <h2 className="text-md bg-transparent text-white">
                            Blogs
                          </h2>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/opensource"}>
                          <h2 className="text-md bg-transparent text-white">
                            Opensource
                          </h2>
                        </Link>
                      </li>
                    </ul>
                  </div>

                </li>
                <li>
                  <Link href="/contact">
                    <h2 className=" text-lg bg-transparent text-white">
                      Contact Us
                    </h2>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <Link href="/contact">
                <button className="  sm:hidden md:block h-10 mt-6 mb-6 rounded-md px-4 bg-[#FEAD56] text-white hover:text-[#FEAD56] hover:bg-white">
                  LET’S CONNECT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white customs:block block md:hidden">
        <span
          className="justify-end  bg-gray-900 overflow-auto z-10"
        >
          <div className="flex justify-between bg-black ">
            <Link href="/">
              <img src="logo.svg" className="w-12 h-12 mx-4" />
            </Link>
            <div className="h-8 w-auto mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setOpen(!open)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="bg-[#29BDD5] w-8 h-8 mt-2"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
          <ul
            className={`flex-col text-right pr-10 ${open ? "block" : "hidden"
              } pt-4 pb-4 rounded-lg block items-center justify-end align-middle  ml-5 space-y-2`}
          >
            <li>
              <Link href="/services">
                <h2 className=" text-lg bg-transparent text-black ">
                  Services{" "}
                </h2>
              </Link>
            </li>

            <li>
              <Link href="/expertise">
                <h2 className="text-lg bg-transparent text-black">
                  Expertise{" "}
                </h2>
              </Link>
            </li>

            <li>
              <Link href="/aboutus">
                <h2 className="text-lg bg-transparent text-black">
                  About Us{" "}
                </h2>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <h2 className="text-lg text-black">Careers</h2>
              </Link>
            </li>
            {/* <li>
              <div className="dropdown dropdown-hover hover-right">
                <h2 tabIndex={0} role="link" className="m-1 text-xl text-black">Insights</h2>

                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black text-white rounded-box ">
                  <li>
                    <Link href={"/post"}>
                      <h2 className="text-md bg-transparent text-white">
                        Casestudy
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/post"}>
                      <h2 className="text-md bg-transparent text-white">
                        Projects
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/post"}>
                      <h2 className="text-md bg-transparent text-white">
                        Blogs
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/post"}>
                      <h2 className="text-md bg-transparent text-white">
                        Opensource
                      </h2>
                    </Link>
                  </li>
                </ul>
              </div>

            </li> */}
            <li>

            <ul className="menu menu-horizontal bg-white text-black text-lg rounded-box p-0 m-0 hover:bg-white">
              <li >
                <details className="m-0 p-0 bg-white">
                  <summary className="p-0 m-0 bg-white text-black" >Insights</summary>
                  {/* <ul> */}
                  <li className="bg-white text-black">
                    <Link href={"/casestudy"}>
                      <h2 className="text-md bg-transparent">
                        Casestudy
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/project"}>
                      <h2 className="text-md bg-transparent">
                        Projects
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/post"}>
                      <h2 className="text-md bg-transparent">
                        Blogs
                      </h2>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/opensource"}>
                      <h2 className="text-md bg-transparent">
                        Opensource
                      </h2>
                    </Link>
                  </li>
                  {/* </ul> */}
                </details>
              </li>
            </ul>
            </li>
            <li>
              <Link href="/contact">
                <h2 className=" text-lg bg-transparent text-black">
                  Contact Us
                </h2>
              </Link>
            </li>
          </ul>
        </span>
      </div>
      {/* </> */}
    </>
  );
};

export default Header;
