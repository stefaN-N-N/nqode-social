import { FormikProps, useFormik, FormikHelpers } from 'formik';
import Button from 'src/components/core/Button/Button';
import Form from 'src/components/core/Form/Form';
import Input from 'src/components/core/Input/Input';
import UserRegister from 'src/model/UserRegister';
import { registerSchema } from 'src/shared/schemas/Schemas';
import classes from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { register } from 'src/services/UserService';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting
  }: FormikProps<UserRegister> = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: registerSchema,
    onSubmit
  });

  async function onSubmit(values: UserRegister, actions: FormikHelpers<UserRegister>) {
    register(values)
      .then(() => {
        toast.success('Successfully registred!');
        navigate('/login');
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
    actions.resetForm();
  }

  return (
    <div className={`${classes['c-register-container']}`}>
      <div className={`${classes['c-register-container__form']}`}>
        <Form onSubmit={handleSubmit} title='nSocial'>
          <Input
            type='text'
            name='firstName'
            placeholder='First name...'
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName ? errors.firstName : ''}
          />
          <Input
            type='text'
            name='lastName'
            placeholder='Last name...'
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName ? errors.lastName : ''}
          />
          <Input
            type='text'
            name='username'
            placeholder='Username...'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && errors.username ? errors.username : ''}
          />
          <Input
            type='text'
            name='email'
            placeholder='Email...'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : ''}
          />
          <Input
            type='password'
            name='password'
            placeholder='Password...'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? errors.password : ''}
          />
          <label className={`${classes['c-register-container__label']}`}>
            Already have account?{' '}
            <Link to='/login' className={`${classes['c-register-container__label--bold']}`}>
              Sign in
            </Link>
          </label>
          <Button label='Register' disabled={isSubmitting} type='submit' />
        </Form>
      </div>
    </div>
  );
};

export default Register;
