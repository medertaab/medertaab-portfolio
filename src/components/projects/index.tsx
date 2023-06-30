import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "./projectCard";
import projectsData from "@component/data/projectsData";
import SectionTitle from "../ui/sectionTitle";

export default function Projects() {

  return (
    <section className={styles.projects}>
      <SectionTitle color="#6000fc">Projects</SectionTitle>

      {projectsData.map((project, index) => {
        return <ProjectCard project={project} key={index} index={index} />;
      })}
    </section>
  );
}
