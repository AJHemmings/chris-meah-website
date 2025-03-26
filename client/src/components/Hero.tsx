import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";

const Hero = () => {
  // Reference to the section for scroll-based effects
  const sectionRef = useRef(null);
  
  // State to track scroll position
  const [scrollY, setScrollY] = useState(0);
  
  // Scroll progress for image fade effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to opacity value (1 at top, 0 as user scrolls down)
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Handle scroll event to update state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The hero section now has a fixed background that continues throughout the site
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center text-white py-20 overflow-hidden"
    >
      {/* Main content container - ParticleCanvas removed as it's now in App.tsx */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content with enhanced styling */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced heading with gradient text effect */}
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Hi, I'm <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Chris Meah</span>
            </h1>
            
            {/* Subheading with enhanced styling */}
            <h2 className="font-['Inter'] text-2xl sm:text-3xl lg:text-4xl leading-tight">
              I <span className="text-accent font-bold">build</span>, 
              <span className="text-secondary font-bold"> train</span>, and 
              <span className="text-white font-bold bg-accent px-2 rounded-md"> speak</span> about AI
            </h2>
            
            {/* Description text */}
            <p className="text-lg text-gray-200 max-w-xl font-light leading-relaxed">
              Helping organizations and individuals harness the power of artificial intelligence through practical consulting, tailored training, and engaging public speaking.
            </p>
            
            {/* Buttons removed as requested */}
          </motion.div>
          
          {/* Image section with scroll-based fade effect */}
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: imageOpacity }} // Fade out as user scrolls
          >
            {/* Main image with animation removed */}
            <div className="rounded-2xl shadow-2xl max-w-md mx-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI visualization"
                className="w-full h-full object-cover"
                // Animation removed as requested
              />
            </div>
            
            {/* Decorative elements - keeping them static now */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-70" />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
