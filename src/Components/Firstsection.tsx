import React from 'react';

interface StatItemProps {
  number: string;
  description: string;
}

const Hero: React.FC = () => {
  return (
    <div className="bg-[#1C1F26] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              We&apos;re a top-tier content production studio for the platform age
            </h1>
            <button className="bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Learn More
            </button>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              We create cutting-edge digital content at scale for global brands and agencies.
            </p>
            <p className="text-gray-300 text-lg">
              Our content is impeccably tailored for each platform we work with, resonating deeply with audiences in the places and formats that matter most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<StatItemProps> = ({ number, description }) => {
  return (
    <div className="bg-black rounded-3xl p-8 text-center">
      <div className="text-yellow-300 text-5xl md:text-6xl font-bold mb-4">{number}</div>
      <div className="text-gray-400 text-lg">{description}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-[#1C1F26] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem number="30,000+" description="content pieces produced" />
          <StatItem number="200Mn" description="global audiences reached" />
          <StatItem number="250+" description="clients worldwide" />
          <StatItem number="7" description="diverse markets" />
        </div>
      </div>
    </div>
  );
};

const HeroStats: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
    </div>
  );
};

export default HeroStats;
