import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-primary text-white py-20 overflow-hidden">
      <ParticleCanvas />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Hi, I'm <span className="text-secondary">Chris Meah</span>
            </h1>
            <h2 className="font-['Inter'] text-2xl sm:text-3xl lg:text-4xl leading-tight">
              I <span className="text-accent">build</span>, <span className="text-accent">train</span>, and <span className="text-accent">speak</span> about AI
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Helping organizations and individuals harness the power of artificial intelligence through practical consulting, tailored training, and engaging public speaking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light">
                <a href="#services">Discover My Services</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-primary-light">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl shadow-2xl max-w-md mx-auto overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI visualization"
                className="w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-70"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full opacity-60"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
