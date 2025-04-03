import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, BookIcon as TiktokIcon, ShoppingBag } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: <Facebook size={24} />, href: '#', label: 'Facebook' },
  { icon: <Instagram size={24} />, href: '#', label: 'Instagram' },
  { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube size={24} />, href: '#', label: 'YouTube' },
  { icon: <TiktokIcon size={24} />, href: '#', label: 'TikTok' },
  { icon: <ShoppingBag size={24} />, href: '#', label: 'Shop' },
];

export default function Hero3() {
  return (
    <div className="relative bg-black text-white py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
      {/* Quarter Circle Shadow */}
      <div className="shadow-circle absolute top-0 left-0 w-36 h-36 md:w-64 md:h-64 bg-[#424023] rounded-br-full opacity-40"></div>

      {/* Image Section */}
      <div className="w-full md:w-5/12 flex justify-center md:order-2">
        <img 
          src="/hero3.webp" 
          alt="Content Creation" 
          className="w-full object-contain max-w-md md:max-w-full transform -rotate-12 scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-[#fdee36] font-bold">Unlock</span> Your<br />
          Content Potential<br />
          with <span className="text-[#fdee36]">YARL Creation</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Get scalable, platform-specific content solutions tailored for you
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="flex items-center space-x-3 px-6 py-4 bg-[#FFE600] text-black rounded-full hover:bg-[#fff176] transition-colors">
            <span className="font-medium">Book a Call with Gazy</span>
          </button>
          <p className="text-gray-400 mt-3 text-sm">Limited slots available.</p>
        </div>
      </div>
    </div>
  );
}
