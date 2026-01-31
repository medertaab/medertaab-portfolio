import React, { useRef } from "react";
import styles from "./About.module.scss";
import SectionTitle from "../sectionTitle";
import Stack from "./stack";
import { useInView } from "framer-motion";

export default function About() {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, {
    margin: "-100px",
    once: true,
  });

  return (
    <section className={styles.aboutSection}>
      <SectionTitle>About</SectionTitle>

      <div className={styles.textBlock}>
        <p>Hi! My name is Meder Taab and I create web stuff 🔮</p>

        <p>
          I'm a creative professional working in webdev with a focus on{"     "}
          <span>
            <span>front-end development</span>
            <span
              className={styles.stripe}
              style={{
                width: isInView ? "102%" : "0%",
              }}
            ></span>
          </span>
          .
        </p>

        <p>
          With a lifelong interest in tech and the web, and over a decade worth
          of experience in creative industries like illustration and writing, I
          strive to combine{"   "}
          <span ref={viewRef}>
            <span>creativity and logic</span>
            <span
              className={styles.stripe}
              style={{
                width: isInView ? "103%" : "0%",
                transitionDelay: "500ms"
              }}
            ></span>
          </span>{" "}
          in my work.
        </p>
      </div>
      <Stack />
    </section>
  );
}
