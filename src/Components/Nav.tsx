import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "bg-[#0F1115] shadow-lg" : "bg-transparent"
      } transition-all duration-300 rounded-b-2xl mt-3 px-6 py-5 md:px-8 max-w-screen-xl mx-auto z-50`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="AgroPlus.png" className="w-60 z-50" />

        {/* Centered Links */}
        <div className="hidden md:flex items-center space-x-10 mx-auto">
          <a href="#" className="text-gray-500 hover:text-[#FFE600] transition-colors text-base">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FFE600] transition-colors text-base">
            Solutions
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FFE600] transition-colors text-base">
            Pricing
          </a>
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
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Pricing
            </a>
            <button className="px-5 py-3 bg-[#FFE600] text-black font-medium rounded-full hover:bg-[#fff176] transition-colors text-sm">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
