import React, { FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const LoginPage: React.FC = () => {
  const { formData, handleChange, error, login, loginError, user } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(formData);
  };

  const loginInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
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
          <h1 className='login-form__heading'>Вход</h1>
          <p className='login-form__greeting'>
            Войдите в аккаунт, чтобы продолжить.
          </p>
          {loginError ? (
            <div role='alert' className='login-form__warning'>
              {loginError !== 'NetworkError when attempting to fetch resource.'
                ? 'Неправильный логин или пароль!'
                : 'Ошибка сервера - мы уже всё чиним!'}
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
