import React from 'react';
import styles from './Wishlist.module.css';


const Wishlist = () => {
  return (

    <section className={styles.wishlist}>

      <h1 className={styles.title}>Wishlist annd gifts ideas:</h1>

      <ul className={styles.items}>
        <li>Большая, пушистая и красивая ёлка </li>
        <li>котоподушка</li>
        <li>Монтгомери"Энн"</li>
        <li>сапборд</li>
        <li>конфетки</li>
        <li>краски</li>
      </ul>

    </section>

  );
};

export default Wishlist;