import React from 'react';

const HeroContentSection = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden pt-20 flex flex-col items-center px-6 md:px-12 lg:px-24">
      {/* Yellow glow effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300 rounded-full blur-[150px] opacity-30" />

      {/* Hero Content */}
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          We're a <span className="text-yellow-300">top-tier</span> content production studio for the platform age
        </h1>
        <button className="bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-colors">
          Our Solutions
        </button>
      </div>

      {/* Full-Width Image */}
      <div className="container mx-auto my-16">
        <img src="banner3.webp" alt="Forest Lover" className="w-full h-24 rounded-lg object-cover" />
      </div>

      {/* Text Content */}
      <div className="container mx-auto max-w-4xl text-center py-10">
        <p className="text-lg text-gray-300 mb-6">
          Founded in 2014, our journey began as a media platform dedicated to curating impactful content across multiple channels for the South Asian audience in 5 languages. From thought-provoking documentaries shedding light on hidden realities to captivating animations, infographics, and in-depth articles, we approached every content format with a creative storytelling approach.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          We have evolved from a media platform into a top-tier content production studio, bringing a decade of experience. Our team excels in best practices for every major platform and specializes in creating platform-specific content for global brands and agencies at scale, across diverse formats such as captivating social media graphics, dynamic Instagram Reels, and compelling animation explainers.
        </p>
        <button className="bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-colors">
          Meet the Team
        </button>
      </div>
    </div>
  );
};

export default HeroContentSection;
