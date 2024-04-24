import React from 'react';
import classes from './Form.module.scss';

interface FormProps extends React.InputHTMLAttributes<HTMLFormElement> {
  children: JSX.Element[];
  title?: string;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, title }) => {
  return (
    <form onSubmit={onSubmit} className={`${classes['c-form']}`}>
      {title && <h1 className={`${classes['c-form__title']}`}>{title}</h1>}
      {children}
    </form>
  );
};

export default Form;
