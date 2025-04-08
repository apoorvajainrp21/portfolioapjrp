
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { MenuContainer, MenuItem } from '@/components/ui/fluid-menu';
import { Menu as MenuIcon, X, User, BookOpen, Briefcase, Code, Mail, ArrowDown } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from 'next-themes';
import FloatingActionMenu from '@/components/ui/floating-action-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  const navItems = [
    { title: "ABOUT", icon: User, id: 'about' },
    { title: "EDUCATION", icon: BookOpen, id: 'education' },
    { title: "EXPERIENCE", icon: Briefcase, id: 'experience' },
    { title: "PROJECTS", icon: Code, id: 'projects' },
    { title: "CONTACT", icon: Mail, id: 'contact' }
  ];

  const tabs = navItems.map(item => ({
    title: item.title,
    icon: item.icon,
    id: item.id
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    if (index !== null && index >= 0 && index < navItems.length) {
      const sectionId = navItems[index].id;
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileNavigation = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (activeSection === 'contact') {
    return null;
  }

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isMobile ? "pt-5" : "py-6",
        isScrolled ? 
          theme === 'dark' && isMobile ? 
            "bg-background/40 backdrop-blur-sm" : 
            "bg-background/90 backdrop-blur-sm" 
          : "bg-transparent",
      )}
      data-theme={theme}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-foreground">
            <span>
              <span className="font-light">APOORVA</span>{" "}
              <span className="font-bold">JAIN</span>
            </span>
          </a>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              {activeSection === 'home' && <ThemeToggle />}
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
      
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <FloatingActionMenu
            options={navItems.map((item) => ({
              label: item.title,
              Icon: <item.icon className="w-4 h-4 text-red-500" />,
              onClick: () => handleMobileNavigation(item.id),
            }))}
            className={theme === 'dark' ? "bg-white" : ""}
          />
        </div>
      )}
      
      {activeSection === 'home' && !isMobile && (
        <button
          onClick={scrollToNextSection}
          className="fixed bottom-6 left-6 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-5 h-5 text-foreground" />
        </button>
      )}
    </header>
  );
};

export default Header;
