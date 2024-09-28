import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  progress: number;
  location: string;
  onExit: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, location, onExit }) => {
  return (
    <div className={styles.progressBar}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <div className={styles.info}>
        <span className={styles.tourText}>Tour de <strong>{location}</strong></span>
        <div className={styles.progressContainer}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button onClick={onExit} className={styles.exitButton}>Wyjdź</button>
    </div>
  );
};

export default ProgressBar;
