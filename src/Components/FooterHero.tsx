import React from 'react';
import { User2 } from 'lucide-react';

const FooterHero = () => {
  return (
    <div className="relative bg-[#FFE81A] rounded-3xl overflow-hidden p-12">
      {/* Content Container */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight mb-8">
          Let's create content that connects you with your audience.
        </h1>
        
        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <User2 className="w-5 h-5" />
          </div>
          Book a Call with Gazy
        </button>
      </div>

      {/* Particle Effect Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.15) 2px, transparent 2px)',
              backgroundSize: '24px 24px',
              transform: 'rotate(5deg) scale(1.2)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterHero;