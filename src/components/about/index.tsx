import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h3 className="orange">About</h3>

      <p>
        Hello! My name is Meder Taab and I create web stuff and other things 🔮
      </p>

      <p>
        I’ve been making websites since I was a child, when I would tinker small
        blogs and message boards, injecting them with my HTML code or
        customizing them with my own CSS. While I've explored other creative
        pursuits like illustration and copywriting, I've discovered a real
        affinity for the world of web development. The technical and creative
        challenges of the field perfectly align with my strengths and passions.
      </p>

      <p>
        I enjoy creating <strong>engaging and delightful experiences</strong>{" "}
        for web users by uniting my strive for creativity and logical analysis.
      </p>
    </section>
  );
}
