import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className='login'>
      <div className='login__background'>
        <img src='/assets/logo2.png' alt='' />
      </div>
      <div className='login-page'>
        <form className='login-form'>
          <h1 className='login-form__heading'>Вход</h1>
          <p className='login-form__greeting'>
            Войдите в аккаунт, чтобы продолжить.
          </p>
          <input
            type='text'
            placeholder='Введите имя пользователя'
            required
            className='login-form__username'
          />
          <input
            type='password'
            placeholder='Введите пароль'
            className='login-form__password'
            required
          />
          <Link to='/restore-password' className='login-form__restore'>
            Забыли пароль?
          </Link>
          <button className='login-form__submit'>Войти</button>
          <p className='login-form__tip'>
            Ещё нет аккаунта? <Link to='/registration'>Зарегистрируйтесь!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
