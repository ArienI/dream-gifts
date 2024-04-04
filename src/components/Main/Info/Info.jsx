import React from 'react';
import styles from './Info.module.css';
import MyInfo from './MyInfo/MyInfo';
import Wishlist from './Wishlist/Wishlist';



export default function Info() {
  return (
    <div className={styles.info}>
      <MyInfo />
      <Wishlist />

    </div>
  );
}
