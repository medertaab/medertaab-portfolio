import React, { useState } from "react";
import Gradient from "./gradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";

export default function Hero() {
  const [animating, setAnimating] = useState(false);
  return (
    <section className={styles.heroSection} id="main">
      {!animating && (
        <img
          src="/images/gradient_back.jpg"
          style={{ width: "100%", position: "absolute", top: "0" }}
          className={styles.staticBg}
        ></img>
      )}
      <Name animating={animating} setAnimating={setAnimating}/>
      <SubHeader />
      {animating && <Gradient />}
    </section>
  );
}
