import React from 'react';
import styles from './SetUpStepper.module.scss';

interface SetUpStepperProps {
  progress: number; 
  label: string; 
}

const SetUpStepper: React.FC<SetUpStepperProps> = ({ progress, label }) => {
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepperBar} style={{ width: `${progress}%` }}></div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default SetUpStepper;
