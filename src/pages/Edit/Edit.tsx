import { useEffect, useState } from 'react';
import { FormikProps, useFormik } from 'formik';
import { toast } from 'react-toastify';
import Button from 'src/components/core/Button/Button';
import Form from 'src/components/core/Form/Form';
import Input from 'src/components/core/Input/Input';
import UserUpdate from 'src/model/UserUpdate';
import { update } from 'src/services/UserService';
import { updateUserSchema } from 'src/shared/schemas/Schemas';
import classes from './Edit.module.scss';

const Edit = () => {
  const [id, setId] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<UserUpdate>({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    dirty
  }: FormikProps<UserUpdate> = useFormik({
    initialValues: currentUser,
    validationSchema: updateUserSchema,
    onSubmit,
    enableReinitialize: true
  });

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      setCurrentUser(JSON.parse(userString));
      setId(JSON.parse(userString).id);
    }
  }, []);

  async function onSubmit(values: UserUpdate) {
    update(values, id)
      .then(() => {
        toast.success('Successfully updated!');
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  }

  return (
    <div className={`${classes['c-edit-container']}`}>
      <div className={`${classes['c-edit-container__form']}`}>
        <Form onSubmit={handleSubmit}>
          <Input
            label='First name'
            type='text'
            name='firstName'
            placeholder='First name...'
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName ? errors.firstName : ''}
          />
          <Input
            label='Last name'
            type='text'
            name='lastName'
            placeholder='Last name...'
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName ? errors.lastName : ''}
          />
          <Input
            label='Username'
            type='text'
            name='username'
            placeholder='Username...'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && errors.username ? errors.username : ''}
          />
          <Input
            label='Email'
            type='text'
            name='email'
            placeholder='Email...'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : ''}
          />
          <Button label='Edit profile' disabled={!dirty || isSubmitting} type='submit' />
        </Form>
      </div>
    </div>
  );
};

export default Edit;
