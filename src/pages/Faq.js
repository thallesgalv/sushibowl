import React from 'react'
import styles from '../styles/Internas.module.css'
import Data from '../data/faq.json'
import Accordion from '../components/Accordion'
import {BiPlus, BiMinus} from 'react-icons/bi'

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(false);


  function toggle(index) {
    activeAccordion === index ? setActiveAccordion(null) : setActiveAccordion(index)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FAQ</h1>
      <section className={styles.accordion}>
        {Data.map((item,index) => 
          <Accordion
            key={item.id}
            icon={activeAccordion === index ? <BiMinus/> : <BiPlus/> }
            question={item.pergunta}
            answer={activeAccordion === index ? item.resposta : null}
            onClick={() => toggle(index)}
          />)}
      </section>


    </main>
  )
}

export default Faq