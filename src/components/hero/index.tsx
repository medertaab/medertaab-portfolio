import React from "react";
import styles from "../../styles/hero/Hero.module.scss";
import Name from "./Name";
import Star from "./Star";
import SubHeader from "./SubHeader";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Star />
        <Name />
      </div>
      <SubHeader />
    </section>
  );
}
