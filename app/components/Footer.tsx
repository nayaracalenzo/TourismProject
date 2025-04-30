import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import RedirectLink from '../components/RedirectLink';
import logo from '../../public/listurlogo1.png';
import cadastur from '../../public/cadastur.png';

const Footer = () => {
  return (
    <footer className="px-3 bg-gray-900 text-white py-25 lg:py-10">
      <div className="flex flex-col items-center justify-center gap-20 lg:gap-100 lg:flex-row">
        <div className="flex lg:flex-row lg:w-[40%] flex-col gap-5 justify-center items-center">
          <Image src={logo} alt="logo" className="w-30" />
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-center lg:text-start">
              Serviço de táxi e turismo em Fortaleza-Ce. Transfer, Viagens,
              Passeios, Aeroportos, Agendamentos.
            </p>
            <p>(85) 98178-1918</p>
          </div>
        </div>

        <div className="block text-center">
          <p className="text-sm">EMPRESA CADASTRADA</p>
          <Image
            src={cadastur}
            alt="empresa credenciada cadastur"
            className="w-50 p-3"
          />
        </div>
      </div>
      <nav className="w-[100%] gap-3 py-10 ">
        <h2 className="font-bold text-center">Conecte-se</h2>
        <ul className="flex items-center justify-center gap-2 pb-2">
          <li className="cursor-pointer">
            <a href="https://www.instagram.com/listurpasseiosturisticos/">
              <FaInstagram className="w-7 h-7 mx-auto" />
            </a>
          </li>
          <li className="cursor-pointer p-2">
            <a
              className="grid gap-2 justify-center"
              href="mailto:listur001@gmail.com"
            >
              <FaEnvelope className=" w-7 h-7 mx-auto" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center w-[95%] mx-auto">
        &copy; {new Date().getFullYear()} – Lis Tur. Todos os direitos
        reservados.
      </p>
      <RedirectLink />
    </footer>
  );
};

export default Footer;
