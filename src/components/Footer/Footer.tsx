import React from 'react';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2018-2019</p>
    </footer>
  );
};
