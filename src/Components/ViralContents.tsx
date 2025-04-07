import React from 'react';
import { Link } from 'react-router-dom';

const ViralContents = () => (
  <div className="min-h-screen bg-black text-white" id='viral-content'>
    <div className="w-full px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Content Section - Left side on desktop */}
          <div className="order-1 lg:w-2/5  lg:mt-0">
            <h1 className="text-5xl font-bold mb-6">Viral Content</h1>
            <div className="border-b border-neutral-800 pb-2 mb-6">
              <p className="text-[#fdee36] text-base tracking-wide">
                FOR: ANY BRANDS, AGENCIES
              </p>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Transform Your Content for Every Platform
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              We crop, edit, and optimize your content to create platform-specific 
              pieces that command attention and drive results.
            </p>
            <Link to='/contact'>
              <button className="bg-[#fdee36] text-black px-6 py-3 rounded-full font-semibold text-base hover:opacity-90 transition-opacity">
                Book a Call
              </button>
            </Link>
          </div>

          {/* Video Section - Right side on desktop */}
          <div className="order-2 lg:w-2/5 lg:pl-12">
  <div className="grid grid-cols-7 gap-8 items-center">
    <div className="bg-black rounded-3xl p-1">
      <iframe 
        className="w-[300px] h-[500px] rounded-2xl"  // Set the height as needed
        src="https://www.youtube.com/embed/EngW7tLk6R8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
);

export default ViralContents;
