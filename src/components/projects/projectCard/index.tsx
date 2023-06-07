import React, { useRef } from "react";
import styles from "./ProjectCard.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  url: string;
  github: string;
  images: string[];
}

interface ProjectProps {
  project: Project;
  index: number;
}

export default function Project(props: ProjectProps) {
  const { project, index } = props;

  const offsetStart = 800 + index * 300;
  const offsetEnd = offsetStart + 300;

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const frameY = useTransform(scrollY, [offsetStart, offsetEnd], [-50, 50]);

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
    <article className={styles.project} ref={containerRef}>
      {/* Images */}
      <div className={styles.imageContainer}>
        <motion.img
          src={project.images[0]}
          alt={`${project.title} thumbnail`}
          className={styles.thumbnail}
        ></motion.img>
      </div>

      {/* Card */}
      <div className={styles.projectCard}>
        <div className={styles.projectContainer}>
          <div className={styles.upperHalf}>
            <h4>{project.title}</h4>
            {project.description.map((text) => (
              <p>{text}</p>
            ))}
          </div>

          <div className={styles.lowerHalf}>
            <span>Built with {technologiesText()}</span>
            <div className={styles.links}>
              <a href={project.url}>Site link &#8599;&#xFE0E;</a>
              <a href={project.github}>Github repo &#8599;&#xFE0E;</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
