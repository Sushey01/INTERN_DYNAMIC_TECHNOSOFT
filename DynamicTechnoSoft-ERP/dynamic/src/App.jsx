import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import SolutionSection from './components/SolutionSection';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Information from './components/Information';
import CustomerReview from './components/CustomerReview';
import Schedule from './components/Schedule';
import Frequently from './components/Frequently';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar />

      {/* Wrap each section in a div with a unique `id` */}
      <div id="about">
        <AboutSection />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="solutions">
        <SolutionSection />
      </div>

      <div id="why">
        <WhyChoose />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="info">
        <Information />
      </div>

      <div id="reviews">
        <CustomerReview />
      </div>

      <div id="schedule">
        <Schedule />
      </div>

      <div id="faq">
        <Frequently />
      </div>

      <div id="carousel">
        <Carousel />
      </div>

      <Footer />
    </div>
  );
}
