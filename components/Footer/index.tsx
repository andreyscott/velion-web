/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from 'next/image'

// import Africa from '@/public/ForAfrika.svg'
import Velion from '@/public/assets/svgs/velionfooter.svg'
import { FaPaperPlane } from "react-icons/fa";


import { linksFooter } from "@/data/"


export const Footer = ()=> {

    return (
      <footer aria-label="Site Footer" className="bg-velion-700 w-full h-fit  py-20">
            <div className="container text-white flex flex-col gap-[50px] mx-auto">
                <div className="w-full flex flex-col lg:flex-row gap-[50px] md:gap-[40px] justify-between items-start ">
                    <div className="flex flex-col items-start gap-[10px]">
                        <Image
                         src={Velion}
                          loading="lazy"
                           alt="velion logo" 
                           className="w-auto" />
                        <span className="flex flex-col items-start gap-[2px]">
                            <p className="text-[.7em]">CONTACT</p>
                            <p className="text-[1.5em] lg:text-[2.2em] font-[700]">info@velion.io</p>
                        </span>
                    </div>

                    <span className="w-full flex justify-between flex-wrap lg:flex-nowrap flex-row md:flex-row gap-[30px]">
                        {
                            linksFooter.map((item,index)=> (
                                <div className="flex flex-col text-left gap-[20px] md:gap-[50px]" key={index} >
                                    <p className="font-[700]">{item.title}</p>
                                    <ul className="list-none p-[0] flex flex-col gap-[10px]">
                                        {item.subs.map((item,index)=> (
                                            <Link     className="my-0 whitespace-nowrap  opacity-[.6] hover:opacity-[1] font-[500]" key={index} href={item.link}>{item.name}  </Link>
                                            // <li key={index} className="text-[.9em]">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }

                        <div className="w-full lg:w-fit text-left flex flex-col gap-[20px] md:gap-[30px]">
                            <span className="flex flex-col gap-[10px] md:gap-[30px]">
                                <p className="font-[700] text-[1em]">Stay up to date</p>
                                <p className="font-[300] text-[.9em] max-w-[200px]">
                                    We empower excellence through technology
                                </p>
                            </span>
                            <div className="relative w-full lg:w-fit">
                                <input placeholder="Your email adress" className="h-[45px] px-[20px] w-full xl:w-[425px] bg-fadedblue 
                                rounded-[100px] relative border-solid focus:border-grey focus:border-[1px] outline-none"/>
                                <FaPaperPlane 
                                className=" w-9 h-9 absolute right-[4px] top-[4px] text-white bg-velion-700 p-[10px] rounded-[100px]"/>
                            </div>
                            
                        </div>
                    </span>
                    
                   
                </div>
                <hr className="w-full h-[2px] bg-white rounded border-0"/>
                <p className="font-[300] text-[.9em]">© 2023 All Rights Reserved -  Velion</p>
            </div>
        </footer>
    )
}