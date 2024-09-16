import React from "react";
import styles from "./Name.module.scss";
import Sparkle from "@public/svg/sparkle.svg";
import ReactLogo from "@public/svg/reactlogo.svg";

export default function Name({
  setBgMoving,
  starFall,
  handleStarFall,
}: any) {
  return (
    <div className={styles.name}>
      <div>
        <h1 className={styles.firstName}>MEDER</h1>
        <button
          aria-label="Star button"
          disabled={starFall}
          className={styles.starButton}
          onClick={handleStarFall}
        >
          <Sparkle />
        </button>
      </div>
      <div>
        <button
          aria-label="Atom button"
          className={styles.reactButton}
          onClick={() => setBgMoving((prev: any) => !prev)}
        >
          <ReactLogo />
        </button>
        <h1>TAAB</h1>
      </div>
    </div>
  );
}
