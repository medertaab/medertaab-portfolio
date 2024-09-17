import React, {useRef} from "react";
import styles from "./Footer.module.scss";
import { useInView } from "framer-motion";

export default function Footer({ bgTrigger }: any) {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: false, margin: "0px 0px 150px 0px"});

  return (
    <footer className={styles.footer} ref={viewRef}>
      <ul className={styles.links}>
        <li>
          <a href="https://www.linkedin.com/in/meder-taab-34195b73/">
            LinkedIn
          </a>
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
      <span>© Copyright 2024, Meder Taab</span>
      <div
        className={styles.lightContainer}
        style={{ opacity: isInView ? "100%" : "0%" } as React.CSSProperties}
      ></div>
    </footer>
  );
}
