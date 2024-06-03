// import { AuroraBackgroundDemo } from "@/components/Aurobackground";
import {Footer} from "@/components/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
// import { DropdownNav } from "@/components/dropdownNav";
// import { Industry } from "@/components/industries";

import bkg3 from '../public/assets/images/bkg3.jpg'
import { Involved } from "@/components/involved";
import Sponsor from "@/components/sponsors";
// import Section from "@/components/section2";
import { Teams } from "@/components/Teams";


export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
    
      <div className="bg-cover bg-center bg-no-repeat w-full h-full z-20" style={{     
     backgroundImage: `url(${bkg3.src})`,
      width: '100%',
      height: '80vh',
}}>
  
    <nav className="w-full">
      <Header />
      

    </nav>

    <HeroSection />
    {/* <Section /> */}
    <Involved />
    <Sponsor />
    <Teams />
    {/* <Industry /> */}
    <Footer />

    </div>



  
    {/* <Whatwedo /> */}
    {/* <AuroraBackgroundDemo /> */}
    {/* <DropdownNav /> */}
      

      
    </main>
  );
}
