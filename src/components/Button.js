import React from 'react'
import styles from '../styles/Button.module.css'

const Button = ({text, alt, onClick, active, type}) => {
  return (
    <button className={alt ? active ? styles.buttonAltActive : styles.buttonAlt : styles.button} onClick={onClick} type={type}>{text}</button>
  )
}

export default Button