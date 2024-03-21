"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Drive",
      className: "text-white"

    },
    {
      text: "Innovation",
      className: "text-white"

    },
    {
      text: "with",
      className: "text-white"

    },
    {
      text: "customized",
      className: "text-white"
    },
    {
      text: "technology",
      className: "text-velion-700 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center h-[30rem] ">
      <h1 className="text-3xl text-white font-bold sm:text-5xl pb-5 leading-8">
              The Best of Software Development 
              
      
              <strong className="block font-bold text-velion-700"> And Innovation. </strong>
            </h1>
      <TypewriterEffect words={words} />
      
    </div>
  );
}
