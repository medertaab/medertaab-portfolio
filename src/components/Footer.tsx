import React from "react";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
        <li>
          <a href="">Discord</a>
        </li>
      </ul>
      <span>This website is open source</span>
      <span>© Copyright 2023, Meder Taab</span>
    </footer>
  );
}
