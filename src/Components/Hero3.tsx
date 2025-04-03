import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Book as TiktokIcon, ShoppingBag } from 'lucide-react';

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

const Hero3: React.FC = () => {
  return (
    <div className="relative bg-[#1C1F26] text-white py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Quarter Circle Shadow in Top-Left Corner */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#fdee36] rounded-full blur-[128px] pointer-events-none opacity-40"></div>

      {/* Image Section */}
      <div className="w-full md:w-6/12 flex justify-center md:order-2">
        <img 
          src="/hero3.webp" 
          alt="Content Creation" 
          className="w-full max-w-md object-contain transform md:-rotate-6 scale-150"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-6/12 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-[#fdee36]">Unlock</span> Your <br />
          Content Potential with <span className="text-[#fdee36]">YARL Creation</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Get scalable, platform-specific content solutions tailored for you.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
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
          <button className="bg-[#fdee36] text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Book a Call with Gazy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
