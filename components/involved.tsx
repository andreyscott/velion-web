/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaHashtag, FaPlay, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { LuRadioTower } from "react-icons/lu";
// import { IconContext } from "react-icons";
// card data 

const involved = [
    {
        icon: <FaHashtag />,
        title: 'Slack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
    {
        icon: <FaGithub />,
        title: 'Github',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
    {
        icon: <LuRadioTower />,
        title: 'Discord',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
    {
        icon: <FaTwitter />,
        title: 'Twitter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
    {
        icon: <FaLinkedin />,
        title: 'Linkedin',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
    {
        icon: <FaPlay />,
        title: 'Youtube',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolores'
    },
]

export const Involved = () => {
  return (
    <div className='bg-[#1d1d2c] mx-auto flex flex-col py-16 px-12 '>


        <div className="w-full flex flex-col justify-center items-center mx-auto  ">
            {/* title text upper case  */}

        <div className='text-center  2xl:max-w-xl text-white text-2xl font-semibold font-mono tracking-wide 2xl:text-3xl py-12 xl:py-14'>

        Let’s create a graph of people that love graphs.

            </div>

{/* grid  */}

<div className='grid p-0 m-0 grid-cols-1 max-w-5xl pb-12 xl:pb-14 gap-y-0.5 col gap-0 space-x-0 gap-x-0 lg:grid-cols-3'>
    {involved.map((item, index) => (
        
        <article key={index}
  className=" transition-all duration-500 hover:scale-105 ease-in-out  w-80 h-60 m-0 bg-gradient-to-tr from-[#1f0815] to-[#c33082] shadow-sm hover:shadow-lg p-8 sm:p-9 md:p-10"
>
  <span className="inline-block rounded border-white border-[2px]  p-1 text-white">
    {item.icon}
  </span>

  <a href="#">
    <h3 className="mt-0.5 text-xl xl:text-2xl leading-5 tracking-wide font-bold text-white uppercase">
     {item.title}
    </h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/90">
    {item.description}
  </p>

 
</article>
    ))}
</div>


        </div>

                            




    </div>
  )
}
