import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Project } from '@component/types/portfolio';
import ProjectRow from '@component/components/portfolio/ProjectRow';
import CategorySwitcher from '@component/components/portfolio/CategorySwitcher';

interface ProjectsSectionProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  filteredProjects: Project[];
}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  function ProjectsSection(
    { 
      activeCategory, 
      setActiveCategory, 
      filteredProjects
    }, 
    ref
  ) {
    return (
      <main ref={ref} className="pb-32 relative z-20">
        <div className="sticky top-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-brand-blue/95 backdrop-blur-md">
          <CategorySwitcher
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <section className="min-h-[60vh] pt-12 px-6 md:px-6">
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
    );
  }
);

export default ProjectsSection;
