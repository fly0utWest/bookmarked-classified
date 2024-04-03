import React from 'react';
import { ClassModifier } from '../../../types';
import config from '../../../utils/utils';
import { ErrorResponse } from '../../../types';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC<ClassModifier> = ({ classModifier }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/home');
    window.location.reload();
  };

  return (
    <button
      onClick={logout}
      className={`logout-button ${classModifier ? classModifier : ''}`}
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
