import React from "react";
import styles from "../../styles/hero/ShootingStars.module.scss";
import StarGraphic from "../../../public/svg/star2.svg";

export default function ShootingStars() {
  const numberOfStars = 7

  function star() {
    const top = Math.floor(Math.random() * 80) + 30
    const left = Math.floor(Math.random() * 100)
    return (
      <span style={{top: `${top}%`, left: `${left}%`}}>
        <StarGraphic />
      </span>
    )
  }

  const length = Array(numberOfStars).fill(0)

  // top: calc(50% - #{random(400) - 200px});
  // left: calc(50% - #{random(300) + 0px});

  return (
    <div className={styles.shootingStars}>
      <div className={styles.starsContainer}>
        {length.map(it => star())}
      </div>
    </div>
  );
}
