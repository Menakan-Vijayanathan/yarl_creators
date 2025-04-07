import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './Components/Nav';
import Solution from './pages/Solution';
import Login from './pages/Backends/Login';
import Footer from './Components/Footer';
import Pricing from './pages/Backends/Pricing';
import FooterHero from './Components/FooterHero';
import PricingManager from './pages/Pricing';

import Contact from './Components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/pricing" element={<PricingManager />} />
        <Route path="/APricing" element={<Pricing />} />
      </Routes>
      <FooterHero/>
      <Footer/>
    </Router>
  );
};

export default App; 
