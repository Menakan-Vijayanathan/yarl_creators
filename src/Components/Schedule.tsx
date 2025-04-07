import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

function Schedule() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const currentMonth = 'April 2025';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <a href="#" className="text-yellow-400 border border-yellow-400 rounded-full px-4 py-1 text-sm mb-6 hover:bg-yellow-400 hover:text-black transition-colors">
        Prefer to speak directly?
      </a>

      <h1 className="text-4xl font-bold mb-4 text-center">Schedule a Call</h1>
      <p className="text-gray-400 text-center mb-12">
        Book a 30-minute consultation call to discuss your content needs with an expert.
      </p>

      <div className="bg-[#1c1f26] rounded-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex">
          {/* Left Panel */}
          <div className="p-8 border-r border-gray-800 w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">Gary Hussein</p>
                <p className="text-gray-400">Content Strategist</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">30 Minute Meeting</h2>
            
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>30 min</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Video className="w-4 h-4" />
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-8 flex-1">
            <h3 className="text-lg font-semibold mb-6">Select a Date & Time</h3>

            <div className="flex items-center justify-between mb-6">
              <button className="hover:text-gray-300">&larr;</button>
              <span className="font-medium">{currentMonth}</span>
              <button className="hover:text-gray-300">&rarr;</button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {days.map(day => (
                <div key={day} className="text-center text-sm text-gray-400">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                <button
                  key={date}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center
                    ${date === 15 ? 'bg-white text-black' : 'hover:bg-gray-800'}
                  `}
                >
                  {date}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Time zone</span>
              </div>
              <select className="mt-2 w-full bg-black border border-gray-800 rounded-lg p-2 text-white">
                <option>India Standard Time (GMT+5:30)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-400 mt-8 text-center">
        If you have any questions or need more information, feel free to email us at{' '}
        <a href="mailto:studios@reanglobal" className="text-yellow-400 hover:underline">
          studios@reanglobal
        </a>
        . We're here to help!
      </p>
    </div>
  );
}

export default Schedule;