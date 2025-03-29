import React from 'react';
import { StarRating } from './StartRating';

const testimonials = [
  {
    name: 'Courtenay Farquharson',
    role: 'Chief Technology Officer',
    company: 'Backlinko',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    rating: 5,
    text: 'Roar Media went above and beyond to understand my unique requirement and kept iterating until I got exactly what I wanted. High bar for talent, fair pricing. Worth a look.'
  },
  {
    name: 'Dinesha de Silva',
    role: 'Country Representative, Sri Lanka',
    company: 'The Asia Foundation',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    rating: 5,
    text: 'With TAF, the Roar team visited participants\' homes in remote areas to understand and capture their challenges and struggles. The team was able to draw out authentic experiences from the interviewees while being sensitive to their issues. Their accommodating and adaptive practice ensured comfortability at all times. The result was a visually engaging documentary that explored the landscape of Mental Health in Sri Lanka.'
  },
  {
    name: 'Myanthi Peiris',
    role: 'Business and Human Rights Specialist',
    company: 'United Nations Development Programme',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    rating: 5,
    text: 'From the outset, Roar Media team showed their creativity and authenticity, especially by creating visually engaging content drawn from complex development issues. Their expertise ensured our documentary series reached a wider and more engaging viewership across all local languages. The team at Roar Media exceeded our expectations with a captivating mini-documentary series that went above and beyond our vision.'
  },
  {
    name: 'Yolan Seimon',
    role: 'Head of OCTAVE',
    company: 'The John Keells Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    rating: 5,
    text: 'From conceptualization to execution, Roar Media demonstrates a high level of professionalism & excellence while staying true to the essence of the message we want to convey. Their expertise in scripting, filming, editing, and post-production has met our requirements, resulting in a product that exceeds our expectations. Their ability to consistently work within budget and timeline constraints showcases their dedication to delivering great results without compromising quality.'
  },
  {
    name: 'Rashmi Sathanandan',
    role: 'Project Manager',
    company: 'Women in Need, USAID',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100',
    rating: 5,
    text: 'Women In Need had the opportunity to work with Team ROAR on the execution of a social media campaign in commemoration of International Women\'s Day 2023. Our campaign focused on success stories of survivors of violence who have been protected, strengthened and empowered by WIN. Team ROAR conceptualized and implemented a story in collaboration with WIN.'
  }
];

export function Review() {
  return (
    <div className="bg-black py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16">
        See What Our Clients Are Saying!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0F1115] rounded-3xl p-6 flex flex-col"
          >
            <div className="flex items-center mb-4 text-white">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 text-gray-300 leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
