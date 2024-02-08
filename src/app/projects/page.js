import React from 'react'
import RootLayout from '../layout'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ProHero from '../component/ProHero'
import Project from '../component/Project'

export default function Projects() {
  return (
    <RootLayout title={"Projects"}>
        <Navbar/>
        <hr className='border-8 border-purple-900'/>
        <ProHero/>
        <Project/>
       <Footer/>
    </RootLayout>
  )
}
