import React from 'react';

import loader from '../../assets/gif/loader.gif';

import styles from './Loder.module.css';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt='loading' width='64' height='64' />
    </div>
  );
};
