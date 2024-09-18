import React, { useState } from "react";
import styles from "./Header.module.scss";
import GithubLogo from "@public/svg/github.svg";
import LinkedinLogo from "@public/svg/linkedin.svg";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const button = e.target as HTMLElement;
    button.innerText = "✦ Email copied!"
    navigator.clipboard.writeText("medertaab@gmail.com")
    setTimeout(() => {
      button.innerText = "✦ Get in touch"
    }, 1000)
  }
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false) as any;

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 180 ? setScrolled(true) : setScrolled(false)
  })

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.logo}>
        M
      </a>
      <button onClick={handleClick} className={styles.emailButton}>✦ Get in touch</button>
      <a
        href="https://github.com/medertaab"
        aria-label="Github"
        target="_blank"
        rel="noopener"
      >
        <GithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/meder-taab-34195b73/"
        aria-label="Linkedin"
        target="_blank"
        rel="noopener"
      >
        <LinkedinLogo />
      </a>
      <motion.span style={{transform: scrolled ? "translateY(0%)" : "translateY(-120%)"}} className={styles.container}></motion.span>
    </header>
  );
}
