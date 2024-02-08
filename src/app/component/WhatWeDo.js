import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  return (
    <div className='px-8 py-5 bg-white md:text-purple-950 text-sm' id='wwd'>
        <div className=''>
            <h1 className='font-bold text-3xl text-center mt-3 underline'>What We Do</h1>
            <div className='grid md:grid-cols-2 py-5 px-10 items-center justify-center gap-20'>
                <div className=' items-center hidden md:block'>
                    <Image
                        src='/UNIH.jpg' 
                        alt='Image'
                        className='float-right w-full h-full rounded-3xl' 
                        width={1000} 
                        height={1000}
                    />
                </div>
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl font-semibold text-purple-950 md:text-lime-400'>
                    Utilizing Nature to Improve Health
                    </h2>
                    <p className=''>
                        By exploring African medicinal plants and microbes, we proffer sustainable solutions to contemporary health challenges.<br/><br/>
                        Hence, we leverage natural sources using genomics and medicinal chemistry to discover new medicines and create sustainable cures or treatments (Herbs or biosynthetic) for existing and emerging diseases or infections. We provide all kinds of &quot;OMICS&quot; based services that suit customer&apos;s expectation at a discount rate, you can also collaborate with us on &quot;OMICS&quot; based research projects, e.g research paperwork and more.
                    </p>
                    <Link href='/projects'>
                        <button className='bg-purple-900 text-white py-3 px-9 mt-3 rounded-full'>
                            Learn more...
                        </button>
                    </Link>
                    
                </div>
            </div>

            <hr className=''/>

            <div className='grid md:grid-cols-2 py-5 px-10 items-center justify-center gap-20'>
                
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl font-semibold text-purple-950 md:text-lime-400'>
                    GEN&apos;OMICS  Programs
                    </h2>
                    <p className=''>
                    We offer bioinformatics programs such as training and workshops both online and offline including webinar, internship and much more.
                    </p>
                    <Link href='/courses'>
                        <button className='bg-purple-900 text-white py-3 px-9 mt-3 rounded-full'>
                            Learn more...
                        </button>
                    </Link>
                </div>
                <div className='items-center hidden md:block'>
                    <Image
                        src='/GENPRO.jpg' 
                        alt='Image'
                        className=' w-full h-full rounded-3xl' 
                        width={1000} 
                        height={50}
                    />
                </div>
            </div>

            <hr/>   

            <div className='grid md:grid-cols-2 py-5 px-10 items-center justify-center gap-20'>
                <div className=' items-center hidden md:block'>
                    <Image
                        src='/MODA.jpg' 
                        alt='Image'
                        className='float-right w-full h-full rounded-3xl bg-white' 
                        width={1000} 
                        height={50}
                    />
                </div>
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl font-semibold text-purple-950 md:text-lime-400'>
                    Multi-Omics Data Analysis and Research Collaboration
                    </h2>
                    <p className=''>
                    We provide all kinds of &quot;OMICS&quot; based services that suit customer&apos;s expectation at a discount rate, you can also collaborate with us on &quot;OMICS&quot; based research projects, e.g research paperwork and more.
                    </p>
                    <Link href='/publications'>
                        <button className='bg-purple-900 text-white py-3 px-9 mt-3 rounded-full'>
                            Learn more...
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default WhatWeDo