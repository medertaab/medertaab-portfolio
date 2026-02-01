import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Category } from "@component/types/portfolio"
import { PROJECTS } from "@component/data/portfolioData"
import CategorySwitcher from "@component/components/portfolio/CategorySwitcher"
import Noise from "@component/components/Noise"
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  FooterSection,
} from "@component/components/sections"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.SOFTWARE,
  )
  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory)

  const containerRef = useRef(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const projectsSectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    if (projectsSectionRef.current) {
      const elementPosition = projectsSectionRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - (4 * 16) // 8rem = 8 * 16px
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

// About section transforms - margins and rounded corners on scroll (starts at 50% of section)
const aboutRadius = useTransform(scrollYProgress, [0.85, 0.95], [0, 48]);

  // Scroll progress for about section text animation
  // Animation starts when 50% of section is in view, completes when end enters viewport
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["center end", "end end"],
  })

  return (
    <div
      className="relative min-h-screen selection:bg-brand-cream selection:text-brand-blue bg-brand-blue"
      ref={containerRef}
    >
      {/* 4. FOOTER - Positioned at the bottom, revealed as black container scrolls over it */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <FooterSection />
      </div>

      {/* Main Content Wrapper - Scrolls over the footer */}
      <div className="relative z-10 mb-[650px] bg-brand-blue">
        {/* Black background container */}
        <motion.div className="bg-brand-black relative rounded-b-[3rem] md:rounded-b-[4rem] min-h-screen"
        
        style={{
          borderRadius: aboutRadius,
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

          {/* 3. PROJECTS SECTION WRAPPER */}
          <div className="relative z-20 pb-16 min-h-screen">
            <div className="sticky top-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-brand-black">
              <CategorySwitcher
                active={activeCategory}
                onChange={handleCategoryChange}
              />
            </div>

            <ProjectsSection
              ref={projectsSectionRef}
              activeCategory={activeCategory}
              filteredProjects={filteredProjects}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
