/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from 'next/image'

// import Africa from '@/public/ForAfrika.svg'
import Velion from '@/public/assets/logo-mlops-white.svg'
import { FaPaperPlane } from "react-icons/fa";

import { FaHashtag, FaPlay, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
// import { LuRadioTower } from "react-icons/lu";


import { linksFooter } from "@/data/"


export const Footer = ()=> {

    return (
      <footer aria-label="Site Footer" className="bg-black border border-l-black   border-t-white w-full h-fit  py-20">
            <div className="container text-white flex flex-col gap-[50px] mx-auto">
                <div className="w-full flex flex-col lg:flex-row gap-[50px] md:gap-[40px] justify-between items-start ">
                    <div className="flex flex-col w-80 lg:w-96 items-start gap-[10px]">
                        <Image
                         src={Velion}
                          loading="lazy"
                           alt="velion logo" 
                           className="w-36 h-32" />
                       
                    </div>

                    <span className="w-full flex justify-between flex-wrap lg:flex-nowrap flex-row md:flex-row gap-[30px]">
                        {
                            linksFooter.map((item,index)=> (
                                <div className="flex flex-col text-left gap-[20px] md:gap-[50px]" key={index} >
                                    <p className="font-[700]">{item.title}</p>
                                    <ul className="list-none p-[0] flex flex-col gap-[10px]">
                                        {item.subs.map((item,index)=> (
                                            <Link   
                                              className="my-0 whitespace-nowrap   hover:opacity-[0.8] font-[500]" key={index} href={item.link}>{item.name}  </Link>
                                            // <li key={index} className="text-[.9em]">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }

                        <div className="w-full lg:w-fit text-left flex flex-col gap-[20px] md:gap-[30px]">
                            <span className="flex flex-col gap-[10px] md:gap-[30px]">
                                <p className="font-[700] text-[1em]">Socials </p>
                                {/* socials like slack, youtube, github , linkedin with Icons  */}
                                <p className="font-[300] font-sans text-[.9em] max-w-[200px]">
                                    <span className="flex group group-hover:text-white/80 items-center gap-[5px]">
                                        <FaHashtag className="group-hover:text-white/80 group-hover:cursor-pointer" />
                                        <Link href="https://slack.com" 
                                        className=" text-md font-medium group-hover:text-white/80  ">Slack</Link>
                                    </span>                                      
                                </p>
                                {/* YOUTUBE  */}
                                <p className="font-[300] font-sans text-[.9em] max-w-[200px]">
                                    <span className="flex group group-hover:text-white/80 items-center gap-[5px]">
                                        <FaPlay className="group-hover:text-white/80 group-hover:cursor-pointer" />
                                        <Link href="https://youtube.com" 
                                        className=" text-md font-medium group-hover:text-white/80  ">Youtube</Link>
                                    </span>
                                </p>
                                <p className="font-[300] font-sans text-[.9em] max-w-[200px]">
                                    <span className="flex group group-hover:text-white/80 items-center gap-[5px]">
                                        <FaGithub className="group-hover:text-white/80 group-hover:cursor-pointer" />
                                        <Link href="https://github.com" 
                                        className=" text-md font-medium group-hover:text-white/80  ">Github</Link>
                                    </span>
                                </p>
                                <p className="font-[300] font-sans text-[.9em] max-w-[200px]">
                                    <span className="flex group group-hover:text-white/80 items-center gap-[5px]">
                                        <FaLinkedin className="group-hover:text-white/80 group-hover:cursor-pointer" />
                                        <Link href="https://linkedin.com" 
                                        className=" text-md font-medium group-hover:text-white/80  ">Linkedin</Link>
                                    </span>
                                </p>
                                <p className="font-[300] font-sans text-[.9em] max-w-[200px]">
                                    <span className="flex group group-hover:text-white/80 items-center gap-[5px]">
                                        <FaTwitter className="group-hover:text-white/80 group-hover:cursor-pointer" />
                                        <Link href="https://twitter.com" 
                                        className=" text-md font-medium group-hover:text-white/80  ">Twitter</Link>
                                    </span>
                                </p>




                                
                               

                            </span>
                            
                            
                        </div>
                    </span>
                    
                   
                </div>
                <p className="font-[300] text-[.9em]">© 2024 All Rights Reserved -  Company</p>
            </div>
        </footer>
    )
}