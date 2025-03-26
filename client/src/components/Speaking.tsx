import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

const pastEvents = [
  {
    date: "May 2023",
    title: "AI Summit London",
    description: "Workshop: \"Practical LLM Implementation for Businesses\"",
    location: "London, UK",
  },
  {
    date: "November 2022",
    title: "Tech Conference Europe",
    description: "Keynote: \"The Future of AI and Human Collaboration\"",
    location: "Berlin, Germany",
  },
  {
    date: "September 2022",
    title: "Corporate AI Summit",
    description: "Panel Discussion: \"AI Implementation Strategies\"",
    location: "Manchester, UK",
  },
  {
    date: "June 2022",
    title: "EdTech Conference",
    description: "Talk: \"AI in Education: Opportunities and Challenges\"",
    location: "Birmingham, UK",
  },
  {
    date: "March 2022",
    title: "Enterprise AI Forum",
    description: "Workshop: \"Building AI Readiness in Organizations\"",
    location: "Online",
  },
  {
    date: "October 2021",
    title: "Digital Transformation Summit",
    description: "Keynote: \"The Human Side of AI Transformation\"",
    location: "London, UK",
  },
];

const topics = [
  "AI Crash Courses: From Fundamentals to Implementation",
  "The Future of Work in the Age of AI",
  "Building Ethical AI Systems: Principles and Practices",
  "Practical AI: From Hype to Real-World Value",
];

const Speaking = () => {
  const { ref: sectionRef, inView } = useReveal();

  const eventVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      }
    })
  };

  return (
    <section ref={sectionRef} id="speaking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-primary">Public Speaking</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Engaging talks and workshops that demystify AI and inspire action
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-['Inter'] font-semibold text-2xl mb-4 text-primary">Expert AI Speaker</h3>
            <p className="text-gray-600 mb-4">
              I deliver engaging, accessible talks on artificial intelligence for audiences ranging from corporate executives to conference attendees and educational institutions.
            </p>
            <p className="text-gray-600 mb-6">
              My speaking style combines technical expertise with practical insights, ensuring that complex AI concepts are made accessible and actionable for any audience.
            </p>
            
            <h4 className="font-medium text-lg text-primary mb-3">Popular Topics Include:</h4>
            <ul className="space-y-2 mb-8">
              {topics.map((topic, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{topic}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button asChild className="bg-secondary hover:bg-secondary-light">
              <a href="#contact">Book for Your Event</a>
            </Button>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                alt="Chris Meah speaking at a conference" 
                className="rounded-xl shadow-lg" 
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-accent h-20 w-20 rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Past events */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-['Inter'] font-semibold text-2xl mb-6 text-primary text-center">Past Speaking Engagements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                custom={index}
                initial="hidden"
                variants={eventVariants}
                animate={inView ? "visible" : "hidden"}
              >
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-secondary mr-2" />
                  <span className="text-gray-500 text-sm">{event.date}</span>
                </div>
                <h4 className="font-medium text-lg mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{event.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;
