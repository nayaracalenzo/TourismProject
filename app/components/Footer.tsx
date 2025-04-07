import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
// import { bebasneue } from '../layout';
import RedirectLink from '../components/RedirectLink';
import logo from '../../public/listurlogo1.png'

const Footer = () => {   
  return (
    <footer className="pr-10 bg-gray-900 text-white py-5">
      <div className="flex items-center  pb-5 justify-evenly p-20 ">
        <div className="w-[35%] flex items-center">
          <Image src={logo} alt="logo" className="w-30" />
          <p className="text-justify">
            Serviço de táxi e turismo em Fortaleza-Ce, Transfer, Viagens,
            Passeios, Aeroportos, Agendamentos.
          </p>
        </div>
        <nav className='grid gap-3'>
          <ul className='flex items-center gap-2 pb-2'>
            <li>
              <a href="https://www.instagram.com/juninhopraianoturismo/">
                <FaInstagram className="w-7 h-7 hover:text-blue-700" />
              </a>
            </li>
            <li className="cursor-pointer
              flex
              gap-2
              rounded-2xl
              p-2
              items-center
              justify-center"
            >
                <a className='flex gap-2' href="">
                <FaEnvelope className="w-7 h-7" />
                <span>listur001@gmail.com</span>
              </a>
            </li>
            </ul>
            <ul>
            <li className="cursor-pointer hover:bg-green-600 flex gap-2 bg-green-500 rounded-2xl p-2 px-4 items-center justify-center">
              <a className="flex items-center gap-2" href="https://wa.me/5585996823822">
                <FaWhatsapp className="" />
              Reserve Já
              </a>
              
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-center pt-5 w-[60%] mx-auto">
        &copy; {new Date().getFullYear()} – Lis Tur. Todos os direitos
        reservados.
      </p>
      <RedirectLink />
    </footer>
  );
}

export default Footer
