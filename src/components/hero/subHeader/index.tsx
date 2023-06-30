import React from "react";
import styles from "./SubHeader.module.scss";
import Planet from "@public/svg/planet.svg";
import Stars1 from "@public/svg/stars1.svg";
import Stars2 from "@public/svg/stars2.svg";

export default function SubHeader() {
  return (
    <div className={styles.subHeader}>
      <div className={styles.upperHalf}>
        <span>&#10033;&#xFE0E;</span>
        <h2>WEB DEVELOPER</h2>
      </div>

      <div className={styles.lowerHalf}>
        <p className={styles.description}>
          ALSO AN ILLUSTRATOR, COPYWRITER AND FULL-TIME INTERNET RESIDENT &#169;
          2023
        </p>
        <div className={styles.galaxyContainer}>
          <img src="/images/g.png"></img>
        </div>
        <img
          src="/images/barcode.png"
          className={styles.barcode}
          alt="Decorative image of a barcode"
        ></img>
      </div>
    </div>
  );
}
