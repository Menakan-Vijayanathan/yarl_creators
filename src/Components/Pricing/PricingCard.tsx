import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PlanFeature {
  name: string;
  value: boolean;
}

interface PricingCardProps {
  type: 'GROWTH' | 'PRO' | 'ENTERPRISE';
  monthlyPriceUSD?: string;
  yearlyPriceUSD?: string;
  monthlyPriceAUD?: string;
  yearlyPriceAUD?: string;
  billingPeriod: 'monthly' | 'yearly';
  currency: 'USD' | 'AUD';
  capabilities: PricingFeature[];
  features: PlanFeature[];
}

export function PricingCard({ 
  type, 
  monthlyPriceUSD,
  yearlyPriceUSD,
  monthlyPriceAUD,
  yearlyPriceAUD,
  billingPeriod,
  currency,
  capabilities, 
  features 
}: PricingCardProps) {
  const getPrice = () => {
    if (currency === 'USD') {
      return billingPeriod === 'monthly' ? monthlyPriceUSD : yearlyPriceUSD;
    }
    return billingPeriod === 'monthly' ? monthlyPriceAUD : yearlyPriceAUD;
  };

  const price = getPrice();
  const billing = `Billed ${billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'}`;

  return (
    <div className="[bg-[#16181f]] rounded-lg p-6">
        <div className="bg-[#16181f] px-4 pt-4 rounded flex flex-col items-center justify-center">
  <div 
    className="inline-block px-3 py-1 rounded-full text-xs font-semibold align-middle justify-center bg-[#16181f]"
    style={{ backgroundColor: 'rgba(255, 242, 64, 0.1)', color: '#FFF240' }}
  >
    {type}
  </div>
</div>

<div className="bg-[#16181f] rounded p-3 flex flex-col items-center justify-center">
  {price ? (
    <>
      <div className="flex items-end gap-2">
        <h2 className="text-4xl font-bold">${price}</h2>
        <span className="text-gray-500 mb-1">/mo</span>
      </div>
      <p className="text-gray-500">{billing}</p>
    </>
  ) : (
    <h2 className="text-2xl font-bold text-center">Get in Touch<br />for Pricing</h2>
  )}
</div>

      <div className="space-y-1">
        <div className="bg-[rgba(255,242,64,0.1)] py-2 px-4 rounded">
          <h3 className="text-yellow-400">Capabilities</h3>
        </div>
        {capabilities.map((capability, index) => (
  <div
    key={index}
    className={`flex items-center gap-3 text-sm ${capability.included ? 'bg-[#16181f] p-4' : 'p-4'}`}
  >
    {capability.included ? (
      <Check className="w-4 h-4 text-yellow-400" />
    ) : (
      <X className="w-4 h-4 text-gray-600" />
    )}
    <span className={capability.included ? 'text-gray-300' : 'text-gray-600'}>
      {capability.name}
    </span>
  </div>
))}


<div className="bg-[#424023] py-2 px-4 rounded mt-2">
  <h3 className="text-[#fdee36]">Plan Features</h3>
</div>
{features.map((feature, index) => (
  <div
    key={index}
    className={`flex items-center gap-3 text-sm ${feature.value ? 'bg-[#16181f] p-4' : 'p-4'}`}
  >
    {feature.value ? (
      <Check className="w-4 h-4 text-yellow-400" />
    ) : (
      <X className="w-4 h-4 text-gray-600" />
    )}
    <span className={feature.value ? 'text-gray-300' : 'text-gray-600'}>
      {feature.name}
    </span>
    
  </div>
))}</div>


      <Link to='/contact'>
      <button className="w-full mt-8 bg-white text-black py-3 rounded-full hover:bg-gray-200 transition-colors">
        Get in Touch
      </button>
      </Link>
    </div>
  );
}