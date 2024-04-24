import React from 'react';
import classes from './Button.module.scss';

type modifiers = 'fit-content' | 'align-right' | 'error';

interface ButtonProps {
  variant?: 'secondary';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  modifiers?: modifiers[];
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  disabled,
  type,
  iconLeft,
  iconRight,
  modifiers
}) => {
  return (
    <button
      className={`${classes['c-button']} ${classes[variant ? `c-button--${variant}` : '']} ${modifiers && modifiers.map((mf) => classes[`c-button--${mf}`]).join(' ')}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

export default Button;
