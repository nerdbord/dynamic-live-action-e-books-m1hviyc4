import React, { useState } from 'react';
import Button from '../../Button/Button';
import CheckboxOption from '../../CheckboxOption/CheckboxOption';
import SetupStepper from '../../SetupStepper/SetupStepper';
import styles from './Step3.module.scss';

interface Step3Props {
  onNext: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext }) => {
  const [budget, setBudget] = useState<string>('50');
  const [preferences, setPreferences] = useState<string[]>([]);

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

  return (
    <div className={styles.step3Container}>
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

      {/* SetupStepper */}
      {/* <SetupStepper currentStep={3} totalSteps={3} /> */}

      <Button onClick={onNext} variant="primary">
        Let's goooooooo
      </Button>
    </div>
  );
};

export default Step3;
