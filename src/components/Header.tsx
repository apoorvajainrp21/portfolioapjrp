
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { MenuContainer, MenuItem } from '@/components/ui/fluid-menu';
import { Menu as MenuIcon, X, Home, User, BookOpen, Briefcase, Code, Mail } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'education', label: 'EDUCATION', icon: BookOpen },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
    { id: 'projects', label: 'PROJECTS', icon: Code },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ];

  const tabs = navItems.map(item => ({
    title: item.label,
    icon: item.icon
  }));

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Find current active section
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'contact'];
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

  const handleExpandableTabChange = (index: number | null) => {
    if (index !== null) {
      const sectionId = navItems[index].id;
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuItemClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  // Hide header when in contact section
  if (activeSection === 'contact') {
    return null;
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent",
        "body.light:bg-white/90 body.light:backdrop-blur-sm"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-[#f8f8f8]">
            {activeSection === 'home' ? (
              <span>
                <span className="font-normal">APOORVA</span>{" "}
                <span className="font-bold">JAIN</span>
              </span>
            ) : (
              <span className="font-bold">AJ</span>
            )}
          </a>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="fixed bottom-6 right-6 z-50">
                <MenuContainer>
                  <MenuItem 
                    icon={
                      <div className="relative w-6 h-6">
                        <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                          <MenuIcon size={24} strokeWidth={1.5} />
                        </div>
                        <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                          <X size={24} strokeWidth={1.5} />
                        </div>
                      </div>
                    } 
                  />
                  {navItems.map((item, index) => (
                    <MenuItem 
                      key={item.id}
                      icon={<item.icon size={24} strokeWidth={1.5} />} 
                      onClick={() => handleMenuItemClick(item.id)}
                    />
                  ))}
                </MenuContainer>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <ExpandableTabs 
                tabs={tabs} 
                activeColor="text-[#f8f8f8]"
                className="border-[#f8f8f8]/10 bg-black/50" 
                onChange={handleExpandableTabChange}
              />
              <ThemeToggle />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
