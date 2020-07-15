import React from 'react';

import { Header } from './components/Header/Header';
import { Gallery } from './features/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/Loader/Loader';

import { useFetch } from './hooks/useFetch';

import { getImages, Image } from './api';

import styles from './App.module.css';

export const App: React.FC = () => {
  const [images, isLoading, error] = useFetch<Image[]>(getImages);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          {error && <p>{error.message}</p>}
          {isLoading && <Loader />}
          {images && <Gallery images={images} />}
        </main>
        <Footer />
      </div>
    </div>
  );
};
