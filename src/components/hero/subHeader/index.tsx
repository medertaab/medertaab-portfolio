import React from "react";
import styles from "./SubHeader.module.scss";

export default function SubHeader() {
  return (
    <div className={styles.subHeader}>
      <div className={styles.upperHalf}>
        <span>&#10033;&#xFE0E;</span>
        <h2>WEB DEVELOPER</h2>
      </div>

      <div className={styles.lowerHalf}>
        <p className={styles.description}>ALSO AN ILLUSTRATOR, COPYWRITER AND FULL-TIME INTERNET RESIDENT &#169; 2023</p>
        <div className={styles.galaxyContainer}></div>
        <img src="/images/barcode.png" alt="Decorative image of a barcode"></img>
      </div>
    </div>
  );
}
