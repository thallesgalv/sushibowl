import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = ({onChange}) => {


  return (
    <input className={styles.input} placeholder="&#x1F50D; Busque um prato ou ingrediente" onChange={onChange}>
    </input>
  )
}

export default SearchBar