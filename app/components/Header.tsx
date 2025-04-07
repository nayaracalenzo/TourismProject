import React from 'react';
import Image, { StaticImageData } from 'next/image';
import logo from '../../public/logosombra.png';
import 'animate.css';

interface HeaderProps {
  bgImage: StaticImageData;
  title: string;
}

const Header = ({bgImage, title}: HeaderProps) => {
  return (
    <header className="relative w-full py-10 pb-50 text-white">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={bgImage}
          alt="Background Header"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>{' '}
        {/* camada de escurecimento */}
      </div>
      <div className="relative z-10 flex justify-between items-center px-40">
        <Image className="w-40 contrast-200" src={logo} alt="logo" />
        <nav className="h-10">
          <ul className="text-white flex gap-10 justify-end font-medium ">
            <li className="duration-100 border-b-3 border-b-amber-300">
              INÍCIO
            </li>
            <li className="duration-100 hover:border-b-3 border-b-amber-300">
              SOBRE NÓS
            </li>
            <li className="duration-100 hover:border-b-3 border-b-amber-300">
              PASSEIOS
            </li>
            <li className="duration-100 hover:border-b-3 border-b-amber-300">
              CONTATO
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="relative z-10 text-white font-medium text-center text-3xl py-[200px]">
        {title}
      </h1>
    </header>
  );
}

export default Header
