"use client"
import { useRouter } from 'next/navigation';

import React,{useEffect, useState} from 'react';
import Link from 'next/link';



import { nav } from '../../data';


export default function Nav() {

  const router = useRouter();
  
  const [showLinks, setShowLinks] = useState(false)



  const handleNavClick = async (link: string) => {
    await router.push(`/${link}`)
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  // controlling navbar hover elements to show popup
  const [hovered, setHovered] = useState<string | null>(null)

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <nav className='hidden lg:flex'>
      <ul

       className='flex gap-x-1 h-full items-center justify-center text-white'>
        {nav.map((item, idx) => {
          return (
            <li
            
            className='h-full hover:bg-black text-center w-28'
            key={idx}
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered(null)}
            >
              <Link href={item.link} 
              className={`text-white flex justify-center items-center hover:bg-black w-full h-full transition duration-500 ease-out`}
              >
                {item.title}
              </Link>

              {hovered == item.title && item.additionalLinks && (
                        <div className="absolute flex flex-col min-w-28 -mt-3 items-center justify-center bg-black transition-all ease-in-out duration-1000 rounded-sm ">
                          <div className="flex flex-col items-center justify-center text-white truncate ">
                            {item.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() =>  { 
                                    if (router) {
                                      router.push(adLink.link);
                                    } 
                                    // router.push(adLink.link)
                                  }}
                                  className="w-full pt-2 pb-2 text-sm opacity-100 hover:text-white/80 semibold md:text-md hover:bg-black hover:text-white "
                                  key={adLink.title}
                                >
                                  <div className="mx-2">{adLink.title}</div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};