import Link from 'next/link'
import React from 'react'

const Technology = () => {
  return (
    <div>
      
      <div className="pb-16 pt-8 w-auto  bg-[#F4F7FF]">
        <div>
          <div className="md:flex justify-center text-center md:space-x-5 ">
            <div className=" h-[3px] lg:w-48 mt-10 mb-4 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block"></div>
            <h2 className="text-[35px]  font-bold pt-4 bg-gradient-to-r  text-[#02BDD5] ">
              Technologies
            </h2>
            <div className=" h-[3px] lg:w-48 mt-10 bg-gradient-to-r from-[#02BDD5] via-[#FEAD56] to-[#02BDD5] hidden sm:hidden md:block lg:block"></div>
          </div>
          <p className="lg:flex justify-center text-center mt-4 text-xl p-2 font-bold">
            Our Passion Lies In Open Source Technology
          </p>
          <p className="md:flex justify-center text-center mt-4 text-[18px] font-light">
            We believe in turning ideas into reality with code. We're proud to
            contribute to some of the
            <br /> most innovative products in the industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center mr-5 mt-9 ml-6 ">
          {["APP", "ML", "UI/UX", "PL"].map((label, index) => (
            <div>
            <button
              key={index}
              className="border mr-3 w-[100px] mt-5 h-[40px] border-dashed hover:bg-[#02BDD5] hover:text-white border-[#02BDD5] text-lg rounded-md px-2 text-[#02BDD5]"
              >
              {label}
            </button>
              </div> 
          ))}
        </div>

        <div className="flex flex-wrap justify-center sm:pb-10  mt-20 sm:mt-8">
          {[
            { href: "https://www.rust-lang.org/", imgSrc: "rust.svg", text: "Rust" },
            { href: "https://astro.build/", imgSrc: "astro.svg", text: "Astro" },
            { href: "https://remix.run/", imgSrc: "remix.svg", text: "Remix" },
            { href: "https://react.dev/", imgSrc: "react.svg", text: "React JS" },
            { href: "https://tailwindcss.com/", imgSrc: "tailwind.svg", text: "TailwindS" },
            { href: "https://fsharp.org/", imgSrc: "fsharp.svg", text: "F#" },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="flex flex-wrap flex-col items-center justify-between mt-10 mr-10 ml-10 ">
                <img src={link.imgSrc} className="h-30 w-30 object-fill" alt={link.text} />
                <h3 className="mt-2 text-black text-md">{link.text}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Technology