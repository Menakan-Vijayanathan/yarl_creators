import React from 'react';

import HeroContentSection from '../Components/HeroSection2';
import { Team } from '../Components/Team';
import { AboutHero } from '../Components/AboutHero';



const About: React.FC = () => {
  return (
    <div > 
     <HeroContentSection/>
     <Team/>
     <AboutHero/>
     
    </div>
  );
};

export default About;
