import React from 'react';
import Social from './Social';

const ContactForm = () => {
  return (

    <div className='bg-[url("/genomics.jpg")] bg-cover bg-no-repeat'>
      
      <div className='items-center text-center pb-10'>
        <div className='py-8 text-white'>
          <h1 className='font-semibold text-2xl'>
            Contact Us
          </h1>
          <h3> @ Genomac Research Hub For Inquiries or Questions</h3>
          
          <p>Please use the form or chat option below</p>
        </div>
        <div className='md:grid grid-cols-2 gap-3 mx-[70px] bg-purple-950 rounded-2xl'>
          {/* map of the location */}
          <div className='bg-gray-500 max-md:h-[300px] '>
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=castle%20of%20mercy,%20Stadium%20Baptist%20Church,%20212102,%20Ogbomoso.+(Genomac%20hub)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.maps.ie/population/">Population Estimator map</a>
            </iframe>
          </div>
          {/* form to fill  */}
          <div className=''>
            <form action="/submit" method="post" className='space-y-3 px-5 pt-10 pb-5'>
                          
              <input type="text" id="username" name="username" className='w-full  rounded-lg border border-none' placeholder='Name*' required />

              <input type='email' id='email' name='email' className='w-full  rounded-lg border border-none' placeholder='Email address*' required />

              <input type='text' id='country' name='country' className='w-full  rounded-lg border border-none' placeholder='Country*' required />
              
              <textarea type='text' id='message' rows={6} name='message' className='w-full rounded-lg border border-none' placeholder="You're welcome to tell us anything" required/>

              <label htmlFor="remember" className='text-white'>
                <input type="checkbox" className='rounded-full text-blue-900 border border-none' id="remember" name="remember"/> Subscribe to our Newsletter
              </label>
              <br />

              <button type='submit' className='text-purple-950 bg-white hover:bg-gray-300 hover:text-purple-800 py-2 px-10 mt-5 rounded-full font-bold'>Submit</button>
            </form>
            <div className='bg-gray-300 flex justify-center items-center py-5'>
              <p>or through our social media</p>
              <Social/>
            </div>
            
          </div>
        </div>
      
      </div>
    </div>
  
  )
}

export default ContactForm