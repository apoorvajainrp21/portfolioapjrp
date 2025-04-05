
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { MenuContainer, MenuItem } from '@/components/ui/fluid-menu';
import { Menu as MenuIcon, X, User, BookOpen, Briefcase, Code, Mail } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  const navItems = [
    { id: 'about', label: 'ABOUT', icon: User, type: "tab" as const },
    { id: 'education', label: 'EDUCATION', icon: BookOpen, type: "tab" as const },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase, type: "tab" as const },
    { id: 'projects', label: 'PROJECTS', icon: Code, type: "tab" as const },
    { id: 'contact', label: 'CONTACT', icon: Mail, type: "tab" as const }
  ];

  const tabs = navItems.map(item => ({
    title: item.label,
    icon: item.icon,
    type: "tab" as const
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
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent",
      )}
      data-theme={theme}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-foreground">
            {activeSection === 'home' ? (
              <span>
                <span className="font-light">APOORVA</span>{" "}
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
                activeColor="text-foreground"
                className="border-foreground/10" 
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
