'use client';
import React, { useState } from 'react';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import SetUpStepper from '../../SetUpStepper/SetUpStepper';
import CheckboxOption from '../../CheckboxOption/CheckboxOption';
import styles from './Step2.module.scss';

interface Step2Props {
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext }) => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setSelectedTimes(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  return (
    <div className={styles.step2Container}>
      <Header location={'Kraków'} onChangeLocation={() => console.log('Change location')} />

      <h2>Zostało kilka konkretów:</h2>
      <p>Ile masz czasu?</p>

      <div className={styles.timeOptions}>
        <CheckboxOption
          value="1 h"
          label="1 h"
          checked={selectedTimes.includes('1h')}
          onChange={handleCheckboxChange}
        />
        <CheckboxOption
          value="1-2h"
          label="1 - 2 h"
          checked={selectedTimes.includes('1-2h')}
          onChange={handleCheckboxChange}
        />
        <CheckboxOption
          value="2-3h"
          label="2 - 3 h"
          checked={selectedTimes.includes('2-3h')}
          onChange={handleCheckboxChange}
        />
        <CheckboxOption
          value="3-4h"
          label="3 - 4 h"
          checked={selectedTimes.includes('3-4h')}
          onChange={handleCheckboxChange}
        />
      </div>

      <SetUpStepper progress={66} label="Setup: 2 z 3 kroków" />

      <Button onClick={onNext} variant="primary">Wybierz tam zadani itd</Button>
    </div>
  );
};

export default Step2;
