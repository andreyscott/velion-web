"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
// import Typed from "react-typed";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Innovation",
      className: "text-white text-lg sm:text-xl"

    },
    {
      text: "Impact",
      className: "text-white text-lg sm:text-xl"

    },
    {
      text: "Strategy",
      className: "text-velion-700 text-lg dark:text-blue-500"

    },
  ];
  return (
    <div className="flex flex-col max-w-3xl items-center justify-center h-[25rem] ">
      <h1 className="text-3xl text-white text-left font-bold sm:text-5xl pb-5 leading-9">
              The Best of Software Development 
              
      
              <strong className="block font-bold text-velion-700"> And Innovation. </strong>
            </h1>

            {/* small description text here */}

            <p className="text-white/80 max-w-3xl pr-4 tracking-widest leading-7 flex text-left text-lg sm:text-xl">
            We build cutting-edge and innovative solutions for growth, impact, and transformation.

      {/* <TypewriterEffect words={words} /> */}                      
                                
            </p>

            {/* contact us button with focus and hover states */}
            {/* <a
              href="/contact"
              className="mt-5 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
            >
              Contact Us
            </a> */}

      
    </div>
  );
}
