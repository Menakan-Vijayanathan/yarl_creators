import React from "react";
import { Link } from "react-router-dom";

const FooterHero = () => {
  return (
    <section className="relative flex justify-center items-center px-8 md:px-16 lg:px-24 bg-[#1C1F26]">
      {/* Background Blending Effect */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-black"></div>

      <div className="relative bg-[#fdee36] rounded-2xl p-14 w-11/12 max-w-7xl flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section - Text and Profile */}
          <div className="text-left text-black flex-1">
            <h1 className="text-5xl font-bold leading-tight">
              Let's create content that connects you with your audience.
            </h1>
            <button className="mt-8 flex items-center space-x-3 bg-black text-white py-4 px-6 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with actual profile image
                alt="Gazy"
                className="w-10 h-10 rounded-full"
              />
              <Link to='/contact'>
              <span>Book a Call with Gazy</span>
              </Link>
            </button>
          </div>

          {/* Right Section - Banner Image */}
          <div className="hidden md:flex justify-end items-end flex-1">
            <img
              src="/network.png"
              alt="Banner"
              className="w-full max-w-xs rounded-lg" // Adjusted max-width
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterHero;
