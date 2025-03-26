import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Chris has a remarkable ability to explain complex AI concepts in a way that makes them accessible and actionable. His consulting helped our team develop a practical AI strategy that's delivering real results.",
    name: "Sarah Johnson",
    role: "CTO, TechInnovate Ltd",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "The School of Code changed my life. Chris's vision and leadership created an environment where I could truly thrive and transition into tech. Now I'm working as a developer at a company I love!",
    name: "James Wilson",
    role: "School of Code Graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Chris was the highlight of our annual conference. His talk on practical AI implementation was informative, engaging, and left our attendees with concrete steps they could take back to their organizations.",
    name: "Emma Thompson",
    role: "Event Director, TechConf",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "The AI training Chris provided for our team was outstanding. He tailored the content perfectly to our needs, and we're now confidently implementing AI solutions that are transforming our business processes.",
    name: "David Chen",
    role: "Head of Innovation, FutureTech Inc",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  const { ref: sectionRef, inView } = useReveal();
  // Add fade-on-scroll effect for testimonial images
  const { ref: imageRef, opacity } = useReveal(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const cardsPerView = isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    
    const cardWidth = trackRef.current.clientWidth / cardsPerView;
    trackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 relative z-10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-white">Testimonials</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Feedback from clients, bootcampers, and event organizers
          </p>
        </motion.div>
        
        <div className="testimonial-slider relative">
          <motion.div 
            ref={trackRef}
            className="testimonial-track flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4 snap-start"
              >
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div 
                      ref={index === 0 ? imageRef : undefined} 
                      className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4"
                      style={{ opacity }} // Apply scroll-based opacity directly
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="mt-8 flex justify-center space-x-2">
            <Button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              size="icon"
              variant="default"
              className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-light disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              size="icon"
              variant="default"
              className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-light disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
