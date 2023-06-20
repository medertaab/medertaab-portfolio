import React, { useEffect } from "react";
import styles from "./Name.module.scss";
import Star from "@public/svg/star.svg"
import ReactLogo from "@public/svg/reactlogo.svg"
import Lightbulb from "@public/svg/lightbulb.svg"
import ShootingStars from "../shootingStars";

export default function Name() {
  return (
    <div className={styles.name}>
      {/* <div>
        <button className={styles.lightButton}>
          <Lightbulb />
        </button>
        <button className={styles.gameButton}>
          
        </button>
      </div> */}
      
      <div>
        <h1 className={styles.firstName}>MEDER</h1>
        <button className={styles.starButton}>
          <Star />
        </button>
      </div>
      <div>
        <button className={styles.reactButton}>
          <ReactLogo />
        </button>
        <h1>TAAB</h1>
      </div>

      <ShootingStars left/>
      <ShootingStars right/>
    </div>
  );
}
