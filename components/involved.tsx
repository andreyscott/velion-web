/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaHashtag, FaPlay, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { LuRadioTower } from "react-icons/lu";
import { IconContext } from "react-icons";
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

        <div className='text-center text-white uppercase text-lg font-bold font-mono tracking-wide leading-5 xl:text-xl pb-8 xl:pb-12'>
            How to Get Involved

            </div>

{/* grid  */}

<div className='grid max-w-4xl p-0 m-0 grid-cols-1 gap-y-0.5 col gap-0 space-x-0 gap-x-0 lg:grid-cols-3'>
    {involved.map((item, index) => (
        
        <article key={index}
  className="w-80 h-48 m-0 bg-gradient-to-tr from-[#1f0815] to-[#c33082] shadow-sm transition hover:shadow-lg p-8 sm:p-9 md:p-10"
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
