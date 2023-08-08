import React from "react";
import styles from "./Footer.module.scss";

export default function Footer({ bgTrigger } : any) {
  return (
    <footer
      className={styles.footer}
      style={{ "--bgOpacity": bgTrigger ? 1 : 1 } as React.CSSProperties}
    >
      <ul className={styles.links}>
        <li>
          <a href="https://www.linkedin.com/in/meder-taab-34195b73/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/medertaab">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/mederdiev">Twitter</a>
        </li>
        <li>
          <a href="medertaab@gmail.com">Email</a>
        </li>
      </ul>
      <span>This website is open source</span>
      <span>© Copyright 2023, Meder Taab</span>
    </footer>
  );
}
