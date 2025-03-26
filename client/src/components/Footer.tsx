import { Link } from "wouter";
import { Linkedin, Twitter, Rss } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="text-2xl font-['Space_Grotesk'] font-bold">Chris Meah</a>
            <p className="mt-4 text-gray-300">
              Building, training, and speaking about AI to help organizations and individuals harness the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#school-of-code" className="text-gray-300 hover:text-accent transition-colors">School of Code</a></li>
              <li><a href="#speaking" className="text-gray-300 hover:text-accent transition-colors">Speaking</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/chris-meah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/chrismeah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://chrismeah.substack.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Blog"
              >
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Chris Meah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
