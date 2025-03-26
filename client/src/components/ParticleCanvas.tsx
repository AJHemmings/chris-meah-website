import { useRef, useEffect } from "react";

// Define the particle structure
interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // AI-inspired color palette for particles
    const colors = [
      '#5D5FEF', // Electric Blue
      '#00FFCC', // Neon Cyan
      '#9D4EDD', // Bright Purple
      '#3A86FF', // Vivid Blue
      '#FF0080'  // Bright Pink
    ];
    
    // Set up canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles - increased count for more AI-like neural network appearance
    const particles: Particle[] = [];
    const particleCount = 150; // Increased count
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 0.5, // Slightly larger particles
        vx: (Math.random() - 0.5) * 0.7, // More dynamic movement
        vy: (Math.random() - 0.5) * 0.7, // More dynamic movement
        alpha: Math.random() * 0.7 + 0.2, // Higher base opacity
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    // Draw connections between particles - AI neural network style
    const drawConnections = () => {
      // Connect more particles with longer range for neural network effect
      const connectionDistance = 180; // Increased connection distance
      
      for (let i = 0; i < particles.length; i++) {
        // Limit connections to closest particles for better performance
        let connections = 0;
        const maxConnections = 3 + Math.floor(Math.random() * 3); // Variable connections
        
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue; // Skip self
          
          const p1 = particles[i];
          const p2 = particles[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance && connections < maxConnections) {
            connections++;
            
            // Create gradient line for more AI-like effect
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color.replace(')', `, ${0.15 * (1 - distance / connectionDistance)})`).replace('rgb', 'rgba'));
            gradient.addColorStop(1, p2.color.replace(')', `, ${0.15 * (1 - distance / connectionDistance)})`).replace('rgb', 'rgba'));
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            
            // Add pulse effect on random connections for data flow simulation
            if (Math.random() > 0.99) {
              const pulseSize = 2 + Math.random() * 3;
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              
              ctx.beginPath();
              ctx.arc(midX, midY, pulseSize, 0, Math.PI * 2);
              ctx.fillStyle = p1.color.replace(')', `, 0.7)`).replace('rgb', 'rgba');
              ctx.fill();
            }
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      drawConnections();
      
      // Draw and update particles
      particles.forEach(p => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleCanvas;
