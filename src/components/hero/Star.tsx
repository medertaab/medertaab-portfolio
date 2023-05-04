import React from 'react'
import styles from '../../styles/hero/Star.module.scss'
import Rays from "../../../public/svg/rays.svg"
import StarAnimated from "../../../public/svg/star.svg"

export default function Star() {
  return (
    <div className={styles.starAnimation}>
      <Rays className={styles.rays}/>
      <StarAnimated className={styles.starBig}/>
      <StarAnimated className={styles.starSmall}/>
    </div>
  )
}
