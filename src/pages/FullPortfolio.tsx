import React from 'react';
import PortfolioGallery from '../components/portfolio/PortfolioGallery';

export default function FullPortfolio() {
  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Our Portfolio</h1>
        <PortfolioGallery />
      </div>
    </div>
  );
}