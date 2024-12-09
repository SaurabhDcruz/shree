import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import './contact.css'

function Contact2() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}

export default Contact2;