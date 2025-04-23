import React, { useEffect } from 'react';
import Background from './components/Background';
import FloatingElements from './components/FloatingElements';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './styles/globals.css';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.glass-card').forEach(card => {
      observer.observe(card);
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(20px)';
      (card as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Background />
      <FloatingElements />
      <div className="container">
        <Header />
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <CtaSection />
      </div>
      <Footer />
    </>
  );
};

export default App;
