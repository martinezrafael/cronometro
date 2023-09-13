import React from 'react'
import styles from './Header.module.css';
import Logo from '../../images/logo-udf.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo}  alt='Universidade da Farmácia'/>
    </header>
  )
}

export default Header