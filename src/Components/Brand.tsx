import React from 'react';

const brands = [
  { name: 'Group M', logo: 'pngegg.png' },
  { name: 'United Nations', logo: 'pngegg.png' },
  { name: 'Uber Eats', logo: 'pngegg.png' },
  { name: 'Dialog', logo: 'pngegg.png' },
  { name: 'Sri Lanka Tourism', logo: 'pngegg.png' },
  { name: 'World Bank', logo: 'pngegg.png' },
  { name: 'AXE', logo: 'pngegg.png' },
  { name: 'Following', logo: 'pngegg.png' },
];

const Brand = () => {
  return (
    <div className="p-6 md:p-16 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
            Trusted by 250+ Brands Globally
          </h1>
        </div>

        {/* Grid Layout with Reduced Height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-black flex items-center justify-center 
              p-4 transition-all duration-500 hover:bg-[#16181f] border border-gray-900 
              aspect-[3/1.5] w-full min-h-[75px] sm:min-h-[95px] md:min-h-[115px]"
            >
              <div className="relative z-10 w-3/4 sm:w-4/5 md:w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat filter brightness-0 invert"
                  style={{ backgroundImage: `url(${brand.logo})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
