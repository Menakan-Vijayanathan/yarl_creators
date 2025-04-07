import React from 'react';
import { TeamMember } from './Data/TeamMemebers';

const teamMembers = [
  {
    name: 'Mustafa Kassim',
    title: 'Founder & CEO',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Prasath Balakrishnan',
    title: 'Chief Commercial Officer',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Vandana Hiranand',
    title: 'Associate Creative Director',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Kris Thomas',
    title: 'Associate Content Director',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Thaman Ranjan',
    title: 'Manager, Client Partnerships',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Gazy Hussain',
    title: 'Senior Account Manager',
    company: 'Yarl Creation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500',
    linkedinUrl: 'https://www.linkedin.com/'
  }
];

export function Team() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black" id='meet-our-team' >
      <div className="max-w-7xl mx-auto" >
        <h2 className="text-4xl font-bold text-center text-white mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}