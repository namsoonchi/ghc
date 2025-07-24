import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Emergency from './components/Emergency';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Testimonials />
      <Emergency />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;