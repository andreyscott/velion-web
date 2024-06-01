/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

export const Teams = () => {
  return (
    <section className='bg-[#1d1d2c] py-32 text-white/90  container  flex flex-col '>
        <p className='text-6xl 2xl:text-7xl  tracking-widest font-extralight'>
        Who’s behind this?
        </p>

        <div className='sm:grid  mt-12 sm:grid-cols-2'>
            {/* text  */}
            <div className=' text-xl font-light leading-6 tracking-wider'>
         <p>
         That would be us,  <br/>
         <span className=' font-normal tracking-widest'>
         Amy Hodler & Dennis Irorere.

         </span>
            </p>

<p className='pt-2'>

You can find me, Amy, <span> <a href='https://www.linkedin.com/in/amyhodler/' className='underline'>online</a>. </span>   I think of myself as an evangelist for graph analytics and responsible AI. I’m also the co-author of O’Reilly books on Graph Algorithms and Knowledge Graphs, as well as a contributor to the Routledge book on Massive Graph Analytics. 
<br />
<br />

Dennis is also <span > <a href='https://www.linkedin.com/in/dennis-irorere/' className='underline pb-1' >online</a>. </span> and passionate about graph analytics, knowledge graphs, and databases. He's committed to advancing the graph community, fostering best practices, and nurturing fellow graph enthusiasts.
<br />
<br />

We’re starting <span className='font-medium'> GraphGeeks</span> to bring together graph enthusiasts and highlight their work. 
</p>
            </div>

            <div className=' w-full flex justify-center items-center'>
              <div className='flex flex-col px-3'>

                <Image 
                src="/assets/images/Hodler-Headshot1.png"
                alt='headshot'
                width={150}
                height={400}
                
                />

                <button >
                    Connet Amy
                </button>

              </div>

              <div className='flex flex-col px-3'>

<Image 
src="/assets/images/Dennis_Portrait2.jpg"
alt='headshot'
width={150}
height={400}

/>

<button >
    Connet Dennis
</button>

</div>

            
            </div>


        </div>

    </section> 
  )
}
