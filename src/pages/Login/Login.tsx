import Form from 'src/components/core/Form/Form';
import Input from 'src/components/core/Input/Input';
import classes from './Login.module.scss';
import Button from 'src/components/core/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormikProps, useFormik } from 'formik';
import AuthenticationRequest from 'src/model/AuthenticationRequest';
import { loginSchema } from 'src/shared/schemas/Schemas';
import { getUserFromToken, login } from 'src/services/AuthenticationService';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const { values, isSubmitting, handleChange, handleSubmit }: FormikProps<AuthenticationRequest> =
    useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: loginSchema,
      onSubmit
    });

  async function onSubmit(values: AuthenticationRequest) {
    login(values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', JSON.stringify(res.data));
          getUserFromToken(res.data.accessToken).then(() => navigate('/home'));
        }
      })
      .catch(() => {
        setWrongCredentials(true);
      });
  }

  return (
    <div className={`${classes['c-login-container']}`}>
      <div className={`${classes['c-login-container__form']}`}>
        <Form onSubmit={handleSubmit} title='nSocial'>
          <Input
            type='text'
            name='username'
            placeholder='username'
            value={values.username}
            onChange={handleChange}
          />
          <Input
            type='password'
            name='password'
            placeholder='password'
            value={values.password}
            onChange={handleChange}
          />
          {wrongCredentials ? (
            <label className={`${classes['c-login-container__error']}`}>
              Wrong username or password. <br />
              Please try again.
            </label>
          ) : (
            <></>
          )}
          <label className={`${classes['c-login-container__label']}`}>
            Don't have account?{' '}
            <Link to='/register' className={`${classes['c-login-container__label--bold']}`}>
              Sign up
            </Link>
          </label>
          <Button type='submit' disabled={isSubmitting} label='Login' />
        </Form>
      </div>
    </div>
  );
};

export default Login;
