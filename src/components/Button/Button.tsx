import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className 
}) => {
  return (
    <button
      className={`${styles.btn} ${variant === 'primary' ? styles['btn-primary'] : styles['btn-secondary']} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
