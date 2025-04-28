import { FaWhatsapp } from 'react-icons/fa';
import 'animate.css';

const RedirectLink = ({icon='true'}) => {
  return (
    <a
      href="https://wa.me/5585981781918?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20passeio"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 text-white p-3 ${
        icon
          ? 'shadow-lg rounded-full animate__animated animate__pulse animate__infinite infinite bg-green-500 hover:bg-green-600 transition-all'
          : 'bg-white opacity-80'
      }`}
    >
      {icon ? <FaWhatsapp className="w-8 h-8" /> : 'Reserve Já'}
    </a>
  );
};

export default RedirectLink;
