import React from "react";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  const skillTitles = [
    "Javascript", "Typescript", "NextJS", "Vite", "Gatsby", "Sass", "Tailwind", "Styled-Components", "Git"
  ]

  return (
    <div className={styles.skills}>
      {skillTitles.map(it => {
        return <span>{it}</span>
      })}
    </div>
  );
}
