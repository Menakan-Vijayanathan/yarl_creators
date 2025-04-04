import React from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Platform-Specific Expertise", roarMedia: true, traditional: false, freelance: false },
  { feature: "Dedicated Account Manager", roarMedia: true, traditional: true, freelance: false },
  { feature: "24 Hour Turnarounds", roarMedia: true, traditional: false, freelance: false },
  { feature: "Scalability (1 to 1,000 pieces)", roarMedia: true, traditional: false, freelance: false },
];

function Comparison() {
  return (
    <section className="py-8 bg-black">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-[#16181f] p-10">
        <h2 className="text-5xl text-white font-bold text-center mb-8">The Roar Difference</h2>

        {/* ✅ Mobile View (ONLY visible on mobile) */}
        <div className="block lg:hidden space-y-4">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-black rounded-xl overflow-hidden max-w-full px-4 sm:px-4">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-medium text-white">{item.feature}</h3>
              </div>

              <div className="space-y-2 p-2">
                {/* Roar Media - Always black background */}
                <div className="flex items-center justify-between p-3 bg-black rounded-lg">
                  <div className="flex items-center">
                    <span className="text-yellow-400 font-semibold">roar</span>
                    <span className="text-gray-400 ml-1">media</span>
                  </div>
                  {item.roarMedia ? (
                    <Check className="text-yellow-400 w-5 h-5" />
                  ) : (
                    <X className="text-gray-500 w-5 h-5" />
                  )}
                </div>

                {/* Traditional Agency */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Traditional Agency</span>
                  {item.traditional ? (
                    <Check className="text-white w-5 h-5" />
                  ) : (
                    <X className="text-gray-500 w-5 h-5" />
                  )}
                </div>

                {/* Freelance Platforms */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Freelance Platforms</span>
                  {item.freelance ? (
                    <Check className="text-white w-5 h-5 " />
                  ) : (
                    <X className="text-gray-500 w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Desktop View (ONLY visible on large screens) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 text-center border-b border-gray-700">
            <div className="text-white py-4">Here's How We Compare</div>
            <div className="font-semibold text-white bg-black py-4">Roar Media</div>
            <div className="font-semibold text-white py-4">Traditional Agency</div>
            <div className="font-semibold text-white py-4">Freelance Platforms</div>
          </div>

          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 items-center ${
                index !== comparisonData.length ? "border-b border-gray-700" : ""
              }`}
            >
              <div className="text-gray-400 py-4">{item.feature}</div>

              {/* Roar Media - Always black background */}
              <div className="flex justify-center p-4 bg-black">
                {item.roarMedia ? (
                  <Check className="text-yellow-400 w-6 h-6" />
                ) : (
                  <X className="text-gray-500 w-6 h-6" />
                )}
              </div>

              <div className="flex justify-center p-4 bg-[#16181f]">
                {item.traditional ? (
                  <Check className="text-white w-6 h-6" />
                ) : (
                  <X className="text-gray-500 w-6 h-6" />
                )}
              </div>

              <div className="flex justify-center p-4 bg-[#16181f]">
                {item.freelance ? (
                  <Check className="text-white w-6 h-6" />
                ) : (
                  <X className="text-gray-500 w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comparison;
