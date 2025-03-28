import React from 'react';
import Nav from '../Components/Nav';
import HeroStats from '../Components/Firstsection';
import Features from '../Components/Features';
import ContentShowcase from '../Components/Contentshowcase';

const HomePage: React.FC = () => {
  return <div>

    <Nav/>
    <HeroStats/>
    <Features/>
    <ContentShowcase/>
  </div>;
};

export default HomePage;
