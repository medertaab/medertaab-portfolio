import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@component/types/portfolio';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectRowProps {
  project: Project;
  index: number;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative mb-24"
    >
      {/* Contained Project Box with High Contrast Background */}
      <div className="bg-brand-black rounded-[2rem] flex flex-col xl:flex-row gap-12 relative overflow-hidden p-6">
 
        
        {/* Left side: Content */}
        <div className="w-full xl:w-5/12 flex flex-col z-10 pt-4 p-8 md:p-12 lg:p-16 pointer-events-none">
          <h3 className="text-5xl md:text-7xl font-serif font-medium text-brand-cream mb-10 leading-[0.9] tracking-tight">
            {project.title}
          </h3>
          
          <p className="text-xl text-brand-cream/70 leading-relaxed mb-12 font-light max-w-md">
            {project.description}
          </p>

          <div className="mt-auto">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-brand-blue text-brand-cream px-8 py-4 text-sm font-black tracking-[0.2em] hover:text-opacity-80 transition-all uppercase group/btn pointer-events-auto"
              >
                View Project 
                <ArrowUpRight className="w-5 h-5" />
              </a>
            ) : (
              <span className="inline-block border border-brand-cream/20 text-brand-cream/40 px-6 py-3 text-xs font-bold tracking-widest uppercase cursor-not-allowed">
                Private Access
              </span>
            )}
          </div>
        </div>

        {/* Right side: Image Container */}
        <div className="w-full xl:w-7/12 relative h-[200px] md:h-[800px] aspect-video bg-blacktransition-colors pointer-events-none z-10">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.id}`}
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity rounded-[1rem]"
            />
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectRow;
