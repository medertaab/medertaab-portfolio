import React from 'react'
import styles from "../../styles/hero/Galaxy.module.scss";
import Star from "../../../public/svg/star.svg"

export default function Galaxy() {
  return (
    <div className={styles.galaxyContainer}>
      <Star />
      <div className={styles.galaxy}>
        <span className={styles.mainRing}>
          <span className={styles.planet}></span>
        </span>
        <span className={styles.upperRing}></span>
        <span className={styles.lowerRing}></span>
        <span className={styles.star}></span>
      </div>
      <Star />
    </div>
  )
}
