import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  variant?: 'secondary';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, variant, onClick, disabled, type }) => {
  return (
    <button
      className={`${classes['c-button']} ${classes[variant ? `c-button--${variant}` : '']}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
