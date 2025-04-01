
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkBlue text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-portfolio-blue">JD</span>
            </span>
          </div>
          
          <div className="text-center md:text-right text-white/70">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Designed & built with <Heart size={16} className="text-portfolio-blue" /> 
            </p>
            <p className="mt-1">© {currentYear} Jane Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
