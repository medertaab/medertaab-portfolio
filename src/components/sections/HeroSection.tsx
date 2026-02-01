import { motion, MotionValue, useTransform } from 'framer-motion';

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
      {/* Background Image with Parallax - offset to stay visually fixed */}
      <motion.div
        className="absolute inset-[-10%] z-0"
        variants={bgVariants}
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: bgParallax,
          x: contentOffsetX,
          scale: bgScale
        }}
      />

      {/* Gradient Overlay for text readability */}
      <motion.div
        className="absolute inset-0 z-[1]"
        variants={bgVariants}
        style={{
          background: 'linear-gradient(to top, transparent 0%, rgba(0,43,254,0.25) 45%, transparent 100%)',
          y: overlayParallax,
          x: contentOffsetX
        }}
      />

      {/* Text content - offset to stay visually fixed */}
      <motion.div
        variants={textVariants}
        style={{ y: yTranslate, x: contentOffsetX }}
        className="relative z-10"
      >
        <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif font-bold text-brand-cream leading-[0.8] tracking-tighter mb-6 sm:mb-8 md:mb-10 drop-shadow-2xl">
          <span className="inline lg:block mr-3">Meder</span>
          <span className="inline lg:block">Taab</span>
        </h1>
        <motion.h2
          variants={textVariants}
          className="flex flex-col gap-1 mg:gap-2 lg:gap-4 xl:gap-6 text-base sm:text-lg md:text-xl lg:text-[1.75vw] font-light font-serif text-brand-cream opacity-90 drop-shadow-lg"
        >
          <span>Software Engineer.</span> 
          <span>Also an Digital Artist, Copywriter and Full-Time Internet Resident.</span>
        </motion.h2>
      </motion.div>

    </motion.section>
  );
}
