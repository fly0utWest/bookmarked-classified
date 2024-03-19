import React from 'react';
import { ClassModifier } from '../../../types';
import config from '../../../utils';
import { ErrorResponse } from '../../../types';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC<ClassModifier> = ({ classModifier }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const logoutRequest = await fetch(`${config.BACK_API}/signout`);

      if (!logoutRequest.ok) {
        const errorResponse: ErrorResponse = await logoutRequest.json();
        throw new Error(errorResponse.message || 'HTTP error!');
      }
      navigate('/home');
      window.location.reload();
    } catch (error: unknown) {
      console.error((error as Error).message);
    }
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
