
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
  const { theme } = useTheme();
  
  useEffect(() => {
    // Apply or remove 'light' class to body based on theme
    if (theme === 'dark') {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [theme]);
  
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
