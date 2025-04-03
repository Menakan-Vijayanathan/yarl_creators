import React from 'react';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

export function PricingHeader({ billingPeriod, setBillingPeriod }: PricingHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4">
        Discover <span className="text-yellow-400">Unlimited</span> Content Plans
      </h1>
      <p className="text-gray-400">
        Get the content you need, when you need it, without limitations.
      </p>
      <div className="inline-flex bg-gray-900 rounded-full p-1 mt-6">
        <button 
          className={`px-6 py-2 rounded-full transition-colors ${
            billingPeriod === 'monthly' ? 'bg-yellow-400 text-black' : 'text-gray-300'
          }`}
          onClick={() => setBillingPeriod('monthly')}
        >
          Monthly
        </button>
        <button 
          className={`px-6 py-2 rounded-full transition-colors ${
            billingPeriod === 'yearly' ? 'bg-yellow-400 text-black' : 'text-gray-300'
          }`}
          onClick={() => setBillingPeriod('yearly')}
        >
          Yearly
        </button>
      </div>
      <p className="text-yellow-400 text-sm mt-2">10% off Yearly Plans!</p>
    </div>
  );
}