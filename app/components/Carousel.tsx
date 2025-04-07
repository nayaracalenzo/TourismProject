'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { bebasneue } from '../layout';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, goToNext]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="py-7 px-46 bg-white flex justify-between min-w-full h-screen"
          >
            <div className="text-black py-32 w-1/2">
              <h2
                className={`${bebasneue.className} text-amber-400 font-bold mb-3`}
              >
                Nossos melhores pacotes!
              </h2>
              <h1
                className={`${bebasneue.className} text-[#0082ca] border- text-6xl font-bold pb-10`}
              >
                {index === 0 && '3 praias em 1 dia'}
                {index === 1 && 'Jericoacoara em 1 dia'}
                {index === 2 && 'City tour'}
              </h1>
              <p className="text-justify">
                Conheça as belezas de Morro Branco, Praia das Fontes e Canoa
                Quebrada em um único dia, onde você e sua família podem se
                deslumbrar das paisagens mais lindas que o nosso Ceará tem a
                oferecer.
              </p>
              <a
                className="cursor-pointer hover:bg-green-600 flex gap-2 bg-green-500 rounded-2xl p-2 px-6 items-center justify-center w-fit my-10"
              >
                <FaWhatsapp className="" />
                Reserve Já
              </a>
            </div>
            <Image
              src={src}
              alt={`slide-${index}`}
              width={300}
              height={500}
              className=""
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}