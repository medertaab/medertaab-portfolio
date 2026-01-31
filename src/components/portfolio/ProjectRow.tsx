import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@component/types/portfolio';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectRowProps {
  project: Project;
  index: number;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative mb-24"
    >
      {/* Contained Project Box with High Contrast Background */}
      <div className="bg-[#141414] border border-brand-cream/20 p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-12 relative overflow-hidden shadow-2xl">
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-brand-blue border-l-transparent z-10" />
        <div className="absolute top-2 left-2 text-brand-cream text-[10px] font-black z-20">REF</div>

        {/* Left side: Content */}
        <div className="w-full xl:w-5/12 flex flex-col z-10 pt-4">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="bg-brand-cream text-brand-black px-3 py-1 text-xs font-black tracking-widest uppercase">
              {project.year}
            </span>
            <span className="text-brand-blue text-xs font-black tracking-[0.2em] uppercase border border-brand-blue px-3 py-1">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-serif font-medium text-brand-cream mb-8 leading-[0.9] tracking-tight">
            {project.title}
          </h3>
          
          <div className="w-12 h-1 bg-brand-blue mb-8" />

          <p className="text-xl text-brand-cream/70 leading-relaxed mb-12 font-light max-w-md">
            {project.description}
          </p>

          <div className="mt-auto">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-brand-cream text-brand-black px-8 py-4 text-sm font-black tracking-[0.2em] hover:bg-brand-blue hover:text-white transition-all uppercase group/btn"
              >
                View Project 
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            ) : (
              <span className="inline-block border border-brand-cream/20 text-brand-cream/40 px-6 py-3 text-xs font-bold tracking-widest uppercase cursor-not-allowed">
                Private Access
              </span>
            )}
          </div>
        </div>

        {/* Right side: Image Container */}
        <div className="w-full xl:w-7/12 relative h-[400px] md:h-[600px] bg-black border border-brand-cream/10 group-hover:border-brand-blue/50 transition-colors">
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.id}-${currentImg}`}
              src={project.images[currentImg]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 right-0 z-30 flex">
             <div className="bg-brand-black text-brand-cream px-6 py-4 text-xs font-mono border-t border-l border-brand-cream/10">
               IMG_{String(currentImg + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
             </div>
             {project.images.length > 1 && (
               <>
                <button 
                  onClick={prevImage}
                  className="w-14 h-auto bg-brand-cream text-brand-black hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors border-l border-brand-black"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-14 h-auto bg-brand-cream text-brand-black hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors border-l border-brand-black"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
               </>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectRow;
