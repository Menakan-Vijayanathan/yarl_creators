import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
      {/* Quarter Circle Shadow in Top-Left Corner */}
      <div className="shadow-circle absolute top-0 left-0 w-36 h-36 md:w-64 md:h-64 bg-[#424023] rounded-br-full opacity-40"></div>

      {/* Image Section (Mobile: Top, Large Screen: Right) */}
      <div className="w-full md:w-1/2 flex justify-center md:order-2">
        <img 
          src="/banner.png" 
          alt="Banner" 
          className="w-full object-contain max-w-lg md:max-w-full transform -rotate-12 scale-105"
        />
      </div>

      {/* Content Section (Mobile: Bottom, Large Screen: Left) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-[#fdee36] font-extrabold">Breakthrough Content:</span>
          <span className="block mt-2">Tailored for Every</span>
          <span className="block">Platform</span>
        </h1>
        <div className="mt-8">
          <button className="flex items-center space-x-3 px-6 py-4 bg-[#FFE600] text-black rounded-full hover:bg-[#fff176] transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full "
            />
            <span className="font-medium">Book a Call with Gazy</span>
          </button>
          <p className="text-gray-400 mt-3 text-sm">Limited slots available.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
