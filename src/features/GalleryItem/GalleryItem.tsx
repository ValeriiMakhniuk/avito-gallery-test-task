import React from 'react';

import styles from './GalleryItem.module.css';

interface GalleryItemProps {
  imageUrl: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl }) => {
  return (
    <a href='!#' className={styles.item}>
      <img src={imageUrl} className={styles.image} width='280' height='171' alt='gallery item' />
    </a>
  );
};
