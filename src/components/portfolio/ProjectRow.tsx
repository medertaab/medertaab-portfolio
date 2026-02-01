import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@component/types/portfolio';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectRowProps {
  project: Project;
  index: number;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use images array if available, otherwise fall back to single image
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
      <div className="bg-brand-blue rounded-[2rem] flex flex-col lg:flex-row gap-12 relative overflow-hidden p-6 max-h-[85vh]">
        {/* Left side: Content */}
        <div className="w-full lg:w-2/5 Cflex flex-col z-10 pt-4 p-8 md:p-12 pointer-events-none">
          <div className="flex items-start gap-1 md:gap-2">
            <img src={project.icon} alt={`${project.title} icon`} className="w-10 h-10 md:w-[3vw] md:h-[3vw] mb-8 invert" />
            <h3 className="text-4xl md:text-[3vw] font-serif font-medium text-brand-cream mb-10 leading-[0.9] tracking-tight">
              {project.title}
            </h3>
          </div>
          
          {typeof project.description === 'string' ? (
            <p className="text-md xl:text-[1vw] text-brand-cream/70 leading-relaxed mb-12 font-light">
              {project.description}
            </p>
          ) : (
            <div className="text-md xl:text-[1vw] text-brand-cream/70 leading-relaxed mb-12 font-light flex flex-col gap-4">
              {project.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          <div className="mt-auto">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-brand-cream text-brand-blue px-8 py-4 text-sm font-cream tracking-[0.2em] hover:text-opacity-80 transition-all uppercase group/btn pointer-events-auto"
              >
                View Project 
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Right side: Image Container */}
        <div className="w-full lg:w-3/5 relative bg-black transition-colors z-10 rounded-[1.5rem] overflow-hidden aspect-[4/3]">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.id}-${currentImageIndex}`}
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </AnimatePresence>

          {/* Carousel Navigation */}
          {hasMultipleImages && (
            <>
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-blue/50 hover:bg-brand-blue/20 text-brand-cream p-3 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-blue/50 hover:bg-brand-blue/20 text-brand-cream p-3 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-brand-blue w-6' 
                        : 'bg-brand-blue/40 hover:bg-brand-blue/60'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectRow;
