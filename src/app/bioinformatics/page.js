import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import Serviceflow1 from '../component/Serviceflow1';
import Bioinformatics from '../component/Bioinformatics';
import RootLayout from '../layout';

export default function Services() {
  return (
    <RootLayout title={"Services"}>
        <Navbar />
        {/* <Serviceflow1 /> */}
        <Bioinformatics/>
        <Footer />
    </RootLayout>
  )
}
