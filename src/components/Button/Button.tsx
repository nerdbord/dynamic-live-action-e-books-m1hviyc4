import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className }) => {
  return (
    <button
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
