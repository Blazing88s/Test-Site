import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  features: string[];
}

export default function ServiceHero({ title, description, image, Icon, features }: ServiceHeroProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover brightness-[1.2]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 mb-6">
            <Icon className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
          </div>
          
          <p className="text-xl text-gray-200 mb-8">{description}</p>
          
          <div className="bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-200">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}