import { forwardRef, useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Noise from '@component/components/Noise';

// Component for animating each character based on scroll progress
function AnimatedChar({ 
  char, 
  globalIndex, 
  totalChars, 
  scrollYProgress,
  color = 'text-brand-cream',
  hasHighlight = false,
  highlightStart = 0.3,
  highlightEnd = 0.6
}: { 
  char: string; 
  globalIndex: number; 
  totalChars: number; 
  scrollYProgress: MotionValue<number>;
  color?: string;
  hasHighlight?: boolean;
  highlightStart?: number;
  highlightEnd?: number;
}) {
  const revealStartOffset = 0.1; // Adjust this to make it start later
  const progressScale = 1 - revealStartOffset;
  
  const start = revealStartOffset + (globalIndex / totalChars) * progressScale;
  const end = start + (1 / totalChars) * 5 * progressScale; // Overlap for smoother effect
  
  const opacity = useTransform(
    scrollYProgress,
    [start, Math.min(end, 1)],
    [0.2, 1]
  );

  // If there's a highlight, create a background color transition effect
  if (hasHighlight) {
    const backgroundOpacity = useTransform(
      scrollYProgress,
      [highlightStart, highlightEnd],
      [0, 0.9]
    );

    return (
      <motion.span 
        style={{ opacity }}
        className={`inline relative ${color}`}
      >
        <motion.span 
          style={{ opacity: backgroundOpacity }}
          className="absolute inset-0 bg-brand-blue -z-10 rounded-sm"
        />
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    );
  }

  return (
    <motion.span style={{ opacity }} className={`inline ${color}`}>
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
  className = "",
  highlightPhrases = []
}: { 
  text: string; 
  scrollYProgress: MotionValue<number>;
  charOffset?: number;
  totalChars: number;
  className?: string;
  highlightPhrases?: Array<{ phrase: string; highlightStart?: number; highlightEnd?: number }>;
}) {
  // Split text into words to prevent word breaks
  const words = text.split(' ');
  let currentCharOffset = charOffset;
  
  // Build a map of word indices that should be highlighted
  const highlightMap = new Map<number, { highlightStart?: number; highlightEnd?: number }>();
  
  highlightPhrases.forEach(({ phrase, highlightStart, highlightEnd }) => {
    const phraseWords = phrase.toLowerCase().split(' ');
    const textLower = text.toLowerCase();
    const phraseStartIndex = textLower.indexOf(phrase.toLowerCase());
    
    if (phraseStartIndex !== -1) {
      // Count how many words come before this phrase
      const beforePhrase = text.substring(0, phraseStartIndex).trim();
      const wordsBefore = beforePhrase ? beforePhrase.split(' ').length : 0;
      
      // Mark all words in the phrase for highlighting
      for (let i = 0; i < phraseWords.length; i++) {
        highlightMap.set(wordsBefore + i, { highlightStart, highlightEnd });
      }
    }
  });
  
  return (
    <p className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordStartOffset = currentCharOffset;
        currentCharOffset += word.length + 1; // +1 for the space
        
        // Check if this word should be highlighted
        const highlight = highlightMap.get(wordIndex);
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => (
              <AnimatedChar
                key={charIndex}
                char={char}
                globalIndex={wordStartOffset + charIndex}
                totalChars={totalChars}
                scrollYProgress={scrollYProgress}
                color="text-brand-cream"
                hasHighlight={!!highlight}
                highlightStart={highlight?.highlightStart}
                highlightEnd={highlight?.highlightEnd}
              />
            ))}
            {wordIndex < words.length - 1 && (
              <AnimatedChar
                key={`space-${wordIndex}`}
                char=" "
                globalIndex={wordStartOffset + word.length}
                totalChars={totalChars}
                scrollYProgress={scrollYProgress}
                color="text-brand-cream"
                hasHighlight={!!highlight}
                highlightStart={highlight?.highlightStart}
                highlightEnd={highlight?.highlightEnd}
              />
            )}
          </span>
        );
      })}
    </p>
  );
}

// Define the about section texts
const ABOUT_TEXT_1 = "I'm a creative software developer who loves bridging art and technology.";
const ABOUT_TEXT_2 = "Combining a decade of professional digital art work with modern software engineering to build expressive, accessible and human-centered digital experiences.";
const TOTAL_ABOUT_CHARS = ABOUT_TEXT_1.length + ABOUT_TEXT_2.length;

interface AboutSectionProps {
  aboutScrollProgress: MotionValue<number>;
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  function AboutSection({ aboutScrollProgress }, ref) {
    // State to control when each sparkle mounts (to desync GIF loops)
    const [visibleSparkles, setVisibleSparkles] = useState<number[]>([]);
    
    useEffect(() => {
      // Mount each sparkle at different times to desync GIF loops
      const delays = [0, 200, 400, 600, 800, 1000, 1200, 1400];
      const timeouts = delays.map((delay, index) => 
        setTimeout(() => {
          setVisibleSparkles(prev => [...prev, index]);
        }, delay)
      );
      
      return () => timeouts.forEach(clearTimeout);
    }, []);
    
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
          <div className="mx-auto max-w-[80%] text-balance relative text-center">
            {/* Sparkle decorations - inverted to white with staggered mounting to desync GIF loops */}
            {/* Top left area */}
            {visibleSparkles.includes(0) && (
              <motion.img 
                src="/sparkles/sparkle_animation1.gif"
                alt="" 
                className="absolute -top-15 -left-20 w-10 h-10 md:w-20 md:h-20 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            {visibleSparkles.includes(1) && (
              <motion.img 
                src="/sparkles/sparkle_animation4.gif"
                alt="" 
                className="absolute -top-12 left-8 w-8 h-8 md:w-10 md:h-10 pointer-events-none "
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            
            {/* Top right area */}
            {visibleSparkles.includes(2) && (
              <motion.img 
                src="/sparkles/sparkle_animation3.gif"
                alt="" 
                className="absolute -top-8 -right-6 w-12 h-12 md:w-16 md:h-16 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            {visibleSparkles.includes(3) && (
              <motion.img 
                src="/sparkles/sparkle_animation2.gif"
                alt="" 
                className="absolute top-10 -right-16 w-9 h-9 md:w-12 md:h-12 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            
            {/* Bottom left area */}
            {visibleSparkles.includes(4) && (
              <motion.img 
                src="/sparkles/sparkle_animation2.gif"
                alt="" 
                className="absolute -bottom-4 -left-16 w-11 h-11 md:w-15 md:h-15 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            {visibleSparkles.includes(5) && (
              <motion.img 
                src="/sparkles/sparkle_animation3.gif"
                alt="" 
                className="absolute -bottom-14 left-4 w-14 h-14 md:w-18 md:h-18 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            
            {/* Bottom right area */}
            {visibleSparkles.includes(6) && (
              <motion.img 
                src="/sparkles/sparkle_animation3.gif"
                alt="" 
                className="absolute bottom-2 -right-10 w-10 h-10 md:w-13 md:h-13 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            {visibleSparkles.includes(7) && (
              <motion.img 
                src="/sparkles/sparkle_animation4.gif"
                alt="" 
                className="absolute -bottom-16 -right-4 w-13 h-13 md:w-17 md:h-17 pointer-events-none"
                style={{ filter: 'invert(1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            
            <ScrollRevealText
              text={ABOUT_TEXT_1}
              scrollYProgress={aboutScrollProgress}
              charOffset={0}
              totalChars={TOTAL_ABOUT_CHARS}
              className="text-xl md:text-[1.75vw] font-light font-serif text-brand-cream leading-relaxed mb-8"
              highlightPhrases={[
                { phrase: 'art and technology', highlightStart: 0.5, highlightEnd: 0.8 }
              ]}
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
