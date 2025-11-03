import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioItem from './portfolio/PortfolioItem';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    title: 'Modern Villa Exterior'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    title: 'Contemporary Kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea',
    title: 'Product Showcase'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    title: 'Office Space Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: 'Luxury Bathroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    title: 'Urban Development'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioItem
              key={project.title}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-transparent border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}