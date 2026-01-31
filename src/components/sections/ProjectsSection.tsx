import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Project } from '@component/types/portfolio';
import ProjectRow from '@component/components/portfolio/ProjectRow';

interface ProjectsSectionProps {
  activeCategory: Category;
  filteredProjects: Project[];
}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  function ProjectsSection(
    { 
      activeCategory, 
      filteredProjects
    }, 
    ref
  ) {
    return (
      <section ref={ref} className="min-h-[60vh] pt-12 px-6 md:px-6">
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
    );
  }
);

export default ProjectsSection;
