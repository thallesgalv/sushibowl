import React from 'react'
import styles from '../styles/Footer.module.css'
import {ReactComponent as Galv} from "../assets/galvViceBlue.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}> 
      <small>Desenvolvido por:</small>
      <Galv className={styles.galv}/>
    </footer>
  )
}

export default Footer