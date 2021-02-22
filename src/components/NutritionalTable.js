import React from 'react'
import styles from '../styles/NutritionalTable.module.css'

const NutritionalTable = ({ cals, gord, carbs, prot,ingredients }) => {
  return (
    <div className={styles.table}>
      <h2>Tabela Nutricional</h2>
      <div className={styles.infos}>
        <div className={styles.item}>
          <div className={styles.num}>{cals}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.num}>{gord}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.num}>{carbs}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.num}>{prot}</div>
        </div>
        <p>cals</p>
        <p>gord</p>
        <p>carbs</p>
        <p>prot</p>
      </div>
      <p className={styles.ingredients}>{ingredients}</p>
    </div>
  )
}

export default NutritionalTable