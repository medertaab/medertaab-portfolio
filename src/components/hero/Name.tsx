import React from "react";
import styles from "../../styles/hero/Name.module.scss";
import Star from "../../../public/svg/star.svg"
import ReactLogo from "../../../public/svg/reactlogo.svg"

export default function Name() {
  return (
    <div className={styles.name}>
      <div>
        <button className={styles.lightButton}></button>
        <button className={styles.gameButton}></button>
      </div>
      <div>
        <h1>MEDER</h1>
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
    </div>
  );
}
