import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  connections: number[];
  pulses: {
    partnerId: number;
    ttl: number;
    size: number;
    x: number;
    y: number;
  }[];
}

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ============================================================
    // CONFIGURATION SECTION - Edit these values to adjust animation
    // ============================================================

    // PARTICLE APPEARANCE
    // ===================
    // AI-inspired color palette for particles - add or change colors here
    const colors = [
      "#5D5FEF", // Electric Blue
      "#00FFCC", // Neon Cyan
      "#9D4EDD", // Bright Purple
      "#3A86FF", // Vivid Blue
      "#FF0080", // Bright Pink
    ];

    // Number of particles to create - higher numbers create more connections but slower performance
    const particleCount = 150;

    // Min and max radius for particles (visual size)
    const minParticleRadius = 0.5;
    const maxParticleRadius = 3;

    // Base opacity range for particles
    const minParticleOpacity = 0.2;
    const maxParticleOpacity = 0.7;

    // PARTICLE MOVEMENT
    // =================
    // Velocity factor - lower values make particles move slower
    const velocityFactor = 0.3;

    // CONNECTION SETTINGS
    // ===================
    // Maximum distance for particles to connect
    const connectionDistance = 150; // Reduced distance for more stable connections

    // Line width for connections
    const connectionLineWidth = 0.5; // Thinner lines for more subtle effect

    // Base opacity for connections - higher values make lines more visible
    const connectionOpacity = 0.12; // Reduced opacity for more subtle effect

    // Minimum connections per particle (prevents isolated particles)
    const minConnections = 1; // Reduced minimum connections

    // Maximum connections per particle (prevents overcrowding)
    const maxExtraConnections = 1; // Total connections = minConnections + random(0 to maxExtraConnections)

    // CONNECTION STABILITY
    // ===================
    // Connection stability factor - higher values make connections more persistent
    // Set to 1.0 for completely stable connections (no flickering)
    // Set to 0.0 for completely random connections each frame
    const connectionStability = 0.98; // 98% chance to maintain existing connections - very stable

    // PULSE EFFECTS
    // =============
    // Probability of new pulse appearing (per frame, per eligible connection)
    // Lower values = fewer pulses
    const pulseProbability = 0.001; // 0.1% chance per frame per connection (less frequent)

    // Pulse size range
    const minPulseSize = 1.0;
    const maxPulseSize = 2.5; // Smaller pulse size for more subtle effect

    // Pulse opacity
    const pulseOpacity = 0.4; // Lower opacity for more subtle pulses

    // How long pulses last (in frames)
    const pulseDuration = 45; // Shorter duration for pulses

    // ============================================================
    // END OF CONFIGURATION SECTION
    // ============================================================

    // Set up canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles array
    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius:
          Math.random() * (maxParticleRadius - minParticleRadius) +
          minParticleRadius,
        vx: (Math.random() - 0.5) * velocityFactor,
        vy: (Math.random() - 0.5) * velocityFactor,
        alpha:
          Math.random() * (maxParticleOpacity - minParticleOpacity) +
          minParticleOpacity,
        color: colors[Math.floor(Math.random() * colors.length)],
        connections: [], // Store connected particles to prevent flickering
        pulses: [], // Store active pulse effects
      });
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Calculate distance between two particles
    const getDistance = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Draw connections between particles - AI neural network style
    const drawConnections = () => {
      // First, update which particles should be connected (only partially each frame for stability)
      particles.forEach((p1, i) => {
        // Calculate distances to all other particles
        const distances: { index: number; distance: number }[] = [];

        for (let j = 0; j < particles.length; j++) {
          if (i !== j) {
            const p2 = particles[j];
            const distance = getDistance(p1, p2);

            if (distance < connectionDistance) {
              distances.push({ index: j, distance });
            }
          }
        }

        // Sort by distance (closer particles first)
        distances.sort((a, b) => a.distance - b.distance);

        // Determine how many connections this particle should have
        const totalConnections =
          minConnections +
          Math.floor(Math.random() * (maxExtraConnections + 1));

        // Update connections list - maintain stability by keeping existing connections when possible
        const newConnections: number[] = [];

        // First, try to keep existing connections if they're still within range
        p1.connections.forEach((existingIdx) => {
          const stillExists = distances.some((d) => d.index === existingIdx);
          if (stillExists && Math.random() < connectionStability) {
            newConnections.push(existingIdx);
            // Remove from distances so we don't add it twice
            const idx = distances.findIndex((d) => d.index === existingIdx);
            if (idx !== -1) {
              distances.splice(idx, 1);
            }
          }
        });

        // Then add new connections until we reach the desired total
        while (
          newConnections.length < totalConnections &&
          distances.length > 0
        ) {
          const next = distances.shift();
          if (next) {
            newConnections.push(next.index);
          }
        }

        p1.connections = newConnections;
      });

      // Now draw all connections
      particles.forEach((p1, i) => {
        p1.connections.forEach((j) => {
          const p2 = particles[j];

          // Create gradient line
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          const distance = getDistance(p1, p2);
          const opacity =
            connectionOpacity * (1 - distance / connectionDistance);

          gradient.addColorStop(
            0,
            p1.color.replace(")", `, ${opacity})`).replace("rgb", "rgba")
          );
          gradient.addColorStop(
            1,
            p2.color.replace(")", `, ${opacity})`).replace("rgb", "rgba")
          );

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = connectionLineWidth;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          // Check if we should create a new pulse
          if (Math.random() < pulseProbability) {
            const pulseSize =
              minPulseSize + Math.random() * (maxPulseSize - minPulseSize);
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;

            // Add the pulse with TTL
            p1.pulses.push({
              partnerId: j,
              ttl: pulseDuration,
              size: pulseSize,
              x: midX,
              y: midY,
            });
          }
        });

        // Draw all active pulses
        p1.pulses.forEach((pulse, idx) => {
          const p2 = particles[pulse.partnerId];

          // Update pulse position if particles have moved
          if (p1.connections.includes(pulse.partnerId)) {
            pulse.x = (p1.x + p2.x) / 2;
            pulse.y = (p1.y + p2.y) / 2;
          }

          // Draw the pulse
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.size, 0, Math.PI * 2);
          ctx.fillStyle = p1.color
            .replace(")", `, ${pulseOpacity * (pulse.ttl / pulseDuration)})`)
            .replace("rgb", "rgba");
          ctx.fill();

          // Reduce TTL
          pulse.ttl--;
        });

        // Remove expired pulses
        p1.pulses = p1.pulses.filter((pulse) => pulse.ttl > 0);
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      drawConnections();

      // Draw and update particles
      particles.forEach((p) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color
          .replace(")", `, ${p.alpha})`)
          .replace("rgb", "rgba");
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
