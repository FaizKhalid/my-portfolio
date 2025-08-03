'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Tech {
  name: string;
  icon: string;
}

const techStack: Tech[] = [
  { name: 'React', icon: '/icons/vue.svg' },
  { name: 'Next.js', icon: '/icons/next.svg' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg' },
];

export default function TechStackPills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex mt-2  items-center">
      {techStack.map((tech, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`flex items-center w-6 h-6 px-1 py-1 rounded-full 
          bg-white/20 backdrop-blur-md border border-white/30 
          dark:bg-black/30 dark:border-white/10
          cursor-pointer transition-all duration-300 overflow-hidden 
          shadow-md ${index !== 0 ? '-ml-2' : ''} 
          ${hovered === index ? '-translate-y-1' : ''}`}
          style={{ minWidth: hovered === index ? '90px' : '20px' }}
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={15}
            height={15}
            className="transition-transform duration-300"
          />
          <span
            className={`ml-1 text-sm whitespace-nowrap transition-opacity duration-300 ${
              hovered === index
                ? 'opacity-100'
                : 'opacity-0'
            } text-black dark:text-white`}
          >
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
