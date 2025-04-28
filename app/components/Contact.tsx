import { FaWhatsapp } from "react-icons/fa6";
import 'animate.css';

const Contact = () => {
  return (
    <section className="text-center bg-black/80 py-20 text-white flex flex-col items-center" id="contato">
      <h1 className="pb-5 font-bold text-2xl">Planeje Sua Viagem Conosco!</h1>
      <p>
        Quer saber mais sobre nossos passeios e pacotes? Entre em contato com
        nossa equipe e prepare-se para uma experiência única em Fortaleza!
      </p>
      <a
        href="https://wa.me/5585981781918?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20passeio"
        className="animate__animated animate__fadeInLeft animate__slower mx-auto px-10 py-1 gap-1 cursor-pointer text-gray-100 hover:bg-green-600 flex bg-green-500 rounded-lg  items-center justify-center w-fit lg:mx-0 lg:mt-5 font-bold"
      >
        <FaWhatsapp className="" />
        Fale com nossa equipe!
      </a>
    </section>
  );
};

export default Contact;
