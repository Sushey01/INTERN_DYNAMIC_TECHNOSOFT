import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import SolutionSection from './components/SolutionSection'
import WhyChoose from './components/WhyChoose'


export default function App () {
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <Features/>
      <SolutionSection/>
      <WhyChoose/>
    </div>
  )
}

