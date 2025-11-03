import React from 'react';
import { Box } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';

export default function ProductVisualization() {
  return (
    <ServiceHero
      title="Product Visualization"
      description="Create stunning product renders that showcase every detail of your designs with photorealistic accuracy."
      image="https://images.unsplash.com/photo-1600607687644-c7171b42498b"
      Icon={Box}
      features={[
        "360-degree product views",
        "Detailed material showcases",
        "Product assembly animations",
        "Package design visualization",
        "Interactive 3D configurations",
        "Studio lighting setups",
        "Product cutaways and exploded views",
        "Marketing-ready renders"
      ]}
    />
  );
}