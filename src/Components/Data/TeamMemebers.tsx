import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  company: string;
  image: string;
  linkedinUrl?: string;
}

export function TeamMember({ name, title, company, image, linkedinUrl }: TeamMemberProps) {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg bg-[#15171B]">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover"
        />
        <div className="p-4 space-y-1">
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-gray-400 text-sm">{company}</p>
          {linkedinUrl && (
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="absolute bottom-4 right-4 p-1.5 bg-[#15171B] rounded text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}