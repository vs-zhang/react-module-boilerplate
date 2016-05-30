import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './Header.scss'

export const HeaderLayout = () => (
  <header className={styles.nav}>
    <IndexLink to="/" className={styles.link} activeClassName={styles.active}>Home</IndexLink>
    <Link to="/about" className={styles.link} activeClassName={styles.active}>About</Link>
  </header>
)
