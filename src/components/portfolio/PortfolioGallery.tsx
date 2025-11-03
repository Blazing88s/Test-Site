import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../data/galleryImages';
import Modal from '../ui/Modal';

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(current => 
      current === null ? null : (current === 0 ? galleryImages.length - 1 : current - 1)
    );
  };

  const handleNext = () => {
    setSelectedImage(current => 
      current === null ? null : (current === galleryImages.length - 1 ? 0 : current + 1)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.url}
            className="aspect-square cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="text-white font-medium text-lg text-center px-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={selectedImage !== null} 
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage !== null && (
          <div 
            className="relative"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-h-[85vh] w-auto mx-auto"
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{galleryImages[selectedImage].title}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}