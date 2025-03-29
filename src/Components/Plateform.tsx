import React from 'react';

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

const Platforms = () => {
  return (
    <div className="w-full bg-[#0F1115] py-6 overflow-hidden">
      <div className="text-sm text-gray-400 px-8 md:px-16 mb-4">PLATFORMS WE EXCEL IN</div>
      <div className="relative">
        <div className="flex space-x-16 animate-scroll-horizontal">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex items-center cursor-pointer transition-all group"
            >
              <div className="text-gray-700 text-3xl ml-2 group-hover:text-white transition-colors">
                {platform.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
