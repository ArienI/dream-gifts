import React from 'react';
import styles from './Header.module.css';
import Logo from '../../images/Dream Gifts.png';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <button className={styles.button}>my presents</button>
          <button className={styles.button}>other gifts</button>
        </div>
        <div className={styles.logo}>
          <img src={Logo} alt='DreamGifts' className={styles.image} />
        </div>
        <div className={styles.profile}>
          <button className={styles.button}>login</button>
        </div>
      </div>
    </header>
  );
}

// поменять лого