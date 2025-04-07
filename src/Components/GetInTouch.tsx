import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-between p-8 max-w-7xl mx-auto">
      <div className="flex-1 pr-12">
        <h1 className="text-5xl font-bold mb-6">
          Elevate Your Brand<br />
          with Platform-Specific<br />
          Content
        </h1>
        
        <p className="text-gray-400 text-lg mb-8">
          Leverage our team of platform-certified experts to produce<br />
          content that resonates and performs.
        </p>

        <p className="mb-8">
          <span className="text-gray-400">Unlimited content plans start from just </span>
          <span className="text-white">$999/month.</span>
        </p>

        <div className="space-y-3">
          {[
            'Platform Specific Expertise',
            'Dedicated Account Manager',
            'Fast Turnarounds',
            'Scalability (1 to 1,000 Pieces)'
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-2xl flex-1 max-w-md">
        <p className="text-gray-400 mb-6">
          Tell us more about your content requirements and we'll get back to you within 24 hours with a tailored proposal.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white"
          />
          
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white"
          />
          
          <textarea
            name="requirements"
            placeholder="I need 10 video ads tailored for each platform to drive product sales..."
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Request a Proposal
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default GetInTouch;