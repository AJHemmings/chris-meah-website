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
    // Removed background colors since they're now handled by the App component
    <div className="font-['Roboto'] text-gray-800">
      {/* These components will now render over the continuous background */}
      <Header />
      <Hero />
      
      {/* Content sections with background semi-transparent overlays for readability */}
      <div className="relative z-10">
        {/* Each section now uses a semi-transparent background to maintain readability 
            while letting the main background show through */}
        <div className="bg-white/90">
          <About />
        </div>
        
        <div className="bg-primary/5">
          <Services />
        </div>
        
        <div className="bg-white/90">
          <SchoolOfCode />
        </div>
        
        <div className="bg-primary/5">
          <Speaking />
        </div>
        
        <div className="bg-white/90">
          <Testimonials />
        </div>
        
        <div className="bg-primary/5">
          <Contact />
        </div>
        
        <div className="bg-primary/90 text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
