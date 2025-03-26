import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { Cog, BookOpen, Mic, Check } from "lucide-react";

const services = [
  {
    title: "AI Consulting",
    icon: <Cog className="h-12 w-12 text-white opacity-90" />,
    bgClass: "bg-primary/90 group-hover:bg-primary",
    buttonClass: "bg-primary hover:bg-primary-light",
    description: "Bespoke consulting to help organizations identify, develop, and implement practical AI solutions that drive real value.",
    features: [
      "Strategic AI implementation planning",
      "Custom AI solution development",
      "AI readiness assessments",
      "Ethical AI framework development",
    ],
    cta: "Enquire Now",
    href: "#contact",
  },
  {
    title: "AI Training",
    icon: <BookOpen className="h-12 w-12 text-white opacity-90" />,
    bgClass: "bg-secondary/90 group-hover:bg-secondary",
    buttonClass: "bg-secondary hover:bg-secondary-light",
    description: "Tailored training programs to equip your team with the knowledge and skills needed to leverage AI effectively.",
    features: [
      "AI fundamentals for non-technical teams",
      "Technical AI implementation workshops",
      "LLM prompt engineering masterclasses",
      "AI for executives and decision-makers",
    ],
    cta: "Book Training",
    href: "#contact",
  },
  {
    title: "AI Speaking",
    icon: <Mic className="h-12 w-12 text-white opacity-90" />,
    bgClass: "bg-accent/90 group-hover:bg-accent",
    buttonClass: "bg-accent hover:bg-accent-light",
    description: "Engaging talks and workshops on AI for conferences, corporate events, and educational institutions.",
    features: [
      "AI crash courses for non-technical audiences",
      "Future of AI and work keynotes",
      "Interactive AI demonstrations and workshops",
      "Panel discussions and expert Q&As",
    ],
    cta: "Book as Speaker",
    href: "#contact",
  },
];

const Services = () => {
  const { ref: sectionRef, inView } = useReveal();

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
      }
    })
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 relative z-10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-white">My Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Practical, tailored solutions to help you leverage AI effectively
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              custom={index}
              initial="hidden"
              variants={serviceVariants}
              animate={inView ? "visible" : "hidden"}
            >
              <div className={`h-48 ${service.bgClass} transition-colors p-8 flex items-center justify-center`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="font-['Inter'] font-semibold text-2xl mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={service.buttonClass}>
                  <a href={service.href}>{service.cta}</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
