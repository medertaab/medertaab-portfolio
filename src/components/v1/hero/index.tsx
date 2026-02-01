import React, { useEffect, useRef, useState } from "react";
import SkyGradient from "./gradient/skyGradient/SkyGradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";
import Stars from "./stars";

export default function Hero() {
  const [starsAnimation, setStarsAnimation] = useState(false);

  function toggleStars() {
    setStarsAnimation((prev) => !prev);
  }

  return (
    <section className={styles.heroSection} id="main">
      <Name toggleStars={toggleStars}/>
      <SubHeader />
      <span className={styles.circle}></span>
      <SkyGradient/>
      {starsAnimation && <Stars />}
    </section>
  );
}
