import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormData } from '../../types';
import config from '../../utils';
import { error } from 'console';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${config.BACK_API}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Response was not ok.');
      } else navigate('/home');
    } catch (error: unknown) {
      console.error('Error:', error);
      setError((error as Error).message);
    }
  };

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
                error ? 'login-form__warning_active' : ''
              }`}
            >
              Неправильный логин или пароль!
            </div>
          ) : null}
          <input
            name='login'
            type='text'
            placeholder='Введите имя пользователя'
            required
            value={formData.login}
            onChange={handleChange}
            className={`login-form__username ${
              error ? 'login-form__username_invalid' : ''
            }`}
          />
          <input
            name='password'
            type='password'
            placeholder='Введите пароль'
            value={formData.password}
            onChange={handleChange}
            className={`login-form__password ${
              error ? 'login-form__password_invalid' : ''
            }`}
            required
          />
          <Link to='/restore-password' className='login-form__restore'>
            Забыли пароль?
          </Link>
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
