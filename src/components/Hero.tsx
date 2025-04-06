
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const greetings = [
    "Hello",          // English
    "Hola",           // Spanish
    "Bonjour",        // French
    "Ciao",           // Italian
    "Konnichiwa",     // Japanese
    "Namaste",        // Hindi
    "Ni Hao",         // Chinese
    "Salaam",         // Arabic
    "Guten Tag",      // German
    "Olá"             // Portuguese
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle the typing effect
      if (!isDeleting && currentGreeting.length < greetings[currentIndex].length) {
        // Still typing
        setCurrentGreeting(prev => greetings[currentIndex].substring(0, prev.length + 1));
        setTypingSpeed(150);
      } else if (!isDeleting && currentGreeting.length === greetings[currentIndex].length) {
        // Finished typing, pause before deleting
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause before deleting
      } else if (isDeleting && currentGreeting.length > 0) {
        // Deleting
        setCurrentGreeting(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(100);
      } else if (isDeleting && currentGreeting.length === 0) {
        // Move to next greeting
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % greetings.length);
        setTypingSpeed(300); // Pause before typing next word
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentGreeting, currentIndex, isDeleting, typingSpeed, greetings]);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-0 relative px-[15px]"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <h1 className="text-giant mb-8">
              COMPUTER<br/>ENGINEER <span className="text-red-500">+</span><br/>SOFTWARE DEVELOPER
            </h1>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-3 h-8">
              {currentGreeting}<span className="animate-pulse">|</span>
            </h3>
            <p className="text-foreground/80 text-lg tracking-wide leading-relaxed">
              Blending hardware expertise with software innovation. From circuit boards to secure code, I love designing and securing technologies that balance resilience with revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
