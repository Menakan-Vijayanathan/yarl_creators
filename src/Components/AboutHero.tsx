import React from 'react';
import { Users, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'A Team of 100+',
    description: 'Media & Marketing Experts'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: 'Driving Growth for',
    description: '5,000+ Brands & 500+ Agencies'
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: 'A Great Place to Work®',
    description: 'Certified Company'
  }
];

export function AboutHero() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#15171B] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000" 
              alt="Yarl Creation Office" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              We are a Yarl Creation Company!
            </h1>
            <p className="text-gray-400 text-lg">
              Yarl Creation empowers brands to unlock their growth potential on major platforms, such as Facebook, Instagram, YouTube and LinkedIn. As a platform services company, we offer a suite of solutions designed to accelerate business growth and ensure success in the digital economy.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-[#15171B] p-6 rounded-xl">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}