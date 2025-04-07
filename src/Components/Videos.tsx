import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Tab = {
  id: string;
  label: string;
  videoUrl: string;
};

const tabs: Tab[] = [
  {
    id: 'youtube-doc',
    label: 'YouTube Documentary',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'tiktok',
    label: 'TikTok Video',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw'
  },
  {
    id: 'instagram',
    label: 'Instagram Reel',
    videoUrl: 'https://www.youtube.com/embed/Y-Elr5K2Vuo'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Brand Video',
    videoUrl: 'https://www.youtube.com/embed/6_b7RDuLwcI'
  },
  {
    id: 'youtube-short',
    label: 'YouTube Short',
    videoUrl: 'https://www.youtube.com/embed/Ct6BUPvE2sM'
  }
];

function Videos() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4 font-light">
          Crafting platform-specific content,
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-3xl font-medium text-center mb-8">
          Tailored to each format's formula.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 shadow-md font-light
                ${activeTab === tab.id 
                  ? 'bg-[#fdee36] text-black' 
                  : 'bg-[#424023] text-[#fdee36] shadow-[0_0_10px_#fdee36] hover:shadow-[0_0_15px_#fdee36]'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Container */}
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
          <iframe
            src={tabs.find(tab => tab.id === activeTab)?.videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button 
            className="bg-[#fdee36] text-black px-8 py-5 rounded-full font-semibold hover:bg-[#fdee36] hover:shadow-[0_0_10px_#fdee36] p-4 transition-all duration-300">
            <Link to='/solution'>  Our Solutions</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
