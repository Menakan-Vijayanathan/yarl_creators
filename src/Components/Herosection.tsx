import React from 'react';

const HeroSection = () => {
  return (
    <div className="md:flex items-center pt-16 pb-20 max-w-screen-xl mx-auto bg-black">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-[#fdee36] font-extrabold">Breakthrough Content:</span>
          <span className="block mt-2">Tailored for Every</span>
          <span className="block">Platform</span>
        </h1>
        <div className="mt-12">
          <button className="flex items-center space-x-3 px-6 py-4 bg-[#FFE600] text-black rounded-full hover:bg-[#fff176] transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Book a Call with Gazy</span>
          </button>
          <p className="text-gray-400 mt-3 text-sm">Limited slots available.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Placeholder for Image */}
      </div>
    </div>
  );
};

export default HeroSection;
