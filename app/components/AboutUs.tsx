import React from 'react';
import 'animate.css';
import Image from 'next/image';
import buggy from '../../public/buggy.jpeg'
import { poppins } from '../fonts';

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-blue-50 sm:px-20 md:px-40 lg:px-20 text-gray-500 xl:gap-30 lg:gap-10 justify-center overflow-hidden lg:items-center pb-20">
      <Image
        src={buggy}
        alt="..."
        className="animate__animated animate__fadeInLeft animate__slower lg:w-[40%] w-full"
      />
      <div
        className="animate__animated animate__fadeInRight animate__slower w-full lg:w-[40%] px-5 xl:px-10"
        id="sobre-nos"
      >
        <h1
          className={`${poppins.className} text-[24px] mb-5 mt-20  font-semibold text-justify text-[#0082ca]`}
        >
          Explore o mundo com a LisTur
        </h1>
        <p className="text-justify pb-3 text-base/7">
          Bem-vindo à nossa agência de turismo, onde a beleza das praias de
          Fortaleza e região ganha vida! Somos uma equipe apaixonada por
          compartilhar o que há de melhor no litoral cearense, oferecendo
          <strong>
            {' '}
            experiências únicas e inesquecíveis para nossos clientes
          </strong>
          . Nosso objetivo é proporcionar um{' '}
          <strong>atendimento personalizado</strong>, guiando você por{' '}
          <strong>lugares paradisíacos</strong>, com toda a infraestrutura e{' '}
          <strong>conforto</strong> que você merece. Trabalhamos com dedicação
          para que sua viagem seja perfeita, com{' '}
          <strong>
            roteiros sob medida, serviços de qualidade e suporte constante
          </strong>
          .
          <p className="italic text-[#0082ca] pt-5 text-start">
            É o cenário ideal para quem busca diversão, relaxamento e novas
            descobertas.
          </p>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
