import React from 'react';

import HeroStats from '../Components/Firstsection';
import Features from '../Components/Features';
import ContentShowcase from '../Components/Contentshowcase';
import Videos from '../Components/Videos';
import Comparison from '../Components/Comparission';
import Brand from '../Components/Brand';
import { Review } from '../Components/Review';
import FAQ from '../Components/FAQ';
import Hero from '../Components/Herosection';
import PlatformsSection from '../Components/Plateform';
import FooterHero from '../Components/FooterHero';



const HomePage: React.FC = () => {
  return (
    <div > {/* Add padding to prevent content overlap */}

      <Hero/>
      <PlatformsSection/>
      <HeroStats />
      <Features />
      <ContentShowcase />
      <Videos />
      <Comparison />
      <Brand />
      <Review/>
      <FAQ/>
      <FooterHero/>
     
    </div>
  );
};

export default HomePage;
