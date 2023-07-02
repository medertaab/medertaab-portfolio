import React from 'react'
import styles from './Header.module.scss'
import GithubLogo from "@public/svg/github.svg"
import LinkedinLogo from "@public/svg/linkedin.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.logo}>M</a>
      <a href="http://github.com" aria-label="Github" target="_blank" rel="noopener"><GithubLogo /></a>
      <a href="http://linkedin.com" aria-label="Linkedin" target="_blank" rel="noopener"><LinkedinLogo /></a>
    </header>
  )
}