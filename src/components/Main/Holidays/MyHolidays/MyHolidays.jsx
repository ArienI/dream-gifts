import React from 'react';
import styles from './MyHolidays.module.css';




export default function MyHolidays() {
  return (

    <div className={styles.myHolidays}>
      <h1 className={styles.title}>My holidays:</h1>
      <div className={styles.holiday}>
        <div className={styles.holidayName}>День рождение</div>
        <div className={styles.holidayName}>День котика</div>
        <div className={styles.holidayName}>новый год</div>
        <div className={styles.holidayName}>весна</div>
        <div className={styles.holidayName}>14февраля</div>
        <div className={styles.holidayName}>лето</div>
      </div>
    </div>

  );
}


// добавить:
// иконку"добавить", при нажатии на неё попап с возможностью ввести название праздника и выбором даты
// менять цвета праздников взамисимости от их даты(в этом месяце-1, в следущем-2, все остальные-3)
// возможность редактировать уже созданные праздники