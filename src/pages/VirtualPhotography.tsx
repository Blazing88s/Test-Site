import React from 'react';
import { Camera } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';

export default function VirtualPhotography() {
  return (
    <ServiceHero
      title="Virtual Photography"
      description="Create perfect product shots and environmental photography without the limitations of physical photography."
      image="https://images.unsplash.com/photo-1600607687126-c2813205203e"
      Icon={Camera}
      features={[
        "Studio-quality product shots",
        "Environmental photography",
        "Custom lighting setups",
        "Multiple angle captures",
        "High-resolution outputs",
        "Post-processing effects",
        "Scene composition",
        "Marketing campaign assets"
      ]}
    />
  );
}