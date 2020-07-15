import React from 'react';

import { GalleryItem } from '../GalleryItem/GalleryItem';

import { Image } from '../../api';

import styles from './GalleryList.module.css';

interface GalleryListProps {
  images: Image[];
}

export const GalleryList: React.FC<GalleryListProps> = ({ images }) => {
  return (
    <ul className={styles.list}>
      {images.map(({ id, url }) => {
        return (
          <li key={id} className={styles.item}>
            <GalleryItem imageUrl={url} />
          </li>
        );
      })}
    </ul>
  );
};
