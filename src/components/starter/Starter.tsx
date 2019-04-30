import React from 'react';
import Z1Logo from '../../assets/z1.svg';
import styles from './Starter.module.scss';

function Starter() {
  return (
    <div className={styles.container}>
      <Z1Logo className={styles.logo} />

      <h1>Gatsby Starter</h1>
    </div>
  );
}

export default Starter;
