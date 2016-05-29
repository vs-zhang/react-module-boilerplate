import React from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

export const HeaderLayout = () => (
  <header className={styles.nav}>
    <Link to="/" className={styles.link}>Home</Link>
    <Link to="/about" className={styles.link}>About</Link>
  </header>
)
