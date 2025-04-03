import React, { useState } from 'react';
import { PricingHeader } from '../Components/Pricing/PricingHeader';
import { CurrencyToggle } from '../Components/Pricing/CurrencyToggle';
import { PricingCard } from '../Components/Pricing/PricingCard';

const growthCapabilities = [
  { name: 'Graphic Design', included: true },
  { name: 'Video Edits', included: true },
  { name: 'Script and Copy writing', included: true },
  { name: 'Custom Illustrations', included: false },
  { name: 'Custom Animations', included: false },
  { name: 'In-depth Research', included: false },
  { name: 'Video Productions', included: false },
  { name: 'Presenters & Voice Overs', included: false },
  { name: 'Photography', included: false },
];

const proCapabilities = [
  { name: 'Graphic Design', included: true },
  { name: 'Video Edits', included: true },
  { name: 'Script and Copy writing', included: true },
  { name: 'Custom Illustrations', included: true },
  { name: 'Custom Animations', included: true },
  { name: 'In-depth Research', included: true },
  { name: 'Video Productions', included: true },
  { name: 'Presenters & Voice Overs', included: false },
  { name: 'Photography', included: false },
];

const enterpriseCapabilities = [
  { name: 'Graphic Design', included: true },
  { name: 'Video Edits', included: true },
  { name: 'Script and Copy writing', included: true },
  { name: 'Custom Illustrations', included: true },
  { name: 'Custom Animations', included: true },
  { name: 'In-depth Research', included: true },
  { name: 'Video Productions', included: true },
  { name: 'Presenters & Voice Overs', included: true },
  { name: 'Photography', included: true },
];

const growthFeatures = [
    { name: 'Dedicated Account Manager', value:true },
    { name: 'one at a time', value: true },
    { name: 'Royalty Free Source Material', value:true },
    { name: 'Slack Collaboration', value:true  },
    { name: 'Creative Director Consultation', value: true },
    { name: 'Source Files', value: false },

];

const proFeatures = [
  { name: 'Dedicated Account Manager', value:true },
  { name: '2 at a time', value: true },
  { name: 'Royalty Free Source Material', value:true },
  { name: 'Slack Collaboration', value:true  },
  { name: 'Creative Director Consultation', value: true },
  { name: 'Source Files', value: false },

];

const enterpriseFeatures = [
    { name: 'Dedicated Account Manager', value:true },
    { name: 'Unlimited at a time', value: true },
    { name: 'Royalty Free Source Material', value:true },
    { name: 'Slack Collaboration', value:true  },
    { name: 'Creative Director Consultation', value: true },
    { name: 'Source Files', value: true },
];

function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'AUD'>('USD');

  return (
    <div className="min-h-screen bg-black text-white py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <PricingHeader 
          billingPeriod={billingPeriod} 
          setBillingPeriod={setBillingPeriod} 
        />
        <div className="flex justify-center">
          <CurrencyToggle 
            currency={currency} 
            setCurrency={setCurrency} 
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <PricingCard
            type="GROWTH"
            monthlyPriceUSD="999"
            yearlyPriceUSD="899"
            monthlyPriceAUD="1,549"
            yearlyPriceAUD="1,389"
            billingPeriod={billingPeriod}
            currency={currency}
            capabilities={growthCapabilities}
            features={growthFeatures}
          />
          <PricingCard
            type="PRO"
            monthlyPriceUSD="1,499"
            yearlyPriceUSD="1,349"
            monthlyPriceAUD="2,349"
            yearlyPriceAUD="2,109"
            billingPeriod={billingPeriod}
            currency={currency}
            capabilities={proCapabilities}
            features={proFeatures}
          />
          <PricingCard
            type="ENTERPRISE"
            capabilities={enterpriseCapabilities}
            billingPeriod={billingPeriod}
            currency={currency}
            features={enterpriseFeatures}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;