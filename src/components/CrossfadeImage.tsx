import React, { useState, useEffect, useRef } from 'react';
import { adjustBrightness } from '../utils/imageEffects';

interface CrossfadeImageProps {
  images: string[];
  interval?: number;
  className?: string;
  brightness?: number;
}

export default function CrossfadeImage({ 
  images, 
  interval = 3000, 
  className = '',
  brightness = 1.2 // 20% brighter
}: CrossfadeImageProps) {
  const [index, setIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach(img => {
      if (img) {
        adjustBrightness(img, brightness);
      }
    });
  }, [brightness]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          ref={el => imageRefs.current[i] = el}
          src={src}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}