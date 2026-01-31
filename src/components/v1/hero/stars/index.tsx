import React from "react";
import styles from "./Stars.module.scss"
import Sparkle from "@public/svg/sparkle.svg?react";

export default function Stars() {
  return (
    <div className={styles.stars}>
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
      <Sparkle />
    </div>
  );
}
