'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const navbar = [
  { name: 'Home', link: '/' },
  { name: 'Research',
    dropdown: [
      { name: 'Publications', link: '/publications' },
      { name: 'Projects', link: '/projects' },
    ], isOpen: false,
  },
  { name: 'Services',
    dropdown: [
      { name: 'Bioinformatics & Data Analysis', link: '/bioinformatics' },
      { name: 'Reasearch Project Services', link: '/' },
      { name: 'General Service', link: '/' },
    ], isOpen: false,
  },
  { name: 'Education',
    dropdown: [
      { name: 'Courses', link: '/'},
      { name: 'Coaching', link: '/'},
      { name: 'Infectious Genomics', link: '/'},
      { name: 'Internship', link: '/'},
      { name: 'Webinar Series', link: '/'},
      { name: 'Remote Internship', link: '/'},
      { name: 'Scholarship', link: '/'},
      { name: 'Bio Workshop', link: '/'},
    ], isOpen: false,
  },
  { name: 'Contact', link: '/contact' },
];

function Navbar() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const toggleDropdown = (index) => {
    const updatedNavbar = [...navbar];
    updatedNavbar[index].isOpen = !updatedNavbar[index].isOpen;
    updatedNavbar.forEach((item, i) => {
      if (i !== index) {
        item.isOpen = false;
      }
    });
    setNavbar(updatedNavbar);
  };

  const setNavbar = (updatedNavbar) => {
    // Additional logic for updating the navbar state if needed
    setOpenNavBar(!openNavBar);
    
  };

  return (
    <header className='relative shadow-md w-full top-0 left-0 text-sm z-20'>
      <nav className='md:flex md:items-center px-10 bg-white my-0 w-full h-[70px] py-2 z-30'>
            <a href='/' className=''>
                <div className='font-[Poppins]'>
                    <Image
                    src='/genomac.png'
                    alt='Genomac Logo'
                    className='block md:hidden pt-2 absolute z-20'
                    width={40}
                    height={40}
                    />
                    <Image
                    src='/genomacHubRemove.png'
                    alt='Genomac Logo'
                    className='hidden md:block'
                    width={150}
                    height={70}
                    />
                </div>
            </a>
            <button
            type="button"
            className='text-3xl absolute right-10 top-7 cursor-pointer z-20 md:hidden'
            onClick={() => setOpenNavBar(!openNavBar)}
            >
            <span className='sr-only'>Open Main Menu</span>
            {openNavBar ? (
                <svg
                className="w-6 h-6 text-purple-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
                </svg>
            ) : (
                <svg
                className={`w-6 h-6 text-purple-900 dark:text-white ${
                    openNavBar ? 'close' : 'bars'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
            )}
            </button>

            <ul
            className={`max-md:absolute md:flex items-center md:justify-center md:space-x-1 overflow-hidden bg-white md:z-auto w-full max-md:text-center transition-all duration-500 ease-in-out ${
                openNavBar ? 'block' : 'hidden'
            } max-md:flex-col z-10 left-0 top-[4rem]`}
            >
            {navbar.map((item, index) => (
                <li key={index} className='lg:text-xl font-semibold  flex items-center justify-center'>
                {item.dropdown ? (
                    <div className='lg:mx-1'>
                    <button onClick={() => toggleDropdown(index)} className='flex items-center mb-1 md:my-3 px-10 py-3 md:px-3 md:py-1 gap-2 lg:gap-3 rounded-md hover:text-purple-950 hover:bg-purple-300 transition duration-300 ease-in-out'>
                        {item.name} <span>
                            <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                            </svg>
                        </span>
                    </button>
                    {item.isOpen && (
                        <div className='absolute bg-white text-sm  flex flex-col items-center rounded-md text-center ring-2'>
                        {item.dropdown.map((subItem, subIndex) => (
                            <a key={subIndex} href={subItem.link} className='py-2 px-5 w-full rounded-md ring-purple-900 hover:text-purple-950 hover:bg-purple-300 transition duration-300 ease-in-out'>
                            {subItem.name}
                            </a>
                        ))}
                        </div>
                    )}
                    </div>
                ) : (
                    <a href={item.link} className='lg:mx-1 px-16 py-3 mb-1 md:px-3 md:py-1 rounded-md hover:text-purple-950 hover:bg-purple-300 transition duration-300 ease-in-out'>{item.name}</a>
                )}
                </li>
            ))}
            <button
                type='button'
                className='bg-purple-800 px-20 py-3 md:px-6 md:py-2 rounded text-[20px] font-bold text-white md:ml-8 hover:bg-purple-500 duration-500 mb-8 md:mb-0 md:hidden'
            >
                <a href='/#HeroSection'>Get Started</a>
            </button>
            </ul>

        <a
          href="/#wwd"
          className="w-[30%] items-center text-center rounded-2xl bg-purple-900 px-5 py-3 lg:text-xl font-semibold text-white shadow-sm hover:text-purple-950 hover:bg-purple-300 transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 break-normal hidden md:block">
          <p className=''>Get Started</p>
        </a>
      </nav>

      {/* {navbar[1].isOpen && (
        <div className='bg-gray-500'>
          <div className='py-1'>
            {navbar[1].dropdown.map((subItem, subIndex) => (
              <a key={subIndex} href={subItem.link}>
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {navbar[2].isOpen && (
        <div className='bg-gray-500'>
          <div className='py-1'>
            {navbar[2].dropdown.map((subItem, subIndex) => (
              <a key={subIndex} href={subItem.link}>
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Navbar;
