import React from 'react';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';
import Destinations from '../components/Destinations';
import CTASection from '../components/CTASection'; 

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Destinations />
      <CTASection />
    </div>
  );
};

export default HomePage;