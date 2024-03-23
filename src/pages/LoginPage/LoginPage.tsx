import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormData } from '../../types';
import config from '../../utils';
import { error } from 'console';
import { useNavigate, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../../Auth/useAuth';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { formData, handleChange, error, login, loginError, user } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(formData);
  };

  const loginInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loginInputRef.current?.focus();
  }, [])

  if (user) {
    return <Navigate replace to='/home' />;
  }

  return (
    <div className='login'>
      <div className='login__background'>
        <img src='/assets/logo2.png' alt='' />
      </div>
      <div className='login-page'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='login-form__heading'>Вход</h1>
          <p className='login-form__greeting'>
            Войдите в аккаунт, чтобы продолжить.
          </p>
          {error ? (
            <div
              role='alert'
              className={`login-form__warning ${
                loginError ? 'login-form__warning_active' : ''
              }`}
            >
              Неправильный логин или пароль!
            </div>
          ) : null}
          <input
          ref={loginInputRef}
            name='login'
            type='text'
            placeholder='Введите имя пользователя'
            required
            value={formData.login}
            onChange={handleChange}
            className={`login-form__username ${
              loginError ? 'login-form__username_invalid' : ''
            }`}
          />
          <input
            name='password'
            type='password'
            placeholder='Введите пароль'
            value={formData.password}
            onChange={handleChange}
            className={`login-form__password ${
              loginError ? 'login-form__password_invalid' : ''
            }`}
            required
          />
          <button type='submit' className='login-form__submit'>
            Войти
          </button>
          <p className='login-form__tip'>
            Ещё нет аккаунта? <Link to='/registration'>Зарегистрируйтесь!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
