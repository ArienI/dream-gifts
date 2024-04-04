import React from 'react';
import styles from './Main.module.css';
import Info from './Info/Info';
import Holidays from './Holidays/Holidays';



export default function Main() {
  return (
    <main className={styles.main}>

      <Info />

      <Holidays />

    </main>
  );
}
