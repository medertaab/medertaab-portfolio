import React from 'react'
import Star from "@public/svg/star-medium.svg";
import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <span className={styles.loader}>
      <Star />
    </span>
  )
}
