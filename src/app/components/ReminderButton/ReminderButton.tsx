import React from 'react';
import styles from './ReminderButton.module.scss';
import SpeakerIcon from '../icons/SpeakerIcon';

const ReminderButton: React.FC = () => {
  return (
    <div className={styles.reminderButton}>
      <SpeakerIcon />
      <span className={styles.text}>Pamiętaj żeby włączyć słuchawki!</span>
    </div>
  );
};

export default ReminderButton;
