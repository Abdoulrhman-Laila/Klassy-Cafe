"use client";
import { useState } from 'react';

export default function Page() {
  const images = [
    '/images/slide-01.jpg',
    '/images/slide-02.jpg',
    '/images/slide-03.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="left-sec w-full md:w-1/3 p-4 bg-cover bg-center text-white flex flex-col justify-center" style={{ backgroundImage: "url('/images/top-left-bg.jpg')" }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">KlassyCafe</h1>
        <p className='text-center text-sm md:text-base'>THE BEST EXPERIENCE</p>
        <button className="cta-button bg-white text-red-500 py-2 px-4 rounded mx-auto mt-4" style={{ width: '200px' }}>
          Make A Reservation
        </button>
      </section>
      <section className="right-sec w-full md:w-2/3 flex flex-col items-center justify-center h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-full h-full object-cover rounded" />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <img 
              src="/images/prev.png" 
              alt="السابق" 
              className="cursor-pointer w-10 h-10 md:w-12 md:h-12" 
              onClick={prevImage} 
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <img 
              src="/images/next.png" 
              alt="التالي" 
              className="cursor-pointer w-10 h-10 md:w-12 md:h-12" 
              onClick={nextImage} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}