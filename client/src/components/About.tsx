import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Bot, GraduationCap, Mic } from "lucide-react";

const About = () => {
  const { ref: sectionRef, inView } = useReveal();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-primary">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            From founding School of Code to helping organizations leverage AI effectively
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-secondary rounded-md"></div>
              <h3 className="font-['Inter'] font-semibold text-2xl mb-4 text-primary">My Journey</h3>
              <p className="text-gray-600 mb-4">
                As the founder of School of Code, I've helped hundreds of people transition into tech careers through our intensive bootcamps. My passion for technology and education has driven me to explore the cutting edge of AI development and implementation.
              </p>
              <p className="text-gray-600 mb-4">
                I work with organizations to build practical AI solutions, train teams on AI development and implementation, and speak at events to demystify artificial intelligence for audiences of all technical levels.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with a focus on practical applications, ensuring that AI serves real business and human needs rather than being technology for technology's sake.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Chris Meah speaking" 
              className="rounded-xl shadow-lg inline-block max-w-sm" 
            />
          </motion.div>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          <motion.div 
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow text-center"
            custom={0}
            initial="hidden"
            variants={cardVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-['Inter'] font-semibold text-xl mb-2 text-primary">Building AI</h3>
            <p className="text-gray-600">
              Developing practical AI solutions that solve real problems for organizations of all sizes.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow text-center"
            custom={1}
            initial="hidden"
            variants={cardVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-['Inter'] font-semibold text-xl mb-2 text-primary">Training Teams</h3>
            <p className="text-gray-600">
              Equipping teams with the knowledge and skills to develop and implement AI effectively.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow text-center"
            custom={2}
            initial="hidden"
            variants={cardVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-['Inter'] font-semibold text-xl mb-2 text-primary">Speaking</h3>
            <p className="text-gray-600">
              Engaging audiences with insights on AI's potential and practical applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
