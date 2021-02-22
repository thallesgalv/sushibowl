import React from 'react'
import styles from '../styles/Banner.module.css'
import useMatchMedia from '../hooks/useMatchMedia';

const Banner = ({ name, desc, img, title, button, nutritionalTable, flexStart, tambem }) => {
  
  const mobile = useMatchMedia("(max-width: 1025px");
  
  return (
    <section className={styles.banner}>
      {
        name &&
        <>
        <div className={styles.infos}>
         <div className={styles.route}>pratos &#62; {name}</div>
          <div className={styles.containerTitle}>{title}</div> 
          <p className={styles.description}>{desc}</p>
          {button}
        </div>

        <img src={img} className={styles.img} style={flexStart} atl={name}></img>
        
          {mobile || <div className={styles.containerTable}>{nutritionalTable}</div>}
          
        </>
      }
    </section>
  )
}

export default Banner