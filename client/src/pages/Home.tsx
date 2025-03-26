import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SchoolOfCode from "@/components/SchoolOfCode";
import Speaking from "@/components/Speaking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

/**
 * Home component that renders all sections of the website.
 * We've modified this component to work with the continuous background
 * that's now set in the App component.
 */
const Home = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    // Handles smooth scrolling when clicking on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    // Main container with full height over the continuous background
    <div className="font-['Roboto'] text-gray-800 relative">
      {/* Header and hero are placed directly in the container to get transparent background */}
      <Header />
      <Hero />
      
      {/* Content sections */}
      <div className="relative">
        {/* Background layers for better readability while maintaining the continuous background effect */}
        <div className="bg-white/80 backdrop-blur-sm">
          <About />
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm text-white">
          <Services />
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm">
          <SchoolOfCode />
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm text-white">
          <Speaking />
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm">
          <Testimonials />
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm text-white">
          <Contact />
        </div>
        
        <div className="bg-black/80 text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
