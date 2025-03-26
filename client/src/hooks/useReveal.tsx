import { useRef, useState, useEffect } from "react";

// Enhanced useReveal hook that also supports image fade effects based on scrolling
export const useReveal = (fadeOnScroll = false) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [opacity, setOpacity] = useState(1); // For fade effect when scrolling

  // Initial reveal based on intersection observer
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element comes into view
        if (entry.isIntersecting) {
          setInView(true);
          // If we're not using scroll-based opacity, we can stop observing
          if (!fadeOnScroll && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (fadeOnScroll) {
          // If element goes out of view and we're using fade effect
          setInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "-50px 0px" // Trigger a bit before the element comes into view
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fadeOnScroll]);

  // Handle scroll-based opacity if requested
  useEffect(() => {
    if (!fadeOnScroll) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport center
      const distanceFromCenter = Math.abs((rect.top + rect.height / 2) - (windowHeight / 2));
      
      // Normalize to get opacity between 0 and 1
      // The further from center, the lower the opacity
      const maxDistance = windowHeight * 0.8; // When element is this far from center, opacity = 0
      const calculatedOpacity = Math.max(0, 1 - (distanceFromCenter / maxDistance));
      
      setOpacity(calculatedOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fadeOnScroll]);

  return { ref, inView, opacity };
};
