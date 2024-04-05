import React from 'react';
import { ClassModifier } from '../../../types';
import { Link } from 'react-router-dom';

const LoginButton: React.FC<ClassModifier> = ({ classModifier }) => {
  return (
    <Link
      to='/welcome'
      className={`login-button ${classModifier ? classModifier : ''}`}
    >
      Войти
    </Link>
  );
};

export default LoginButton;
