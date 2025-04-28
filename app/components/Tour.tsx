import React from 'react';
import Image from 'next/image';
import imgfuturo from '../assets/imgpraiafuturo.jpg';
import imgbeachpark from '../../public/imgbeachpark.jpg';
import imgpraiadasfontes from '../../public/imgpraiadasfontes.jpg';
import imgaguasbelas from '../../public/imgaguasbelas.jpg';
import imgbarranova from '../../public/imgbarranova.jpg';
import imgmorrobranco from '../../public/imgmorrobranco3.jpg';
import 'animate.css';
import { FaWhatsapp } from 'react-icons/fa';

const Tour = () => {
  const touritens = [
    {
      local: 'Beach Park',
      img: imgbeachpark,
      desc: 'Beach Park',
    },
    {
      local: 'Praia do Futuro',
      img: imgfuturo,
      desc: 'Praia do Futuro',
    },
    {
      local: 'Praia das Fontes',
      img: imgpraiadasfontes,
      desc: 'Praia das Fontes',
    },
    {
      local: 'Águas belas',
      img: imgaguasbelas,
      desc: 'Águas belas',
    },
    {
      local: 'Barra Nova',
      img: imgbarranova,
      desc: 'Barra Nova',
    },
    {
      local: 'Morro Branco',
      img: imgmorrobranco,
      desc: 'Morro Branco',
    },
  ];
    //selecionar o id do scroll, 
  return (
    <div className="bg-blue-50">
      <h1 className="text-center bg-blue-50 text-blue-950 font-bold text-2xl py-20">
        Reserve sua próxima viagem
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-3">
        {touritens.map((item, index) => (
          <a
            href="https://wa.me/5585981781918&text=Ol%C3%A1!%20Gostaria%20de%20Agendar%20um%20Passeio!"
            key={index}
            className="relative group"
          >
            <Image
              objectFit="fill"
              className="h-[200px] lg:h-[400px] opacity-100"
              src={item.img}
              alt={item.desc}
              layout="auto"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:backdrop-brightness-50 overflow-hidden">
              <div className="">
                <h2 className="animate__animated animate__fadeInUp animate__slower absolute bottom-0 right-0 w-full h-full py-[30%] text-center hover:text-amber-400 text-lg font-medium transition delay-50 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 text-white">
                  {item.local}
                </h2>
                <span className=" animate__animated animate__fadeInUp animate__slower mt-20 text-sm cursor-pointer flex gap-2 bg-gray-400/40 text-white rounded-2xl p-1 px-3 items-center justify-center w-fit my-10">
                  <FaWhatsapp className="" />
                  RESERVE JÁ
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tour;
