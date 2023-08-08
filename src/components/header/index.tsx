import React from 'react'
import styles from './Header.module.scss'
import GithubLogo from "@public/svg/github.svg"
import LinkedinLogo from "@public/svg/linkedin.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.logo}>M</a>
      <a href="https://github.com/medertaab" aria-label="Github" target="_blank" rel="noopener"><GithubLogo /></a>
      <a href="https://www.linkedin.com/in/meder-taab-34195b73/" aria-label="Linkedin" target="_blank" rel="noopener"><LinkedinLogo /></a>
    </header>
  )
}