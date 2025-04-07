import React from 'react';
import { Link } from 'react-router-dom';

export function Hero4() {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-black text-white relative" >
      {/* Yellow glow effect only for this section */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#fdee36] rounded-full blur-[128px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Main heading spanning full width */}
        <div className="mb-16 text-center">
          <h2 className="text-[#fdee36] text-4xl md:text-5xl font-bold mb-4">High-Impact, Scalable</h2>
          <h2 className="text-4xl md:text-5xl font-bold">Content Solutions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12 flex flex-col justify-center">
            <div className="space-y-8"> {/* Increased gap */}
              <h2 className="text-5xl font-bold">Viral Exec</h2> {/* Increased size */}
              <p className="text-[#fdee36] uppercase tracking-wider">
                For: Entrepreneurs, Executives, Business Figures
              </p>
              <hr className="bg-[#fdee36] h-[0.5px] border-0 opacity-50" />


            </div>

            <div className="space-y-6"> {/* Increased gap */}
              <h3 className="text-4xl font-bold"> {/* Increased size */}
                Ignite Your Story with Captivating Verticals
              </h3>
              <p className="text-gray-300 text-lg">
                We turn your generic videos into dynamic vertical format videos,
                infusing motion graphics and engaging text to resonate deeply with
                your audience across major platforms such as LinkedIn, TikTok &
                Instagram.
              </p>
            </div>
            <Link to='/contact'>
              <button className="bg-[#fdee36] text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 w-fit">
              Book a Call
              </button>
            </Link>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center">
            <div className="aspect-[9/16] max-h-[500px] w-[280px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Video Container */}
              <video 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
