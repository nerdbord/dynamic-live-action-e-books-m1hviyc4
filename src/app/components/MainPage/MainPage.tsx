'use client'
import React, { useState } from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import styles from './MainPage.module.scss'
import MapComponent from '../MapComponent/MapComponent'
import Container from '../Container/Container'

interface MainPageProps {
  onStart: () => void
}

const MainPage: React.FC<MainPageProps> = ({ onStart }) => {
  const [city, setCity] = useState<string>('Krakow')
  const [street, setStreet] = useState<string>('ul. Rakowiecka')

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value)
  }

  return (
    <div className={styles.appContainer}>
      <Container>
      <header className={styles.profileHeader}>
        <div className={styles.profileIcon}>
          <Image src="/Lemur.png" alt="Profile Icon" width={117} height={117} />
        </div>
        <div className={styles.levelContainer}>
          <h2>Level</h2>
          <div className={styles.level}>Baby Lemur</div>
        </div>
      </header>

      <div className={styles.statContainer}>
        <div className={styles.statSpec}>
          <h3>1</h3>
          <p>Przygód</p>
        </div>
        <div className={styles.statSpec}>
          <h3>10</h3>
          <p>Zadań</p>
        </div>
        <div className={styles.statSpec}>
          <h3>452</h3>
          <p>EXP</p>
        </div>
      </div>

      <div className={styles.locationContainer}>
        <div className={styles.locationImage}>
            <MapComponent />
        </div>

        <div className={styles.cityInputContainer}>
          <label className={styles.cityInputLabel}>
            Jesteś teraz w mieście:
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            className={styles.cityInput}
          />
          <label className={styles.cityInputLabel}>Przy adresie:</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={handleStreetChange}
            className={styles.cityInput}
          />
        </div>

        <Button onClick={onStart} variant="primary">
          Zaczynamy Tour
        </Button>
      </div>
      </Container>
    </div>
  )
}

export default MainPage
