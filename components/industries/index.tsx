"use client"

import React from 'react'
// import {motion } from 'framer-motion';
import { motion } from "framer-motion";

import { GiMicroscope, GiWallet, GiWorld } from "react-icons/gi";

import { FaCartPlus } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";

const industryData = [
  {
    id: 1,
    title: 'Healthcare',
    icon: <GiMicroscope className='w-10 h-10 text-[#4885ED]' />,
    color: 'border-[#4885ED]',

  },
  {
    id: 2,
    title: 'Finacial Service and Insurance',
    icon:  <GiWallet className='w-10 h-10 text-[#ff9900]' />,
    color: 'border-[#FF9900]'
    
  },
  {
    // tech 
    id: 3,
    title: 'Technology',
    icon:  <GiWorld className='w-10 h-10 text-velion-700' /> , 
    color: 'border-velion-700',
  },
  {
    id: 4,
    title: 'Consumer and Retail',
    icon:  <FaCartPlus className='w-10 h-10 text-[#68A703]' />,
    color: 'border-[#68A703]',

  },
  {
    id: 5,
    title: 'Industrial',
    icon: 
    <MdEmojiTransportation className='w-10 h-10 text-[#CE1E5B] ' />,
    color: 'border-[#CE1E5B]',


  }
]

export const Industry = () => {
  return (
    <section className="text-white bg-black w-full  py-20">
       
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pt-16">
    <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.7,
      ease: "easeInOut",
    }} 
      
      className="mx-auto  text-center">

      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
        Industries we serve
</h2>

      <p className="mx-auto my-4 max-w-sm text-white/80">
      We help a diverse set of organizations across industries and geographies drive business value with technology.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      
    </motion.div>

    <div className="mx-auto pt-4 gap-8 grid grid-col-2 sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-5 lg:max-w-5xl">
           {
          industryData.map((item) => (
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.9,
        ease: "easeInOut",
      }} 
            
            key={item.id} className="flex flex-col items-center space-y-2">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full border-2  ${item.color}  `}>
               {item.icon}
               
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))
           }

        </div>

    
  </div>
</section>
  )
}
