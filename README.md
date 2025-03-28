# Chris Meah - Personal Website

A cutting-edge personal website for Chris Meah that showcases his AI expertise through innovative design and interactive technologies.

## Key Technologies

- React.js frontend
- Tailwind CSS for styling
- Framer Motion for animations
- Neural network-inspired particle backgrounds
- AI-inspired design system

## Local Development Setup

This project was developed in the Replit environment with the latest package versions as of 2025. To run it on your local machine with more widely compatible package versions, follow these steps:

### Option 1: Use the Replit-compatible setup (newer packages)

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

If you encounter dependency issues, use Option 2 below.

### Option 2: Use the local-compatible setup (more stable packages)

1. Clone the repository
2. Rename `package.local.json` to `package.json`:
   ```bash
   mv package.local.json package.json
   ```
3. Rename `vite.config.local.ts` to `vite.config.ts`:
   ```bash
   mv vite.config.local.ts vite.config.ts
   ```
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

### Customizing Particle Animation

The particle animation in `client/src/components/ParticleCanvas.tsx` is extensively commented to make it easy to adjust parameters:

1. **Particle Appearance**:
   - Color palette
   - Particle count
   - Size and opacity

2. **Movement**:
   - Velocity factor to control speed

3. **Connections**:
   - Distance threshold
   - Line width and opacity
   - Connection count per particle

4. **Stability**:
   - Connection stability factor (higher = less flickering)

5. **Pulse Effects**:
   - Frequency and size
   - Opacity and duration

## Design Choices

- Minimalist, future-oriented aesthetic with thoughtful interactions
- First-person, personable introduction approach ("Hi, I'm Chris...")
- Color scheme with specialized colors for keywords - "build" (green), "train" (light brown/orange), "speak" and "AI" (custom colors)
- Consistent dark theme throughout with white text for readability against particle background
- AI-inspired theme with vibrant dark mode and neural network-like particle animations

## Structure

The website includes the following main sections:
- Hero section with dynamic particle background
- About section with Chris's background
- Services section showcasing AI expertise
- Speaking engagements
- Testimonials
- Contact form for inquiries