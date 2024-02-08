import React from 'react'

const ContactButton = () => {
  return (
    <div className='w-full h-[200px] bg-gray-300 flex justify-center items-center'>
        <div className='text-center max-md:space-y-5 md:grid grid-cols-2 items-center'>
          <div className='text-5xl font-bold'>
              <p>Share your thought</p>
          </div>
          <div>
            <a href="/contact" className="inline-flex space-x-3  items-center rounded-full bg-purple-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 break-normal">
              <p className=''>Contact Us</p>
                <svg className=" w-3 h-3  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>
    </div>
  )
}

export default ContactButton