import React from 'react';
import 'animate.css';
import Image from 'next/image';
import buggy from '../../public/buggy.jpeg'
import { bebasneue } from '../layout';

const AboutUs = () => {
  return (
      <section className="flex bg-blue-50 px-60 text-gray-500 justify-between pt-30 flex-wrap-reverse ">
        <Image
          src={buggy}
          alt="..."
          className="animate__animated animate__fadeInRight animate__slower w-90 mb-30 rounded-3xl"
        />
      <div className="animate__animated animate__fadeInLeft animate__slower w-[50%]">
        <h1
          className={`${bebasneue.className} text-6xl font-bold my-7 text-center text-[#0082ca]`}
        >
          SOBRE NÓS
        </h1>
        <p className="text-justify pb-14 text-base/7">
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
          <strong>conforto</strong> que você merece. Com anos de experiência no
          ramo de turismo, trabalhamos com dedicação para que sua viagem seja
          perfeita, com{' '}
          <strong>
            roteiros sob medida, serviços de qualidade e suporte constante
          </strong>
          . Fortaleza, com suas praias de águas cristalinas, dunas exuberantes e
          cultura vibrante, é o cenário ideal para quem busca{' '}
          <strong>diversão, relaxamento e novas descobertas</strong>.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
