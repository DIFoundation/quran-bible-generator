import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <div className='bg-gray-300 text-black text-center justify-center dark:bg-black dark:text-white'>
        <div className='mx-10 pt-10 md:text-left grid md:grid-cols-4 gap-x-4 '>
            {/* Contact and Social Media */}
            <div className='' >
                <h3 className='font-semibold'>Contact</h3>
                <div className='text-sm'>
                   <p>Castle of Mercy, Ogbomoso, Oyo state, Nigeria</p>
                   <p>+2348077191794</p>
                   <p>genomachub@gmail.com</p>
                   <Social/> 
                </div>
                <hr className='my-3 border-solid border-black dark:border-white md:hidden' />
            </div>
            
            {/* Unit and Services */}
            <div className=''>
                <h3 className='font-semibold'>Courses</h3>
                <ul className='text-sm'>
                    <li>Transcriptomics</li>
                    <li>Drug Design & Development</li>
                    <li>Microbial Genomics</li>
                    <li>Probiotics</li>
                    <li>Cancer Genomics</li>
                    <li>Biopython</li>
                </ul>
                <hr className='my-3 border-solid border-black dark:border-white md:hidden' />
            </div>
            
            {/* Studenship and training */}
            <div className=''>
                <h3 className=' font-semibold'>Training</h3>
                <ul className='text-sm'>
                    <li>Industrial Training</li>
                    <li>Internship</li>
                    <li>Hybrid Learning</li>
                    <li>Distace Learning</li>
                </ul>
                <hr className='my-3 border-solid border-black dark:border-white md:hidden' />
            </div>
            
            {/* Resources */}
            <div className=''>
                <h3 className='font-semibold'>Resources</h3>
                <ul className='text-sm'>
                    <li>Database</li>
                    <li>Tools & Software</li>
                    <li>Genome Browser</li>
                    <li>Annotation Resources</li>
                    <li>Research Paper</li>
                    <li>Networking</li>
                </ul>
            </div>
        </div>

        <p className='py-8 px-5 text-sm'>powered by Genomac Research Hub @ 2023 </p>
    </div>
  )
}

export default Footer