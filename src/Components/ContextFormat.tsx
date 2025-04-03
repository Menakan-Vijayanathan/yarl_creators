import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FormatCard {
  title: string;
  description: string;
}

const formatCards: FormatCard[] = [
  {
    title: 'Instagram Reel',
    description: "Short, engaging videos tailored for Instagram's Reels feature, perfect for capturing attention in the feed.",
  },
  {
    title: 'TikTok Video',
    description: 'Trending, viral-worthy content optimized for TikTok\'s unique audience and algorithm.',
  },
  {
    title: 'SEO Article',
    description: 'Well-researched, keyword-optimized content that ranks well in search engines.',
  },
  {
    title: 'Google Display Ad',
    description: 'Eye-catching visual ads designed to perform well across the Google Display Network.',
  },
  {
    title: '2D Animation Explainer',
    description: 'Clear, engaging animated videos that explain complex concepts simply.',
  },
  {
    title: 'Facebook Carousel Ad',
    description: 'Multi-image ad formats that showcase your products or tell your brand story.',
  },
  {
    title: 'YouTube Short',
    description: 'Vertical, snappy videos optimized for YouTube\'s short-form content platform.',
  },
  {
    title: 'Facebook Cover Photo',
    description: 'Professional, branded cover images that make your Facebook page stand out.',
  },
  {
    title: 'Infographic',
    description: 'Visual representations of data and information that are easy to understand and share.',
  },
  {
    title: 'Instagram Carousel Ad',
    description: 'Swipeable ad content that engages users with multiple images or videos.',
  },
  {
    title: '3D Animation Explainer',
    description: 'Premium animated content that brings your message to life in three dimensions.',
  },
  {
    title: 'Amazon Product Video',
    description: 'Compelling product videos optimized for Amazon\'s marketplace.',
  },
  {
    title: 'LinkedIn Article',
    description: 'Professional, thought-leadership content tailored for the LinkedIn platform.',
  },
  {
    title: 'Shopify Banner',
    description: 'Converting e-commerce banners designed specifically for Shopify stores.',
  },
  {
    title: 'YouTube Banner Ad',
    description: 'Attention-grabbing banner ads formatted for YouTube\'s advertising spaces.',
  },
];

const ContentFormats = () => {
  const [expandedCard, setExpandedCard] = useState<string>('');

  return (
    <div className="relative min-h-screen bg-[#16181f] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Elevate Your Presence on Every Platform
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16">
          Discover our diverse range of content formats for every major platform - just tell us what you need.
        </p>

        {/* Grid of format cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formatCards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                expandedCard === card.title
                  ? 'bg-yellow-400 text-black'
                  : 'bg-black/40 hover:bg-black/60'
              }`}
            >
              <button
                onClick={() => setExpandedCard(expandedCard === card.title ? '' : card.title)}
                className="w-full p-6 text-left"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  {expandedCard === card.title ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
                {expandedCard === card.title && (
                  <p className="mt-4 text-black/80">{card.description}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentFormats;
