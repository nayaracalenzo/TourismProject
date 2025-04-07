import { FaWhatsapp } from 'react-icons/fa';

const RedirectLink = ({icon='true'}) => {
  return (
    <a
      href="https://wa.me/5585996823822"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 text-white p-3 ${icon ? 'shadow-lg rounded-full bg-green-500 hover:bg-green-600 transition-all' : 'bg-white opacity-80' }`}

    >
      {icon ? <FaWhatsapp className="w-8 h-8" /> :"Reserve Já"}
    </a>
  );
};

export default RedirectLink;
