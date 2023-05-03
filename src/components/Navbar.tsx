import React from 'react'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span>M</span>
      <span>Links</span>
      <button>Light Button</button>
    </nav>
  )
}
