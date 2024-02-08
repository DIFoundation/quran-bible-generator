import React from 'react'
import Image from 'next/image'

const PubHero = () => {

  return (
    <div>
        <div className=''>
            <Image src='/do3.jpg' className='object-cover w-full h-[25em]' alt='Image' width={500} height={50}/>
        </div>
        <div className='absolute top-20 max-md:flex flex-col justify-center items-center md:top-40 md:left-60'>
          <h1 className='font-bold text-4xl text-white leading-relaxed font-[Mochiy Pop One]'>
            Explore Some of our <br/>Student&apos;s  Research <br/>Projects and Publications
          </h1>
          <p className='font-bold bg-purple-700 text-xl px-5 py-3 italic text-white border-4'>
            Led, Mentored and Guided by Our Team of Expert 
          </p>
        </div>
          <div>
            
          </div>
        </div>
  )
}

export default PubHero