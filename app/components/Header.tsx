'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import logo from '../../public/logosombra.png';
import 'animate.css';
import { FaBars, FaXmark } from 'react-icons/fa6';

interface HeaderProps {
  bgImage: StaticImageData;
}

const Header = ({ bgImage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative w-full pb-50 text-white px-1">
      <div className="absolute inset-0 fixed z-[-1]">
        <Image
          src={bgImage}
          alt="Background Header"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>{' '}
      </div>
      <div className="relative z-10 flex justify-between items-center lg:px-20 lg:py-5">
        <Image className="h-40 w-auto contrast-200" src={logo} alt="logo" />
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-white focus:outline-none absolute -top-5 right-0 px-10`}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
          <nav className="">
            <ul
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute -top-15 lg:static lg:w-full right-20 text-center lg:text-white lg:bg-transparent text-white lg:flex gap-10 justify-end font-medium h-full w-30`}
            >
              <li className="duration-100 border-b-3 border-b-amber-300">
                <a href="#">INÍCIO</a>
              </li>
              <li className="cursor-pointer duration-100 hover:border-b-3 border-b-amber-300">
                <a href="#sobre-nos">SOBRE NÓS</a>
              </li>
              <li className="cursor-pointer duration-100 hover:border-b-3 border-b-amber-300">
                <a href="#passeios">PASSEIOS</a>
              </li>
              <li className="cursor-pointer duration-100 hover:border-b-3 border-b-amber-300">
                <a href="#contato">CONTATO</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <h1 className="animate-slideUp relative z-10 text-white font-bold text-center text-3xl py-[140px] mt-10 sm:px-10">
        Seu Próximo <span className="text-yellow-300">Destino dos Sonhos</span>,
        Começa Aqui.
      </h1>
    </header>
  );
};

export default Header;
