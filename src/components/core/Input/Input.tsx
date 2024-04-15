import React from 'react';
import classes from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, value, type, onChange, placeholder, name }) => {
  return (
    <div className={`${classes['c-input-container']}`}>
      {label && <label className={`${classes['c-input-container__label']}`}>{label}</label>}
      <input
        className={`${classes['c-input-container__input']}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
