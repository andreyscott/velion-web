"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";


// icons 
import { CiCalendar } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaDollarSign, FaCube} from "react-icons/fa";


export const gStart = [
  {
      image:  <CiCalendar size={40} className='text-green-500' />,
      title:"1. Contact Us​",
      subtitle:'Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.',
      tcolor:'text-[#16AB5E]'
  },
  {
      image: <CgProfile size={40} className='text-[#FF5F08]' />,
      title:"2. Get a Consultation​",
      subtitle:'Get on a call with our team to know the feasibility of your project idea.',
      tcolor:'text-[#FF5F08]'
  },
  {
      image: <FaDollarSign size={40} className='text-[#FFB900]' />,
      title:"3. Get a Cost Estimate​",
      subtitle:'Based on the project requirements, we share a project proposal with budget and timeline estimates.',
      tcolor:'text-[#FFB900]'
  },
  {
      image: <FaCube size={40} className='text-[#3f54bc]' />,
      title:"4. Project Kickoff​",
      subtitle:'Once the project is signed, we bring together a team from a range of disciplines to kick start your project.',
      tcolor:'text-[#FA0F00]'
  }
]

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >

<div className="w-full h-full my-9 md:py-16  mx-auto flex flex-col gap-9">
    <p className="my-0 text-4xl font-bold text-velion-700 text-center">
        Get Started Today
    </p>

    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-7 xl:gap-9 ">
        {
            gStart.map((item,index)=> (
    <div 
    key={index}
    
    className={`relative w-full h-fit cols-span-1 flex flex-col items-center lg:items-start gap-[30px]`}>
         {/* grey background  */}
         <div className="w-[80px] h-[80px] bg-[#f1f1f1] rounded-full flex items-center justify-center">
              {item.image}
          </div>
        <span className="flex flex-col gap-[10px] md:w--[300px] lg:text-left">
           
            <p className={`${item.tcolor} my-0  text-secondary font-[600] leading-7 xl:text-[1.25em]`}>{item.title}</p>
            <p className="my-0 font-[300] xl:text-[1em] max-w-[100%] lg:max-w-[330px]">{item.subtitle}</p>
        </span>
    </div>
            ))
        }
    </div>

</div>
      
      </motion.div>
    </AuroraBackground>
  );
}
