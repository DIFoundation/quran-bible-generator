'use client'
import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Training from './component/Training';
import Footer from './component/Footer';
import UserCounter from './component/UserCounter';
import ContactButton from './component/ContactButton';
import WhatWeDo from './component/WhatWeDo';
// import Test from './component/Test';

export default function Home() {
  
  return (
    <main className="bg-purple-900 dark:bg-black w-full h-screen md:h-auto">
      <Navbar />
      {/* <Test/> */}
      <HeroSection />
      <WhatWeDo/>
      <Training />
      <ContactButton />
      <UserCounter />
      <Footer />
    </main>
  )
}