import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const platforms = [
    { name: 'LinkedIn', logo: '/linkedin.svg' },
    { name: 'Facebook', logo: '/facebook.svg' },
    { name: 'Instagram', logo: '/instagram.svg' },
    { name: 'Shopify', logo: '/shopify.svg' },
    { name: 'TikTok', logo: '/tiktok.svg' },
    { name: 'Google', logo: '/google.svg' },
    { name: 'YouTube', logo: '/youtube.svg' },
    { name: 'Amazon', logo: '/amazon.svg' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Background Image Section */}
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(banner1.png)' }}>
        <div className="relative z-10">
          {/* Navigation Bar */}
          <div className="px-8 py-2 md:px-12 lg:px-16">
            <nav className="relative bg-[#0F1115] rounded-2xl px-6 py-5 md:px-8 max-w-screen-xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="/roar-logo.svg" alt="Roar Media" className="h-8" />
                </div>

                {/* Centered Links */}
                <div className="hidden md:flex items-center space-x-10 mx-auto">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Solutions</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Get in Touch Button */}
                <div className="hidden md:flex ml-auto">
                  <button className="px-5 py-3 bg-[#FFE600] text-black font-medium rounded-full hover:bg-[#fff176] transition-colors text-sm">
                    Get in Touch
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#0F1115] p-4 mt-2 rounded-2xl md:hidden max-w-screen-sm mx-auto">
                  <div className="flex flex-col space-y-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Solutions</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
                    <button className="px-5 py-3 bg-[#FFE600] text-black font-medium rounded-full hover:bg-[#fff176] transition-colors text-sm">
                      Get in Touch
                    </button>
                  </div>
                </div>
              )}
            </nav>
          </div>

          {/* Hero Section */}
          <div className="md:flex items-center pt-16 pb-20 max-w-screen-xl mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
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

            {/* Image Placeholder (if needed) */}
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
              {/* Image is now part of background */}
            </div>
          </div>

{/* Platforms Section */}
<div className="w-full bg-[#0F1115] py-6 overflow-hidden">
  <div className="text-sm text-gray-400 px-8 md:px-16 mb-4">PLATFORMS WE EXCEL IN</div>
  <div className="relative">
    <div className="flex space-x-16 animate-scroll-horizontal">
      {[...platforms, ...platforms].map((platform, index) => (
        <div
          key={`${platform.name}-${index}`}
          className="flex items-center cursor-pointer transition-all group"
        >
          {/* <img
            src={platform.logo}
            alt={platform.name}
            className=" h-6 opacity-50 group-hover:opacity-100 transition-opacity"
          /> */}
          <div className="text-gray-700 text-3xl ml-2 group-hover:text-white transition-colors">
            {platform.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default Nav;
