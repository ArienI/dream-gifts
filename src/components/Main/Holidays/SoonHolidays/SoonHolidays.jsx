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

// добавить:
// иконку"добавить", при нажатии на неё попап с возможностью ввести название праздника и выбором даты
// менять цвета праздников взамисимости от их даты(в этом месяце-1, в следущем-2, все остальные-3)
// возможность редактировать уже созданные праздники