import { AuroraBackgroundDemo } from "@/components/Aurobackground";
import {Footer} from "@/components/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
// import { DropdownNav } from "@/components/dropdownNav";
import { Industry } from "@/components/industries";
import { HeroParallaxDemo } from "@/components/parallax-homepage/Heroparallax";
import { Whatwedo } from "@/components/whatwedo";
// import RootLayoutInner from "@/components/Headermain.jsx"

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
    <nav className="w-full">
      <Header />
      

            {/* <RootLayoutInner>

            </RootLayoutInner> */}

      
      

    </nav>

    <HeroSection />
    <HeroParallaxDemo />
    <Whatwedo />
    <Industry />
    <AuroraBackgroundDemo />
    <Footer />
    {/* <DropdownNav /> */}
      

      
    </main>
  );
}
