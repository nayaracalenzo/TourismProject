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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
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
                {index === 2 && 'Beach Park'}
                {index === 3 && 'City tour'}
              </h1>
              <p className="text-center lg:text-justify p-5 lg:py-5 lg:p-0 lg:w-[70%]">
                {index === 0 &&
                  `Conheça as belezas de Morro Branco, Praia das Fontes e Canoa
                Quebrada em um único dia, onde você e sua família podem se
                deslumbrar das paisagens mais lindas que o nosso Ceará tem a
                oferecer.`}
                {index === 1 &&
                  `Venha viver a magia de Jericoacoara em um passeio incrível! Prepare-se para uma experiência única! Em apenas um dia, você vai explorar as maravilhas dessa praia paradisíaca: dunas douradas, lagoas de águas cristalinas e um cenário perfeito para fotos inesquecíveis.`}
                {index === 2 &&
                  `Prepare-se para uma experiência única no maior parque aquático à beira-mar da América Latina! Localizado em Porto das Dunas, a apenas 22 km de Fortaleza, o Beach Park oferece mais de 30 atrações para todas as idades.`}
                {index === 3 &&
                  `Fortaleza é uma mistura de história, cultura e belezas naturais! Em nosso city tour, você vai visitar os pontos turísticos mais famosos. Acompanhe um guia especializado e descubra os segredos dessa cidade vibrante, que combina tradição e modernidade`}
              </p>
              <a
                href="https://wa.me/5585981781918?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20passeio"
                className="mx-auto px-6 py-1 gap-1 font-bold cursor-pointer text-gray-100 hover:bg-green-600 flex bg-green-500 rounded-lg  items-center justify-center w-fit lg:mx-0 lg:mt-5"
              >
                <FaWhatsapp  />
                Conheça todos os pacotes!
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/10 text-white p-3 rounded-full hover:bg-black/30"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/10 text-white p-3 rounded-full hover:bg-black/30"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
