import React, { useRef } from "react";
import styles from "../../styles/projects/Project.module.scss";

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

  const decoration = useRef();

  function handleDecoration(e) {
    if (decoration.current) {
      let left = e.offsetX;
      let top = e.offsetY;
      decoration.current.style.left = left + "px";
      decoration.current.style.top = top + "px";
    }
  }

  function technologiesText() {
    return project.technologies.map((name, index) => {
      if (index === project.technologies.length - 1) {
        return `& ${name}`
      }
      if (index === project.technologies.length - 2) {
        return `${name} `
      }
      return `${name}, `
    })
  }

  return (
    <article className={styles.project}>
      <div className={styles.projectImages}>
        {project.images.map((image) => {
          return <img src={image} alt={`${project.title} thumbnail`} />;
        })}
      </div>

      <div className={styles.projectCard} onMouseMove={handleDecoration}>
        <div className={styles.projectContainer}>
          <h4>{project.title}</h4>
          {project.description.map((text) => (
            <p>{text}</p>
          ))}
          <span>Built with {technologiesText()}</span>
          <div className={styles.links}>
            <a href={project.url}>Site link ↗</a>
            <a href={project.github}>Github repo ↗</a>
          </div>
        </div>
        <span className={styles.decoration} ref={decoration.current}></span>
      </div>
    </article>
  );
}
