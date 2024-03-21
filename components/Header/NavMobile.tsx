"use client"
import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import  {useRouter} from 'next/navigation'

// import data
import { nav } from '../../data';

// ({ title, score }: { title: string, score: number })



// interface NavMobileProps {
//   navMobile: boolean;
// }
// create the right interface for the props you are passing in
interface NavMobileProps {
  navMobile: boolean;
}

 const NavMobile = (
  { navMobile }: NavMobileProps
 ) => {
  
  const router = useRouter()
  const [showLinks, setShowLinks] = useState(false)

  const handleNavClick = async (link: string) => {
    await router.push(`/${link}`)
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  // add an onClick dropdown menu

 const [active, setActive] = React.useState(false);
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
    <nav
      className={`${
        navMobile ? 'min-h-screen bg-black' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-velion-700 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
    
      <div className='py-20 flex flex-col h-full pt-16 bottom-1/2 bg-violet-400 justify-around items-start w-full px-4 '>
      <div>

      </div>

      <div>
1
      </div>
      <div>
1
      </div>
      <div>
1
      </div>

</div>
     

      {/* </div> */}

    </nav>
  );
};

export default NavMobile;
