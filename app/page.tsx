import HeroSection from "@/components/HeroSection";
import { NavigationMenuDemo } from "@/components/Navbar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
// import { NavigationMenuDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-full bg-green-600 flex-col items-center justify-between">
    {/* <NavigationMenuDemo /> */}
    {/* <NavigationMenu /> */}
    <nav className="w-full">

    <NavigationMenuDemo />
    </nav>

    <HeroSection /> 
      

      
    </main>
  );
}
