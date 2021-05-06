import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GeneralInput } from '../../components/Input';
import { GeneralButton } from '../../components/GeneralButton';
import { CheckBox } from '../../components/Input';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { dirtyFields, isDirty, errors },
  } = useForm({
    mode: 'all',
  });

  const watchAllFields = watch();

  const registerOptions = {
    username: { required: 'Логин нужен' },
    password: {
      required: 'Нужен пароль',
      minLength: {
        value: 8,
        message: 'Пароль должен быть не короче 8 символов',
      },
    },
    agree: {
      required: 'Обязательное поле',
    },
  };

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    reset();
    setErrorMessage('');
    setMessage('Данные успешно отправлены');
  };

  const onError = (error) => {
    setMessage('');
    const errors = [];
    for (let err in error) {
      errors.push(error[err].message);
    }

    setErrorMessage(errors.map((el) => <li key={el}>{el}</li>));
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <GeneralInput
          label='Логин'
          type='text'
          isError={!!errors?.username}
          errorMessage={errors?.username?.message}
          isCorrect={!errors?.username && dirtyFields?.username}
          onClear={() => {
            reset({ username: '' });
          }}
          marginBottom='default'
          name='username'
          {...register('username', registerOptions.username)}
          autoComplete='username'
        />
        <GeneralInput
          label='Пароль'
          type='password'
          isError={!!errors?.password}
          isCorrect={!errors?.password && dirtyFields.password}
          errorMessage={errors?.password?.message}
          name='password'
          {...register('password', registerOptions.password)}
          autoComplete='current-password'
        />
        <CheckBox
          type='checkbox'
          name='agree'
          {...register('agree', registerOptions.agree)}
          label='согласен с офертой'
        />

        <GeneralButton
          isDisabled={!(watchAllFields.username && watchAllFields.password && watchAllFields.agree)}
          onClick={handleSubmit(onSubmit, onError)}
          className={styles.button}
          type='submit'
        >
          Войти
        </GeneralButton>
        <div className={styles.formMessage}>
          {!isDirty && message}
          <ul className={styles.errorMessage}>{errorMessage}</ul>
        </div>
      </form>
    </div>
  );
};
