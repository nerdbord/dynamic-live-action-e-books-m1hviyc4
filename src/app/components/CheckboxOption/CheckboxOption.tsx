import React from 'react';
import styles from './CheckboxOption.module.scss';

interface CheckboxOptionProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ value, label, checked, onChange }) => {
  return (
    <label className={styles.option}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.checkboxInput}
      />
      <span className={styles.optionLabel}>{label}</span>
    </label>
  );
};

export default CheckboxOption;
