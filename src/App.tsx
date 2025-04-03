import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './Components/Nav';
import Solution from './pages/Solution';
import Login from './pages/Backends/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </Router>
  );
};

export default App; 
