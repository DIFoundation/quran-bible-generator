import React from 'react';
import Image from 'next/image';

const VisionMission = () => {
  return (
    <div className='mx-10 my-5 px-10 md:text-white' id='VisionMission'>
        <div className='vision'>
            <h1 className='font-bold text-3xl text-center mt-3 underline'>Our Vision</h1>
            <div className='grid md:grid-cols-2 py-5 items-center justify-center gap-8'>
                <div className=' items-center hidden md:block'>
                    <Image
                        src='/vision.jpg' 
                        alt='Image'
                        className='float-right w-full h-full rounded-3xl' 
                        width={200} 
                        height={50}
                    />
                </div>
                <div className='text-center md:text-left'>
                    <h2 className='text-lg font-semibold text-purple-950 md:text-lime-400'>
                    We Seek to make the world a better place.
                    </h2>
                    <p className=''>
                    To be a Powerhouse and Leading Platform for landmark achievements and research breakthroughs of global relevance, proffering sustainable and lasting solutions to contemporary global challenges through the application of Bioinformatics, Artificial Intelligence and medicinal chemistry.
                    </p>
                </div>
            </div>
        </div>
        
        <div className='mission'>
            <h1 className='font-bold text-3xl text-center mt-3 underline'>Our Mission</h1>
            <div className='grid md:grid-cols-2 py-5 items-center justify-center gap-8'>
                <div className=' items-center hidden md:block'>
                    <Image
                        src='/mission.jpg' 
                        alt='Image'
                        className='w-full h-full rounded-3xl' 
                        width={200} 
                        height={50}
                    />
                </div>
                <div className='text-center md:text-right row-start-1'>
                    <h2 className='text-lg font-semibold text-purple-950 md:text-lime-400'>
                    We Seek to make the world a better place.
                    </h2>
                    <p className=''>
                    To be a Powerhouse and Leading Platform for landmark achievements and research breakthroughs of global relevance, proffering sustainable and lasting solutions to contemporary global challenges through the application of Bioinformatics, Artificial Intelligence and medicinal chemistry.
                    </p>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default VisionMission