import React from "react";
import styles from "./About.module.scss";
import SectionTitle from "../ui/sectionTitle";
import Stack from "./stack";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <SectionTitle>About</SectionTitle>

      <div className={styles.textBlock}>
        <p>Hi! My name is Meder Taab and I create web stuff 🔮</p>

        <p>
          I'm a creative professional working in webdev with a focus on {" "}
          <strong>front-end development</strong>. 

        I enjoy creating delightful,
          engaging and accessible experiences for web users.
        </p>

        <p>
          With a lifelong interest in tech and the web, and over a decade worth
          of experience in creative industries like illustration and writing, I
          strive to combine {" "}
          <strong>creativity and logic</strong> in my work.
        </p>

        <p>
          I'm eager to use my skills contribute to new projects, utilize my
          unique background and explore new opportunities!
        </p>
      </div>
      <Stack />
    </section>
  );
}
