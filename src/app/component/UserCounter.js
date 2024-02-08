import React from 'react'

const UserCounter = () => {
  return (
    <div className='px-10 md:bg-purple-900 '>
        <hr className='hidden md:block'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5 items-center justify-between text-center text-5xl font-bold text-purple-900 md:text-white'>

            <div className='my-3 md:my-10'>
                600k+ <br/>
                <span className='text-3xl'>STUDENTS</span>
            </div>

            <div className='my-3 md:my-10'>
                70+ <br/>
                <span className='text-3xl'>PRODUCTS</span>
            </div>
            <div className='my-3 md:my-10'>
                50+ <br/>
                <span className='text-3xl'>INSTRUCTORS</span>
            </div>
            <div className='my-3 md:my-10'>
                10+ <br/>
                <span className='text-3xl'>PARTNERS</span>
            </div>
        </div>
    </div>
    
  )
}

export default UserCounter