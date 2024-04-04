import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from '../../../../images/i.webp';

const MyInfo = () => {
  return (

    <section className={styles.profile}>

      <div className={styles.profileAvatar}>
        <img src={Avatar} id="avatar" alt="Avatar" className={styles.avatar} />
      </div>

      <div className={styles.profileInfo}>
        <div className={styles.profileName}>
          <h1 className={styles.name} id='name'>Arien</h1>
        </div>
        <div className={styles.profileStatus}>
          <p className={styles.status} id='status'>...</p>
        </div>
      </div>


    </section>

  );
};

export default MyInfo;