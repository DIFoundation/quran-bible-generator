import React from 'react';
import Navbar from '../component/Navbar';
import PubHero from '../component/PubHero';
import PubPro from '../component/PubPro';
import RootLayout from '../layout';
import Footer from '../component/Footer';
import ContactButton from '../component/ContactButton';

export default function Publications() {

  return (
    <RootLayout title={"Publication"}>
      <Navbar />
      <PubHero/>
      <PubPro/>
      <ContactButton/>
      <hr className='border-8 border-purple-900'/>
      <Footer/>
    </RootLayout>
  )
}

