
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Home, GraduationCap, Briefcase, Folder, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Find current active section
      const sections = ['home', 'education', 'experience', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Folder size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-portfolio-darkBlue">
            <span className="text-portfolio-blue">JD</span>
          </a>
          
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={cn(
                    "flex items-center gap-1.5 px-1 py-2 text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "text-portfolio-blue"
                      : "text-portfolio-darkBlue hover:text-portfolio-blue"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden flex items-center gap-4">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  activeSection === item.id
                    ? "text-portfolio-blue bg-portfolio-lightBlue/30"
                    : "text-portfolio-darkBlue hover:text-portfolio-blue"
                )}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
