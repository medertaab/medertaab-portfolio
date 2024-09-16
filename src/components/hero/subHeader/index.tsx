import React from "react";
import styles from "./SubHeader.module.scss";
import Planet from "@public/svg/planet.svg";

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
          2024
        </p>
        <div className={styles.graphicWrapper}>
          <img
            src="/images/hello.gif"
            alt="Decorative pixel image that says 'Hello'"
          />
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
