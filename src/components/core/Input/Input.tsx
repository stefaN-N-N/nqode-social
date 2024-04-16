import React from 'react';
import classes from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  placeholder,
  name,
  error,
  label
}) => {
  return (
    <div className={`${classes['c-input-container']}`}>
      {label && <label className={`${classes['c-input-container__label']}`}>{label}</label>}
      <input
        className={`${classes['c-input-container__input']} ${error ? classes['c-input-container__input--error'] : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      {error && <label className={`${classes['c-input-container__error-msg']}`}>{error}</label>}
    </div>
  );
};

export default Input;
