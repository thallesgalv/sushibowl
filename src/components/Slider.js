import React from 'react'
import styles from '../styles/Slider.module.css'

import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Slider = ({sliderItens}) => {

  const [current, setCurrent] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const [limit, setLimit] = React.useState(null);

  const [dots, setDots] = React.useState([""]);
  
  const timeOutRef = React.useRef()
  const [keyPress, setKeyPress] = React.useState(null);


  React.useEffect(() => {
     setLimit((document.querySelector('#sliderContainer').childElementCount - 1) * 100)
  }, [])

  React.useEffect(() => {
    setDots (new Array(document.querySelector('#sliderContainer').childElementCount).fill(""))
  }, [])

  React.useEffect(() => {
    function handleKey({ key }) {
      setKeyPress(null)
      setKeyPress(key);
    }
    window.addEventListener("keyup", handleKey);

    return () => {
      window.removeEventListener("keyup", handleKey);
    };
  }, [keyPress])

  React.useEffect(() => {
     if (keyPress === "ArrowRight") handleNext();
     if (keyPress === "ArrowLeft") handlePrev();
  }, [keyPress])
  
  
  function handleNext() {
    if (current*100 < limit) {
      setCurrent(current + 1)
      setPosition(position + 100)
    }
    else if (current * 100 === limit) {
      setCurrent(0)
      setPosition(0)
    }
  }

  function handlePrev() {
    if (position !== 0) {
      setCurrent(current - 1)
      setPosition(position - 100)
    }
  }

  function timeNext() {
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      handleNext()
    }, 3000)
  }

  timeNext()

  return (
    <section className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${position}%)` }}
        id="sliderContainer">
        {sliderItens}
      </div>

      <div className={styles.controls}>
        <div className={styles.containerButtons}>
          <div className={styles.prev} onClick={ handlePrev }>
          <BsChevronLeft />
          </div>
          <div className={styles.next} onClick={ handleNext }>
          <BsChevronRight  />
          </div>
        </div>

        <ul className={styles.containerDots} id="dotContainer">
          {
            dots.map((item, index)=> <li key={index} className={index === current ? styles.dotActive : styles.dot}></li>)
          }
        </ul>
      </div>
    </section>
  )
}

export default Slider