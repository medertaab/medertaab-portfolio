import React from "react";
import styles from "./About.module.scss";
import SectionTitle from "../ui/sectionTitle";
import Stack from "./stack";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <SectionTitle>About</SectionTitle>

      <p>
        Hello! My name is Meder Taab and I create web stuff 🔮
      </p>

      <p>
        I’ve been making websites all my life - from the prime days of message boards, web guestbooks and loud dial-up modem noises, to my current enthrallment with React and the modern web development process. 
      </p>

      <p>While I've explored other creative pursuits like illustration and copywriting, I've discovered a real passion for the world of web development. The technical and creative challenges of the field align perfectly with my skills and interests.</p>

      <p>
        I enjoy creating <strong>delightful, engaging and accessible experiences</strong>{" "} for web users by uniting my strive for creativity and logic.
      </p>

      <Stack />
    </section>
  );
}
