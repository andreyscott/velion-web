import Image from "next/image"
import React from 'react'

const Sponsor = () => {
  return (
          <div className="bg-white pt-24 sm:pt-32  rounded-tl-3xl ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Sponsors & Partners
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
               
                 {/* new  */}

                 <Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/tecton-color.png"
                  alt="tenogo"
                  width={158}
                  height={48}
                />
                {/* 2 */}
                <Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/wandb.png"
                  alt="wan b"
                  width={158}
                  height={48}
                />

<Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/quantunblack.png"
                  alt="Quntum b"
                  width={158}
                  height={48}
                />

<Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/aws-logo.png"
                  alt="a ws "
                  width={158}
                  height={48}
                />

<Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/nvidia.png"
                  alt="nvidia"
                  width={158}
                  height={48}
                />

<Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://mlops.community/wp-content/themes/mlops/assets/img/zilliz.jpg"
                  alt="zilliz"
                  width={158}
                  height={48}
                />
               
               {/* old  */}
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />


              

                
              </div>
            </div>

            {/* background-color: #1f0815;
    background-image: linear-gradient(91deg,rgba(34,34,74,.5),rgba(195,48,130,.3)) */}
            <div className="mx-auto flex items-center justify-center max-w-7xl py-32 mt-10 
            bg-gradient-to-tr from-[#1f0815] to-[#c33082] rounded-tr-3xl text-white shadow-lg px-6 lg:px-8
            ">

                <p className='text-md font-mono xl:text-lg tracking-wide text-center max-w-lg'>

                We’re just getting started, so this is a landing spot for people that want to share their passion for graphs and networks. You might be a researcher, developer, data scientist, journalist, or perhaps you just enjoy a good graph story. Our goal is to share resources and highlight people with graph talent. We’re looking for sponsors and partners that want to help us grow and reach more people. If you’re interested in supporting us, please get in touch. We’d love to hear from you.


                    </p>

            </div>
          </div>

      
  )
}

export default Sponsor