import React from "react";
import styles from "./Hero.module.scss";
import Name from "./name";
import ShootingStars from "./shootingStars";
import SubHeader from "./subHeader";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="main">
      <Name />
      <SubHeader />
    </section>
  );
}
