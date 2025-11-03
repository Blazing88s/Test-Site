import React from 'react';
import { PenTool } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';

export default function CustomModeling() {
  return (
    <ServiceHero
      title="Custom 3D Modeling"
      description="Expert 3D modeling services that bring your ideas to life with precision and attention to detail."
      image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
      Icon={PenTool}
      features={[
        "High-poly detailed modeling",
        "Low-poly optimization",
        "Parametric modeling",
        "Technical visualization",
        "Organic modeling",
        "UV mapping and texturing",
        "3D scanning integration",
        "File format conversion"
      ]}
    />
  );
}