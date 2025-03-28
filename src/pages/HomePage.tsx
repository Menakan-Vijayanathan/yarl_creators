import React from 'react';
import Nav from '../Components/Nav';
import HeroStats from '../Components/Firstsection';
import Features from '../Components/Features';
import ContentShowcase from '../Components/Contentshowcase';
import Videos from '../Components/Videos';
import Comparison from '../Components/Comparission';

const HomePage: React.FC = () => {
  return <div>

    <Nav/>
    <HeroStats/>
    <Features/>
    <ContentShowcase/>
    <Videos/>
    <Comparison/>


  </div>;
};

export default HomePage;
