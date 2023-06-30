import React, { useEffect, useRef, useState } from "react";
import Gradient from "./gradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";
import StarFall from "./starFall";

export default function Hero() {
  const [bgMoving, setBgMoving] = useState(false);
  const [starFall, setStarFall] = useState(false);

  function handleStarFall() {
    setStarFall(true)
    setTimeout(() => {
      setStarFall(false)
    }, 2500)
  }

  return (
    <section className={styles.heroSection} id="main">
      {!bgMoving && (
        <img
          src="/images/gradient_bg.jpg"
          style={{ width: "100%", position: "absolute", top: "0" }}
          className={styles.staticBg}
        ></img>
      )}
      <Name
        bgMoving={bgMoving}
        setBgMoving={setBgMoving}
        starFall={starFall}
        handleStarFall={handleStarFall}
      />
      <SubHeader />
      {bgMoving && <Gradient />}
      {starFall && <StarFall />}
    </section>
  );
}
