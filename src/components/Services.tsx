import React from 'react';
import { Building2, Box, PenTool, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Architectural Visualization',
    path: '/services/architectural-visualization',
    points: [
      'Photorealistic exterior renderings',
      'Interior design visualization',
      'Virtual property tours'
    ]
  },
  {
    icon: Box,
    title: 'Product Visualization',
    path: '/services/product-visualization',
    points: [
      'Product design renders',
      'Package design mockups',
      'Interactive 3D models'
    ]
  },
  {
    icon: PenTool,
    title: 'Custom 3D Modeling',
    path: '/services/custom-modeling',
    points: [
      'Detailed 3D asset creation',
      'Technical visualization',
      'Conceptual modeling'
    ]
  },
  {
    icon: Camera,
    title: 'Virtual Photography',
    path: '/services/virtual-photography',
    points: [
      'Studio-quality product shots',
      'Environmental photography',
      'Marketing materials'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors bg-gray-800/50 group"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="text-gray-300 text-sm">• {point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}