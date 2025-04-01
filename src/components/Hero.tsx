
import { heroData } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-0"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-portfolio-blue font-medium mb-2">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkBlue mb-4">
              {heroData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-portfolio-gray mb-6">
              {heroData.title}
            </h2>
            <p className="text-lg text-portfolio-darkBlue/80 max-w-lg mb-8">
              {heroData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-portfolio-blue hover:bg-portfolio-blue/90 text-white rounded-md"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] bg-portfolio-lightBlue/30 rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2340&auto=format&fit=crop')",
                  backgroundPosition: "center 30%"
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-portfolio-blue/10 rounded-lg z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-portfolio-blue/10 rounded-lg z-[-1]"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex animate-bounce">
          <a 
            href="#education" 
            className="flex flex-col items-center text-portfolio-blue/70 hover:text-portfolio-blue transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
