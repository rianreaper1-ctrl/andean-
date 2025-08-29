import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCarousel from '@/components/ProductCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<'es' | 'en' | 'zh'>('es');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll animation observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    // Section observer for navigation highlighting
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
      />
      <Hero currentLang={currentLang} />
      <ProductCarousel currentLang={currentLang} />
      <About currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
