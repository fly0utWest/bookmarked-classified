import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className='login'>
      <div className='login__background'>
        <img src='/assets/logo2.png' alt='' />
      </div>
      <div className='login-page'>
        <form className='login-form'>
          <h1 className='login-form__heading'>Вход</h1>
          <p></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
