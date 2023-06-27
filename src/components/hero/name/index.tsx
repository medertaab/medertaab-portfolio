import React, { ReactPropTypes, useEffect } from "react";
import styles from "./Name.module.scss";
import Sparkle from "@public/svg/sparkle.svg"
import ReactLogo from "@public/svg/reactlogo.svg"
import ShootingStars from "../shootingStars";

export default function Name({animating, setAnimating} : any) {
  return (
    <div className={styles.name}>
      <div>
        <h1 className={styles.firstName}>MEDER</h1>
        <button className={styles.starButton}>
          <Sparkle />
        </button>
      </div>
      <div>
        <button className={styles.reactButton} onClick={() => setAnimating(!animating)}>
          <ReactLogo />
        </button>
        <h1>TAAB</h1>
      </div>

      <ShootingStars left/>
      <ShootingStars right/>
    </div>
  );
}
