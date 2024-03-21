"use client"

import Image from "next/image";
// import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


import { whatwe } from "@/data";
import React from "react";
export const Whatwedo = ()=> {

    // const router = useRouter();
    return (
        <section className="h-fit py-[50px]">
            <div className="container mx-auto text-black flex flex-col gap-[80px]">
                <span className="flex flex-col gap-4 text-black items-center">
                    <p className=" font-semibold text-sm xl:text-base leading-5">
                        What we do
                    </p>
                    {/* fade rigth in aos animation */}
                    <p 
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                    className="font-[700] lg:px-10 text-3xl lg:text-5xl text-center xl:w-[930px]">
                        We help category leaders navigate complexity and uncertainty
                    </p>
                    <p 
                     data-aos="fade-right"
                     data-aos-duration="1000"
                     data-aos-delay="300"
                     data-aos-once="true"
                     data-aos-anchor-placement="center-bottom"
                    className="text-center font-normal text-sm lg:text-base text-grayText leading-6 tracking-wider lg:max-w-4xl ">
                    We partner with industry leaders to thrive in the fast paced and changing business landscape. With a over a decade of experience, we provide customized solutions to tackle complex challenges offering unparalleled value and a competitive edge by imagining and executing their most ambitious digital projects.
                    </p>
                </span>

                <div className="w-full mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3 ">
                    
                    {
                        whatwe.map((item,index)=> (
                            <Wedo
                                key={index}
                                data={item}
                                id={index}
                            />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}


const Wedo = (props:{data:any; id:number; key:number;})=> {
    // const nav = useHistory()
    const nav = useRouter();
    const [view, setView] = React.useState(false)
    return (
        // fade up in aos animation
        <div
        key={props.key}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        data-aos-once="true"
         className={`w-full max-w-[350px] h-fit min-h-80 py-6 px-5 gap-3 rounded-md border-t-4 border-${props.data.bcolor}  bg-gray-100 flex flex-col items-start`}>
            <span className={`mx-auto w-full `}/>
            <span className="flex flex-col gap-[10px] text-left">
                {/* {id} */}
                {/* {props.data.color} */}
                <Image
                 src={props.data.image}
                 alt="item" 
                 className="w-[34px]" />
                <p className={`${props.data.tcolor} font-[700] leading-7 xl:text-[1.5em]`}>{props.data.title}</p>
                <p className="font-[400] xl:text-[1em] max-w-[100%] h-[90px]">{props.data.subtitle}</p>
            </span>
            <span className="flex w-fit h-fit" onMouseEnter={()=> setView(true)} onMouseLeave={()=> setView(false)}>
                    
                <button onClick={()=> nav.push(props.data.link)}
                  className="w-fit flex gap-[10px] items-center bg-velion-700 rounded-full px-[20px]  py-[8px] text-white text-[1em] capitalize">
                    LEARN MORE
                    <i className="fas fa-arrow-right" />
                </button>
                
                <i onClick={()=> nav.push(props.data.link)} className="fas fa-arrow-circle-right text-velion-700 text-[1.5em] lg:text-[2.5em]"/>
                
           
            </span>
        </div>
    )
}