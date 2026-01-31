import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Head from 'next/head';
import { Category } from '@component/types/portfolio';
import { PROJECTS, SOCIAL_LINKS } from '@component/data/portfolio';
import ProjectRow from '@component/components/portfolio/ProjectRow';
import CategorySwitcher from '@component/components/portfolio/CategorySwitcher';
import NoiseOverlay from '@component/components/portfolio/NoiseOverlay';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.SOFTWARE);
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);
  
  const containerRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const overlayParallax = useTransform(scrollYProgress, [0, 1], [0, -70]);
  
  // Parallax effect for hero background - moves slower than scroll
  const bgParallax = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();
    
    const observer = new ResizeObserver(updateHeight);
    if (footerRef.current) observer.observe(footerRef.current);
    
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Meder Taab — Software Engineer & Illustrator</title>
        <meta name="description" content="Transforming ten years of illustration heritage into scalable software engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen selection:bg-brand-cream selection:text-brand-blue bg-brand-black" ref={containerRef}>
        <NoiseOverlay />

        {/* Main Content Wrapper - Scrolls OVER the footer */}
        <div 
          className="relative z-10 bg-brand-black shadow-[0_50px_100px_rgba(0,0,0,0.5)]" 
          style={{ marginBottom: footerHeight }}
        >
          {/* 1. HERO SECTION with Background Image */}
          <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div 
              className="absolute inset-[-10%] z-0"
              style={{ 
                backgroundImage: 'url(/hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                y: bgParallax,
                scale: bgScale
              }}
            />
            
            {/* Gradient Overlay for text readability */}
            <motion.div 
              className="absolute inset-0 z-[1]"
              style={{
                background: 'linear-gradient(to top, transparent 0%, rgba(0,43,254,0.25) 45%, transparent 100%)',
                y: overlayParallax
              }}
            />
            
            <motion.div 
              style={{ y: yTranslate }}
              className="relative z-10"
            >
              <div className="text-[10px] font-black tracking-[0.5em] text-brand-cream mb-6 opacity-60 drop-shadow-lg">
                ENGINEER_DESIGN_ARCHIVE
              </div>
              <h1 className="text-[12vw] font-serif font-bold text-brand-cream leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl">
                Meder<br />
                <span className="italic">Taab</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">
                <p className="text-xl md:text-3xl font-light font-serif text-brand-cream max-w-xl leading-tight opacity-90 drop-shadow-lg">
                  Transforming <span className="font-bold">ten years of illustration</span> heritage into <span className="italic">scalable software engineering</span>.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-dashed border-brand-cream/40 flex items-center justify-center animate-spin-slow backdrop-blur-sm">
                     <div className="text-[8px] font-black text-brand-cream text-center uppercase tracking-tighter">DATA<br/>CORE</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative stars overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #FAF9F6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          </section>

          {/* 2. ABOUT SECTION (Black) - SIMPLIFIED */}
          <section className="bg-brand-black py-32 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden border-b border-brand-cream/5 rounded-b-[3rem] md:rounded-b-[5rem] z-20">
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <h2 className="text-brand-blue text-xs font-black tracking-[0.5em] uppercase mb-12 flex items-center gap-4">
                  <span className="w-12 h-px bg-brand-blue" /> THE SHIFT
                </h2>

                <div className="flex flex-col gap-12">
                    <h3 className="text-[6vw] md:text-[5vw] font-serif text-brand-cream leading-[1.1]">
                      <motion.span 
                        className="block mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        I used to <span className="text-brand-blue italic">draw</span> lines.
                      </motion.span>
                      <motion.span 
                        className="block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        Now I <span className="font-mono text-[0.6em] align-middle bg-[#1A1A1A] text-brand-cream px-4 py-1 border border-[#333] tracking-tighter rounded-sm">write</span> them.
                      </motion.span>
                    </h3>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed max-w-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <span className="text-brand-cream font-bold">10 Years</span> of Illustration. <span className="text-brand-cream font-bold">Full-Stack</span> Engineering.
                      <br/>
                      Bridging the gap between aesthetic obsession and system architecture.
                    </motion.p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 3. PROJECTS SECTION (Black) */}
          <main className="px-6 md:px-12 lg:px-24 bg-brand-black pb-32 pt-20 relative z-20 rounded-b-[3rem] md:rounded-b-[5rem]">
            <CategorySwitcher 
              active={activeCategory} 
              onChange={setActiveCategory} 
            />

            <section className="min-h-[60vh] pt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, idx) => (
                      <ProjectRow 
                        key={project.id} 
                        project={project} 
                        index={idx} 
                      />
                    ))
                  ) : (
                    <div className="h-[40vh] flex items-center justify-center border border-dashed border-brand-cream/10 rounded-lg">
                      <p className="text-brand-cream/20 font-serif italic text-2xl">Archive section empty...</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </section>
          </main>
        </div>

        {/* 4. FOOTER (Blue) - Fixed / Reveal Effect */}
        <div 
          ref={footerRef}
          className="fixed bottom-0 left-0 w-full z-0"
        >
          <footer className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-brand-blue text-brand-cream relative overflow-hidden h-full flex flex-col justify-end">
            <div className="relative z-10 max-w-8xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
                <div>
                  <div className="inline-block border border-brand-cream px-4 py-2 text-xs font-black tracking-widest uppercase mb-12">
                    Available for hire
                  </div>
                  <h2 className="text-[10vw] lg:text-[7vw] font-serif font-bold mb-8 leading-[0.8] tracking-tighter uppercase">
                    Let&apos;s build <br />
                    <span className="italic opacity-80">the future</span>.
                  </h2>
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-4 w-full">
                    {SOCIAL_LINKS.map((link) => (
                      <a 
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border border-brand-cream/30 px-8 py-6 hover:bg-brand-cream hover:border-brand-cream hover:scale-[1.02] transition-all duration-300 ease-out"
                      >
                        <span className="text-sm font-black tracking-[0.2em] text-brand-cream group-hover:text-brand-blue uppercase transition-colors">
                          {link.label}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-brand-cream group-hover:text-brand-blue group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-16 flex justify-between items-end opacity-60">
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase max-w-[200px] leading-relaxed">
                       Based in the Cloud<br/>Operating Worldwide
                    </div>
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase">
                       &copy; 2025 Meder Taab
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Background Text Decoration */}
            <div className="absolute bottom-[-5vw] left-0 w-full text-center pointer-events-none opacity-10">
               <span className="text-[25vw] font-black text-brand-black leading-none uppercase tracking-tighter">TAAB</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
