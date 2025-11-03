import React, { useState } from 'react';
import Modal from '../ui/Modal';

interface PortfolioItemProps {
  image: string;
  title: string;
}

export default function PortfolioItem({ image, title }: PortfolioItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
        />
      </Modal>
    </>
  );
}