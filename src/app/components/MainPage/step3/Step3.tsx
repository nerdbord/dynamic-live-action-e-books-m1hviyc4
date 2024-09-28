'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importowanie useRouter
import Button from '../../Button/Button';
import CheckboxOption from '../../CheckboxOption/CheckboxOption';
import styles from './Step3.module.scss';
import SetUpStepper from '../../SetUpStepper/SetUpStepper';
import Header from '../../Header/Header';

interface Step3Props {}

const Step3: React.FC<Step3Props> = () => {
  const [budget, setBudget] = useState<string>('50');
  const [preferences, setPreferences] = useState<string[]>([]);
  const router = useRouter(); // Inicjalizacja routera

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  const handleCheckboxChange = (value: string) => {
    setPreferences(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const onNext = () => {
    router.push('/game'); // Przeniesienie użytkownika do ścieżki "/games"
  };

  return (
    <div className={styles.step3Container}>
      <Header location={'Kraków'} onChangeLocation={() => console.log('Change location')} />
      <h2>Zostało kilka konkretów:</h2>

      {/* Budżet */}
      <label htmlFor="budget" className={styles.budgetLabel}>Jaki masz budżet na cały Tour?</label>
      <div className={styles.budgetInputContainer}>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          className={styles.budgetInput}
        />
        <span className={styles.currency}>pln</span>
      </div>

      {/* Preferencje */}
      <p>Jakie masz preferencje?</p>
      <CheckboxOption
        value="accessible"
        label="Uwzględnij tylko miejsca przystosowane dla osób z niepełnosprawnością"
        checked={preferences.includes('accessible')}
        onChange={handleCheckboxChange}
      />
      <CheckboxOption
        value="minimalWalking"
        label="Zminimalizuj chodzenie"
        checked={preferences.includes('minimalWalking')}
        onChange={handleCheckboxChange}
      />
      <CheckboxOption
        value="noFood"
        label="Nie chcę nic jeść"
        checked={preferences.includes('noFood')}
        onChange={handleCheckboxChange}
      />

      <SetUpStepper progress={100} label="Setup: 3 z 3 kroków" />
      <div className={styles.button}>
        <Button onClick={onNext} variant="primary">
          Let's goooooooo
        </Button>
      </div>
    </div>
  );
};

export default Step3;
