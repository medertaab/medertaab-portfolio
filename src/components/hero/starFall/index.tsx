import React from "react";
import styles from "./StarFall.module.scss";
import StarGraphic from "@public/svg/star-medium.svg";

export default function StarFall() {
  function star() {
    const top = Math.floor(Math.random() * 80) + 30
    const left = Math.floor(Math.random() * 100)
    return (
      <span style={{top: `${top}%`, left: `${left}%`}}>
        <StarGraphic />
      </span>
    )
  }
  return (
    <div className={styles.starFall}>
      {star()}
    </div>
  );
}