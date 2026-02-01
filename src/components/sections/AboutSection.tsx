import { forwardRef } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Noise from '@component/components/Noise';

// Component for animating each character based on scroll progress
function AnimatedChar({ 
  char, 
  globalIndex, 
  totalChars, 
  scrollYProgress 
}: { 
  char: string; 
  globalIndex: number; 
  totalChars: number; 
  scrollYProgress: MotionValue<number>;
}) {
  // Each character fades in at a different point in the scroll
  // Stagger the animation so letters reveal sequentially across all text
  const start = globalIndex / totalChars;
  const end = start + (1 / totalChars) * 5; // Overlap for smoother effect
  
  const opacity = useTransform(
    scrollYProgress,
    [start, Math.min(end, 1)],
    [0.15, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

// Animated paragraph component that reveals text on scroll
// charOffset allows multiple paragraphs to share one continuous animation
function ScrollRevealText({ 
  text, 
  scrollYProgress,
  charOffset = 0,
  totalChars,
  className = ""
}: { 
  text: string; 
  scrollYProgress: MotionValue<number>;
  charOffset?: number;
  totalChars: number;
  className?: string;
}) {
  const chars = text.split('');
  
  return (
    <p className={className}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          globalIndex={charOffset + i}
          totalChars={totalChars}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

// Define the about section texts
const ABOUT_TEXT_1 = "I'm a creative software developer who loves bridging art and technology.";
const ABOUT_TEXT_2 = "Combining a decade of professional illustration work with modern software engineering to build expressive, accessible and human-centered digital experiences.";
const TOTAL_ABOUT_CHARS = ABOUT_TEXT_1.length + ABOUT_TEXT_2.length;

interface AboutSectionProps {
  aboutScrollProgress: MotionValue<number>;
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  function AboutSection({ aboutScrollProgress }, ref) {
    return (
      <section
        ref={ref}
        className="relative overflow-hidden border-b border-brand-cream/5 z-20 h-screen"
      >
        {/* Noise overlay for black background */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-50">
          <Noise patternAlpha={25} patternRefreshInterval={3} />
        </div>
        
        {/* Text Content - In Front */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 md:py-48">
          <div className="mx-auto max-w-[90%] text-balance">
            <ScrollRevealText
              text={ABOUT_TEXT_1}
              scrollYProgress={aboutScrollProgress}
              charOffset={0}
              totalChars={TOTAL_ABOUT_CHARS}
              className="text-xl md:text-[1.75vw] font-light font-serif text-brand-cream leading-relaxed mb-8"
            />
            <ScrollRevealText
              text={ABOUT_TEXT_2}
              scrollYProgress={aboutScrollProgress}
              charOffset={ABOUT_TEXT_1.length}
              totalChars={TOTAL_ABOUT_CHARS}
              className="text-xl md:text-[1.75vw] font-light font-serif text-brand-cream leading-relaxed"
            />
          </div>
        </div>
      </section>
    );
  }
);

export default AboutSection;
