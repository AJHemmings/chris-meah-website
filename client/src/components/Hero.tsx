import { motion } from "framer-motion";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const Hero = () => {
  // Use the consistent reveal hook for the section
  const { ref: sectionRef, inView } = useReveal();
  
  // Use the same fade-on-scroll effect as other components for consistency
  const { ref: imageRef, opacity } = useReveal(true);

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
            {/* Enhanced heading with AI-inspired text effect - no animation */}
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Hi, I'm <span className="ai-highlight">Chris Meah</span>
            </h1>
            
            {/* Subheading with AI-inspired colors for each word */}
            <h2 className="font-['Inter'] text-2xl sm:text-3xl lg:text-4xl leading-tight">
              I <span className="ai-glow font-extrabold font-['Space_Grotesk']">build</span>, 
              <span className="text-amber-400 font-extrabold font-['Montserrat']"> train</span>, and 
              <span className="text-sky-400 font-extrabold italic"> speak</span> about <span className="ai-accent font-['Space_Grotesk'] font-extrabold">AI</span>
            </h2>
            
            {/* Description text with subtle glow effect */}
            <p className="text-lg text-gray-100 max-w-xl font-light leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5">
              Helping organizations and individuals harness the power of artificial intelligence through practical consulting, tailored training, and engaging public speaking.
            </p>
            
            {/* Buttons removed as requested */}
          </motion.div>
          
          {/* Image section with scroll-based fade effect and AI styling */}
          <motion.div 
            ref={imageRef}
            className="hidden md:block relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: opacity } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main image with AI-inspired card styling */}
            <div className="ai-card max-w-md mx-auto overflow-hidden p-1">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI visualization"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* AI-inspired decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#5D5FEF]/30 backdrop-blur-sm rounded-full" />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FF0080]/30 backdrop-blur-sm rounded-full" />
            
            {/* AI circuit pattern decorative elements */}
            <div className="absolute top-1/2 -left-8 w-8 h-1 bg-[#00FFCC]" />
            <div className="absolute top-1/4 -right-8 w-8 h-1 bg-[#5D5FEF]" />
            <div className="absolute bottom-1/4 -right-8 w-8 h-1 bg-[#FF0080]" />
            
            {/* Data nodes */}
            <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-[#00FFCC] animate-pulse" />
            <div className="absolute -top-2 left-1/3 w-3 h-3 rounded-full bg-[#5D5FEF] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
