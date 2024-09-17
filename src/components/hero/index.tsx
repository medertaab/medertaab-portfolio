import React, { useEffect, useRef, useState } from "react";
import SkyGradient from "./gradient/skyGradient/SkyGradient";
import styles from "./Hero.module.scss";
import Name from "./name";
import SubHeader from "./subHeader";
import StarFall from "./starFall";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [bgMoving, setBgMoving] = useState(true);
  const [starFall, setStarFall] = useState(false);

  function handleStarFall() {
    setStarFall(true);
    setTimeout(() => {
      setStarFall(false);
    }, 2500);
  }

  return (
    <section className={styles.heroSection} id="main">
      <AnimatePresence>
        {!bgMoving && (
          <motion.img
            src="/images/gradient_bg.jpg"
            style={{ width: "100%", position: "absolute", top: "0" }}
            className={styles.staticBg}
            alt="Decorative background image of a colorful gradient on black backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.img>
        )}
      </AnimatePresence>
      <Name
        bgMoving={bgMoving}
        setBgMoving={setBgMoving}
        starFall={starFall}
        handleStarFall={handleStarFall}
      />
      <SubHeader />
      <span className={styles.circle}></span>
      <SkyGradient />
      {starFall && <StarFall />}
    </section>
  );
}
