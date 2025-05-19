import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import SolutionSection from './components/SolutionSection'
import WhyChoose from './components/WhyChoose'
import Contact from './components/Contact'
import Information from './components/Information'
import CustomerReview from './components/CustomerReview'


export default function App () {
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <Features/>
      <SolutionSection/>
      <WhyChoose/>
      <Contact/>
      <Information/>
      <CustomerReview/>
    </div>
  )
}

