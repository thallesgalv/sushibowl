import React from 'react'
import styles from '../styles/Accordion.module.css'


const Accordion = ({question, answer, onClick, icon }) => {


  return (
      <div className={styles.accordionItem}>
        <div className={styles.question} onClick={onClick}>{question} <div>{icon}</div></div>
        <div className={styles.answer}>{answer}</div>
      </div>
  )
}

export default Accordion