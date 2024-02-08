import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import VisionMission from '../component/VisionMission';
import Team from '../component/Team';
import ContactButton from '../component/ContactButton';


export default function AboutUs() {
  
  return (
    <main className="bg-white md:bg-purple-900 dark:bg-black w-full h-screen md:h-auto">
      <Navbar />
      <VisionMission/>
      <hr className='mx-[400px]'/>
      <Team/>
      <ContactButton />
      <hr className='border-solid border-[5px] border-purple-950'/>
      <Footer />
    </main>
  )
}