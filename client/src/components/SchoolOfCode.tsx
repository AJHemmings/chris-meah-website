import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const stats = [
  { number: "16", label: "Weeks of intensive training" },
  { number: "85%", label: "Job placement success rate" },
  { number: "1000+", label: "Bootcamp graduates" },
  { number: "100%", label: "Free for participants" },
];

const SchoolOfCode = () => {
  const { ref: sectionRef, inView } = useReveal();
  const { ref: imageRef, opacity } = useReveal(true);

  return (
    <section
      ref={sectionRef}
      id="school-of-code"
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl">
            School of Code
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Founded by Chris Meah, School of Code has transformed hundreds of
            lives through intensive tech bootcamps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={
              inView ? { opacity: opacity, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ opacity }} // Apply scroll-based opacity directly
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="School of Code bootcamp in action"
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-['Inter'] font-semibold text-2xl mb-4">
              Transforming Careers
            </h3>
            <p className="text-gray-300 mb-6">
              Since founding School of Code, I've led the development of an
              innovative bootcamp model that has helped hundreds of people from
              diverse backgrounds transform their careers and enter the tech
              industry.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-light p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="font-['Space_Grotesk'] font-bold text-4xl text-secondary mb-2">
                    {stat.number}
                  </h4>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild className="bg-accent hover:bg-accent-light">
              <a
                href="https://www.schoolofcode.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About School of Code
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          className="mt-16 bg-primary-light rounded-xl p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute -top-4 -left-4 text-5xl text-secondary opacity-70">
            <Quote className="h-12 w-12" />
          </div>
          <blockquote className="text-xl text-gray-200 italic ml-8 mb-4">
            School of Code represents my vision for how education should
            work—accessible to all, focused on real-world skills, and designed
            to create genuine opportunities. The same principles guide my
            approach to AI consulting and training.
          </blockquote>
          <p className="text-right text-gray-300 font-semibold">
            — Chris Meah, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolOfCode;
