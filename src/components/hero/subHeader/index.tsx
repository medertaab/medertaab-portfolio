import React from "react";
import styles from "./SubHeader.module.scss";

export default function SubHeader() {
  return (
    <div className={styles.subHeader}>
      <div className={styles.titlesContainer}>
        <h2>WEB DEVELOPER</h2>
        <span className={styles.and}>&</span>
        
        <div className={styles.titles}>
          <span>Illustrator && Copywriter &&</span>
          <span>Translator && Analyst && Internet</span>
          <span>Resident && Graphic Designer &&</span>
        </div>
      </div>

      <div className={styles.decoration}>
        <img src="/images/pattern.gif" alt="Decorative gif"></img>
        <img src="/images/pattern.gif" alt="Decorative gif"></img>
        <span className={styles.decorativeEl}></span>
      </div>
    </div>
  );
}
