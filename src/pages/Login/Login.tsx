import React, { ChangeEvent, useState } from 'react';
import Form from 'src/components/core/Form/Form';
import Input from 'src/components/core/Input/Input';
import classes from './Login.module.scss';
import Button from 'src/components/core/Button/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.username + ' ' + formData.password);
  };

  return (
    <div className={`${classes['c-login-container']}`}>
      <div className={`${classes['c-login-container__form']}`}>
        <Form onSubmit={handleSubmit} title='nSocial'>
          <Input
            type='text'
            name='username'
            placeholder='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <Input
            type='password'
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <label className={`${classes['c-login-container__label']}`}>
            Don't have account?{' '}
            <span className={`${classes['c-login-container__label--bold']}`}>Sign up</span>
          </label>
          <Button label='Login' />
        </Form>
      </div>
    </div>
  );
};

export default Login;
