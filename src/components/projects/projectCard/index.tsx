import React, { useRef } from "react";
import styles from "./ProjectCard.module.scss";
import { useInView } from "framer-motion";

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  url: string;
  github: string;
  images: string[];
  gradient: string;
  color: string;
}

interface ProjectProps {
  project: Project;
  index: number;
}

export default function Project(props: ProjectProps) {
  const { project, index  } = props;

  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true })

  function technologiesText() {
    return project.technologies.map((name, index) => {
      if (index === project.technologies.length - 1) {
        return `& ${name}`;
      }
      if (index === project.technologies.length - 2) {
        return `${name} `;
      }
      return `${name}, `;
    });
  }

  return (
    <article className={styles.project} ref={projectRef} style={{
      opacity: isInView ? 1 : 0,
      transform: isInView ? "none" : (index % 2 === 0 ? "translateX(-100px)" : "translateX(100px)"),
      backgroundImage: project.gradient
    }}>
      {/* Images */}
      <div className={styles.imageContainer} style={{backgroundImage: project.gradient }}>
        <img
          src={project.images[0]}
          alt={`${project.title} thumbnail`}
          className={styles.thumbnail}
        ></img>
        <span className={styles.border}></span>
      </div>

      {/* Card */}
      <div className={styles.projectCard} style={{backgroundImage: project.gradient}}>
        <div className={styles.projectContainer}>
          <div className={styles.upperHalf}>
            <h4>{project.title}</h4>
            {project.description.map((text) => (
              <p>{text}</p>
            ))}
          </div>

          <div className={styles.lowerHalf}>
            <span className={styles.stack}>Built with {technologiesText()}</span>
            <div className={styles.links}>
              <a href={project.url}>Site link &#8599;&#xFE0E;</a>
              <a href={project.github} style={{color: project.color}}>Github repo &#8599;&#xFE0E;</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
