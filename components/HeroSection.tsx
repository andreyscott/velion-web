import { TypewriterEffectDemo } from "./HeroSection/typewriter";

const HeroSection = () => {
    return ( 
      <section
        className="relative w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>
      
        <div
          className=" mx-auto w-full px-4 pt-8 pb-16 sm:px-6 lg:flex lg:h-screen  justify-centerlg:items-center "
        >
            
            <TypewriterEffectDemo />
      



        </div>
       
      </section>
    );
}

export default HeroSection;