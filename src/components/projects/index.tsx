import React from "react";
import styles from "../../styles/projects/Projects.module.scss";
import ProjectCard from "./ProjectCard";
import projectsData from "@component/data/projectsData";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h3>Projects</h3>

      {projectsData.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </section>
  );
}
