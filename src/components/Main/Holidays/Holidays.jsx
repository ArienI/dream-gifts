import React from 'react';
import styles from './Holidays.module.css';
import MyHolidays from './MyHolidays/MyHolidays';
import Gallery from './Gallery/Gallery';
import SoonHolidays from './SoonHolidays/SoonHolidays';




export default function Holidays() {
  return (

    <div className={styles.holidays}>
      <MyHolidays />
      <SoonHolidays />
      <Gallery />
    </div>

  );
}
