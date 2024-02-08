'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

  
const HeroSection = () => {

    const images = [
        '/ngs.jpg',
        '/genomics.jpg',
        '/hero1.jfif',
        '/bioinformatics-article.jpg'
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

  return (

    <section className='relative px-6 pt-14 lg:px-8 w-full overflow-hidden bg-cover bg-center h-screen flex items-center justify-center' id='HeroSection'>
        <div className="relative mx-4 sm:mx-0 my-20 md:flex space-x-7 items-center align-center z-10" alt='Section Background' id='DisplayBackground'>
            
            <h1 className="text-2xl font-bold text-lime-400 md:text-6xl">
                <span className='text-5xl md:text-8xl text-white'>GENOMAC</span><br/>
                Research Hub
                <p className="m-0 pb-3  text-[10px] md:text-lg mb-20 italic leading-8 text-gray-300">
                Discovering new things, improving life...
                </p>
                
                <a href="/about-us" className="inline-flex space-x-3  items-center rounded-full bg-purple-900 px-8 py-3 text-xl font-semibold text-white shadow-sm hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 break-normal">
                    <p className=''>About Us</p>
                    <svg className=" w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>                   
                </a>
                    
                
            </h1>
            
            <div className="items-center justify-center gap-x-6 mx-10 mb-10 flex md:flex-row">
                <Image src="/hero.jfif" alt="Genomac Logo" width={400} height={50} className='rounded-xl max-md:hidden' />
                
                
            </div>
        </div>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-no-repeat bg-cover bg-center z-0 hero-bg' style={{backgroundImage: `url(${images[currentImage]})`}}></div>
        
    </section>
  )
}

export default HeroSection