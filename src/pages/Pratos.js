import React from 'react'
import styles from '../styles/Internas.module.css'
import SearchBar from '../components/SearchBar'
import Button from "../components/Button";
import Data from '../data/produtos'
import Modal from '../components/Modal';

const Pratos = ({title}) => {
  const [current, setCurrent] = React.useState(null);
  const [query, setQuery] = React.useState(Data);
  const [modal, setModal] = React.useState(null);

  const containerButtons = React.useRef();

  const found = []
  const cat = []
  Data.map(item => (cat.includes(item.categoria)) ? null : cat.push(item.categoria))

  React.useEffect(() => {
    if (current === null) setQuery(Data)
  }, [current, query])

  function handleChange({ target }) {
    const {value} = target

    function stringTreat(string) {
      return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
    
    const searchValue = stringTreat(value)

    Data.map(item =>
      stringTreat(item.nome).includes(searchValue) || stringTreat(item.ingredientes).includes(searchValue) ?
      found.push(item)
      : found.lenght = 0
    )

    setQuery(found)
    setCurrent(true)
  }

  function handleClick({ target }) {

    const {innerHTML} = target
    
    const clickedIndex = Array.from(containerButtons.current.children).map(i => i.innerHTML).indexOf(innerHTML)
    
    current === clickedIndex ? setCurrent(null) : setCurrent(clickedIndex)
    setQuery(Data.filter(item => item.categoria === innerHTML))
  }

  function openModal({ target }) {
    setModal(Data.filter((item) => item.nome === target.parentElement.children[1].innerHTML))
  }

  function closeModal({ target }) {

    const {id} = target

    if (id === 'modal') setModal(null) 
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pratos</h1>
      <section className={styles.containerPratos}>
        <div className={styles.containerSearchBar}> <SearchBar onChange={handleChange}/></div>
        <div className={styles.containerButtonFilter} ref={containerButtons} >
          {cat.map((cat, index) =>
            
            index === current ? 
              <Button alt text={cat} key={index} onClick={handleClick} active />
            :  
            <Button alt text={cat} key={index} onClick={handleClick} />
          )}
        </div>

        

        <section className={styles.grid}>

          {Array.isArray(query) ? query.length !== 0 || <p>Resultado não encotrado</p> : null}

          {
            query.map(produto => 
            <div className={styles.gridItem} key={produto.id} onClick={openModal}>
            <img src={produto.img} className={styles.img} alt={produto.nome} ></img>
              <p className={styles.name}>{produto.nome}</p>
            </div>)
          }
        </section>
        
        
      </section>
      {modal ?
          <Modal
            nome={modal[0].nome}
            img={modal[0].img}
            cat={modal[0].categoria}
            ingredientes={modal[0].ingredientes}
            lojas={modal[0].lojas}
            cals={modal[0].cals}
            gord={modal[0].gord}
            carbs={modal[0].carbs}
            prot={modal[0].prot}
            onClick={closeModal}
          />
        : null
        }
      
    </main>
  )
}

export default Pratos