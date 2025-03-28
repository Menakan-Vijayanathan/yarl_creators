import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, BookIcon as TiktokIcon } from 'lucide-react';

const ContentShowcase = () => {
  const contentTypes = [
    'TikTok Video', 'SEO Article', 'Google Display Ad', 'Instagram Story',
    '3D Animation Explainer', 'Amazon Product Video', 'LinkedIn Article', 
    'Facebook Ad', 'TikTok Video', 'SEO Article', 'Google Display Ad', 'Instagram Story',
  ];

  return (
    <div className="bg-[#000000] text-white py-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Container for both Image & Content */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          
          {/* Image Section (Single Image) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <img
                src="logo1.webp"
                alt="Content example"
                className="absolute top-0 left-0 w-full h-full object-cover -rotate-6 scale-110"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold mb-6 leading-[1.2]">
              Content that Captivates Across Platforms:
              <br />
              <span className="text-5xl font-bold text-[#fdee36]">
                Feeds, Reels, Ads, Blogs,<br />
                and More
              </span>
            </h2>
            <p className="text-gray-300 mb-6 text-xl">
              We specialize in producing platform-specific content.
            </p>
            <p className="text-gray-200 mb-8">
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

        </div>

        {/* Scrolling Content Types */}
        <div className="overflow-hidden mt-10">
          <div className="animate-scroll-horizontal flex gap-4">
            {[...contentTypes, ...contentTypes].map((type, index) => (
              <div
                key={index}
                className="flex-none bg-[#1E2128] px-6 py-3 rounded-lg text-gray-100 hover:text-[#23262E] hover:bg-[#fdee36] transition-all cursor-pointer"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentShowcase;
