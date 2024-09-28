'use client';
import React, { useState } from 'react';
import Button from '../../Button/Button';
import SetUpStepper from '../../SetUpStepper/SetUpStepper';
import Header from '../../Header/Header';
import styles from './Step1.module.scss';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [extraLemurs, setExtraLemurs] = useState(0);
  const [babyLemurs, setBabyLemurs] = useState(0);
  const [selectedLemur, setSelectedLemur] = useState('Lemur naczelny (ja)');

  const handleLocationChange = () => {
    console.log('Change location');
  };

  return (
    <div className={styles.stepContainer}>
      <Header location={'Kraków '} onChangeLocation={handleLocationChange} />

      <h2>Ile Lemurów, wariacie?</h2>
      <p>Kogo zabierasz w tour ze sobą?</p>

      <div className={styles.lemurOptions}>
        <div className={styles.option}>
          <label className={styles.radioContainer}>
            <input
              type="radio"
              name="lemur"
              value="Lemur naczelny (ja)"
              checked={selectedLemur === 'Lemur naczelny (ja)'}
              onChange={() => setSelectedLemur('Lemur naczelny (ja)')}
            />
            Lemur naczelny (ja)
          </label>
        </div>

        <div className={styles.option}>
          <label className={styles.radioContainer}>
            <input
              type="radio"
              name="lemur"
              value="Lemur extra"
              checked={selectedLemur === 'Lemur extra'}
              onChange={() => setSelectedLemur('Lemur extra')}
            />
            Lemur extra
          </label>
          <div className={styles.counter}>
            <button onClick={() => setExtraLemurs(Math.max(0, extraLemurs - 1))}>-</button>
            <span>{extraLemurs}</span>
            <button onClick={() => setExtraLemurs(extraLemurs + 1)}>+</button>
          </div>
        </div>

        <div className={styles.option}>
          <label className={styles.radioContainer}>
            <input
              type="radio"
              name="lemur"
              value="Baby lemurs"
              checked={selectedLemur === 'Baby lemurs'}
              onChange={() => setSelectedLemur('Baby lemurs')}
            />
            Baby lemurs
          </label>
          <div className={styles.counter}>
            <button onClick={() => setBabyLemurs(Math.max(0, babyLemurs - 1))}>-</button>
            <span>{babyLemurs}</span>
            <button onClick={() => setBabyLemurs(babyLemurs + 1)}>+</button>
          </div>
        </div>
      </div>

      <SetUpStepper progress={33} label="Setup: 1 z 3 kroków" />

      <Button onClick={onNext} variant="primary">Wybierz tam zadanie</Button>
    </div>
  );
};

export default Step1;
