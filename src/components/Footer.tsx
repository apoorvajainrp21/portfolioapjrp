
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">
              JD
            </span>
          </div>
          
          <div className="text-white/50 flex gap-4 uppercase text-sm tracking-wider">
            <a href="#" className="hover:text-white transition-colors">E-MAIL</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
