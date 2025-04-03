import React from 'react';
import { ArrowRight } from 'lucide-react';

const ViralContent = () => (
    <div className="min-h-screen bg-black text-white">
      <div className="">
        <div className="w-full  px-8 pb-0 ">
          <div className="max-w-7xl mx-auto border-y border-neutral-800 py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Images Section - Left side on desktop */}
              <div className="order-2 lg:order-1 mt-12 lg:mt-0 lg:w-3/5">
                <div className="grid grid-cols-7 gap-8 items-center">
                  <div className="col-span-3">
                    <div className="rounded-3xl overflow-hidden bg-neutral-900 p-6">
                      <img 
                        src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?auto=format&fit=crop&q=80&w=400&h=400" 
                        alt="Product"
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
  
                  <div className="col-span-1 flex justify-center">
                    <ArrowRight size={48} className="text-[#fdee36]" />
                  </div>
  
                  <div className="col-span-3">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500 p-1">
                      <div className="bg-black rounded-3xl p-6">
                        <img 
                          src="https://images.unsplash.com/photo-1633354931133-27c285de18c6?auto=format&fit=crop&q=80&w=400&h=400" 
                          alt="Vibrant Design"
                          className="w-full h-auto rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Content Section - Right side on desktop */}
              <div className="order-1 lg:order-2 lg:w-2/5 lg:pl-12">
                <h1 className="text-5xl font-bold mb-8">Viral Commerce</h1>
                <p className="text-[#fdee36] text-lg tracking-wide mb-6">
                  FOR: ECOMMERCE BRANDS, AGENCIES
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6">
                  Amplify Your Brand's Presence with Scroll-Stopping Motion Ads
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  We turn your static assets into dynamic motion ads for every platform 
                  and format, ensuring maximum impact and engagement.
                </p>
                <button className="bg-[#fdee36] text-black px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default ViralContent