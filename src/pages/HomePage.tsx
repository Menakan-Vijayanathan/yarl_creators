import React from 'react';
import Nav from '../Components/Nav';
import HeroStats from '../Components/Firstsection';
import Features from '../Components/Features';
import ContentShowcase from '../Components/Contentshowcase';
import Videos from '../Components/Videos';
import Comparison from '../Components/Comparission';
import Brand from '../Components/Brand';
import { Review } from '../Components/Review';
import FAQ from '../Components/FAQ';


const HomePage: React.FC = () => {
  return (
    <div > {/* Add padding to prevent content overlap */}
      <Nav />
      
      <HeroStats />
      <Features />
      <ContentShowcase />
      <Videos />
      <Comparison />
      <Brand />
      <Review/>
      <FAQ/>
    </div>
  );
};

export default HomePage;
