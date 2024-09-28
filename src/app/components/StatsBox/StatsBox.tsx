import React from 'react';
import styles from './StatsBox.module.scss';

interface Stat {
  value: number | string;
  label: string;
}

interface StatsBoxProps {
  stats: Stat[];
}

const StatsBox: React.FC<StatsBoxProps> = ({ stats }) => {
  return (
    <div className={styles.statsBox}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;
