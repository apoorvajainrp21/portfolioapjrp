
import { contactData } from '@/data/content';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { useTheme } from 'next-themes';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-6 border-t border-foreground/10">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-4"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
          
          <div className="text-foreground/70 text-sm text-center">
            © {currentYear} All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/apoorvajainrp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/apoorvajainrp21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
