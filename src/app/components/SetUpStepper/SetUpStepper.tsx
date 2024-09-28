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
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default SetUpStepper;
