import React from 'react';

import { GalleryList } from './GalleryList';

import { Image } from '../../api';

import styles from './Gallery.module.css';

interface GalleryProps {
  images: Image[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className={styles.gallery}>
      <GalleryList images={images} />
    </section>
  );
};
