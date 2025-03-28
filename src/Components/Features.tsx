import React from 'react';
import { Settings, LayoutGrid, Award, LineChart } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-[#1C1F26] rounded-3xl p-12 hover:bg-[#fdee36] transition-all group">
      <Icon className="w-12 h-12 text-white mb-6 group-hover:text-black transition-colors" strokeWidth={1.5} />
      <h3 className="text-white text-2xl font-light mb-4 group-hover:text-[#fdee36] transition-colors group-hover:text-black">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-[#fdee36] transition-colors group-hover:text-black">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#000000] text-white py-12 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            Icon={Settings}
            title="Content Specialists"
            description="Our team comprises seasoned experts dedicated to crafting high-quality and compelling content tailored to diverse formats, channels, and audiences."
          />
          <FeatureCard
            Icon={LayoutGrid}
            title="Content At Scale"
            description="Whether it's a single piece or thousands of creatives, we're equipped with the team and resources to deliver projects of any size with precision and efficiency."
          />
          <FeatureCard
            Icon={Award}
            title="A Decade of Industry Experience"
            description="With over 10 years of experience, we've honed our skills in creating impactful content for global brands and agencies, tackling content challenges of all sizes and complexities."
          />
          <FeatureCard
            Icon={LineChart}
            title="Platform Insights"
            description="Leveraging a data-driven approach and in-depth understanding of major platforms, we ensure your message not only stands out but also resonates with your target audience, cutting through the noise effectively."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
