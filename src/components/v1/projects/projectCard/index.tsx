import React, { useRef } from "react";
import styles from "./ProjectCard.module.scss";
import { useInView } from "framer-motion";

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  url: string;
  github?: string;
  thumbnail: string;
  gradient: string;
  color: string;
  pin: string;
}

interface ProjectProps {
  project: Project;
  index: number;
}

export default function Project({project, index}: ProjectProps) {

  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true });

  function technologiesText() {
    const lastTwo = project.technologies.slice(-2).join(' & ');
    const rest = project.technologies.slice(0, -2).join(', ');
    return rest ? `${rest}, ${lastTwo}` : lastTwo;
  }

  return (
    <article
      className={styles.project}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translateY(0px)"
          : "translateY(50px)",
      }}
    >
      {/* Image */}
      <div className={styles.thumbnailWrapper} style={{ "--border": project.color } as React.CSSProperties}>
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className={styles.thumbnail}
          ref={viewRef}
        ></img>
      </div>

      {/* Card */}
      <div
        className={styles.projectCard}
        style={{ backgroundImage: project.gradient, animationDelay: `${index * 0.250}ms`}}
      >
        <div className={styles.projectContainer} >
          <img src={project.pin} className={styles.pin} alt="Decorative icon"></img>
          
          <div className={styles.upperHalf}>
            <h4>{project.title}</h4>
            {project.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className={styles.lowerHalf}>
            <span className={styles.stack}>
              Built with {technologiesText()}
            </span>
            <div className={styles.links}>
              <a
                href={project.url}
                style={{ color: project.color }}
                target="_blank"
              >
                Site link &#8599;&#xFE0E;
              </a>
              {project.github && (
                <a href={project.github} target="_blank">Github repo &#8599;&#xFE0E;</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
