
"use client"

/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';

import motion from 'framer-motion'
import Velion from '@/public/assets/images/GraphGeeks-Logo-White.png'
import VelionBlack from '@/public/assets/svgs/bkg3 (1).jpg'

// import header data
import { header } from '../../data';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';


// import icons
import Link from 'next/link';
import { MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { NavigationMenuDemo } from '../Navbar';



const Header = ( ) => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { logo, logow  } = header;
  return (
    <header
      className={` sticky bg-transparent top-0 left-0 right-0 mx-auto flex justify-between items-center px-4 z-30 transition-all duration-700`}
    >
   
    {/* className='bg-white bg-cover bg-no-repeat py-4 md:py-5 mx-auto flex justify-between items-center px-[20px] lg:px-[60px] z-30 transition-all duration-300 */}
      {/* logo */}
      <div className='w-full  flex justify-between'>

      <Link className='pt-6 ml-6' href='/'>
          <Image 
        className='h-[60px] w-full object-contain' 
        src={navMobile ? VelionBlack : Velion }
        width={navMobile ? 100 : 300}
        height={navMobile ? 100 : 200}
        
        alt='logo' />

        
      </Link>


      {/* nav - initially hidden - show in desktop mode */}
      {/* <Nav /> */}
      <NavigationMenuDemo />

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className='flex justify-center items-center h-full lg:hidden absolute right-4 duration-1000 ease-in-out '
      >
        {navMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className='text-3xl w-10 h-10 text-white hover:text-accenty  duration-300 ease-in-out cursor-pointer' >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> 

        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-7 h-7 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg> 
          
         
        )}
      </div>
      </div>


      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;