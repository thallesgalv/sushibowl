import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Menu from '../data/menu.json'
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Highlight } from '../assets/highlightForm.svg';
import { ReactComponent as IconHighlight } from '../assets/iconHighlightForm.svg';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import styles from '../styles/Header.module.css';
import useMatchMedia from '../hooks/useMatchMedia';

const Header = () => {

  const mobile = useMatchMedia("(max-width: 1025px");
  const [menuMobile, setMenuMobile] = React.useState(true);
  const [title, setTitle] = React.useState('🐟 SushiBowl');
  
  React.useEffect(() => {
    document.title = title
  }, [title])

  function handleMobile() {
    setMenuMobile(!menuMobile)
  }

  function handleClick({target}) {
    setTitle(
      Menu.map(item => item.title).includes(target.innerHTML) ? 
        '🐟 SushiBowl | ' + target.innerHTML
      : '🐟 SushiBowl'
    )


    if (mobile || menuMobile) setMenuMobile(true)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        <Link to="/" onClick={handleClick} className={styles.logo}>
          <Logo />
          {mobile ||<div> <Highlight /> <p>SushiBowl</p> </div>}
        </Link>
        
        <ul className={
          mobile ?
            menuMobile ? `${styles.containerLinksMobile}` : `${styles.containerLinksMobileActive}`
          :
            `${styles.containerLinks}`}
        >
          {Menu.map(item =>
            <li key={item.path}><NavLink to={item.path} onClick={handleClick}  >{item.nome}</NavLink></li>)}
        </ul>

        {
          mobile
          ?
            <button
              className={styles.menuButton}
              onClick={handleMobile}
            >
              {menuMobile ? <BiMenuAltRight /> : <BiX/> }
            </button>
          :
            <ul className={styles.containerSocial}>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <IconHighlight />
                <FaInstagram className={styles.socialIcon}/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <IconHighlight />
                <FaTwitter className={styles.socialIcon}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com.com/" target="_blank">
                <IconHighlight />
                <FaLinkedinIn className={styles.socialIcon}/>
              </a>
            </li>
            <li>
              <a href="https://whats.link/sushibowl" target="_blank">
                <IconHighlight />
                <FaWhatsapp className={styles.socialIcon}/>
              </a>
            </li>
          </ul>
        }  
      </nav>
    </header>
  )
}

export default Header