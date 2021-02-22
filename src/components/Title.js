import React from 'react'
import { ReactComponent as Highlight } from '../assets/highlightForm.svg';
import styles from '../styles/Title.module.css'

const Title = ({text}) => {
  return (
    <div className={styles.title}>
      <Highlight  />
      <h1>{text}</h1>
    </div>
  )
}

export default Title