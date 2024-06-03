import { TypewriterEffectDemo } from "./HeroSection/typewriter";

const HeroSection = () => {
    return ( 
      <section
        className="relative w-full "
      >
        
        <div
          className=" mx-auto w-full px-4 pt-8 pb-16 sm:px-6 lg:flex  justify-center lg:items-center "
        >

            
      
      <div className="mx-auto  py-16 w-full h-fit text-center flex flex-col justify-center items-center ">

        <h3 className="text-2xl font-bold font-mono leading-8 text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          We love graphs.
Do you?
          </h3>
          {/* paragraph text  */}
          <p className="text-lg font-mono text-white mt-4 max-w-3xl tracking-wider leading-6 ">
            We’re bringing together people that relish connected data, are willing to debate new approaches to understanding networks, and want to share tips in working with graphs.
            </p>
      </div>

        </div>
       
      </section>
    );
}

export default HeroSection;