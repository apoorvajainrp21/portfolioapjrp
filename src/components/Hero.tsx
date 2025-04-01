
import { heroData } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-0 relative wave-background"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <h1 className="text-giant mb-8">
              MULTI-<br/>DISCIPLINARY<br/>DESIGNER
            </h1>
            
            <div className="mt-8 hidden md:block">
              <a href="#education" className="scroll-down-link" aria-label="Scroll down">
                <div className="scroll-indicator"></div>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-white/80 text-lg tracking-wide leading-relaxed">
              CREATIVE THINKING AND PROBLEM-SOLVING ARE WHERE MY MIND WANDERS, USING MY KNOWLEDGE AND PASSION FOR DESIGN AS MY MEDIUM.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex">
        <a 
          href="#education" 
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
