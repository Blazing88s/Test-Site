import React from 'react';
import { Building2 } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';

export default function ArchitecturalVisualization() {
  return (
    <ServiceHero
      title="Architectural Visualization"
      description="Transform architectural concepts into photorealistic visualizations that bring your designs to life before they're built."
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      Icon={Building2}
      features={[
        "Photorealistic exterior renderings",
        "Detailed interior visualizations",
        "Virtual property tours",
        "Aerial and bird's eye views",
        "Day and night lighting scenarios",
        "Landscape integration",
        "Material and finish visualization",
        "Real-time visualization updates"
      ]}
    />
  );
}