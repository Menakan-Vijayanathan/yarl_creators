import React from 'react';

interface CurrencyToggleProps {
  currency: 'USD' | 'AUD';
  setCurrency: (currency: 'USD' | 'AUD') => void;
}

export function CurrencyToggle({ currency, setCurrency }: CurrencyToggleProps) {
  return (
    <div className="inline-flex bg-gray-900 rounded-full p-1 mb-8">
      <button 
        className={`px-4 py-1 rounded-full transition-colors ${
          currency === 'USD' ? 'bg-yellow-400 text-black' : 'text-gray-300'
        }`}
        onClick={() => setCurrency('USD')}
      >
        USD
      </button>
      <button 
        className={`px-4 py-1 rounded-full transition-colors ${
          currency === 'AUD' ? 'bg-yellow-400 text-black' : 'text-gray-300'
        }`}
        onClick={() => setCurrency('AUD')}
      >
        AUD
      </button>
    </div>
  );
}