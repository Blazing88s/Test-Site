import React from 'react';
import { ArrowRight } from 'lucide-react';
import CrossfadeImage from './CrossfadeImage';

const images = [
  '/src/Bedroom_Daytme LightMix_FINAL.jpg',
  '/src/Bedroom_Night LightMix_FINAL.jpg'
];

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <CrossfadeImage images={images} className="h-full" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bringing Your Vision to Life with Photorealistic 3D
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We transform concepts into stunning visual experiences through cutting-edge 3D visualization and rendering technology.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}