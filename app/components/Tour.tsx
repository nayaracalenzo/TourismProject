import React from 'react';
import Image from 'next/image';
import imgcanoa from '../../public/imgcanoa.jpg';
import imgcumbuco from '../../public/imgcumbuco.jpg';
import imgparacuru from '../../public/imgparacuru.jpg';
import imglagoinha from '../../public/imglagoinha.jpg';
import imgmundau from '../../public/imgmundau.jpg';
import imgflecheiras from '../../public/imgflecheiras.jpg';
import imgjeri from '../../public/imgjeri.jpg';
import imgbeachpark from '../../public/imgbeachpark.jpg';
import imgicaraideamontada from '../../public/imgicaraideamontada.jpg';
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
      local: 'Canoa Quebrada',
      img: imgcanoa,
      desc: 'Canoa Quebrada',
    },
    {
      local: 'Icaraizinho de Amontada',
      img: imgicaraideamontada,
      desc: 'Icaraizinho de Amontada',
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
    {
      local: 'Cumbuco',
      img: imgcumbuco,
      desc: 'Cumbuco',
    },
    {
      local: 'Paracuru',
      img: imgparacuru,
      desc: 'Paracuru',
    },
    {
      local: 'Lagoinha',
      img: imglagoinha,
      desc: 'Lagoinha',
    },
    {
      local: 'Mundaú',
      img: imgmundau,
      desc: 'Mundaú',
    },
    {
      local: 'Flecheiras',
      img: imgflecheiras,
      desc: 'Flecheiras',
    },
    {
      local: 'Jericoacoara',
      img: imgjeri,
      desc: 'Jericoacoara',
    },
  ];
    //selecionar o id do scroll, 
  return (
    <div className="bg-blue-50" id="passeios">
      <h1 className="text-center bg-blue-50 text-blue-950 font-bold text-2xl py-10 pt-10">
        Reserve sua próxima viagem
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {touritens.map((item, index) => (
          <a
            href="https://wa.me/5585981781918?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20orçamento"
            key={index}
            className="relative group"
          >
            <Image
              className="object-cover h-[200px] md:h-[300px] lg:h-[400px] opacity-100"
              src={item.img}
              alt={item.desc}
              priority
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:backdrop-brightness-50 overflow-hidden">
              <div className="">
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  animate__animated animate__fadeInUp animate__slower w-full  py-[30%] text-center hover:text-amber-400 text-lg font-medium transition delay-50 duration-100 ease-in-out  hover:scale-110 text-white">
                  {item.local}
                </h2>
                <span className="absolute top-15 md:top-30 lg:top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2  animate__animated animate__fadeInUp animate__slower mt-20 text-sm cursor-pointer flex gap-2 bg-gray-400/40 text-white rounded-2xl p-1 px-3 items-center justify-center w-35 my-10">
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
