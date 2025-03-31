import React from 'react';

const ContentSection = () => {
  return (
    <div className="bg-black text-white py-20">
      {/* Image Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-7xl p-6 aspect-square">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <img 
                src="banner3.webp" 
                alt="Radiate Italian Luxury" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-yellow-300">Radiate Italian Luxury</h3>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">
          <p className="text-lg text-gray-300">
            Founded in 2014, our journey began as a media platform dedicated to curating impactful content across multiple channels for the South Asian audience in 5 languages. From thought-provoking documentaries shedding light on hidden realities to captivating animations, infographics, and in-depth articles, we approached every content format with a creative storytelling approach.
          </p>
          
          <p className="text-lg text-gray-300">
            We have evolved from a media platform into a top-tier content production studio, bringing a decade of experience. Our team excels in best practices for every major platform and specializes in creating platform-specific content for global brands and agencies at scale, across diverse formats such as captivating social media graphics, dynamic Instagram Reels, and compelling animation explainers.
          </p>

          <button className="bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-colors mt-8">
            Meet the Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;