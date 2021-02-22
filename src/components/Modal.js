import React from 'react'
import styles from '../styles/Modal.module.css'
import NutritionalTable from './NutritionalTable'
import useMatchMedia from '../hooks/useMatchMedia';

const Modal = ({nome, img, cat, ingredientes, lojas, cals, gord, carbs, prot, onClick }) => {
  

  const mobile = useMatchMedia("(max-width: 768px");
  

  return (
    <div className={styles.modal} id="modal" onClick={onClick}>
      
      <div className={styles.card}>
        <div className={styles.container}>
          <img src={img} alt={nome}></img>
          <div className={styles.infos}>
            <p className={styles.cat}>{cat}</p>
            <h2 className={styles.name}>{nome}</h2>
            <p className={styles.description}><strong>Ingredientes:</strong> {ingredientes} </p>
            <p className={styles.description}><strong>Onde encontrar?</strong> {lojas}</p>
          </div>
        </div>
        
        {mobile || <NutritionalTable cals={cals} gord={gord} carbs={carbs} prot={prot} />}
       
      </div> 
    </div>
  )
}

export default Modal