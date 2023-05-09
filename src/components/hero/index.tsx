import React from "react";
import styles from "../../styles/hero/Hero.module.scss";
import Galaxy from "./Galaxy";
import Name from "./Name";
import Star from "./Star";
import SubHeader from "./SubHeader";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="main">
      <div className={styles.heroContainer}>
        <div></div>
        <Name />
      </div>
      <div className={styles.subContainer}>
        <Galaxy />
        <SubHeader />
      </div>
    </section>
  );
}
