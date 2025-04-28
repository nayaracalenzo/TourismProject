'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { bebasneue } from '../fonts';

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
    <div className="relative w-full h-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="p-3  flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start min-w-full bg-gray-200 relative overflow-hidden"
          >
            <div className="text-black z-1 w-full text-center py-25 lg:text-start lg:pl-10">
              <h2
                className={`${bebasneue.className} text-amber-500 font-bold mb-3 lg:mb-4`}
              >
                Nossos melhores pacotes!
              </h2>
              <h1
                className={`${bebasneue.className} text-[#0082ca] text-3xl lg:text-5xl font-bold`}
              >
                {index === 0 && '3 praias em 1 dia'}
                {index === 1 && 'Jericoacoara em 1 dia'}
                {index === 2 && 'City tour'}
              </h1>
              <p className="text-center lg:text-justify p-5 lg:py-5 lg:p-0 lg:w-[70%]">
                Conheça as belezas de Morro Branco, Praia das Fontes e Canoa
                Quebrada em um único dia, onde você e sua família podem se
                deslumbrar das paisagens mais lindas que o nosso Ceará tem a
                oferecer.
              </p>
              <a className="mx-auto px-10 py-1 gap-1  cursor-pointer text-gray-100 hover:bg-green-600 flex bg-green-500 rounded-lg  items-center justify-center w-fit lg:mx-0 lg:mt-5">
                <FaWhatsapp className="" />
                Reserve Já
              </a>
            </div>
            <Image
              src={src}
              alt={`slide-${index}`}
              width={400}
              height={200}
              className="w-[80%] my-7"
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