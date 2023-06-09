import React from "react";
import Gradient from "./gradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="main">
      <Name />
      <SubHeader />
      <Gradient />
    </section>
  );
}
