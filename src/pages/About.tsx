import React, { useEffect } from 'react';

import HeroContentSection from '../Components/HeroSection2';
import { Team } from '../Components/Team';
import { AboutHero } from '../Components/AboutHero';
import Brand from '../Components/Brand';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <HeroContentSection />
      <Brand />
      <Team />
      <AboutHero />
    </div>
  );
};

export default About;
