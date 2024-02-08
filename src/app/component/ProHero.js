import Image from 'next/image'
import React from 'react'

const ProHero = () => {
  return (
    <div>
        <div className='bg-purple-900 w-full'>
            <Image src='/vision.jpg' className='object-cover w-full h-[25em] opacity-50' alt='Image' width={500} height={50}/>
            <div className='flex flex-col items-center justify-center top-60 max-md:top-40 absolute'>
                <h1 className='text-5xl font-bold max-md:text-center text-lime-500'>HEALTH SOLUTIONS</h1>
                <p className='text-center font-semibold w-2/5 max-md:w-3/4 text-white'>Integrating creativity, innovation, and biotechnology to proffer sustainable solutions to contemporary health challenges using Bioinformatics, Artificial Intelligence, and Medicinal Chemistry. </p>
                <div>
                    <button type='button' className='font-semibold mt-5 py-3 px-20 text-purple-800 bg-white rounded-full hover:bg-purple-900 hover:text-purple-200'>
                        Explore Projects
                    </button>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default ProHero