import React from "react";
import styles from "./ProjectCard.module.scss";

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
}

export default function Project(props: ProjectProps) {
  const { project } = props;

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
    <article className={styles.project}>
      {/* Images */}
      <div className={styles.projectImages}>
        {project.images.map((image) => {
          return <img src={image} draggable="false" alt={`${project.title} thumbnail`} />;
        })}
      </div>

      {/* Card */}
      <div className={styles.projectCard} >
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
