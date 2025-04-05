
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Apply data-theme attribute to document element
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Apply or remove classes based on theme
    if (savedTheme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [theme, setTheme]);
  
  return (
    <div className="relative" data-theme={theme}>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
