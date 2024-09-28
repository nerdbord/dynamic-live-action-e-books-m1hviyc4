'use client'
import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';
import styles from './MainPage.module.scss';
import MapComponent from '../MapComponent/MapComponent';
import { APIProvider } from '@vis.gl/react-google-maps';

interface MainPageProps {
  onStart: () => void;
  onViewPreviousTours: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onStart, onViewPreviousTours }) => {
  return (
    <div className="app-container">

      <header className={styles.profileHeader}>
        <div className={styles.profileIcon}>
          <Image src="/Media.png" alt="Profile Icon" width={117} height={117} />
        </div>
        <h2>Level: Novice</h2>
      </header>

      <div className={styles.statContainer}>
        <div className={styles.stats}>
          <div>
            <h3>1</h3>
            <p>Przygód</p>
          </div>
          <div>
            <h3>10</h3>
            <p>Zadań</p>
          </div>
          <div>
            <h3>452</h3>
            <p>EXP</p>
          </div>
          <div>
            <h3>4</h3>
            <p>Ranking</p>
          </div>
        </div>
        <div className={styles.button}>
          <Button onClick={onViewPreviousTours} variant="secondary">Poprzednie Tours</Button>
        </div>
      </div>

      <div className={styles.locationContainer}>
        <div className={styles.locationImage}>
        <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
        <MapComponent />
      </APIProvider>
        </div>
        <p>Jesteś teraz w: <strong>Sosnowcu</strong></p>
        <Button onClick={onStart} variant="primary">Zaczynamy Tour</Button>
      </div>
    </div>
  );
};

export default MainPage;