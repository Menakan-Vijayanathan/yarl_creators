import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Roar Media?',
    answer: (
      <p>
        Roar Media specializes in creating platform-specific content, uniquely tailored to the distinct formats and winning formulas of each platform. Our forward-thinking approach combines human creativity and AI precision to develop cutting-edge digital content at scale for global brands and agencies, ensuring it deeply resonates with audiences wherever they engage.
        <br /><br />
        We leverage our deep understanding of digital platforms to create informative and engaging content from social media graphics to Instagram Reels and animation explainers.
      </p>
    )
  },
  {
    question: 'What is platform-specific content?',
    answer: (
      <p>
        Platform-specific content is created specifically for a particular digital platform, tailored to suit its format, audience, and functionalities. This type of content maximizes engagement and relevance by adapting to the unique characteristics of each platform, whether it's social media platforms, ecommerce platforms, or websites, ensuring optimal user experience and impact.
        <br /><br />
        Roar Media has over a decade of experience in creating high-quality content for various platforms, which has given us a deep understanding of how different platforms work, their audience preferences, which content garners the most attention and engagement, and how to effectively advertise on them.
      </p>
    )
  },
  {
    question: 'Does Roar Media publish branded content on its platforms?',
    answer: (
      <p>
        In 2024, Roar Media shifted from a media platform to a platform-specific content production studio. From 2014 to 2023, it garnered acclaim for balanced commentary on South Asian current affairs and compelling narratives on the region's cultures and lifestyles. We currently do not publish branded content on our website. Our social media channels will showcase our best work for clients.
        <br /><br />
        To access our 2014-2023 content in our archive, click here.
      </p>
    )
  },
  {
    question: 'How do I work with Roar Media?',
    answer: (
      <p>
        To collaborate with us, kindly book an available time slot here to discuss your requirements. Upon confirming your requirements, a dedicated account manager will be assigned. They will oversee your project or campaign from ideation to completion, working closely with our creative and production teams.
        <br /><br />
        We guarantee a 24-hour turnaround for most short-form content (reels, articles under 1,000 words, text-based graphics, etc.). Timeline for larger projects or campaigns will be discussed in advance.
      </p>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#1C1F26] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-gray-800/50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;