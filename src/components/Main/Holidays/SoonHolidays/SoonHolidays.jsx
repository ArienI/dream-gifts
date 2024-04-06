import React from 'react';
import styles from './SoonHolidays.module.css';





export default function SoonHolidays() {
  return (

    <div className={styles.soonHolidays}>
      <h1 className={styles.title}>The holidays are coming up soon:</h1>
      <div className={styles.holiday}>
        <div className={styles.holidayName}>Ярик(ДР) </div>
        <div className={styles.holidayName}>папа(ДР)</div>
        <div className={styles.holidayName}>Тесла(ДР)</div>
        <div className={styles.holidayName}>мама(годовщина свадбы)</div>
        <div className={styles.holidayName}>папа(годовщина свадьбы)</div>
        <div className={styles.holidayName}>Ярик(конец учебного года)</div>
      </div>
    </div>

  );
}
