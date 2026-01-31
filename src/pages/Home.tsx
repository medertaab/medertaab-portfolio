import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Category } from '@component/types/portfolio';
import { PROJECTS } from '@component/data/portfolio';
import NoiseOverlay from '@component/components/portfolio/NoiseOverlay';
import Noise from '@component/components/Noise';
import { 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  FooterSection 
} from '@component/components/sections';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.SOFTWARE);
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  const containerRef = useRef(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll progress for about section text animation
  // Animation starts when 50% of section is in view, completes when end enters viewport
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["center end", "end end"]
  });

  // About section transforms - margins and rounded corners on scroll (starts at 50% of section)
  const aboutMargin = useTransform(scrollYProgress, [0.25, 0.4], [0, 32]);
  const aboutRadius = useTransform(scrollYProgress, [0.25, 0.4], [0, 48]);

  return (
    <div className="min-h-screen selection:bg-brand-cream selection:text-brand-blue bg-brand-blue" ref={containerRef}>
      <NoiseOverlay />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Black background container for hero + about sections */}
        <motion.div
          className="bg-brand-black relative overflow-hidden"
          style={{
            marginLeft: aboutMargin,
            marginRight: aboutMargin,
            borderBottomLeftRadius: aboutRadius,
            borderBottomRightRadius: aboutRadius,
          }}
        >
          {/* Noise overlay for black background */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-50">
            <Noise patternAlpha={25} patternRefreshInterval={3} />
          </div>

          {/* 1. HERO SECTION */}
          <HeroSection scrollYProgress={scrollYProgress} />

          {/* 2. ABOUT SECTION */}
          <AboutSection 
            ref={aboutSectionRef}
            aboutScrollProgress={aboutScrollProgress} 
          />
        </motion.div>

        {/* 3. PROJECTS SECTION */}
        <ProjectsSection
          ref={projectsSectionRef}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredProjects={filteredProjects}
        />
      </div>

      {/* 4. FOOTER */}
      <FooterSection />
    </div>
  );
}
