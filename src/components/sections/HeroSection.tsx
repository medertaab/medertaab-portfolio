import { motion, MotionValue, useTransform } from 'framer-motion';
// @ts-ignore - JSX component without type declarations
import Dither from '@component/components/Dither';

// Set to a URL string to use a background image, or leave empty/null for solid bg-brand-blue
// const HERO_BACKGROUND_IMAGE: string | null = '/hero-bg.png';
const HERO_BACKGROUND_IMAGE: string | null = null;

interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroSection({ scrollYProgress }: HeroSectionProps) {
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const overlayParallax = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  // Parallax effect for hero background - moves slower than scroll
  const bgParallax = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Hero section transforms - margins and rounded corners on scroll
  const heroMargin = useTransform(scrollYProgress, [0, 0.15], [0, 24]);
  const heroRadius = useTransform(scrollYProgress, [0, 0.15], [0, 48]);

  // Counter-offset to keep content visually fixed while container shrinks
  // This creates the "mask" effect - container shrinks but content stays in place
  const contentOffsetX = useTransform(scrollYProgress, [0, 0.15], [0, -32]);

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.12
      }
    }
  };

  const bgVariants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        marginLeft: heroMargin,
        marginRight: heroMargin,
        borderRadius: heroRadius,
      }}
    >
      {/* Background - Image with Parallax or Dither */}
      <motion.div
        className={`absolute inset-[-10%] z-0 ${!HERO_BACKGROUND_IMAGE ? 'bg-black' : ''}`}
        variants={bgVariants}
        style={{
          ...(HERO_BACKGROUND_IMAGE && {
            backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }),
          y: bgParallax,
          x: contentOffsetX,
          scale: bgScale
        }}
      />

      {/* Dither animated background when no image */}
      {!HERO_BACKGROUND_IMAGE && (
        <motion.div
          className="absolute inset-0 z-[1]"
          variants={bgVariants}
        >
          <Dither
            waveColor={[0,0.2,1]}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={0.5}
            colorNum={4}
            waveAmplitude={0.03}
            waveFrequency={0}
            waveSpeed={0.1}
          />
          {/* Brand blue overlay with negative blend */}
          <div className="absolute inset-0 bg-brand-blue mix-blend-difference pointer-events-none" />
          <div className="absolute inset-0 bg-brand-blue mix-blend-color pointer-events-none" />

        </motion.div>
      )}

      {/* Gradient Overlay for text readability
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        variants={bgVariants}
        style={{
          background: 'linear-gradient(to top, transparent 0%, rgba(0,43,254,0.25) 45%, transparent 100%)',
          y: overlayParallax,
          x: contentOffsetX
        }}
      /> */}

      {/* Text content - offset to stay visually fixed */}
      <motion.div
        variants={textVariants}
        style={{ y: yTranslate, x: contentOffsetX }}
        className="relative z-10 pointer-events-none"
      >
        <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif font-bold text-brand-cream leading-[0.8] tracking-tighter mb-6 sm:mb-8 md:mb-10 drop-shadow-2xl">
          <span className="inline lg:block mr-3">Meder</span>
          <span className="inline-flex md:flex items-center gap-2">
          <span className="inline lg:block">Taab</span>
          <img src="/medertaab_stamp.png" alt="Meder Taab stamp" className="h-[11vw] md:h-[7vw] lg:h-[6vw] ml-2" />
          </span>
        </h1>
        <motion.h2
          variants={textVariants}
          className="flex flex-col gap-1 mg:gap-2 lg:gap-4 xl:gap-6 text-base sm:text-lg md:text-xl lg:text-[1.75vw] font-light font-serif text-brand-cream opacity-90 drop-shadow-lg"
        >
          <span>Creative Software Engineer.</span> 
          <span>Digital Artist with 100+ million artwork impressions.</span>
        </motion.h2>
      </motion.div>

    </motion.section>
  );
}
