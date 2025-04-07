import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-black text-white pt-32 pb-12 px-6 md:px-12 lg:px-24 
      flex flex-col md:flex-row items-center justify-between overflow-hidden max-w-screen-2xl mx-auto">
      
      {/* Quarter Circle Shadow in Top-Left Corner */}
      <div className="shadow-circle absolute top-0 left-0 w-36 h-36 md:w-64 md:h-64 
        bg-[#424023] rounded-br-full opacity-40"></div>

      {/* Image Section (No Changes) */}
      <div className="w-full md:w-4/12 flex justify-center md:order-2 relative">
        <img 
          src="/banner.webp" 
          alt="Banner" 
          className="w-full object-contain max-w-md md:max-w-full transform -rotate-12 scale-150 md:scale-175 relative z-10"
        />
      </div>

      {/* Content Section (Aligned with Navbar Width) */}
      <div className="w-full md:w-8/12 flex flex-col justify-center text-center md:text-left relative z-20 pl-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
          <span className="text-[#fdee36] font-bold">Breakthrough Content:</span>
          <span className="block mt-2">Tailored for Every Platform</span>
        </h2>
        <div className="mt-6">


<button className="bg-[#fdee36] text-black font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_6px_#fdee36] -translate-y-2">
  <Link to="/contact" className="flex items-center space-x-3">
    <img
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="Gazy"
      className="w-10 h-10 rounded-full"
    />
    <span>Book a Call with Gazy</span>
  </Link>
</button>

          <p className="text-gray-400 mt-3 text-sm">Limited slots available.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
