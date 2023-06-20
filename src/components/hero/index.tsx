import React from "react";
import Gradient from "./gradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="main">
      {/* <img src="/images/grad.jpg" style={{width: "100%", position: "absolute", top: "0"}}></img> */}
      <Name />
      <SubHeader />
      <Gradient />
    </section>
  );
}
