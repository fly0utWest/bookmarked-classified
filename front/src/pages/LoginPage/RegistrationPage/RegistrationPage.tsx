import React, { FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useTheme } from '../../../contexts/ThemeContext';
import getSignupError from '../../../utils/getSignupError';

const RegistrationPage: React.FC = () => {
  const {
    signupFormData,
    signupHandleChange,
    signup,
    signupError,
    signupSuccess,
    user,
  } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signup(signupFormData);
  };

  const loginInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const repeatedPasswordInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loginInputRef.current!.value = '';
    passwordInputRef.current!.value = '';
    repeatedPasswordInputRef.current!.value = '';
    loginInputRef.current?.focus();
  }, []);

  if (user) {
    return <Navigate replace to='/home' />;
  }

  return (
    <div className='login'>
      <div className='login__background'></div>
      <div className='login-page'>
        <img
          className='login-page__logo'
          src={`${
            theme === 'dark' ? '/assets/logo2.webp' : '/assets/logo2-dark.webp'
          }`}
          alt=''
        />
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='login-form__heading'>Регистрация</h1>
          <p className='login-form__greeting'>
            Зарегистрируйтесь, чтобы продолжить.
          </p>
          {signupError ? (
            <div role='alert' className='login-form__warning'>
              {getSignupError(signupError)}
            </div>
          ) : null}
          {signupSuccess ? (
            <div
              role='alert'
              className='login-form__warning login-form__warning_success'
            >
              Пользователь успешно зарегистрирован! Теперь вы можете{' '}
              <Link to='/login'>войти</Link>!
            </div>
          ) : null}
          <input
            ref={loginInputRef}
            name='login'
            type='text'
            placeholder='Введите имя пользователя'
            required
            value={signupFormData.login}
            onChange={signupHandleChange}
            className={`login-form__username ${
              signupError ? 'login-form__username_invalid' : ''
            }`}
          />
          <input
            ref={passwordInputRef}
            name='password'
            type='password'
            placeholder='Введите пароль'
            value={signupFormData.password}
            onChange={signupHandleChange}
            className={`login-form__password ${
              signupError ? 'login-form__password_invalid' : ''
            }`}
            required
          />
          <input
            ref={repeatedPasswordInputRef}
            name='repeatedPassword'
            type='password'
            placeholder='Повторите пароль'
            value={signupFormData.repeatedPassword}
            onChange={signupHandleChange}
            className={`login-form__password ${
              signupError ? 'login-form__password_invalid' : ''
            }`}
            required
          />
          <button type='submit' className='login-form__submit'>
            Зарегистрироваться
          </button>
          <p className='login-form__tip'>
            Уже есть аккаунт? <Link to='/login'>Войти!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
