import React from 'react';
import Image from 'next/image';

const Section = () => {
  return (
<section className="overflow-hidden bg-[#1d1d2c] py-32 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
      Let’s create a graph of people that love graphs
      </h2>

      <p className="hidden text-white/90 md:mt-4 md:block">
      We’re just getting started, so this is a landing spot for people that want to share their passion for graphs and networks. You might be a researcher, developer, data scientist, journalist, or perhaps you just enjoy a good graph story. Our goal is to share resources and highlight people with graph talent.
      </p>

     
    </div>
  </div>

  <Image
    alt=""
    src="/assets/images/Graph-Books.jpeg"
    className="h-56 w-full rounded-full object-cover sm:h-full"
    height={400}
    width={400}
  />
</section>
  )
}

export default Section