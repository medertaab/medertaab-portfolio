import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "./projectCard";
import projectsData from "../../../data/projectsData";
import SectionTitle from "../sectionTitle";

export default function Projects() {

  return (
    <section className={styles.projects}>
      <SectionTitle>Projects</SectionTitle>

      {projectsData.map((project, index) => {
        return <ProjectCard project={project} key={index} index={index} />;
      })}
    </section>
  );
}
