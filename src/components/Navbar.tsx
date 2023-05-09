import React from 'react'
import styles from '../styles/Navbar.module.scss'
import GithubLogo from "../../public/svg/github.svg"
import LinkedinLogo from "../../public/svg/linkedin.svg"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#main" className={styles.logo}>M</a>
      <a href=""><GithubLogo /></a>
      <a href=""><LinkedinLogo /></a>
      <button></button>
    </nav>
  )
}