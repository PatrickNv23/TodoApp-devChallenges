import React from 'react'
import styles from '../css_modules/Footer.module.css'
export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <p className={styles.textFooter}>created by <span className={styles.usernameFooter}>PatrickNv23</span> - devChallenges.io</p>
    </div>
  )
}
