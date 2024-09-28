import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${variant === 'primary' ? styles.primary : styles.secondary} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
