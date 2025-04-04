import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, BookIcon as TiktokIcon } from 'lucide-react';

const ContentShowcase = () => {
  return (
    <div className="bg-[#000000] text-white py-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Content Section - Takes Half Width */}
        <div className="w-full md:w-1/2 text-center md:text-left pr-6">
          <h2 className="text-5xl font-bold mb-6 leading-[1.2]">
            Content that Captivates Across Platforms:<br/>
            <span className="text-5xl font-bold text-[#fdee36]">
              Feeds, Reels, Ads, Blogs, and More
            </span>
          </h2>
          <p className="text-gray-300 mb-6 text-xl">
            We specialize in producing platform-specific content.
          </p>
          <p className="text-gray-200 pb-8">
            From engaging social media graphics to dynamic IG Reels and compelling
            animation explainers, our content resonates deeply with global audiences across
            all channels.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <Facebook className="w-6 h-6 text-gray-200 hover:text-[#fdee36] transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-200 hover:text-[#fdee36] transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-200 hover:text-[#fdee36] transition-colors cursor-pointer" />
            <Youtube className="w-6 h-6 text-gray-200 hover:text-[#fdee36] transition-colors cursor-pointer" />
            <TiktokIcon className="w-6 h-6 text-gray-200 hover:text-[#fdee36] transition-colors cursor-pointer" />
          </div>
          <button className="bg-[#fdee36] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=32&h=32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            Book a Call with Gazy
          </button>
        </div>

        {/* Image Section - Square Box in Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[600px] h-[600px] bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
            <img
              src="logo1.jpg"
              alt="Content example"
              className="w-full h-full object-cover  transform -rotate-12 scale-[2] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
